import pool from "../config/db.js";

export async function createCompany({ name, email, segment, description }) {
  const { rows } = await pool.query(
    `INSERT INTO companies (name, email, segment, description)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, segment, description, created_at`,
    [name, email, segment, description || null]
  );
  return rows[0];
}

export async function findCompanyById(id) {
  const { rows } = await pool.query(
    `SELECT id, name, email, segment, description, created_at
     FROM companies WHERE id = $1`,
    [id]
  );
  return rows[0] || null;
}
