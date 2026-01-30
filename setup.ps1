# Quick Setup Guide for Infinity Salesman Tracking Backend

Write-Host "`n🚀 Setting up Infinity Salesman Tracking Backend...`n" -ForegroundColor Cyan

# Check if PostgreSQL is installed
Write-Host "Checking PostgreSQL installation..." -ForegroundColor Yellow
$pgVersion = & psql --version 2>$null
if ($pgVersion) {
    Write-Host "✅ PostgreSQL found: $pgVersion" -ForegroundColor Green
} else {
    Write-Host "❌ PostgreSQL not found. Please install PostgreSQL first." -ForegroundColor Red
    Write-Host "Download from: https://www.postgresql.org/download/windows/" -ForegroundColor Yellow
    exit 1
}

# Check if Node.js is installed
Write-Host "`nChecking Node.js installation..." -ForegroundColor Yellow
$nodeVersion = & node --version 2>$null
if ($nodeVersion) {
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Install backend dependencies
Write-Host "`n📦 Installing backend dependencies..." -ForegroundColor Yellow
Set-Location backend
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Backend dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install backend dependencies" -ForegroundColor Red
    exit 1
}

# Create .env file if it doesn't exist
if (-not (Test-Path ".env")) {
    Write-Host "`n📝 Creating .env file..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env"
    Write-Host "✅ .env file created from .env.example" -ForegroundColor Green
    Write-Host "⚠️  Please update backend/.env with your PostgreSQL credentials" -ForegroundColor Yellow
}

Set-Location ..

# Install frontend dependencies
Write-Host "`n📦 Installing frontend dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Frontend dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install frontend dependencies" -ForegroundColor Red
    exit 1
}

# Create frontend .env file if it doesn't exist
if (-not (Test-Path ".env")) {
    Write-Host "`n📝 Creating frontend .env file..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env"
    Write-Host "✅ Frontend .env file created" -ForegroundColor Green
}

Write-Host "`n" -NoNewline
Write-Host "=" -NoNewline -ForegroundColor Cyan
Write-Host "=".PadRight(70, "=") -ForegroundColor Cyan
Write-Host "  ✅ SETUP COMPLETE!" -ForegroundColor Green
Write-Host "=" -NoNewline -ForegroundColor Cyan
Write-Host "=".PadRight(70, "=") -ForegroundColor Cyan

Write-Host "`n📋 Next Steps:" -ForegroundColor Yellow
Write-Host "`n1. Create PostgreSQL Database:" -ForegroundColor White
Write-Host "   psql -U postgres" -ForegroundColor Cyan
Write-Host "   CREATE DATABASE salesman_tracking;" -ForegroundColor Cyan
Write-Host "   \q" -ForegroundColor Cyan

Write-Host "`n2. Run Database Schema:" -ForegroundColor White
Write-Host "   psql -U postgres -d salesman_tracking -f backend/database/schema.sql" -ForegroundColor Cyan

Write-Host "`n3. Update Environment Variables:" -ForegroundColor White
Write-Host "   Edit backend/.env with your PostgreSQL credentials" -ForegroundColor Cyan

Write-Host "`n4. Start the Backend Server:" -ForegroundColor White
Write-Host "   cd backend" -ForegroundColor Cyan
Write-Host "   npm run dev" -ForegroundColor Cyan

Write-Host "`n5. Start the Frontend (in a new terminal):" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Cyan

Write-Host "`n🌐 URLs:" -ForegroundColor Yellow
Write-Host "   Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host "   Backend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "   Health:   http://localhost:5000/api/health" -ForegroundColor Cyan

Write-Host "`n📚 Documentation:" -ForegroundColor Yellow
Write-Host "   See README.md and backend/README.md for more details" -ForegroundColor Cyan
Write-Host ""
