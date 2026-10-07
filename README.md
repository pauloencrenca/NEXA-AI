# NEXA AI

Inteligência que entende o seu negócio.

Plataforma SaaS onde uma empresa cadastra suas informações e configura um
assistente de IA que responde clientes usando exclusivamente a base de
conhecimento da própria empresa.

## Stack
- Frontend: React (Vite)
- Backend: Node.js (Express)
- Banco de dados: PostgreSQL
- API REST

## Jeito rápido
- Windows: dê dois cliques em `iniciar.bat`
- Mac/Linux: `./iniciar.sh`

## Como rodar manualmente

### Backend
```
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173
Backend:  http://localhost:3001/api/health

## Status
Etapa 1: estrutura inicial + landing page.
Etapa 2: PostgreSQL (Neon) + cadastro de empresa.

### Banco de dados
Coloque a connection string do Neon em `backend/.env` (DATABASE_URL) e rode:
```
cd backend
npm run migrate
```
