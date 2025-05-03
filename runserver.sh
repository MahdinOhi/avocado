#!/bin/bash

# Function to check if npm install is needed
check_npm_install() {
  if [ ! -d "frontend/node_modules" ]; then
    echo "Running npm install..."
    npm install
  else
    echo "npm dependencies already installed."
  fi
}

# Wait for 5 seconds before starting both servers
sleep 5

# Start Django server in the background
echo "Starting Django server..."
cd backend
if [ -d "env" ]; then
  # Activate virtual environment for Linux/macOS
  source env/bin/activate
else
  echo "Virtual environment not found! Please make sure it's set up."
  exit 1
fi
python manage.py runserver &  # Run Django server in the background

# Start React frontend in the background
echo "Starting React frontend..."
cd ../frontend
check_npm_install  # Check if npm install is needed and install if necessary
npm run dev &  # Run React frontend in the background

# Wait a few seconds for both servers to start
sleep 5

# Open the browser automatically (this works on Linux/macOS with xdg-open or open)
if which xdg-open > /dev/null; then
  xdg-open "http://localhost:5173"  # Linux
elif which open > /dev/null; then
  open "http://localhost:5173"  # macOS
else
  echo "Unable to open browser automatically. Please visit http://localhost:5173"
fi

# Bring the processes to the foreground
fg %1  # Bring Django process to the foreground
fg %2  # Bring React process to the foreground
