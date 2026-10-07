import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import companiesRoutes from "./routes/companies.routes.js";

const app = express();

const isProduction = process.env.NODE_ENV === "production";

// Lê CORS_ORIGIN (aceita vários domínios separados por vírgula)
// e remove espaços e barras no final.
const configuredOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim().replace(/\/+$/, ""))
  .filter(Boolean);

if (isProduction && configuredOrigins.length === 0) {
  throw new Error(
    "CORS_ORIGIN é obrigatório em produção. Exemplo: https://nexa94fc.vercel.app"
  );
}

// Em desenvolvimento, localhost é sempre permitido.
// Em produção, somente os domínios definidos em CORS_ORIGIN.
const localOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];
const allowedOrigins = isProduction
  ? configuredOrigins
  : [...new Set([...localOrigins, ...configuredOrigins])];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/companies", companiesRoutes);

// Tratamento geral de erros
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Erro interno do servidor." });
});

export default app;
