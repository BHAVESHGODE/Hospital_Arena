@echo off
echo 🔄 Restarting CureOS Hospital Management System...

echo.
echo [1/3] Stopping existing containers...
docker-compose down

echo.
echo [2/3] Rebuilding and starting containers...
docker-compose up -d --build

echo.
echo [3/3] Checking status...
timeout /t 5
docker ps

echo.
echo ✅ System Restarted!
echo ---------------------------------------------------
echo 🌐 Frontend: http://localhost:3000
echo 🔌 Backend:  http://localhost:5000
echo 🗄️ Database: Running in Docker
echo ---------------------------------------------------
pause
