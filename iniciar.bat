@echo off
echo Instalando e iniciando o backend...
start "NEXA AI - Backend" cmd /k "cd /d %~dp0backend && npm install && npm run dev"
echo Instalando e iniciando o frontend...
start "NEXA AI - Frontend" cmd /k "cd /d %~dp0frontend && npm install && npm run dev"
echo.
echo Quando o frontend terminar de instalar, abra http://localhost:5173
pause
