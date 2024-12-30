const express = require("express");
const router = express.Router();
const adminController= require("../controllers/adminController")
const protectRoute = require('../middleware/authMiddleware');

router.post('/admin-login', adminController.adminLogin)
router.get('/admin',protectRoute(['admin']), adminController.adminTest)
router.get('/count', adminController.getEventCounts)
router.get('/amount', adminController.getAmount)
router.get('/user-count', adminController.getTotalUserCount)
router.get('/staff-count', adminController.getTotalStaffCount)
router.get('/users', adminController.getAllUsers)
router.get('/staff', adminController.getAllStaff)
router.get('/latestUsers', adminController.getLatest10Users)
router.get('/latestStaff', adminController.getLatest10Staff)
router.post('/sendMail',adminController.sendConfirmationEmail)
router.get('/export/users/excel', adminController.exportUsersToExcel);
router.get('/export/staff/excel', adminController.exportStaffToExcel);
router.get('/exportEventToExcel', adminController.exportEventToExcel);
router.get('/searchByMobileUser',adminController.searchByMobileUser );
router.get('/searchByMobileStaff',adminController.searchByMobileStaff );







module.exports = router;