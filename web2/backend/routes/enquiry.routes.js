const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiry.controller');

// POST /api/enquiry - Create new enquiry
router.post('/', enquiryController.createEnquiry);

// GET /api/enquiry - Get all enquiries with optional filters
router.get('/', enquiryController.getEnquiries);

// GET /api/enquiry/:id - Get enquiry by ID
router.get('/:id', enquiryController.getEnquiryById);

module.exports = router;
