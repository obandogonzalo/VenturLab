"use client";

import { useState, useRef } from "react";

const services = [
  "Branding & ADN de Marca",
  "Diseño de Producto Digital (UX/UI)",
  "Consultoría Digital & Performance",
  "Identity Pack",
  "Landing Page",
  "Web Corporativa",
  "Presentación de Impacto",
  "No lo sé aún",
];

type FormState = "idle" | "loading" | "success" | "error";

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "#FFFFFF",
  border: "1px solid var(--border)",
  borderRadius: "var(--r-md)",
  padding: "12px 16px",
  fontSize: "14px",
  color: "var(--text-1)",
  outline: "none",
  fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
  transition: "border-color 0.25s ease",
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setState("loading");
    try {
      const formData = new FormData(formRef.current);
      const res = await fetch("/contact.php", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
        formRef.current.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--accent)";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--border)";
  };

  if (state === "success") {
    return (
      <div
        className="p-8 text-center rounded-2xl"
        style={{ background: "var(--accent-dim)", border: "1px solid var(--accent-muted)" }}
      >
        <div className="text-3xl mb-4" style={{ color: "var(--accent)" }}>✓</div>
        <h3 className="heading-sm mb-2" style={{ color: "var(--text-1)" }}>¡Mensaje enviado!</h3>
        <p className="text-sm" style={{ color: "var(--text-2)" }}>
          Te responderemos en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs mb-1.5 uppercase tracking-wider" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>
            Nombre *
          </label>
          <input required type="text" name="from_name" placeholder="Tu nombre" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div>
          <label className="block text-xs mb-1.5 uppercase tracking-wider" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>
            Empresa
          </label>
          <input type="text" name="company" placeholder="Tu empresa o proyecto" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
        </div>
      </div>

      <div>
        <label className="block text-xs mb-1.5 uppercase tracking-wider" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>
          Email *
        </label>
        <input required type="email" name="reply_to" placeholder="tu@email.com" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
      </div>

      <div>
        <label className="block text-xs mb-1.5 uppercase tracking-wider" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>
          Servicio de interés
        </label>
        <select name="service" defaultValue="" style={{ ...inputBase, cursor: "pointer", appearance: "none" }} onFocus={onFocus} onBlur={onBlur}>
          <option value="" style={{ color: "var(--text-3)" }}>Selecciona un servicio</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs mb-1.5 uppercase tracking-wider" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>
          Mensaje *
        </label>
        <textarea
          required rows={5} name="message"
          placeholder="Cuéntanos sobre tu proyecto, tu reto o simplemente tu idea..."
          style={{ ...inputBase, resize: "none" }}
          onFocus={onFocus} onBlur={onBlur}
        />
      </div>

      {state === "error" && (
        <p className="text-xs" style={{ color: "#DC2626" }}>
          Hubo un error al enviar. Por favor intenta nuevamente o{" "}
          <a
            href="https://wa.me/56994509752"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#DC2626", textDecoration: "underline", fontWeight: 600 }}
          >
            escríbenos por WhatsApp
          </a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary w-full py-3.5 text-sm justify-center"
        style={{ opacity: state === "loading" ? 0.6 : 1, cursor: state === "loading" ? "not-allowed" : "pointer" }}
      >
        {state === "loading" ? "Enviando..." : "Enviar mensaje →"}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--text-3)" }}>
        Al enviar aceptas que nos pongamos en contacto contigo para discutir tu proyecto.
      </p>
    </form>
  );
}
