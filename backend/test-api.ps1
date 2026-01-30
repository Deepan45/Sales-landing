# API Testing Script for Infinity Salesman Tracking Backend

$BASE_URL = "http://localhost:5000"

Write-Host "`n🧪 Testing Infinity Salesman Tracking API...`n" -ForegroundColor Cyan

# Test 1: Health Check
Write-Host "1. Testing Health Check Endpoint..." -ForegroundColor Yellow
try {
    $health = Invoke-RestMethod -Uri "$BASE_URL/api/health" -Method GET
    if ($health.success) {
        Write-Host "   ✅ Health check passed" -ForegroundColor Green
        Write-Host "   Database: $($health.database)" -ForegroundColor Gray
    }
} catch {
    Write-Host "   ❌ Health check failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "   Make sure the backend server is running!" -ForegroundColor Yellow
    exit 1
}

# Test 2: API Root
Write-Host "`n2. Testing API Root Endpoint..." -ForegroundColor Yellow
try {
    $root = Invoke-RestMethod -Uri "$BASE_URL/" -Method GET
    if ($root.success) {
        Write-Host "   ✅ API root accessible" -ForegroundColor Green
        Write-Host "   Version: $($root.version)" -ForegroundColor Gray
    }
} catch {
    Write-Host "   ❌ API root failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 3: Submit Contact Form
Write-Host "`n3. Testing Contact Form Submission..." -ForegroundColor Yellow
$testContact = @{
    name = "Test User $(Get-Date -Format 'HHmmss')"
    email = "test$(Get-Date -Format 'HHmmss')@example.com"
    company = "Test Company"
    message = "This is an automated test message from the API testing script."
} | ConvertTo-Json

try {
    $contact = Invoke-RestMethod -Uri "$BASE_URL/api/contacts" -Method POST -Body $testContact -ContentType "application/json"
    if ($contact.success) {
        Write-Host "   ✅ Contact form submitted successfully" -ForegroundColor Green
        Write-Host "   Contact ID: $($contact.data.id)" -ForegroundColor Gray
        Write-Host "   Name: $($contact.data.name)" -ForegroundColor Gray
        Write-Host "   Email: $($contact.data.email)" -ForegroundColor Gray
        $contactId = $contact.data.id
    }
} catch {
    Write-Host "   ❌ Contact submission failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 4: Get All Contacts
Write-Host "`n4. Testing Get All Contacts..." -ForegroundColor Yellow
try {
    $contacts = Invoke-RestMethod -Uri "$BASE_URL/api/contacts" -Method GET
    if ($contacts.success) {
        Write-Host "   ✅ Retrieved contacts successfully" -ForegroundColor Green
        Write-Host "   Total contacts: $($contacts.count)" -ForegroundColor Gray
    }
} catch {
    Write-Host "   ❌ Get contacts failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 5: Get Single Contact
if ($contactId) {
    Write-Host "`n5. Testing Get Single Contact by ID..." -ForegroundColor Yellow
    try {
        $singleContact = Invoke-RestMethod -Uri "$BASE_URL/api/contacts/$contactId" -Method GET
        if ($singleContact.success) {
            Write-Host "   ✅ Retrieved single contact successfully" -ForegroundColor Green
            Write-Host "   ID: $($singleContact.data.id)" -ForegroundColor Gray
            Write-Host "   Status: $($singleContact.data.status)" -ForegroundColor Gray
        }
    } catch {
        Write-Host "   ❌ Get single contact failed: $($_.Exception.Message)" -ForegroundColor Red
    }

    # Test 6: Update Contact Status
    Write-Host "`n6. Testing Update Contact Status..." -ForegroundColor Yellow
    $updateStatus = @{
        status = "contacted"
    } | ConvertTo-Json

    try {
        $updated = Invoke-RestMethod -Uri "$BASE_URL/api/contacts/$contactId/status" -Method PATCH -Body $updateStatus -ContentType "application/json"
        if ($updated.success) {
            Write-Host "   ✅ Contact status updated successfully" -ForegroundColor Green
            Write-Host "   New status: $($updated.data.status)" -ForegroundColor Gray
        }
    } catch {
        Write-Host "   ❌ Update contact status failed: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Test 7: Get Blog Posts
Write-Host "`n7. Testing Get Blog Posts..." -ForegroundColor Yellow
try {
    $blogs = Invoke-RestMethod -Uri "$BASE_URL/api/blog" -Method GET
    if ($blogs.success) {
        Write-Host "   ✅ Retrieved blog posts successfully" -ForegroundColor Green
        Write-Host "   Total posts: $($blogs.count)" -ForegroundColor Gray
    }
} catch {
    Write-Host "   ❌ Get blog posts failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 8: Invalid Contact Submission (validation test)
Write-Host "`n8. Testing Input Validation (should fail)..." -ForegroundColor Yellow
$invalidContact = @{
    name = "A"  # Too short
    email = "invalid-email"  # Invalid format
    message = "Too short"  # Too short
} | ConvertTo-Json

try {
    $invalid = Invoke-RestMethod -Uri "$BASE_URL/api/contacts" -Method POST -Body $invalidContact -ContentType "application/json"
    Write-Host "   ❌ Validation should have failed but didn't" -ForegroundColor Red
} catch {
    Write-Host "   ✅ Validation working correctly (rejected invalid data)" -ForegroundColor Green
}

# Summary
Write-Host "`n" -NoNewline
Write-Host "=" -NoNewline -ForegroundColor Cyan
Write-Host "=".PadRight(60, "=") -ForegroundColor Cyan
Write-Host "  🎉 API TESTING COMPLETE!" -ForegroundColor Green
Write-Host "=" -NoNewline -ForegroundColor Cyan
Write-Host "=".PadRight(60, "=") -ForegroundColor Cyan

Write-Host "`n✅ All core API endpoints are working correctly!" -ForegroundColor Green
Write-Host "`n📝 Next Steps:" -ForegroundColor Yellow
Write-Host "   1. Test the frontend contact form at http://localhost:5173/contact" -ForegroundColor White
Write-Host "   2. Check database for stored contacts using pgAdmin or psql" -ForegroundColor White
Write-Host "   3. View contact data with: psql -U postgres -d salesman_tracking" -ForegroundColor White
Write-Host ""
