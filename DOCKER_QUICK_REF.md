# 🚀 Quick Reference - Docker Commands

## Essential Commands

### Start & Stop
```powershell
# Start everything (automatic migration)
docker-compose up -d

# Or use script
.\docker-start.ps1

# Stop everything (keep data)
docker-compose down

# Stop and delete data
docker-compose down -v
```

### View Status
```powershell
# List running containers
docker ps

# View logs (all services)
docker-compose logs -f

# View specific service logs
docker-compose logs -f backend
docker-compose logs -f postgres
```

### Database Access
```powershell
# Connect to PostgreSQL
docker exec -it salesman-db psql -U postgres -d salesman_tracking

# View tables
\dt

# Query contacts
SELECT * FROM contacts ORDER BY created_at DESC;

# Exit
\q
```

### Useful Operations
```powershell
# Restart a service
docker-compose restart backend

# Rebuild containers
docker-compose up -d --build

# View container stats
docker stats

# Execute command in container
docker exec -it salesman-backend sh
```

---

## URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000 |
| Health Check | http://localhost:5000/api/health |
| Database | localhost:5432 |

---

## Default Credentials

**PostgreSQL:**
- Host: localhost (or `postgres` from containers)
- Port: 5432
- Database: salesman_tracking
- User: postgres
- Password: postgres123

⚠️ **Change for production!**

---

## Auto-Migration

Migration runs automatically when backend starts:
- ✅ Creates database tables if they don't exist
- ✅ Skips if tables already exist
- ✅ Logs status to console
- ✅ No manual SQL execution needed

**Force re-migration:**
```powershell
docker-compose down -v  # Delete database
docker-compose up -d    # Recreate and migrate
```

---

## Troubleshooting

### Container won't start
```powershell
docker-compose logs backend
docker-compose logs postgres
```

### Reset everything
```powershell
docker-compose down -v
docker-compose up -d --build
```

### Port already in use
```powershell
# Check what's using port 5000
Get-NetTCPConnection -LocalPort 5000

# Stop the process
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process
```

### Database connection error
```powershell
# Check postgres is healthy
docker inspect salesman-db

# Restart postgres
docker-compose restart postgres
```

---

## Development Mode

```powershell
# Start with hot reload
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop
docker-compose -f docker-compose.dev.yml down
```

---

## File Structure

```
docker-compose.yml        # Production setup
docker-compose.dev.yml    # Development setup
docker-start.ps1          # Quick start
docker-stop.ps1           # Quick stop
DOCKER.md                 # Full documentation
backend/config/migrate.js # Auto-migration logic
```

---

## Test API

```powershell
# Health check
curl http://localhost:5000/api/health

# Submit contact form
$body = @{
    name = "Test User"
    email = "test@example.com"
    company = "Test Co"
    message = "Test message"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/contacts" -Method POST -Body $body -ContentType "application/json"
```

---

## Docker Desktop

Use Docker Desktop for:
- Visual container management
- Easy log viewing
- Resource monitoring
- Quick restart/stop

---

## Help

- Full guide: [DOCKER.md](DOCKER.md)
- Setup guide: [DOCKER_SETUP_SUMMARY.md](DOCKER_SETUP_SUMMARY.md)
- Getting started: [GETTING_STARTED.md](GETTING_STARTED.md)
