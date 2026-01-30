# Backend Setup Instructions

Complete guide to set up the Node.js + PostgreSQL backend for Infinity Salesman Tracking.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v14 or higher) - [Download](https://www.postgresql.org/download/)
- **npm** (comes with Node.js)

## Step-by-Step Setup

### 1. Install Dependencies

Navigate to the backend folder and install Node.js dependencies:

```powershell
cd backend
npm install
```

This will install:
- `express` - Web framework
- `pg` - PostgreSQL client
- `cors` - Enable CORS
- `dotenv` - Environment variables
- `express-validator` - Input validation

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```powershell
# Copy the example file
Copy-Item .env.example .env
```

Edit `backend/.env` and update with your PostgreSQL credentials:

```env
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=salesman_tracking
DB_USER=postgres
DB_PASSWORD=your_actual_password_here

# CORS Settings
CORS_ORIGIN=http://localhost:5173
```

**Important:** Replace `your_actual_password_here` with your PostgreSQL password.

### 3. Create PostgreSQL Database

#### Option A: Using psql Command Line

```powershell
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE salesman_tracking;

# Exit psql
\q
```

#### Option B: Using pgAdmin

1. Open pgAdmin
2. Right-click on "Databases"
3. Select "Create" → "Database"
4. Enter name: `salesman_tracking`
5. Click "Save"

### 4. Run Database Schema

Execute the SQL schema to create tables:

```powershell
psql -U postgres -d salesman_tracking -f database/schema.sql
```

This will create:
- `contacts` table - Store contact form submissions
- `blog_posts` table - Blog content management
- `subscribers` table - Newsletter subscribers

#### Manual Method (if above doesn't work)

1. Open pgAdmin or psql
2. Connect to `salesman_tracking` database
3. Open `backend/database/schema.sql`
4. Copy and execute the SQL commands

### 5. Verify Database Connection

You can test the database connection:

```powershell
# Start the server
npm run dev
```

If successful, you should see:
```
✅ Connected to PostgreSQL database
🚀 Server is running on port 5000
📍 Environment: development
🔗 API URL: http://localhost:5000
💚 Health Check: http://localhost:5000/api/health
```

### 6. Test API Endpoints

Open your browser or use curl to test:

**Health Check:**
```
http://localhost:5000/api/health
```

**API Root:**
```
http://localhost:5000/
```

### 7. Test Contact Form Submission

Using PowerShell:
```powershell
$body = @{
    name = "Test User"
    email = "test@example.com"
    company = "Test Company"
    message = "This is a test message"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/contacts" -Method POST -Body $body -ContentType "application/json"
```

Or using curl:
```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"company\":\"Test Company\",\"message\":\"This is a test message\"}"
```

## Troubleshooting

### Database Connection Error

**Error:** "Connection refused" or "Database connection failed"

**Solutions:**
1. Verify PostgreSQL is running:
   ```powershell
   Get-Service -Name postgresql*
   ```
2. Check credentials in `.env` file
3. Ensure database exists:
   ```powershell
   psql -U postgres -l
   ```

### Port Already in Use

**Error:** "Port 5000 is already in use"

**Solutions:**
1. Change port in `backend/.env`:
   ```env
   PORT=5001
   ```
2. Or kill the process using port 5000:
   ```powershell
   Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process
   ```

### Module Not Found Error

**Error:** "Cannot find module"

**Solution:**
```powershell
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### CORS Error in Browser

**Error:** "Access-Control-Allow-Origin header is missing"

**Solution:**
- Verify `CORS_ORIGIN` in `.env` matches your frontend URL
- Default: `http://localhost:5173`

## Database Management

### View All Contacts

```sql
-- Connect to database
psql -U postgres -d salesman_tracking

-- View contacts
SELECT * FROM contacts ORDER BY created_at DESC;

-- View contact count
SELECT COUNT(*) FROM contacts;

-- View contacts by status
SELECT status, COUNT(*) FROM contacts GROUP BY status;
```

### Update Contact Status

```sql
UPDATE contacts 
SET status = 'contacted' 
WHERE id = 1;
```

### Clear Test Data

```sql
-- Delete all test contacts
DELETE FROM contacts WHERE email LIKE '%test%';

-- Or delete all contacts (be careful!)
TRUNCATE TABLE contacts;
```

## API Documentation

### POST /api/contacts
Submit a new contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "message": "I'd like to schedule a demo"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp",
    "message": "I'd like to schedule a demo",
    "created_at": "2026-01-30T12:00:00.000Z",
    "status": "new"
  }
}
```

### GET /api/contacts
Get all contact submissions (admin endpoint).

**Query Parameters:**
- `status` - Filter by status (new, contacted, qualified, converted, closed)
- `limit` - Number of records (default: 50)
- `offset` - Pagination offset (default: 0)

### GET /api/blog
Get all published blog posts.

**Query Parameters:**
- `published` - Filter by published status (default: true)
- `limit` - Number of posts (default: 10)
- `offset` - Pagination offset (default: 0)

## Development Tips

### Auto-reload on File Changes

The backend uses Node's `--watch` flag for auto-reload:
```powershell
npm run dev
```

Any changes to `.js` files will automatically restart the server.

### View Server Logs

All requests are logged with timestamp:
```
2026-01-30T12:00:00.000Z - POST /api/contacts
2026-01-30T12:00:01.000Z - GET /api/health
```

### Environment-specific Configuration

- Development: `NODE_ENV=development` - Shows detailed errors
- Production: `NODE_ENV=production` - Hides sensitive error details

## Next Steps

1. ✅ Backend is running
2. 📝 Test API endpoints
3. 🎨 Start the frontend: `cd .. && npm run dev`
4. 🔗 Test contact form integration
5. 🚀 Deploy to production (Railway, Render, Heroku, etc.)

## Security for Production

Before deploying to production:

- [ ] Add authentication middleware for admin routes
- [ ] Implement rate limiting
- [ ] Use strong PostgreSQL password
- [ ] Enable HTTPS/SSL
- [ ] Set `NODE_ENV=production`
- [ ] Add API key authentication
- [ ] Implement request logging
- [ ] Set up database backups
- [ ] Use environment-specific CORS origins
- [ ] Add monitoring and alerting

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review API documentation
3. Check server logs
4. Verify database connection
5. Test with curl/Postman first

---

**Backend Setup Complete! 🎉**

Your backend is now ready to receive contact form submissions and serve blog posts.
