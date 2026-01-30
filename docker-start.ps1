# Quick Docker Start Script

Write-Host "`n🐳 Starting Infinity Salesman Tracking with Docker...`n" -ForegroundColor Cyan

# Check if Docker is running
try {
    docker version | Out-Null
    Write-Host "✅ Docker is running" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker is not running!" -ForegroundColor Red
    Write-Host "Please start Docker Desktop and try again." -ForegroundColor Yellow
    exit 1
}

# Check if docker-compose is available
try {
    docker-compose version | Out-Null
    Write-Host "✅ Docker Compose is available" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker Compose not found!" -ForegroundColor Red
    exit 1
}

Write-Host "`n📦 Building and starting containers...`n" -ForegroundColor Yellow

# Start containers
docker-compose up -d --build

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ All containers started successfully!`n" -ForegroundColor Green
    
    # Wait a few seconds for services to be ready
    Write-Host "⏳ Waiting for services to be ready..." -ForegroundColor Yellow
    Start-Sleep -Seconds 10
    
    # Check container status
    Write-Host "`n📊 Container Status:" -ForegroundColor Cyan
    docker-compose ps
    
    Write-Host "`n🌐 Access Points:" -ForegroundColor Cyan
    Write-Host "   Frontend:     http://localhost:5173" -ForegroundColor White
    Write-Host "   Backend API:  http://localhost:5000" -ForegroundColor White
    Write-Host "   Health Check: http://localhost:5000/api/health" -ForegroundColor White
    Write-Host "   Database:     localhost:5432" -ForegroundColor White
    
    Write-Host "`n📝 Useful Commands:" -ForegroundColor Yellow
    Write-Host "   View logs:       docker-compose logs -f" -ForegroundColor Cyan
    Write-Host "   Stop services:   docker-compose down" -ForegroundColor Cyan
    Write-Host "   Restart:         docker-compose restart" -ForegroundColor Cyan
    Write-Host "   Access DB:       docker exec -it salesman-db psql -U postgres -d salesman_tracking" -ForegroundColor Cyan
    
    Write-Host "`n✨ Test the application:" -ForegroundColor Yellow
    Write-Host "   1. Open http://localhost:5173 in your browser" -ForegroundColor White
    Write-Host "   2. Navigate to Contact page" -ForegroundColor White
    Write-Host "   3. Submit a test form" -ForegroundColor White
    
    Write-Host "`n🎉 Docker setup complete!`n" -ForegroundColor Green
} else {
    Write-Host "`n❌ Failed to start containers" -ForegroundColor Red
    Write-Host "Check logs with: docker-compose logs" -ForegroundColor Yellow
    exit 1
}
