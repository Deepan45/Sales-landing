# Infinity Salesman Tracking - Sales Landing Page

A modern, responsive sales landing page with a Node.js/PostgreSQL backend for the Infinity Salesman Tracking application.

## 🚀 Features

### Frontend
- **Multi-page React Application** (Home, About, Blog, Contact)
- **Admin Panel** - Manage contacts with protected dashboard
- **SEO Optimized** - Proper heading hierarchy, meta tags, semantic HTML
- **Mobile-First Design** - Fully responsive across all devices
- **Modern UI** - Gradient-rich design with TailwindCSS
- **Smooth Animations** - Professional transitions and effects
- **Fast Performance** - Built with Vite

### Backend
- **RESTful API** - Express.js server
- **PostgreSQL Database** - Robust data storage
- **Auto-Migration** - Database tables created automatically
- **Contact Form API** - Store contact submissions
- **Blog Management** - CRUD operations for blog posts
- **Input Validation** - Server-side validation
- **Error Handling** - Comprehensive error management

### Admin Features
- **Protected Dashboard** - Secure admin access
- **Contact Management** - View, filter, update, delete contacts
- **Status Tracking** - Update contact status (new, contacted, qualified, etc.)
- **Statistics** - Real-time contact analytics
- **Hardcoded Auth** - Simple login (username: admin, password: admin123)

## 📦 Tech Stack

### Frontend
- React 18.2
- React Router 6.20
- Tailwind CSS 3.4
- Vite 5.0

### Backend
- Node.js with Express.js
- PostgreSQL
- express-validator
- CORS & dotenv

## 🛠️ Installation

### Option 1: Docker (Recommended - Fastest Setup)

```bash
# Prerequisites: Docker Desktop installed and running

# Start everything with one command
.\docker-start.ps1

# Or manually
docker-compose up -d
```

**That's it!** The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- Database: Automatically created and migrated

**Benefits:**
- ✅ No manual PostgreSQL installation
- ✅ Automatic database creation
- ✅ Auto-running migrations
- ✅ Consistent environment
- ✅ Easy cleanup: `docker-compose down -v`

See [DOCKER.md](DOCKER.md) for detailed Docker documentation.

---

### Option 2: Local Development

#### Frontend Setup
```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

#### Backend Setup
```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Update with your PostgreSQL credentials
```

#### Database Setup
```bash
# Create database
psql -U postgres
CREATE DATABASE salesman_tracking;
\q

# Run schema (or let auto-migration handle it)
psql -U postgres -d salesman_tracking -f backend/database/schema.sql
```

## 🚀 Running the Application

### With Docker

```bash
# Start all services
.\docker-start.ps1
# Or: docker-compose up -d

# Stop all services
.\docker-stop.ps1
# Or: docker-compose down
```

### Local Development

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Runs on http://localhost:5000
# Auto-migration runs on startup
```

**Terminal 2 - Frontend:**
```bash
npm run dev
# Runs on http://localhost:5173
```

## 📄 Pages

### Home Page
- Hero section with dual CTAs
- Problem section highlighting pain points
- Complete features showcase (7 core features)
- How it works (3-step process)
- Business benefits with metrics
- Transparent pricing (Free + Paid tiers)
- Final conversion CTA

### About Page
- Company mission & vision
- Problem we solve
- Industries we serve (6+ sectors)
- Why choose us (6 key differentiators)
- Trust-building content

### Blog Page
- 12 SEO-optimized blog post previews
- Categories and read time
- Newsletter subscription
- Conversion CTA

### Contact Page
- Contact form (Name, Email, Company, Message)
- Business hours and contact info
- FAQ section
- Trust signals

### Admin Panel 🔐
- **Login:** http://localhost:5173/admin/login
- **Dashboard:** http://localhost:5173/admin/dashboard
- **Credentials:** Username: `admin` / Password: `admin123`
- **Features:**
  - View all contact submissions
  - Filter by status (new, contacted, qualified, converted, closed)
  - Update contact status
  - Delete contacts
  - Real-time statistics
  - Protected routes with authentication

See [ADMIN_GUIDE.md](ADMIN_GUIDE.md) for complete admin documentation.

## 🎨 Design System

### Colors
- Primary: Indigo/Blue (tailwind primary-* scale)
- Success: Green
- Error: Red
- Neutral: Gray scale

### Typography
- Headings: Bold, large, clear hierarchy
- Body: 16-18px, readable line height
- Mobile-optimized sizing

## 🔍 SEO Features

✅ Single H1 per page  
✅ Proper H2/H3 hierarchy  
✅ Semantic HTML (header, main, section, footer)  
✅ Meta titles and descriptions  
✅ Keyword-rich content  
✅ Descriptive CTAs  
✅ Mobile performance optimized  

## 💰 Pricing

- **Free Forever**: Up to 2 members
- **Professional**: ₹200/member/month ($5 USD)

## 🎯 Target Keywords

- Salesman tracking app
- GPS attendance tracking
- Field sales management
- Live location tracking
- Customer visit tracking
- Sales team monitoring

## 📱 Mobile-First

All pages are designed mobile-first and fully responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

Deploy the `dist` folder to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

## 📝 License

© 2026 Infinity Salesman Tracking. All rights reserved.

## 🤝 Support

Email: support@infinitysalesman.com  
Website: [Contact Page](./contact)

---

Built with ❤️ for field sales teams worldwide
