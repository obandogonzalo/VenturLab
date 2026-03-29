"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";

function IsoIllustration() {
  // Concepto: conversación directa — burbuja principal + una satélite teal
  return (
    <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 380 }}>
      <defs>
        <linearGradient id="gCont" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6427E3"/>
          <stop offset="100%" stopColor="#B625EF"/>
        </linearGradient>
        <filter id="shadowCont" x="-20%" y="-20%" width="145%" height="160%">
          <feDropShadow dx="0" dy="14" stdDeviation="24" floodColor="rgba(100,39,227,0.30)"/>
        </filter>
        <filter id="shadowSat" x="-30%" y="-30%" width="165%" height="185%">
          <feDropShadow dx="0" dy="7" stdDeviation="13" floodColor="rgba(51,215,182,0.30)"/>
        </filter>
      </defs>

      {/* ── Burbuja principal ── */}
      <rect x="35" y="28" width="208" height="140" rx="28" fill="url(#gCont)" filter="url(#shadowCont)"/>
      {/* Highlight borde superior */}
      <line x1="58" y1="29" x2="222" y2="29" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Cola (abajo-izquierda) */}
      <polygon points="84,168 60,200 126,168" fill="url(#gCont)"/>

      {/* ── Dots de "escribiendo..." ── */}
      <circle cx="124" cy="98" r="10" fill="#FFFFFF"/>
      <circle cx="157" cy="98" r="10" fill="#FFFFFF" fillOpacity="0.68"/>
      <circle cx="190" cy="98" r="10" fill="#FFFFFF" fillOpacity="0.38"/>

      {/* ── Burbuja satélite — teal (top-right) ── */}
      <rect x="224" y="16" width="80" height="54" rx="16" fill="#33D7B6" filter="url(#shadowSat)"/>
      {/* Cola satélite (abajo-izquierda, apunta al bubble principal) */}
      <polygon points="240,70 224,86 266,70" fill="#33D7B6"/>
      {/* Líneas de contenido */}
      <line x1="240" y1="34" x2="292" y2="34" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="240" y1="49" x2="276" y2="49" stroke="#FFFFFF" strokeOpacity="0.40" strokeWidth="2.5" strokeLinecap="round"/>

    </svg>
  );
}

export default function ContactoPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texto — izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="heading-xl mb-6 max-w-3xl" style={{ color: "var(--text-1)" }}>
                Hablemos de<br />
                <span className="gradient-text">tu proyecto.</span>
              </h1>
              <p className="body-lg max-w-md">
                Sin formularios interminables. Solo cuéntanos tu idea y dónde estás parado.
                Nosotros nos encargamos del resto.
              </p>
            </motion.div>
            {/* Ilustración — derecha */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <IsoIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <h2 className="heading-sm mb-8" style={{ color: "var(--text-1)" }}>Envíanos un mensaje</h2>
            <ContactForm />
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }} className="flex flex-col gap-5">
            <h2 className="heading-sm" style={{ color: "var(--text-1)" }}>Otras formas de contacto</h2>

            <a href="https://wa.me/56994509752" target="_blank" rel="noopener noreferrer" className="card flex items-start gap-4 p-6 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--accent-dim)", border: "1px solid var(--accent-muted)" }}>
                <span className="text-sm font-bold" style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}>W</span>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-1)", fontFamily: "var(--font-space-grotesk)" }}>WhatsApp</p>
                <p className="text-xs mb-1" style={{ color: "var(--text-2)" }}>Respuesta en menos de 24 horas hábiles.</p>
                <p className="text-xs font-medium group-hover:underline" style={{ color: "var(--accent)" }}>Escribir por WhatsApp →</p>
              </div>
            </a>

            <a href="mailto:hola@venturlab.cl" className="card flex items-start gap-4 p-6 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--bg-3)", border: "1px solid var(--border)" }}>
                <span className="text-sm" style={{ color: "var(--text-3)" }}>@</span>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-1)", fontFamily: "var(--font-space-grotesk)" }}>Email</p>
                <p className="text-xs mb-1" style={{ color: "var(--text-2)" }}>hola@venturlab.cl</p>
                <p className="text-xs font-medium group-hover:underline" style={{ color: "var(--accent)" }}>Enviar email →</p>
              </div>
            </a>

            <div className="card p-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>¿Qué pasa después?</p>
              <ul className="flex flex-col gap-3">
                {["Te respondemos en menos de 24h hábiles", "Agendamos una llamada de diagnóstico sin costo", "Te presentamos una propuesta estratégica", "Comenzamos el experimento"].map((step, i) => (
                  <li key={step} className="flex gap-3 text-xs" style={{ color: "var(--text-2)" }}>
                    <span className="font-mono font-semibold flex-shrink-0" style={{ color: "var(--accent)" }}>0{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
