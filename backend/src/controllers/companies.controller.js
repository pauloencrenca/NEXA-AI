import { createCompany, findCompanyById } from "../services/companies.service.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function validateCompany(body = {}) {
  const errors = {};
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const segment = String(body.segment ?? "").trim();
  const description = String(body.description ?? "").trim();

  if (name.length < 2 || name.length > 150) {
    errors.name = "Informe o nome da empresa (2 a 150 caracteres).";
  }
  if (!EMAIL_REGEX.test(email) || email.length > 255) {
    errors.email = "Informe um e-mail válido.";
  }
  if (segment.length < 2 || segment.length > 100) {
    errors.segment = "Informe o segmento da empresa.";
  }
  if (description.length > 2000) {
    errors.description = "A descrição pode ter no máximo 2000 caracteres.";
  }

  return { errors, data: { name, email, segment, description } };
}

export async function create(req, res, next) {
  try {
    const { errors, data } = validateCompany(req.body);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: "Dados inválidos.", errors });
    }

    const company = await createCompany(data);
    return res.status(201).json(company);
  } catch (err) {
    if (err.code === "23505") {
      return res.status(409).json({
        message: "Já existe uma empresa cadastrada com este e-mail.",
        errors: { email: "E-mail já cadastrado." },
      });
    }
    next(err);
  }
}

export async function getById(req, res, next) {
  try {
    const { id } = req.params;

    if (!UUID_REGEX.test(id)) {
      return res.status(400).json({ message: "ID inválido." });
    }

    const company = await findCompanyById(id);

    if (!company) {
      return res.status(404).json({ message: "Empresa não encontrada." });
    }

    return res.json(company);
  } catch (err) {
    next(err);
  }
}
