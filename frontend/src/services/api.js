const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export async function createCompany(data) {
  let response;

  try {
    response = await fetch(`${API_URL}/api/companies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw { message: "Não foi possível conectar ao servidor.", errors: {} };
  }

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw {
      message: body.message || "Erro ao cadastrar a empresa.",
      errors: body.errors || {},
    };
  }

  return body;
}
