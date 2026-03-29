"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  { title: "Diseño en el centro de todo", icon: "◈", description: "Cada píxel tiene un propósito. No hacemos trabajo genérico — creamos experiencias visuales que representan exactamente lo que tu marca merece ser." },
  { title: "Siempre a tu lado", icon: "◎", description: "Trabajamos contigo, no para ti. Tienes acceso directo al equipo en cada etapa. Sin intermediarios, sin demoras, sin sorpresas." },
  { title: "Entregamos lo que prometemos", icon: "◉", description: "Cumplimos plazos. Cumplimos con la calidad. Cada proyecto llega al nivel acordado — sin excusas y sin cobros sorpresa." },
  { title: "IA como ventaja competitiva", icon: "✦", description: "Usamos inteligencia artificial en diseño, desarrollo y marketing para darte más resultado en menos tiempo. Tecnología de punta al servicio de tu marca.", teal: true },
];

const audience = [
  { num: "01", title: "Emprendedores", desc: "Con una idea poderosa pero sin la estructura técnica para proyectar su verdadero potencial." },
  { num: "02", title: "Pymes en crecimiento", desc: "Que exigen profesionalismo y autoridad desde el primer día, sin tiempos de espera." },
  { num: "03", title: "Marcas en transición", desc: "Que saben que necesitan cambiar pero buscan un aliado estratégico para hacerlo bien." },
];

function IsoIllustration() {
  // Concepto: tres disciplinas, un equipo — Venn de círculos superpuestos
  return (
    <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 380 }}>
      <defs>
        <radialGradient id="gNos1" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#8255F5"/>
          <stop offset="100%" stopColor="#6427E3"/>
        </radialGradient>
        <radialGradient id="gNos2" cx="60%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#5B6CF5"/>
          <stop offset="100%" stopColor="#3D52D5"/>
        </radialGradient>
        <radialGradient id="gNos3" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#5EC9A8"/>
          <stop offset="100%" stopColor="#33D7B6"/>
        </radialGradient>
      </defs>

      {/* ── Tres círculos Venn ── */}
      {/* Círculo izquierdo — Diseño (purple) */}
      <circle cx="118" cy="118" r="76" fill="url(#gNos1)" fillOpacity="0.72"/>

      {/* Círculo derecho — Tech (blue) */}
      <circle cx="202" cy="118" r="76" fill="url(#gNos2)" fillOpacity="0.72"/>

      {/* Círculo inferior — Estrategia (teal) */}
      <circle cx="160" cy="182" r="76" fill="url(#gNos3)" fillOpacity="0.72"/>

      {/* ── Brillo en el centro de intersección ── */}
      <circle cx="160" cy="142" r="28" fill="rgba(255,255,255,0.14)"/>

      {/* ── Spark ✦ central ── */}
      <line x1="160" y1="128" x2="160" y2="156" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
      <line x1="146" y1="142" x2="174" y2="142" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
      <line x1="150" y1="132" x2="170" y2="152" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.55"/>
      <line x1="170" y1="132" x2="150" y2="152" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.55"/>

      {/* ── Labels de cada disciplina ── */}
      {/* Diseño — arriba izquierda */}
      <rect x="18" y="55" width="58" height="22" rx="11" fill="#6427E3" fillOpacity="0.90"/>
      <text x="47" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600">Diseño</text>

      {/* Tech — arriba derecha */}
      <rect x="244" y="55" width="58" height="22" rx="11" fill="#3D52D5" fillOpacity="0.90"/>
      <text x="273" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600">Tech</text>

      {/* Estrategia — abajo centro */}
      <rect x="131" y="252" width="58" height="22" rx="11" fill="#1ba08a" fillOpacity="0.90"/>
      <text x="160" y="267" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600">Estrategia</text>

      {/* Líneas conectoras punteadas desde labels a círculos */}
      <line x1="55" y1="77" x2="98" y2="98" stroke="#6427E3" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.45"/>
      <line x1="266" y1="77" x2="226" y2="98" stroke="#3D52D5" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.45"/>
      <line x1="160" y1="252" x2="160" y2="224" stroke="#33D7B6" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.45"/>

    </svg>
  );
}

export default function NosotrosPage() {
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
              <h1 className="heading-xl mb-6" style={{ color: "var(--text-1)" }}>
                Diseñadores,<br />
                <span className="gradient-text">desarrolladores</span><br />
                y estrategas.
              </h1>
              <p className="body-lg mb-4">
                Un equipo pequeño con estándares grandes. Somos responsables, cercanos y obsesionados con el diseño. Si tu proyecto requiere rigor, creatividad y cumplimiento — estás en el lugar correcto.
              </p>
              <p className="body-lg mb-8">
                Cualquier proyecto, de cualquier tamaño, merece ser bello y funcionar bien. Eso es lo que hacemos.
              </p>
              <Link href="/contacto" className="btn-primary">Hablemos de tu proyecto →</Link>
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

      {/* Valores */}
      <section className="py-20 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mb-12">
            <h2 className="heading-lg max-w-xl" style={{ color: "var(--text-1)" }}>
              Lo que nos define como <span className="gradient-text">equipo</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card p-6 group"
                style={v.teal ? { borderLeft: "3px solid var(--accent-teal)" } : {}}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="heading-sm" style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}>{v.title}</h3>
                  <span className="text-lg opacity-20 group-hover:opacity-60 transition-opacity duration-300 flex-shrink-0 ml-3"
                    style={{ color: v.teal ? "var(--accent-teal)" : "var(--accent)" }}>{v.icon}</span>
                </div>
                <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--text-2)" }}>{v.description}</p>
                {v.teal && <span className="lab-tag mt-3 inline-flex" style={{ color: "var(--accent-teal)", background: "rgba(94,201,168,0.08)", borderColor: "rgba(94,201,168,0.2)" }}>IA-powered</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiencia */}
      <section className="py-20 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mb-12">
            <h2 className="heading-lg max-w-xl" style={{ color: "var(--text-1)" }}>
              Trabajamos con <span className="gradient-text">marcas valientes</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audience.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.1, duration: 0.55 }} className="card p-8 group">
                <span className="text-xs font-mono block mb-4" style={{ color: "var(--text-3)" }}>{item.num}</span>
                <h3 className="heading-sm mb-3" style={{ color: "var(--accent)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{item.desc}</p>
                <div className="mt-5 h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: "var(--accent)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#1E1E2E" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(61,82,213,0.15), transparent 65%)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="heading-lg mb-4" style={{ color: "#fff" }}>¿Te identificas?</h2>
            <p className="body-lg mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>Si estás listo para la aventura, nosotros tenemos el laboratorio.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacto" className="btn-primary px-8 py-4 text-base">Hablemos →</Link>
              <Link href="/servicios" className="btn-outline-invert px-8 py-4 text-base">Ver servicios</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
