const { NotFoundError, ApiError } = require('../utils/customError');
const CustomResponse = require("../utils/customResponse");
const {uploadImage} = require('../config/cloudinary');
const logger = require('../utils/winston');
const { validateUserInput } = require('../services/validationService');
const { checkIfUserExists, createUser } = require('../services/userService');
const studentEventSchema  = require('../validator/validate')
const staffEventSchema  = require('../validator/staffValidate')
const { z } = require('zod');
const getIstTime = require('../utils/getIstIme')
const fs = require('fs');
const redis = require('../utils/redisClient');
const prisma = require('../utils/prismaClient')



function cleanupFile(filePath) {
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
}




exports.getUserDetails = async (req, res) => {
  try {
    // Simulate fetching data from a database or service
    const user = {
      id: 1,
      name: 'John Doe',
      Email: 'johndoe@example.com',
      role: 'Admin',
    };

    // Use the customResponse utility to send the response
    CustomResponse({
      res,
      statusCode: 200,
      message: 'User details fetched successfully',
      payload: user,
    });
  } catch (error) {
    // Send an error response
    CustomResponse({
      res,
      statusCode: 500,
      message: 'Failed to fetch user details',
      errors: [error.message],
    });
  }
};




exports.Register = async (req, res, next) => {
  let filePath;
  try {
    console.log(req.body)
        // Handle file upload
        if (!req.file || !req.file.path) throw new Error('File upload is required.');
        filePath = req.file.path;
    // Validate and parse request body
    const validatedData = await studentEventSchema.parseAsync(req.body);

    // Check if user already exists in Redis
    const cachedUser = await redis.get(`user:${validatedData.email}`);
    if (cachedUser) {

      if (req.file && req.file.path) await cleanupFile(filePath);
      return CustomResponse({
        res,
        statusCode: 409,
        message: 'User already exists (cached)',
        payload: validatedData.email,
      });
      
    }

    // Check if user exists in the database
    const existingUser = await checkIfUserExists(validatedData.email);
    if (existingUser) {
      
      if (req.file && req.file.path) await cleanupFile(req.file.path);

      // Cache the user for 1 hour
      await redis.set(
        `user:${validatedData.email}`,
        JSON.stringify(existingUser),
        'EX',
        3600 // 1 hour in seconds
      );

      return CustomResponse({
        res,
        statusCode: 409,
        message: 'User already exists',
        payload: existingUser.Email,
      });
    }



    const [uploadResult] = await Promise.all([
      uploadImage(filePath),
    ]);

    cleanupFile(filePath); // Clean up temporary file

    // Prepare and store user data
    const userData = {
      ...validatedData,
      createdAt: getIstTime(), // Use IST timestamp
      Image: uploadResult.secure_url,
    };

    const newUser = await createUser(userData);

    // Cache the new user
    await redis.set(
      `user:${newUser.email}`,
      JSON.stringify(newUser),
      'EX',
      3600 // 1 hour in seconds
    );

    // Send success response
    return CustomResponse({
      res,
      statusCode: 201,
      message: 'User registered successfully',
      payload: newUser,
    });

  } catch (error) {
    console.error(error);
    if (filePath) cleanupFile(filePath); // Ensure cleanup

    if (error instanceof z.ZodError) {
      return CustomResponse({
        res,
        statusCode: 400,
        message: 'Validation failed',
        payload: {},
        errors: error.errors.map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        })),
      });
    }

    logger.error('Error during registration:', error.message);
    return CustomResponse({
      res,
      statusCode: 500,
      message: 'Registration failed',
      payload: {},
      errors: [error.message],
    });
  }
};




exports.healthCheck= async (req,res) => {
  try {
    // Check Redis
    redis.ping((err, result) => {
      if (err) {
        return res.status(500).json({
          status: 'fail',
          message: 'Redis is down',
        });
      }
      
      // Check Database
      prisma.user.findFirst() // Simple Prisma query to check database
        .then(() => {
          res.status(200).json({
            status: 'ok',
            message: 'Application is healthy',
            timestamp: new Date().toISOString(),
            redis: result,
          });
        })
        .catch((dbErr) => {
          res.status(500).json({
            status: 'fail',
            message: 'Database is down',
            error: dbErr.message,
          });
        });
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Health check failed',
      error: error.message,
    });
  }
  
}


exports.RegisterStaff = async (req, res, next) => {
  let filePath;
  try {
    console.log(req.body);

    // Handle file upload
    if (!req.file || !req.file.path) throw new Error('File upload is required.');
    filePath = req.file.path;

    // Validate and parse request body
    const validatedData = await staffEventSchema.parseAsync(req.body); // Use staff-specific schema

    // Check if staff already exists in Redis
    const cachedStaff = await redis.get(`staff:${validatedData.email}`);
    if (cachedStaff) {
      if (req.file && req.file.path) await cleanupFile(filePath);
      return CustomResponse({
        res,
        statusCode: 409,
        message: 'Staff already exists (cached)',
        payload: validatedData.email,
      });
    }

    // Check if staff exists in the database
    const existingStaff = await prisma.staff.findUnique({
      where: { email: validatedData.email },
    });
    if (existingStaff) {
      if (req.file && req.file.path) await cleanupFile(req.file.path);

      // Cache the staff for 1 hour
      await redis.set(
        `staff:${validatedData.email}`,
        JSON.stringify(existingStaff),
        'EX',
        3600 // 1 hour in seconds
      );

      return CustomResponse({
        res,
        statusCode: 409,
        message: 'Staff already exists',
        payload: existingStaff.email,
      });
    }

    // Upload the image
    const [uploadResult] = await Promise.all([uploadImage(filePath)]);
    cleanupFile(filePath); // Clean up temporary file

    // Prepare and store staff data
    const lastUser = await prisma.staff.findFirst({
      orderBy: { Token: 'desc' },
    });
    const nextCustomId = lastUser ? (parseInt(lastUser.Token) + 1).toString() : '2000';

    const staffData = {
      ...validatedData,
      createdAt: getIstTime(), // Use IST timestamp
      Image: uploadResult.secure_url,
      role: 'staff', // Explicitly set the role
      Token: nextCustomId, // Generate token for staff
    };

    const newStaff = await prisma.staff.create({
      data: staffData,
    });

    // Cache the new staff
    await redis.set(
      `staff:${newStaff.email}`,
      JSON.stringify(newStaff),
      'EX',
      3600 // 1 hour in seconds
    );

    // Send success response
    return CustomResponse({
      res,
      statusCode: 201,
      message: 'Staff registered successfully',
      payload: newStaff,
    });

  } catch (error) {
    console.error(error);
    if (filePath) cleanupFile(filePath); // Ensure cleanup

    if (error instanceof z.ZodError) {
      return CustomResponse({
        res,
        statusCode: 400,
        message: 'Validation failed',
        payload: {},
        errors: error.errors.map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        })),
      });
    }

    logger.error('Error during staff registration:', error.message);
    return CustomResponse({
      res,
      statusCode: 500,
      message: 'Registration failed',
      payload: {},
      errors: [error.message],
    });
  }
};
