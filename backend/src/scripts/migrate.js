import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pool from "../config/db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const migrationsDir = path.resolve(__dirname, "../../../database/migrations");

async function run() {
  const files = fs
    .readdirSync(migrationsDir)
    .filter((f) => f.endsWith(".sql"))
    .sort();

  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), "utf8");
    console.log(`Executando ${file}...`);
    await pool.query(sql);
  }

  console.log("Migrations concluídas com sucesso.");
  await pool.end();
}

run().catch(async (err) => {
  console.error("Erro ao executar migrations:", err.message);
  await pool.end();
  process.exit(1);
});
