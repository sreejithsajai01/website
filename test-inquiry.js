const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  port: 5433,
  database: 'cortexios-db',
  user: 'postgres',
  password: 'Sanu@357262',
  ssl: false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

async function testInquiry() {
  const client = await pool.connect();
  
  try {
    // Test connection
    console.log('Testing database connection...');
    await client.query('SELECT NOW()');
    console.log('✓ Database connected successfully\n');

    // Set schema
    await client.query('SET search_path TO moccb_institutions, public');
    console.log('✓ Schema set to: moccb_institutions\n');

    // Create table if not exists
    console.log('Creating inquiries table if not exists...');
    await client.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        inquiry_number VARCHAR(50) UNIQUE,
        student_name VARCHAR(255) NOT NULL,
        parent_name VARCHAR(255),
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        status VARCHAR(50) DEFAULT 'NEW',
        source VARCHAR(50) DEFAULT 'WEBSITE',
        lead_score VARCHAR(20) DEFAULT 'cold',
        utm_source VARCHAR(100),
        utm_medium VARCHAR(100),
        utm_campaign VARCHAR(100),
        utm_content VARCHAR(255),
        utm_term VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✓ Table ready\n');

    // Insert test inquiry
    console.log('Inserting test inquiry...');
    const result = await client.query(
      `INSERT INTO inquiries (inquiry_number, student_name, parent_name, phone, email, status, source, lead_score, utm_source) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      ['INQ-TEST-' + Date.now(), 'Test Student', 'Test Parent', '1234567890', 'test@example.com', 'NEW', 'WEBSITE', 'cold', 'direct']
    );
    console.log('✓ Inquiry inserted:', result.rows[0], '\n');

    // Verify data
    console.log('Fetching all inquiries...');
    const allInquiries = await client.query('SELECT * FROM inquiries ORDER BY created_at DESC');
    console.log(`✓ Total inquiries in database: ${allInquiries.rows.length}`);
    console.log('Latest inquiries:');
    allInquiries.rows.slice(0, 5).forEach((row, i) => {
      console.log(`  ${i + 1}. ${row.student_name} (${row.email}) - ${row.phone}`);
    });

    console.log('\n✓ Test completed successfully!');
  } catch (error) {
    console.error('✗ Error:', error.message);
    console.error('Full error:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

testInquiry();
