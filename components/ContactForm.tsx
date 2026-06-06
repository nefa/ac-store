"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nume: "", email: "", telefon: "", mesaj: "" });
  const [gdpr, setGdpr] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <CheckCircleIcon />
        <h2 className="text-xl font-semibold text-gray-dark">Mesaj trimis!</h2>
        <p className="text-gray-500 text-sm">Te vom contacta în cel mai scurt timp posibil.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ nume: "", email: "", telefon: "", mesaj: "" }); setGdpr(false); }}
          className="mt-2 text-sm text-primary hover:underline"
        >
          Trimite un alt mesaj
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Nume *" name="nume" type="text" value={form.nume} onChange={handleChange} required />
        <Field label="Email *" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <Field label="Telefon *" name="telefon" type="tel" value={form.telefon} onChange={handleChange} required />
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Mesajul tău *</label>
        <textarea
          name="mesaj"
          value={form.mesaj}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Scrie-ne cu ce te putem ajuta..."
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
        />
      </div>
      <label className="flex items-start gap-2 text-sm text-gray-500 cursor-pointer">
        <input
          type="checkbox"
          checked={gdpr}
          onChange={(e) => setGdpr(e.target.checked)}
          required
          className="mt-0.5 accent-primary"
        />
        Sunt de acord cu{" "}
        <a href="/confidentialitate" className="text-primary hover:underline">
          Politica de Confidențialitate
        </a>{" "}
        și{" "}
        <a href="/termeni" className="text-primary hover:underline">
          Termenii și Condițiile
        </a>
        .
      </label>
      <button
        type="submit"
        disabled={!gdpr}
        className="bg-secondary hover:bg-secondary-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded transition-colors"
      >
        Trimite mesajul
      </button>
    </form>
  );
}

function Field({
  label, name, type, value, onChange, required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
