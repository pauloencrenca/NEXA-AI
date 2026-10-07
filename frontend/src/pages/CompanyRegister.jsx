import { useState } from "react";
import { Link } from "react-router-dom";
import { createCompany } from "../services/api.js";

const initialForm = { name: "", email: "", segment: "", description: "" };

export default function CompanyRegister() {
  const [form, setForm] = useState(initialForm);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [createdCompany, setCreatedCompany] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFieldErrors({ ...fieldErrors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError("");
    setFieldErrors({});

    try {
      const company = await createCompany(form);
      setCreatedCompany(company);
      setForm(initialForm);
    } catch (err) {
      setFieldErrors(err.errors || {});
      setFormError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (createdCompany) {
    return (
      <section className="register">
        <div className="container register__inner">
          <div className="form-card form-card--success">
            <span className="eyebrow">Cadastro concluído</span>
            <h1 className="register__title">
              <span className="gradient-text">{createdCompany.name}</span> foi cadastrada!
            </h1>
            <p className="register__text">
              Os dados da sua empresa foram salvos. Nas próximas etapas você
              poderá configurar o assistente e a base de conhecimento.
            </p>
            <Link className="btn btn--primary" to="/">
              Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="register">
      <div className="container register__inner">
        <span className="eyebrow">Começar agora</span>
        <h1 className="register__title">
          Cadastre a <span className="gradient-text">sua empresa</span>
        </h1>
        <p className="register__text">
          Esses são os dados iniciais. Em seguida você poderá configurar o seu assistente.
        </p>

        <form className="form-card" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Nome da empresa</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Ex.: Clínica Bem Viver"
            />
            {fieldErrors.name && <span className="field__error">{fieldErrors.name}</span>}
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="contato@suaempresa.com"
            />
            {fieldErrors.email && <span className="field__error">{fieldErrors.email}</span>}
          </div>

          <div className="field">
            <label htmlFor="segment">Segmento</label>
            <input
              id="segment"
              name="segment"
              type="text"
              value={form.segment}
              onChange={handleChange}
              placeholder="Ex.: Saúde, Educação, Varejo"
            />
            {fieldErrors.segment && <span className="field__error">{fieldErrors.segment}</span>}
          </div>

          <div className="field">
            <label htmlFor="description">Descrição (opcional)</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={form.description}
              onChange={handleChange}
              placeholder="Conte brevemente o que a sua empresa faz."
            />
            {fieldErrors.description && (
              <span className="field__error">{fieldErrors.description}</span>
            )}
          </div>

          {formError && !Object.values(fieldErrors).some(Boolean) && (
            <div className="form-alert">{formError}</div>
          )}

          <button className="btn btn--primary btn--full" type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Cadastrar empresa"}
          </button>
        </form>
      </div>
    </section>
  );
}
