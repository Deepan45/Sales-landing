# Infinity Salesman Tracking - Backend API

Backend server for the Infinity Salesman Tracking application built with Node.js, Express, and PostgreSQL.

## Features

- ✅ RESTful API architecture
- ✅ PostgreSQL database integration
- ✅ Contact form submissions
- ✅ Blog post management
- ✅ Input validation
- ✅ CORS enabled
- ✅ Error handling

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your PostgreSQL credentials:
```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=salesman_tracking
DB_USER=postgres
DB_PASSWORD=yourpassword

CORS_ORIGIN=http://localhost:5173
```

## Database Setup

1. Create the database:
```bash
psql -U postgres
CREATE DATABASE salesman_tracking;
\q
```

2. Run the schema file:
```bash
psql -U postgres -d salesman_tracking -f database/schema.sql
```

Or manually connect and copy the SQL from `database/schema.sql`.

## Running the Server

Development mode (with auto-restart on file changes):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /api/health` - Check server and database status

### Contacts
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)
- `GET /api/contacts/:id` - Get single contact (admin)
- `PATCH /api/contacts/:id/status` - Update contact status (admin)
- `DELETE /api/contacts/:id` - Delete contact (admin)

### Blog
- `GET /api/blog` - Get all published blog posts
- `GET /api/blog/:slug` - Get single blog post by slug
- `POST /api/blog` - Create new blog post (admin)

## Example API Requests

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp",
    "message": "I would like to schedule a demo"
  }'
```

### Get Health Status
```bash
curl http://localhost:5000/api/health
```

## Project Structure

```
backend/
├── config/
│   └── database.js       # Database connection
├── controllers/
│   ├── contactController.js
│   └── blogController.js
├── routes/
│   ├── contactRoutes.js
│   └── blogRoutes.js
├── database/
│   └── schema.sql        # Database schema
├── .env.example          # Environment variables template
├── .gitignore
├── package.json
├── server.js             # Main entry point
└── README.md
```

## Security Notes

⚠️ **Important for Production:**

1. Add authentication middleware for admin endpoints
2. Implement rate limiting
3. Use environment-specific CORS origins
4. Add request validation and sanitization
5. Implement proper error logging
6. Use HTTPS in production
7. Add JWT or session-based authentication
8. Implement SQL injection protection (already using parameterized queries)

## Technologies Used

- **Express.js** - Web framework
- **PostgreSQL** - Database
- **node-postgres (pg)** - PostgreSQL client
- **express-validator** - Input validation
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment configuration
