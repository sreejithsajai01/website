const enquiryRepository = require('../repositories/enquiry.repository');

const createEnquiry = async (enquiryData) => {
  // Validate required fields
  if (!enquiryData.parent_name || !enquiryData.student_name || !enquiryData.email || !enquiryData.phone) {
    throw new Error('Required fields are missing');
  }

  // Add school_id
  const dataWithSchoolId = {
    ...enquiryData,
    school_id: process.env.SCHOOL_ID || '465c17f4-2ba7-474d-bac1-6e214d8f3e4d'
  };

  return await enquiryRepository.createEnquiry(dataWithSchoolId);
};

const getEnquiries = async (filters = {}) => {
  // Add school_id filter
  const filtersWithSchoolId = {
    ...filters,
    school_id: process.env.SCHOOL_ID || '465c17f4-2ba7-474d-bac1-6e214d8f3e4d'
  };

  return await enquiryRepository.getEnquiries(filtersWithSchoolId);
};

const getEnquiryById = async (id) => {
  return await enquiryRepository.getEnquiryById(id);
};

module.exports = {
  createEnquiry,
  getEnquiries,
  getEnquiryById
};
