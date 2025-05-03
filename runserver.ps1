# Wait for 5 seconds before starting servers
Start-Sleep -Seconds 5

# Start Django server
Start-Process powershell -ArgumentList @"
cd backend
. ..\env\Scripts\Activate.ps1
python manage.py runserver
"@

# Start React frontend (using Vite)
Start-Process powershell -ArgumentList @"
cd frontend
npm run dev
"@

# Open browser immediately after starting both
Start-Process "http://localhost:5173"
