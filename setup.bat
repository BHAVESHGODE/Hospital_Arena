@echo off
echo 🏥 Setting up CureOS Hospital Management System...

echo.
echo [1/3] Installing Client Dependencies...
cd client
call npm install
cd ..

echo.
echo [2/3] Installing Server Dependencies...
cd server
call npm install
cd ..

echo.
echo [3/3] Starting Application...
echo Access the app at http://localhost:3000
npm run dev
