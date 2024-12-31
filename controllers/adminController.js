const CustomResponse = require('../utils/customResponse');
const { validationResult } = require('express-validator');
const Users = require('../data/Users')
const { generateToken } = require('../utils/jwt');
const prisma = require('../utils/prismaClient');
const sendEmail = require('../services/mailService')
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const {  uploadQR } = require('../config/cloudinary');
const emailQueue = require('../utils/queue');
const ExcelJS = require('exceljs');



exports.adminLogin = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return CustomResponse({
        res,
        statusCode: 400,
        message: 'Validation errors',
        errors: errors.array(),
      });
    }

    const { username, password } = req.body;

    // Find the user
    const user = Users.find((u) => u.username === username && u.role === 'admin');
    if (!user || user.password !== password) {
      return CustomResponse({
        res,
        statusCode: 401,
        message: 'Invalid credentials',
      });
    }

    // Generate JWT
    const token = generateToken({ id: user.id, role: user.role });
    const User ={
      id: user.id,
      name: user.name,
      Email: user.Email,
      role: user.role,
      token,
    }
    return CustomResponse({
      res,
      statusCode: 200,
      message: 'Login successful',
      payload: { User },
    });
  };


exports.adminTest = (req,res) => {
    const { id } = req.user;
    if (!id) {
      return CustomResponse({
        res,
        statusCode: 401,
        message: 'Unauthorized',
      });
    }
    return CustomResponse({
        res,
        statusCode: 200,
        message: 'Admin Test',
        payload: { id },
      });

}

exports.getEventCounts = async (req, res) => {
  try {
    // Fetch all users and their events
    const users = await prisma.user.findMany({
      select: {
        Events: true,
      },
    });

    // Flatten and count each unique event
    const eventCounts = users
      .flatMap(user => user.Events) // Combine all events into a single array
      .reduce((counts, event) => {
        counts[event] = (counts[event] || 0) + 1; // Increment the count for each event
        return counts;
      }, {});

    // Convert the counts object to an array of event counts
    const formattedEventCounts = Object.entries(eventCounts).map(([event, count]) => ({
      event,
      participants: count,
    }));

    // Get the count of staff members from the Staff model
    const staffCount = await prisma.staff.count();

    // Prepare the response object
    const response = {
      events: formattedEventCounts,
      staffCount: staffCount,
    };

    // Send the response using CustomResponse
    return CustomResponse({
      res,
      statusCode: 200,
      message: 'Event and staff counts retrieved successfully',
      payload: response,
    });
  } catch (error) {
    console.error('Error fetching event and staff counts:', error.message);

    // Handle errors using CustomResponse
    return CustomResponse({
      res,
      statusCode: 500,
      message: 'Failed to retrieve event and staff counts',
      payload: error.message,
    });
  }
};



exports.getAmount = async(req, res ) =>{
  try {
    // Calculate total amount for students
    const totalStudentAmount = await prisma.user.aggregate({
      _sum: {
        amount: true,
      },
    });

    // Calculate total amount for staff (fixed amount of 200 per staff)
    const staffCount = await prisma.staff.count();
    const totalStaffAmount = staffCount * 200;

    // Combine the amounts
    const totalAmount = (totalStudentAmount._sum.amount || 0) + totalStaffAmount;

    // Send the response using CustomResponse
    return CustomResponse({
      res,
      statusCode: 200,
      message: 'Total amount calculated successfully',
      payload: { totalAmount },
    });
  } catch (error) {
    console.error('Error calculating total amount:', error.message);

    // Handle errors using CustomResponse
    return CustomResponse({
      res,
      statusCode: 500,
      message: 'Failed to calculate total amount',
      payload: {},
      errors: [error.message],
    });
  }
};


exports.getTotalUserCount = async (req,res) => {
  try {
    // calculate total user count
    const totalUserCount = await prisma.user.count();
    // return the total user count
    return CustomResponse({
        res,
        statusCode: 200,
        message: 'Total user count',
        payload: { totalUserCount }, // Handle null in case no data exists
      });
    
  } catch (error) {
    return CustomResponse({
        res,
        statusCode: 500,
        message: 'cannot get count for user',
        payload: {},
        errors: [error.message],
      });
  }
}

