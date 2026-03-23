const enquiryService = require('../services/enquiry.service');

const createEnquiry = async (req, res) => {
  try {
    const {
      parentName,
      studentName,
      classApplying,
      lastSchool,
      lastClass,
      email,
      phone,
      address
    } = req.body;
    
    const enquiryData = {
      parent_name: parentName,
      student_name: studentName,
      class_applying: classApplying,
      last_school: lastSchool,
      last_class: lastClass,
      email,
      phone,
      address
    };

    const enquiry = await enquiryService.createEnquiry(enquiryData);
    
    res.status(201).json({
      success: true,
      data: enquiry,
      message: 'Enquiry submitted successfully',
      meta: { timestamp: new Date().toISOString() }
    });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    
    if (error.message.includes('required') || error.message.includes('Invalid')) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: error.message
        },
        meta: { timestamp: new Date().toISOString() }
      });
    }
    
    res.status(500).json({
      success: false,
      error: {
        code: 'ENQUIRY_CREATE_ERROR',
        message: 'Failed to submit enquiry'
      },
      meta: { timestamp: new Date().toISOString() }
    });
  }
};

const getEnquiries = async (req, res) => {
  try {
    const filters = {
      status: req.query.status
    };
    
    Object.keys(filters).forEach(key => {
      if (filters[key] === undefined) {
        delete filters[key];
      }
    });
    
    const enquiries = await enquiryService.getEnquiries(filters);
    
    res.json({
      success: true,
      data: enquiries,
      meta: { 
        timestamp: new Date().toISOString(),
        count: enquiries.length,
        filters: filters
      }
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'ENQUIRY_FETCH_ERROR',
        message: 'Failed to fetch enquiries'
      },
      meta: { timestamp: new Date().toISOString() }
    });
  }
};

const getEnquiryById = async (req, res) => {
  try {
    const { id } = req.params;
    const enquiry = await enquiryService.getEnquiryById(id);
    
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        error: {
          code: 'ENQUIRY_NOT_FOUND',
          message: 'Enquiry not found'
        },
        meta: { timestamp: new Date().toISOString() }
      });
    }
    
    res.json({
      success: true,
      data: enquiry,
      meta: { timestamp: new Date().toISOString() }
    });
  } catch (error) {
    console.error('Error fetching enquiry:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'ENQUIRY_FETCH_ERROR',
        message: 'Failed to fetch enquiry'
      },
      meta: { timestamp: new Date().toISOString() }
    });
  }
};

module.exports = {
  createEnquiry,
  getEnquiries,
  getEnquiryById
};
