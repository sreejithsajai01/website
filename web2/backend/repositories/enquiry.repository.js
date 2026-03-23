const pool = require('../config/database');

// Generate inquiry number in format INQ-YYYYMM-XXXX
const generateInquiryNumber = async () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `INQ-${year}${month}-${random}`;
};

const createEnquiry = async (enquiryData) => {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    await client.query('SET search_path TO aionpixel_institutions, public');
    
    const inquiryNumber = await generateInquiryNumber();
    
    const {
      parent_name,
      student_name,
      class_applying,
      last_school,
      last_class,
      email,
      phone,
      address,
      school_id
    } = enquiryData;

    const query = `
      INSERT INTO admission_inquiries (
        inquiry_number,
        student_name,
        parent_name,
        phone,
        email,
        class_applying,
        last_school,
        last_class,
        address,
        status,
        source,
        lead_score,
        school_id,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *
    `;

    const values = [
      inquiryNumber,
      student_name,
      parent_name,
      phone,
      email,
      class_applying,
      last_school,
      last_class,
      address,
      'NEW',
      'WEBSITE',
      'cold',
      school_id,
      new Date()
    ];

    const result = await client.query(query, values);
    await client.query('COMMIT');
    
    return result.rows[0];
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const getEnquiries = async (filters = {}) => {
  const client = await pool.connect();
  
  try {
    await client.query('SET search_path TO aionpixel_institutions, public');
    
    let query = `
      SELECT 
        id,
        inquiry_number,
        student_name,
        parent_name,
        phone,
        email,
        class_applying,
        last_school,
        last_class,
        address,
        status,
        source,
        lead_score,
        school_id,
        created_at,
        updated_at
      FROM admission_inquiries
    `;
    
    const conditions = [];
    const values = [];
    
    if (filters.school_id) {
      conditions.push(`school_id = $${values.length + 1}`);
      values.push(filters.school_id);
    }
    
    if (filters.status) {
      conditions.push(`status = $${values.length + 1}`);
      values.push(filters.status);
    }
    
    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`;
    }
    
    query += ` ORDER BY created_at DESC LIMIT 100`;
    
    const result = await client.query(query, values);
    return result.rows;
  } finally {
    client.release();
  }
};

const getEnquiryById = async (id) => {
  const client = await pool.connect();
  
  try {
    await client.query('SET search_path TO aionpixel_institutions, public');
    
    const query = `
      SELECT * FROM admission_inquiries WHERE id = $1
    `;
    
    const result = await client.query(query, [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
};

module.exports = {
  createEnquiry,
  getEnquiries,
  getEnquiryById
};