exports.getTotalStaffCount = async (req,res) => {
  try {
    // calculate total user count
    const totalStaffCount = await prisma.staff.count();
    // return the total user count
    return CustomResponse({
        res,
        statusCode: 200,
        message: 'Total staff count',
        payload: { totalStaffCount }, // Handle null in case no data exists
      });
    
  } catch (error) {
    return CustomResponse({
        res,
        statusCode: 500,
        message: 'cannot get count for Staff',
        payload: {},
        errors: [error.message],
      });
  }
}

exports.getAllUsers=async(req,res)=>{
    try {
        // get all users
        const users = await prisma.user.findMany();
        // return the users
        return CustomResponse({
            res,
            statusCode: 200,
            message: 'All users',
            payload: { users }, // Handle null in case no data exists
          });
        
    } catch (error) {
        return CustomResponse({
            res,
            statusCode: 500,
            message: 'cannot get users',
            payload: {},
            errors: [error.message],
          });
    }
}
exports.getAllStaff=async(req,res)=>{
    try {
        // get all users
        const Staff = await prisma.staff.findMany();
        // return the Staff
        return CustomResponse({
            res,
            statusCode: 200,
            message: 'All Staff',
            payload: { Staff }, // Handle null in case no data exists
          });
        
    } catch (error) {
        return CustomResponse({
            res,
            statusCode: 500,
            message: 'cannot get Staff',
            payload: {},
            errors: [error.message],
          });
    }
}




exports.sendConfirmationEmail = async (req, res) => {
    const { email, Name, Token, Mobile, College, Day1, Day2, Amount } = req.body;
  
    try {
      // Check if all required data is present
      if (!email || !Name || !Token || !Mobile || !College || !Day1 || !Day2 || !Amount) {
        return CustomResponse({
          res,
          statusCode: 400,
          message: 'Missing required user data.',
          payload: {},
        });
      }
  
      const whatsappLink = 'https://chat.whatsapp.com/YourGroupLink';
  
      // Generate QR code directly into a buffer (no need to save to disk)
      const qrData = `
        Full Name: ${Name}
        Email: ${email}
        Phone: ${Mobile}
        College: ${College}
        Events: ${Day1}, ${Day2}
        Payment: ₹${Amount}
        Token: ${Token}
      `;
  
      const qrBuffer = await QRCode.toBuffer(qrData, { type: 'png' });
  
      // Ensure qrBuffer is a valid Buffer
      if (!Buffer.isBuffer(qrBuffer)) {
        return CustomResponse({
          res,
          statusCode: 500,
          message: 'Failed to generate QR code buffer.',
          payload: {},
        });
      }
  
      // Convert buffer to base64 string if you want to transmit as a string (optional)
      const qrBase64 = qrBuffer.toString('base64'); 
  
      const user = {
        Name,
        Email: email,
        Mobile,
        College,
        Day1,
        Day2,
        Amount,
        Token,
        whatsappLink,
      };
  
      // Add the email job to the queue with base64 encoded buffer
      await emailQueue.add({
        email,
        user,
        qrBase64, // Send base64 encoded string instead of raw buffer
      });
  
      CustomResponse({
        res,
        statusCode: 200,
        message: 'Confirmation email will be sent shortly.',
      });
    } catch (error) {
      console.error('Error sending confirmation email:', error); // Log the error
  
      CustomResponse({
        res,
        statusCode: 500,
        message: 'Error sending confirmation email.',
        errors: [error.message],
      });
    }
  };
  

exports.getLatest10Users= async (_,res) => {
    try {
      // Get the latest 10 users
      const users = await prisma.user.findMany({
        take: 10,
        orderBy: { Token: 'desc' },
      });
      
      // Return the users
      return CustomResponse({
        res,
        statusCode: 200,
        message: 'Latest 10 users',
        payload: { users }, // Handle null in case no data exists
      });
      
    } catch (error) {
      console.error('Error getting users :', error); // Log the error
  
      CustomResponse({
        res,
        statusCode: 500,
        message: 'Error getting users ',
        errors: [error.message],
    });
  }
}


