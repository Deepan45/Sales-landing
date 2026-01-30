# 🔐 Admin Panel Documentation

## Overview

The admin panel allows you to manage contact form submissions with a protected dashboard.

## Access

**Login URL:** http://localhost:5173/admin/login

**Hardcoded Credentials (Development Only):**
- Username: `admin`
- Password: `admin123`

⚠️ **Security Warning:** These are hardcoded credentials for development only. In production, implement proper authentication with a database, password hashing, and JWT tokens.

## Features

### 1. Admin Login Page
- Clean, modern login interface
- Hardcoded username/password authentication
- Session persistence (localStorage)
- Automatic redirect if already logged in
- Demo credentials displayed on login page

### 2. Admin Dashboard
- **Statistics Overview:**
  - Total Contacts
  - New Contacts
  - Contacted
  - Qualified Leads

- **Contact Management:**
  - View all contact submissions
  - Filter by status (all, new, contacted, qualified, converted, closed)
  - Update contact status with dropdown
  - Delete contacts
  - Real-time refresh
  - Formatted date/time display

- **Navigation:**
  - Link to main website
  - Logout button
  - Protected route (requires login)

## File Structure

```
src/
├── context/
│   └── AuthContext.jsx          # Authentication context & logic
├── components/
│   └── ProtectedRoute.jsx       # Route protection HOC
├── pages/
│   └── admin/
│       ├── AdminLogin.jsx       # Login page
│       └── AdminDashboard.jsx   # Dashboard with contacts
└── App.jsx                      # Updated with admin routes
```

## Usage

### Accessing the Admin Panel

1. **Navigate to login:**
   ```
   http://localhost:5173/admin/login
   ```

2. **Enter credentials:**
   - Username: `admin`
   - Password: `admin123`

3. **Dashboard opens automatically:**
   ```
   http://localhost:5173/admin/dashboard
   ```

### Managing Contacts

**View Contacts:**
- All contacts are displayed in a table format
- Shows: Name, Email, Company, Message, Status, Date

**Filter Contacts:**
- Click filter buttons: All, New, Contacted, Qualified, Converted, Closed
- Dashboard updates automatically

**Update Status:**
- Click the status dropdown for any contact
- Select new status
- Saves automatically to database

**Delete Contact:**
- Click "Delete" button
- Confirm in popup
- Contact removed from database

**Refresh Data:**
- Click "Refresh" button to reload contacts

### Logout

Click the "Logout" button in the header to:
- Clear session
- Remove localStorage data
- Redirect to login page

## Authentication Flow

```
User accesses /admin/dashboard
    ↓
ProtectedRoute checks authentication
    ↓
    ├─ Not authenticated → Redirect to /admin/login
    │
    └─ Authenticated → Show AdminDashboard
```

## Session Management

**Login:**
- Validates credentials against hardcoded values
- Stores user data in localStorage
- Creates session

**Session Persistence:**
- User stays logged in even after page refresh
- Session data stored in localStorage

**Logout:**
- Clears localStorage
- Resets auth context
- Redirects to login

## API Integration

The dashboard connects to your backend API:

**Endpoints Used:**
- `GET /api/contacts` - Fetch all contacts
- `GET /api/contacts?status=new` - Filter by status
- `PATCH /api/contacts/:id/status` - Update status
- `DELETE /api/contacts/:id` - Delete contact

**Configuration:**
Uses `VITE_API_URL` from `.env` or defaults to `http://localhost:5000/api`

## Customization

### Change Credentials

Edit `src/context/AuthContext.jsx`:

```javascript
const ADMIN_CREDENTIALS = {
  username: 'your_username',
  password: 'your_password'
};
```

### Add More Admin Users

Modify the `login` function in `AuthContext.jsx`:

```javascript
const ADMIN_USERS = [
  { username: 'admin', password: 'admin123' },
  { username: 'manager', password: 'manager123' }
];

const login = (username, password) => {
  const user = ADMIN_USERS.find(
    u => u.username === username && u.password === password
  );
  if (user) {
    // ... rest of login logic
  }
};
```

### Modify Dashboard

Edit `src/pages/admin/AdminDashboard.jsx`:
- Add more statistics
- Customize table columns
- Add export functionality
- Implement pagination
- Add search functionality

## Security Considerations

### Current Implementation (Development)
- ✅ Protected routes
- ✅ Session management
- ✅ Logout functionality
- ❌ Passwords stored in plain text (code)
- ❌ No password hashing
- ❌ No token-based auth
- ❌ No refresh tokens
- ❌ LocalStorage (vulnerable to XSS)

### Production Recommendations

1. **Backend Authentication:**
   ```javascript
   // Use proper backend auth
   POST /api/auth/login
   {
     username: "admin",
     password: "hashed_password"
   }
   // Returns JWT token
   ```

2. **Password Hashing:**
   - Use bcrypt for password hashing
   - Store hashed passwords in database
   - Never send plain passwords

3. **JWT Tokens:**
   - Use JWT for authentication
   - Store in httpOnly cookies
   - Implement refresh tokens
   - Set expiration times

4. **HTTPS Only:**
   - Use HTTPS in production
   - Secure cookie flags
   - HSTS headers

5. **Role-Based Access:**
   - Implement user roles
   - Permission-based features
   - Audit logging

6. **Rate Limiting:**
   - Limit login attempts
   - Block brute force attacks
   - CAPTCHA after failed attempts

## Testing

### Test Login
```
URL: http://localhost:5173/admin/login
Username: admin
Password: admin123
Expected: Redirect to dashboard
```

### Test Protected Route
```
URL: http://localhost:5173/admin/dashboard (without login)
Expected: Redirect to login page
```

### Test Dashboard Features
1. Login successfully
2. View contacts list
3. Filter by status
4. Update a contact status
5. Delete a contact
6. Refresh data
7. Logout

## Troubleshooting

### Can't Login
- Check credentials: `admin` / `admin123`
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`

### Dashboard Not Loading Contacts
- Ensure backend is running on port 5000
- Check API_URL in `.env`
- Verify CORS is enabled on backend
- Check browser network tab for errors

### Session Lost After Refresh
- Check if localStorage is enabled
- Look for browser extensions blocking storage
- Check browser console for errors

### Logout Not Working
- Clear browser cache
- Check localStorage manually
- Restart development server

## URLs Reference

| Page | URL |
|------|-----|
| Login | http://localhost:5173/admin/login |
| Dashboard | http://localhost:5173/admin/dashboard |
| Home | http://localhost:5173/ |

## Demo Workflow

1. **Start the application:**
   ```bash
   npm run dev
   ```

2. **Submit a test contact:**
   - Go to http://localhost:5173/contact
   - Fill and submit form

3. **Login to admin:**
   - Go to http://localhost:5173/admin/login
   - Enter: admin / admin123

4. **View the contact:**
   - See new contact in dashboard
   - Update status
   - Filter contacts

5. **Test persistence:**
   - Refresh page
   - Still logged in
   - Contacts still there

6. **Logout:**
   - Click logout button
   - Redirected to login

## Future Enhancements

Recommended additions:
- [ ] Backend JWT authentication
- [ ] User management system
- [ ] Password reset functionality
- [ ] Two-factor authentication
- [ ] Activity logs
- [ ] Export contacts to CSV
- [ ] Search functionality
- [ ] Pagination
- [ ] Bulk actions
- [ ] Email templates
- [ ] Analytics dashboard
- [ ] Custom reports

---

**Admin Panel Ready! 🎉**

Default credentials: `admin` / `admin123`
