# Backend API Documentation

## Overview
This is the backend API for St. Mary's CBSE School website enquiry system. It follows a layered architecture pattern with Controllers, Services, and Repositories.

## Architecture

```
backend/
├── config/
│   └── database.js          # PostgreSQL connection configuration
├── controllers/
│   └── enquiry.controller.js # Request/Response handling
├── services/
│   └── enquiry.service.js    # Business logic
├── repositories/
│   └── enquiry.repository.js # Database operations
├── routes/
│   └── enquiry.routes.js     # API route definitions
├── .env                      # Environment variables
├── server.js                 # Main server file
└── package.json              # Dependencies

```

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

The `.env` file is already configured with:

```env
NODE_ENV=development
PORT=3013
DB_HOST=host.docker.internal
DB_PORT=5433
DB_NAME=cortexios-db
DB_USER=postgres
DB_PASS=Sanu@357262
DB_SSL=false
TENANT_SCHEMA=aionpixel_institutions
SCHOOL_ID=465c17f4-2ba7-474d-bac1-6e214d8f3e4d
```

### 3. Database Schema

The backend expects the following table in PostgreSQL:

```sql
-- Schema: aionpixel_institutions
CREATE TABLE admission_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inquiry_number VARCHAR(50) UNIQUE NOT NULL,
    student_name VARCHAR(255) NOT NULL,
    parent_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    class_applying VARCHAR(50),
    last_school VARCHAR(255),
    last_class VARCHAR(50),
    address TEXT,
    status VARCHAR(50) DEFAULT 'NEW',
    source VARCHAR(50) DEFAULT 'WEBSITE',
    lead_score VARCHAR(50) DEFAULT 'cold',
    school_id UUID NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Start the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3013`

## API Endpoints

### 1. Create Enquiry
**POST** `/api/enquiry`

Create a new admission enquiry.

**Request Body:**
```json
{
  "parentName": "John Doe",
  "studentName": "Jane Doe",
  "classApplying": "CLASS 1",
  "lastSchool": "ABC School",
  "lastClass": "U.K.G",
  "email": "john@example.com",
  "phone": "9876543210",
  "address": "123 Main Street, Mumbai"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "inquiry_number": "INQ-202501-1234",
    "student_name": "Jane Doe",
    "parent_name": "John Doe",
    "phone": "9876543210",
    "email": "john@example.com",
    "class_applying": "CLASS 1",
    "last_school": "ABC School",
    "last_class": "U.K.G",
    "address": "123 Main Street, Mumbai",
    "status": "NEW",
    "source": "WEBSITE",
    "lead_score": "cold",
    "school_id": "465c17f4-2ba7-474d-bac1-6e214d8f3e4d",
    "created_at": "2025-01-15T10:30:00.000Z"
  },
  "message": "Enquiry submitted successfully",
  "meta": {
    "timestamp": "2025-01-15T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Required fields are missing"
  },
  "meta": {
    "timestamp": "2025-01-15T10:30:00.000Z"
  }
}
```

### 2. Get All Enquiries
**GET** `/api/enquiry`

Retrieve all enquiries for the school (filtered by school_id automatically).

**Query Parameters:**
- `status` (optional): Filter by status (e.g., NEW, CONTACTED, CONVERTED)

**Example:**
```
GET /api/enquiry?status=NEW
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "inquiry_number": "INQ-202501-1234",
      "student_name": "Jane Doe",
      "parent_name": "John Doe",
      "phone": "9876543210",
      "email": "john@example.com",
      "class_applying": "CLASS 1",
      "last_school": "ABC School",
      "last_class": "U.K.G",
      "address": "123 Main Street, Mumbai",
      "status": "NEW",
      "source": "WEBSITE",
      "lead_score": "cold",
      "school_id": "465c17f4-2ba7-474d-bac1-6e214d8f3e4d",
      "created_at": "2025-01-15T10:30:00.000Z",
      "updated_at": "2025-01-15T10:30:00.000Z"
    }
  ],
  "meta": {
    "timestamp": "2025-01-15T10:30:00.000Z",
    "count": 1,
    "filters": {
      "status": "NEW"
    }
  }
}
```