exports.getLatest10Staff= async (_,res) => {
  try {
    // Get the latest 10 users
    const staff = await prisma.staff.findMany({
      take: 10,
      orderBy: { Token: 'desc' },
    });
    
    // Return the users
    return CustomResponse({
      res,
      statusCode: 200,
      message: 'Latest 10 staff',
      payload: { staff }, // Handle null in case no data exists
    });
    
  } catch (error) {
    console.error('Error getting staff :', error); // Log the error

    CustomResponse({
      res,
      statusCode: 500,
      message: 'Error getting staff ',
      errors: [error.message],
  });
}
}




const events1 = [
  { name: 'National Conference',  },
  { name: 'Brain Battle ',  },
  { name: 'Media Splash', },
  { name: 'Wisdom War',  },
  { name: 'Hack in the Dark', },
  { name: 'Spark the Idea', },
  { name: 'Gold Rush Quest', },
  { name: 'Gamer Strike', },
];

exports.exportUsersToExcel = async (req, res) => {
  try {
    // Fetch users without the Image field
    const users = await prisma.user.findMany({
      select: {
        Id: true,
        Token: true,
        firstName: true,
        lastName: true,
        mobile: true,
        email: true,
        collegeName: true,
        section: true,
        Events: true, // Events array
        amount: true,
        country: true,
        state: true,
        createdAt: true,

      },
    });

    // Create a new Excel workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Users');

    // Add header row with dynamic event columns
    worksheet.columns = [
      { header: 'Token', key: 'Token' },
      { header: 'First Name', key: 'firstName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Mobile', key: 'mobile' },
      { header: 'Email', key: 'email' },
      { header: 'College Name', key: 'collegeName' },
      { header: 'Section', key: 'section' },
      ...events1.map(event => ({ header: event.name, key: event.name })), // Add dynamic event columns
      { header: 'Amount', key: 'amount' },
      { header: 'Country', key: 'country' },
      { header: 'State', key: 'state' },
      { header: 'Created At', key: 'createdAt' },
      { header: 'Status', key: 'Status' },
    ];

    // Add data rows
    users.forEach(user => {
      // Create a row object
      const row = {
        Id: user.Id,
        Token: user.Token,
        firstName: user.firstName,
        lastName: user.lastName,
        mobile: user.mobile,
        email: user.email,
        collegeName: user.collegeName,
        section: user.section,
        amount: user.amount,
        country: user.country,
        state: user.state,
        createdAt: user.createdAt,
        Status: user.Status,
        role: user.role,
      };

      // Add participation data for each event
      events1.forEach(event => {
        row[event.name] = user.Events.includes(event.name) ? 1 : 0;
      });

      // Add the row to the worksheet
      worksheet.addRow(row);
    });

    // Write to response
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=users.xlsx');
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting users to Excel:', error.message);
    return CustomResponse({
      res,
      statusCode: 500,
      message: 'Failed to export users to Excel',
      payload: {},
      errors: [error.message],
    });
  }
};

