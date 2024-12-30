const { validationResult } = require('express-validator');
const Users = require('../data/Users'); // Assuming 'users' data is in a separate file
const CustomResponse = require('../utils/customResponse'); // Your custom response handler
const {generateToken} = require('../utils/jwt'); // JWT token generation utility

exports.attendanceLogin = (req, res) => {
 try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return CustomResponse({
        res,
        statusCode: 400,
        message: 'Validation errors',
        errors: errors.array(),
      });
    }
  
    const { username, password, eventId } = req.body;
  
    // Find the user by username and role
    const user = Users.find((u) => u.username === username && u.password === password);
  
    if (!user) {
      return CustomResponse({
        res,
        statusCode: 401,
        message: 'Invalid credentials',
      });
    }
  
    // Check if user is a coordinator and authorized for the event
    if (user.role === 'coordinator' && !user.events.includes(eventId)) {
      return CustomResponse({
        res,
        statusCode: 403,
        message: 'You are not authorized for this event',
      });
    }
  
    // Generate JWT
    const token = generateToken({ id: user.id, role: user.role, eventId });
    const User = {
      id: user.id,
      username: user.username,
      role: user.role,
      events: user.events,
      token,
    };
  
    return CustomResponse({
      res,
      statusCode: 200,
      message: 'Login successful',
      payload: { User },
    });
 } catch (error) {
    console.error(error)
 }
};
