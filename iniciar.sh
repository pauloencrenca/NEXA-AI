#!/usr/bin/env bash
cd "$(dirname "$0")"
(cd backend && npm install && npm run dev) &
(cd frontend && npm install && npm run dev) &
echo "Abra http://localhost:5173 quando o frontend estiver pronto."
wait
