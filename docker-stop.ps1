# Stop Docker Containers

Write-Host "`n🛑 Stopping Infinity Salesman Tracking containers...`n" -ForegroundColor Cyan

$choice = Read-Host "Do you want to remove volumes (database data)? (y/N)"

if ($choice -eq 'y' -or $choice -eq 'Y') {
    Write-Host "`n⚠️  Stopping and removing all containers and volumes..." -ForegroundColor Yellow
    docker-compose down -v
    Write-Host "✅ Containers and volumes removed" -ForegroundColor Green
} else {
    Write-Host "`nStopping containers (keeping data)..." -ForegroundColor Yellow
    docker-compose down
    Write-Host "✅ Containers stopped (data preserved)" -ForegroundColor Green
}

Write-Host "`n📊 Remaining containers:" -ForegroundColor Cyan
docker ps -a | Select-String "salesman"

Write-Host "`nTo start again: .\docker-start.ps1`n" -ForegroundColor Yellow