### 3. Get Enquiry by ID
**GET** `/api/enquiry/:id`

Retrieve a specific enquiry by its ID.

**Example:**
```
GET /api/enquiry/123e4567-e89b-12d3-a456-426614174000
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "inquiry_number": "INQ-202501-1234",
    "student_name": "Jane Doe",
    "parent_name": "John Doe",
    "phone": "9876543210",
    "email": "john@example.com",
    "class_applying": "CLASS 1",
    "last_school": "ABC School",
    "last_class": "U.K.G",
    "address": "123 Main Street, Mumbai",
    "status": "NEW",
    "source": "WEBSITE",
    "lead_score": "cold",
    "school_id": "465c17f4-2ba7-474d-bac1-6e214d8f3e4d",
    "created_at": "2025-01-15T10:30:00.000Z",
    "updated_at": "2025-01-15T10:30:00.000Z"
  },
  "meta": {
    "timestamp": "2025-01-15T10:30:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "error": {
    "code": "ENQUIRY_NOT_FOUND",
    "message": "Enquiry not found"
  },
  "meta": {
    "timestamp": "2025-01-15T10:30:00.000Z"
  }
}
```

### 4. Health Check
**GET** `/api/health`

Check if the API is running.

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

## Layer Responsibilities

### Controllers (`controllers/`)
- Handle HTTP requests and responses
- Validate request data
- Call service layer methods
- Format responses

### Services (`services/`)
- Contain business logic
- Validate data
- Add school_id automatically
- Call repository methods

### Repositories (`repositories/`)
- Direct database operations
- Execute SQL queries
- Handle transactions
- Generate inquiry numbers

### Routes (`routes/`)
- Define API endpoints
- Map URLs to controller methods

## Features

✅ **Layered Architecture** - Clean separation of concerns
✅ **PostgreSQL Integration** - Using pg driver with connection pooling
✅ **Schema-based Storage** - Uses `aionpixel_institutions` schema
✅ **Auto School ID** - Automatically assigns school_id to enquiries
✅ **Inquiry Number Generation** - Format: INQ-YYYYMM-XXXX
✅ **Error Handling** - Comprehensive error responses
✅ **Request Logging** - Logs all API requests
✅ **CORS Enabled** - Allows frontend connections
✅ **Transaction Support** - Database transactions for data integrity

## Testing

### Using cURL

```bash
# Create enquiry
curl -X POST http://localhost:3013/api/enquiry \
  -H "Content-Type: application/json" \
  -d '{
    "parentName": "John Doe",
    "studentName": "Jane Doe",
    "classApplying": "CLASS 1",
    "email": "john@example.com",
    "phone": "9876543210",
    "address": "123 Main Street"
  }'

# Get all enquiries
curl http://localhost:3013/api/enquiry

# Health check
curl http://localhost:3013/api/health
```

### Using Postman

1. Import the endpoints
2. Set base URL: `http://localhost:3013`
3. Test each endpoint with sample data

## Troubleshooting

### Database Connection Issues

If you get connection errors:

1. Check if PostgreSQL is running
2. Verify database credentials in `.env`
3. Ensure the schema `aionpixel_institutions` exists
4. Check if the table `admission_inquiries` exists

### Port Already in Use

If port 3013 is already in use:

```bash
# Change PORT in .env file
PORT=3014
```

### CORS Issues

If frontend can't connect:

```bash
# The backend already has CORS enabled
# Make sure frontend is calling http://localhost:3013/api/enquiry
```

## Next Steps

1. **Email Notifications** - Send confirmation emails to parents
2. **Admin Dashboard** - Create admin panel to manage enquiries
3. **Status Updates** - Add endpoint to update enquiry status
4. **UTM Tracking** - Add UTM parameters for marketing analytics
5. **File Uploads** - Add document upload functionality
6. **SMS Notifications** - Send SMS confirmations
7. **Analytics** - Add reporting and analytics endpoints

## Support

For issues or questions, contact the development team.
