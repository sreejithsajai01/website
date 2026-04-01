const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'host.docker.internal',
  port: process.env.DB_PORT || 5433,
  database: process.env.DB_NAME || 'cortexios-db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'Sanu@357262',
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
});

module.exports = pool;
