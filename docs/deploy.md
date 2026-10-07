# Deploy do NEXA AI

Frontend: Vercel (https://nexa94fc.vercel.app)
Backend: Render (serviço web separado)
Banco: Neon (já existente, não é alterado)

## Variáveis de ambiente

### Backend (painel do Render)
| Variável      | Valor                                              |
|---------------|----------------------------------------------------|
| DATABASE_URL  | connection string do Neon (secreta)                |
| CORS_ORIGIN   | https://nexa94fc.vercel.app (sem barra no final)   |
| NODE_ENV      | production                                         |
| PORT          | não definir (o Render fornece)                     |

### Frontend (painel da Vercel)
| Variável      | Valor                                              |
|---------------|----------------------------------------------------|
| VITE_API_URL  | URL do backend no Render, sem barra no final       |

Após alterar variáveis na Vercel, faça um novo deploy.

## Render
- Root Directory: backend
- Build Command: npm install
- Start Command: npm start
- Health Check Path: /api/health
- Não criar PostgreSQL no Render: o banco é o Neon.

## Observações
- Em produção, o backend aceita somente os domínios de CORS_ORIGIN.
  URLs de preview da Vercel (com hash no endereço) não são aceitas.
- Se um domínio próprio for adicionado, inclua-o em CORS_ORIGIN
  separado por vírgula.
- Nunca envie arquivos .env para o GitHub.
