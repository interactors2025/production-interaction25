const express = require("express");
const router = express.Router();
const attendanceController = require('../controllers/attendanceController')
const { body } = require('express-validator');

router.post('/attendanceLogin',[
    body('username').isString().withMessage('Username must be a string'),
    body('password').isString().withMessage('Password must be a string'),
    body('eventId').isString().withMessage('Event ID must be a string'),
  ],
  attendanceController.attendanceLogin)

module.exports = router;