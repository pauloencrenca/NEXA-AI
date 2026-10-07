import pg from "pg";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.warn("Aviso: DATABASE_URL não está definida.");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true, // o Neon exige conexão segura
});

// O Neon suspende o banco quando fica ocioso e pode derrubar conexões.
// Sem este tratador, um erro em conexão ociosa derrubaria o servidor inteiro.
pool.on("error", (err) => {
  console.error("Erro em conexão ociosa do banco:", err.message);
});

export default pool;