// Export Staff Data to Excel
exports.exportStaffToExcel = async (req, res) => {
  try {
    // Fetch staff without the Image field
    const staff = await prisma.staff.findMany({
      select: {
        Id: true,
        Token: true,
        firstName: true,
        lastName: true,
        collegeName: true,
        mobile: true,
        email: true,
        state: true,
        country: true,
        event: true,
        createdAt: true,
        Status: true,
      },
    });

    // Create a new Excel workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Staff');

    // Add header row
    worksheet.columns = [
      { header: 'Id', key: 'Id' },
      { header: 'Token', key: 'Token' },
      { header: 'First Name', key: 'firstName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'College Name', key: 'collegeName' },
      { header: 'Mobile', key: 'mobile' },
      { header: 'Email', key: 'email' },
      { header: 'State', key: 'state' },
      { header: 'Country', key: 'country' },
      { header: 'Event', key: 'event' },
      { header: 'Created At', key: 'createdAt' },
      { header: 'Status', key: 'Status' },
    ];

    // Add data rows
    staff.forEach(member => worksheet.addRow(member));

    // Write to response
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=staff.xlsx');
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting staff to Excel:', error.message);
    return CustomResponse({
      res,
      statusCode: 500,
      message: 'Failed to export staff to Excel',
      payload: {},
      errors: [error.message],
    });
  }
};



exports.exportEventToExcel = async (req, res) => {
  const { eventName } = req.query; // Event name from the user

  if (!eventName) {
    return CustomResponse({
      res,
      statusCode: 400,
      message: 'Event name is required',
      payload: {},
    });
  }

  try {
    // Fetch users who participated in the specified event
    const users = await prisma.user.findMany({
      where: {
        Events: {
          has: eventName, // Check if the user participated in the event
        },
      },
      select: {
        Id: true,
        Token: true,
        firstName: true,
        lastName: true,
        mobile: true,
        email: true,
        collegeName: true,
        section: true,
        amount: true,
        country: true,
        state: true,
        createdAt: true,


      },
      orderBy: {
        firstName: 'asc', // Sort by first name (can modify this based on requirements)
      },
    });

    if (users.length === 0) {
      return CustomResponse({
        res,
        statusCode: 404,
        message: `No participants found for the event: ${eventName}`,
        payload: {},
      });
    }

    // Create a new Excel workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(eventName);

    // Add header row
    worksheet.columns = [
      { header: 'Id', key: 'Id' },
      { header: 'Token', key: 'Token' },
      { header: 'First Name', key: 'firstName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Mobile', key: 'mobile' },
      { header: 'Email', key: 'email' },
      { header: 'College Name', key: 'collegeName' },
      { header: 'Section', key: 'section' },
      { header: 'Amount', key: 'amount' },
      { header: 'Country', key: 'country' },
      { header: 'State', key: 'state' },
      { header: 'Created At', key: 'createdAt' },

    ];

    // Add data rows
    users.forEach(user => worksheet.addRow(user));

    // Write to response
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=${eventName.replace(/\s+/g, '_')}_participants.xlsx`);
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting event participants to Excel:', error.message);
    return CustomResponse({
      res,
      statusCode: 500,
      message: 'Failed to export event participants to Excel',
      payload: {},
      errors: [error.message],
    });
  }
};




exports.searchByMobileUser = async (req, res) => {
  const { mobile } = req.query; // Get mobile number from query

  if (!mobile) {
    return CustomResponse({
      res,
      statusCode: 400,
      message: 'Mobile number is required',
      payload: {},
    });
  }

  try {
    // Fetch user details by mobile number
    const user = await prisma.user.findUnique({
      where: {
        mobile: mobile, // Search by mobile number
      },
    });

    if (!user) {
      return CustomResponse({
        res,
        statusCode: 404,
        message: `No user found with mobile number: ${mobile}`,
        payload: {},
      });
    }

    // Return user details if found
    return CustomResponse({
      res,
      statusCode: 200,
      message: 'User found',
      payload: { user },
    });
  } catch (error) {
    console.error('Error searching by mobile number:', error.message);
    return CustomResponse({
      res,
      statusCode: 500,
      message: 'Failed to search by mobile number',
      payload: {},
      errors: [error.message],
    });
  }
};



exports.searchByMobileStaff = async (req, res) => {
  const { mobile } = req.query; // Get mobile number from query

  if (!mobile) {
    return CustomResponse({
      res,
      statusCode: 400,
      message: 'Mobile number is required',
      payload: {},
    });
  }

  try {
    // Fetch user details by mobile number
    const staff = await prisma.staff.findUnique({
      where: {
        mobile: mobile, // Search by mobile number
      },
    });

    if (!staff) {
      return CustomResponse({
        res,
        statusCode: 404,
        message: `No staff found with mobile number: ${mobile}`,
        payload: {},
      });
    }

    // Return user details if found
    return CustomResponse({
      res,
      statusCode: 200,
      message: 'staff found',
      payload: { staff },
    });
  } catch (error) {
    console.error('Error searching by mobile number:', error.message);
    return CustomResponse({
      res,
      statusCode: 500,
      message: 'Failed to search by mobile number',
      payload: {},
      errors: [error.message],
    });
  }
};