import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import companiesRoutes from "./routes/companies.routes.js";

const app = express();

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

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
