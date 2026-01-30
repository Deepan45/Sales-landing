# 🚀 Getting Started - Quick Guide

Welcome! This guide will help you set up and run the Infinity Salesman Tracking application with its Node.js + PostgreSQL backend.

## 📋 Prerequisites Checklist

Before starting, ensure you have:

- [ ] **Node.js** installed (v18+) - [Download](https://nodejs.org/)
- [ ] **PostgreSQL** installed (v14+) - [Download](https://www.postgresql.org/download/)
- [ ] **Git** (optional, for version control)
- [ ] A code editor (VS Code recommended)
- [ ] PostgreSQL password ready

## ⚡ Quick Start (5 Minutes)

### Option 1: Automated Setup (Easiest)

```powershell
# 1. Run the automated setup script
.\setup.ps1

# 2. Create the database
psql -U postgres
CREATE DATABASE salesman_tracking;
\q

# 3. Apply database schema
psql -U postgres -d salesman_tracking -f backend\database\schema.sql

# 4. Edit backend\.env with your PostgreSQL password

# 5. Start both servers
.\start.ps1
```

**Done! ✅** Open http://localhost:5173

---

### Option 2: Manual Setup (Step by Step)

#### Step 1: Install Dependencies (2 min)

```powershell
# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
npm install
```

#### Step 2: Configure Environment (1 min)

**Backend Configuration:**
```powershell
cd backend
Copy-Item .env.example .env
```

Edit `backend\.env`:
```env
DB_PASSWORD=your_postgres_password_here
```

**Frontend Configuration:**
```powershell
cd ..
Copy-Item .env.example .env
```

#### Step 3: Setup Database (2 min)

**Create Database:**
```powershell
# Method 1: Command Line
psql -U postgres
CREATE DATABASE salesman_tracking;
\q

# Method 2: pgAdmin
# Open pgAdmin → Right-click Databases → Create → Database
# Name: salesman_tracking
```

**Apply Schema:**
```powershell
psql -U postgres -d salesman_tracking -f backend\database\schema.sql
```

#### Step 4: Start Servers (30 sec)

**Terminal 1 - Backend:**
```powershell
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```powershell
npm run dev
```

---

## 🎯 Access Your Application

Once both servers are running:

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend** | http://localhost:5173 | Main website |
| **Backend API** | http://localhost:5000 | API server |
| **Health Check** | http://localhost:5000/api/health | Server status |
| **Contact Form** | http://localhost:5173/contact | Test the form |

---

## ✅ Verify Everything Works

### 1. Test Backend API

```powershell
cd backend
.\test-api.ps1
```

Expected output:
```
✅ Health check passed
✅ Contact form submitted successfully
✅ Retrieved contacts successfully
🎉 API TESTING COMPLETE!
```

### 2. Test Frontend Contact Form

1. Open http://localhost:5173/contact
2. Fill in the form:
   - Name: Your Name
   - Email: your@email.com
   - Company: Your Company
   - Message: Test message
3. Click "Book Demo"
4. You should see: ✅ "Thank you for contacting us!"

### 3. Verify Database

```powershell
psql -U postgres -d salesman_tracking

# Check if tables exist
\dt

# View contacts
SELECT * FROM contacts;

# Exit
\q
```

---

## 📁 Project Structure Overview

```
Sales-landing/
│
├── backend/                    # Node.js + Express API
│   ├── config/
│   │   └── database.js        # PostgreSQL connection
│   ├── controllers/
│   │   ├── contactController.js    # Contact form logic
│   │   └── blogController.js       # Blog management
│   ├── routes/
│   │   ├── contactRoutes.js        # Contact API routes
│   │   └── blogRoutes.js           # Blog API routes
│   ├── database/
│   │   └── schema.sql              # Database tables
│   ├── .env                        # ⚠️ Your credentials (create this!)
│   ├── .env.example                # Template
│   ├── package.json                # Dependencies
│   ├── server.js                   # Main server file
│   └── test-api.ps1               # Testing script
│
├── src/                       # React Frontend
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx         # ✨ Updated with API integration
│   ├── App.jsx
│   └── main.jsx
│
├── .env                       # ⚠️ Frontend config (create this!)
├── .env.example               # Template
├── package.json               # Frontend dependencies
├── setup.ps1                  # 🚀 Automated setup
├── start.ps1                  # 🚀 Quick start both servers
├── PROJECT_SUMMARY.md         # 📚 Complete documentation
└── README.md                  # 📖 Main readme
```

---

## 🔧 Common Commands

### Development

```powershell
# Start backend (with auto-reload)
cd backend
npm run dev

# Start frontend (with HMR)
npm run dev

# Start both servers at once
.\start.ps1
```

### Testing

```powershell
# Test backend API
cd backend
.\test-api.ps1

# Test frontend
# Open http://localhost:5173/contact and submit form
```

### Database

```powershell
# Connect to database
psql -U postgres -d salesman_tracking

# View all contacts
SELECT * FROM contacts ORDER BY created_at DESC;

# Count total contacts
SELECT COUNT(*) FROM contacts;

# Delete test data
DELETE FROM contacts WHERE email LIKE '%test%';

# Exit
\q
```

### Production Build

```powershell
# Build frontend for production
npm run build

# Preview production build
npm run preview
```

---

## 🐛 Troubleshooting

### Backend won't start

**Error:** "Cannot connect to database"

**Fix:**
1. Check if PostgreSQL is running:
   ```powershell
   Get-Service -Name postgresql*
   ```
2. Verify credentials in `backend\.env`
3. Test connection:
   ```powershell
   psql -U postgres -d salesman_tracking
   ```

---

### Port already in use

**Error:** "Port 5000 is already in use"

**Fix:**
```powershell
# Option 1: Change port in backend\.env
PORT=5001

# Option 2: Kill process using port
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process
```

---

### CORS Error

**Error:** "Access-Control-Allow-Origin header is missing"

**Fix:**
- Ensure `CORS_ORIGIN` in `backend\.env` matches frontend URL
- Default should be: `CORS_ORIGIN=http://localhost:5173`

---

### Module not found

**Error:** "Cannot find module 'express'"

**Fix:**
```powershell
cd backend
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 📚 Documentation Files

| File | Description |
|------|-------------|
| [README.md](README.md) | Main project overview |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | Complete feature list |
| [backend/README.md](backend/README.md) | Backend API documentation |
| [backend/SETUP.md](backend/SETUP.md) | Detailed setup instructions |
| THIS FILE | Quick start guide |

---

## 🎓 What You Can Do Now

### Immediate Actions
- ✅ Submit contact forms from the website
- ✅ View submitted contacts in database
- ✅ Test all API endpoints
- ✅ Customize the frontend design
- ✅ Add more pages or features

### Next Steps
1. **Create Admin Dashboard** - View/manage contacts
2. **Add Blog Posts** - Use the blog API
3. **Email Notifications** - Send emails on form submission
4. **Deploy to Production** - Railway, Render, or Heroku
5. **Add Authentication** - Secure admin endpoints

---

## 🚀 Production Deployment Checklist

Before deploying to production:

- [ ] Change all default passwords
- [ ] Set `NODE_ENV=production`
- [ ] Use environment-specific CORS origins
- [ ] Add authentication to admin endpoints
- [ ] Implement rate limiting
- [ ] Set up HTTPS/SSL
- [ ] Configure database backups
- [ ] Add monitoring and logging
- [ ] Test all endpoints thoroughly
- [ ] Update environment variables on hosting platform

---

## 💡 Tips & Best Practices

1. **Always check logs** when something fails
2. **Test API first** before testing frontend
3. **Use test-api.ps1** to verify backend quickly
4. **Check database** to confirm data is being stored
5. **Keep .env files secret** - never commit them to Git
6. **Use version control** - commit your changes regularly

---

## 📞 Need Help?

1. **Check the logs** - Look at terminal output for errors
2. **Run test script** - `backend\test-api.ps1`
3. **Check documentation**:
   - [SETUP.md](backend/SETUP.md) for detailed setup
   - [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for features
   - [README.md](backend/README.md) for API docs
4. **Verify basics**:
   - Is PostgreSQL running?
   - Are environment variables correct?
   - Did you run the database schema?

---

## 🎉 Success!

If you can:
- ✅ Access http://localhost:5173
- ✅ Submit a contact form successfully
- ✅ See data in PostgreSQL database
- ✅ Get healthy response from http://localhost:5000/api/health

**Then you're all set! Happy coding! 🎊**

---

## 📅 Quick Reference

```powershell
# Initial setup (one time)
.\setup.ps1
psql -U postgres -c "CREATE DATABASE salesman_tracking;"
psql -U postgres -d salesman_tracking -f backend\database\schema.sql

# Daily development
.\start.ps1  # Start both servers

# Testing
cd backend; .\test-api.ps1

# Database access
psql -U postgres -d salesman_tracking
```

---

**Last Updated:** January 30, 2026
**Version:** 1.0.0
