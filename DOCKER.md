# 🐳 Docker Setup Guide

Complete guide for running the Infinity Salesman Tracking application using Docker.

## 📋 Prerequisites

- **Docker Desktop** (Windows/Mac) - [Download](https://www.docker.com/products/docker-desktop/)
- **Docker Compose** (included with Docker Desktop)
- **Git** (optional, for version control)

## 🚀 Quick Start with Docker

### Option 1: Production Build

Run the complete application stack in production mode:

```powershell
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

**Access the application:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Database: localhost:5432

### Option 2: Development Mode

Run with hot-reload for development:

```powershell
# Build and start in development mode
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop services
docker-compose -f docker-compose.dev.yml down
```

---

## 📦 What's Included

The Docker setup includes:

1. **PostgreSQL Database** (postgres:15-alpine)
   - Automatically creates database
   - Runs schema migrations on first startup
   - Persistent data storage

2. **Backend API** (Node.js + Express)
   - Auto-connects to database
   - Runs migrations automatically
   - Health checks enabled

3. **Frontend** (React + Vite)
   - Production build or dev server
   - Connects to backend API
   - Optimized serving

---

## 🔧 Docker Commands

### Basic Operations

```powershell
# Start all services
docker-compose up -d

# Start specific service
docker-compose up -d postgres
docker-compose up -d backend

# View running containers
docker ps

# View logs
docker-compose logs
docker-compose logs backend
docker-compose logs postgres

# Follow logs in real-time
docker-compose logs -f

# Stop all services
docker-compose down

# Stop and remove volumes (⚠️ deletes database data)
docker-compose down -v

# Restart a service
docker-compose restart backend

# Rebuild containers
docker-compose up -d --build
```

### Development Commands

```powershell
# Start development environment
docker-compose -f docker-compose.dev.yml up -d

# View development logs
docker-compose -f docker-compose.dev.yml logs -f

# Rebuild dev containers
docker-compose -f docker-compose.dev.yml up -d --build

# Stop development environment
docker-compose -f docker-compose.dev.yml down
```

### Container Management

```powershell
# Execute commands in running container
docker exec -it salesman-backend sh
docker exec -it salesman-db psql -U postgres -d salesman_tracking

# View container details
docker inspect salesman-backend

# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune
```

---

## 🗄️ Database Management

### Access PostgreSQL in Docker

```powershell
# Connect to PostgreSQL
docker exec -it salesman-db psql -U postgres -d salesman_tracking

# Or
docker-compose exec postgres psql -U postgres -d salesman_tracking
```

### View Database Tables

```sql
-- List all tables
\dt

-- View contacts
SELECT * FROM contacts ORDER BY created_at DESC;

-- Count contacts
SELECT COUNT(*) FROM contacts;

-- View table structure
\d contacts

-- Exit
\q
```

### Backup and Restore

**Backup Database:**
```powershell
docker exec -t salesman-db pg_dump -U postgres salesman_tracking > backup.sql
```

**Restore Database:**
```powershell
cat backup.sql | docker exec -i salesman-db psql -U postgres -d salesman_tracking
```

---

## 🔄 Auto-Migration System

The backend automatically runs database migrations on startup:

1. **On First Run:**
   - Checks if tables exist
   - If not found, creates all tables from schema.sql
   - Logs migration status

2. **On Subsequent Runs:**
   - Checks if tables exist
   - Skips migration if tables already exist
   - Starts server immediately

**Migration Logs:**
```
🔍 Checking database status...
📋 Tables not found. Creating database schema...
🔄 Running database migrations...
✅ Database migrations completed successfully
🚀 Server is running on port 5000
```

**Force Re-run Migrations:**
```powershell
# Stop and remove database volume
docker-compose down -v

# Start again (will recreate database)
docker-compose up -d
```

---

## 📁 Docker Files Overview

```
Sales-landing/
├── docker-compose.yml          # Production setup
├── docker-compose.dev.yml      # Development setup
├── Dockerfile                  # Frontend production image
├── Dockerfile.dev              # Frontend dev image
├── .dockerignore               # Frontend ignore rules
│
└── backend/
    ├── Dockerfile              # Backend production image
    ├── Dockerfile.dev          # Backend dev image
    ├── .dockerignore           # Backend ignore rules
    └── config/
        └── migrate.js          # Auto-migration script
```

---

## 🌐 Environment Variables

### Production (docker-compose.yml)

Database credentials are set in `docker-compose.yml`:
```yaml
environment:
  POSTGRES_USER: postgres
  POSTGRES_PASSWORD: postgres123
  POSTGRES_DB: salesman_tracking
```

⚠️ **Change these for production deployment!**

### Custom Environment

Create `docker-compose.override.yml` for custom settings:
```yaml
version: '3.8'

services:
  postgres:
    environment:
      POSTGRES_PASSWORD: your_secure_password

  backend:
    environment:
      DB_PASSWORD: your_secure_password
      CORS_ORIGIN: https://yourdomain.com
```

---

## 🔍 Health Checks

The Docker setup includes health checks:

**Check Database Health:**
```powershell
docker inspect --format='{{json .State.Health}}' salesman-db
```

**Check Backend Health:**
```powershell
curl http://localhost:5000/api/health
```

Or visit: http://localhost:5000/api/health

---

## 🐛 Troubleshooting

### Container Won't Start

**Check logs:**
```powershell
docker-compose logs backend
docker-compose logs postgres
```

**Common issues:**
- Port already in use
- Missing environment variables
- Database connection failed

### Database Connection Error

**Symptoms:**
```
❌ Unexpected error on PostgreSQL client
ECONNREFUSED
```

**Solutions:**
1. Check if postgres container is running:
   ```powershell
   docker ps | Select-String postgres
   ```

2. Wait for database to be ready (check health):
   ```powershell
   docker-compose ps
   ```

3. Restart services:
   ```powershell
   docker-compose restart
   ```

### Port Already in Use

**Error:** "port is already allocated"

**Solutions:**
```powershell
# Option 1: Stop conflicting service
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process

# Option 2: Change port in docker-compose.yml
ports:
  - "5001:5000"  # Use different external port
```

### Container Keeps Restarting

**Check logs for errors:**
```powershell
docker-compose logs --tail=50 backend
```

**Common causes:**
- Database not ready (should auto-resolve with health checks)
- Migration errors
- Missing dependencies

### Reset Everything

If things go wrong, start fresh:
```powershell
# Stop all containers
docker-compose down -v

# Remove all project images
docker images | Select-String salesman | ForEach-Object {
    $imageId = $_.ToString().Split()[2]
    docker rmi $imageId
}

# Rebuild and start
docker-compose up -d --build
```

---

## 🚀 Production Deployment

### Build Production Images

```powershell
# Build all images
docker-compose build

# Build specific service
docker-compose build backend
```

### Push to Registry (Docker Hub)

```powershell
# Tag images
docker tag sales-landing_backend:latest yourusername/salesman-backend:v1.0
docker tag sales-landing_frontend:latest yourusername/salesman-frontend:v1.0

# Push to registry
docker push yourusername/salesman-backend:v1.0
docker push yourusername/salesman-frontend:v1.0
```

### Deploy to Cloud

**Docker Compose on VM:**
1. Copy `docker-compose.yml` to server
2. Update environment variables
3. Run: `docker-compose up -d`

**Kubernetes:**
- Convert docker-compose to k8s manifests
- Or use Kompose: `kompose convert`

---

## 📊 Monitoring

### View Resource Usage

```powershell
# All containers
docker stats

# Specific container
docker stats salesman-backend
```

### View Container Processes

```powershell
docker-compose top
```

---

## 🔐 Security Best Practices

For production deployment:

- [ ] Change default database password
- [ ] Use Docker secrets for sensitive data
- [ ] Run containers as non-root user
- [ ] Enable read-only root filesystem
- [ ] Limit container resources (CPU/memory)
- [ ] Use private Docker registry
- [ ] Regular security updates
- [ ] Enable TLS/HTTPS
- [ ] Implement network policies
- [ ] Use environment-specific configs

---

## 📝 Development Workflow

1. **Start development environment:**
   ```powershell
   docker-compose -f docker-compose.dev.yml up -d
   ```

2. **Make code changes** (hot reload enabled)

3. **View logs:**
   ```powershell
   docker-compose -f docker-compose.dev.yml logs -f backend
   ```

4. **Test changes:**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000/api/health

5. **Stop when done:**
   ```powershell
   docker-compose -f docker-compose.dev.yml down
   ```

---

## 🎯 Comparison: Docker vs Local

| Feature | Local Development | Docker |
|---------|------------------|---------|
| **Setup Time** | 10-15 minutes | 2-3 minutes |
| **Dependencies** | Manual install | Automated |
| **Consistency** | Varies by system | Identical everywhere |
| **Database** | Manual setup | Auto-created |
| **Migration** | Manual SQL run | Automatic |
| **Cleanup** | Manual | `docker-compose down -v` |
| **Isolation** | System-wide | Containerized |

---

## ✅ Verification Checklist

After running `docker-compose up -d`:

- [ ] All 3 containers running: `docker ps`
- [ ] Database healthy: `docker inspect salesman-db`
- [ ] Backend responds: http://localhost:5000/api/health
- [ ] Frontend loads: http://localhost:5173
- [ ] Contact form works: Submit test form
- [ ] Data persists: Check database, restart containers
- [ ] Logs clean: No error messages

---

## 🆘 Getting Help

If you encounter issues:

1. Check logs: `docker-compose logs`
2. Verify containers: `docker ps -a`
3. Check health: `docker inspect [container]`
4. Review this guide's troubleshooting section
5. Check Docker Desktop dashboard

---

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- [PostgreSQL Docker Image](https://hub.docker.com/_/postgres)
- [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)

---

**Docker Setup Complete! 🎉**

Your application is now running in containers with:
- ✅ Automatic database setup
- ✅ Auto-running migrations
- ✅ Hot reload in dev mode
- ✅ Persistent data storage
- ✅ Health checks
- ✅ Easy deployment
