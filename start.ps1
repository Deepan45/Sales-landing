# Start both frontend and backend servers concurrently

Write-Host "`n🚀 Starting Infinity Salesman Tracking Application...`n" -ForegroundColor Cyan

# Check if backend/.env exists
if (-not (Test-Path "backend\.env")) {
    Write-Host "❌ Backend .env file not found!" -ForegroundColor Red
    Write-Host "Please run setup.ps1 first or create backend/.env manually" -ForegroundColor Yellow
    exit 1
}

# Check if .env exists
if (-not (Test-Path ".env")) {
    Write-Host "❌ Frontend .env file not found!" -ForegroundColor Red
    Write-Host "Please run setup.ps1 first or create .env manually" -ForegroundColor Yellow
    exit 1
}

Write-Host "Starting Backend Server..." -ForegroundColor Yellow
$backend = Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm run dev" -PassThru

Start-Sleep -Seconds 3

Write-Host "Starting Frontend Server..." -ForegroundColor Yellow
$frontend = Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -PassThru

Write-Host "`n✅ Application Started!" -ForegroundColor Green
Write-Host "`n📍 Access Points:" -ForegroundColor Cyan
Write-Host "   Frontend:     http://localhost:5173" -ForegroundColor White
Write-Host "   Backend API:  http://localhost:5000" -ForegroundColor White
Write-Host "   Health Check: http://localhost:5000/api/health" -ForegroundColor White

Write-Host "`n⚠️  Press Ctrl+C in each terminal window to stop the servers" -ForegroundColor Yellow
Write-Host ""
