"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const autorServices = [
  {
    name: "Branding & ADN de Marca",
    tagline: "Más allá del logo",
    description: "Construimos el propósito, naming, voz y universo visual completo de tu marca. Incluye diseño editorial y estrategia de comunicación.",
    painPoints: ["Marca genérica o invisible en el mercado", "Falta de coherencia en la comunicación", "Identidad visual que no refleja el valor real"],
    deliverables: ["Manual de marca completo", "Sistema tipográfico y cromático", "Voz y tono de marca", "Aplicaciones y materiales clave"],
    icon: "◈",
  },
  {
    name: "Diseño de Producto Digital (UX/UI)",
    tagline: "Del concepto al ecosistema",
    description: "Prototipado y stress-testing de interfaces. Plataformas y ecosistemas digitales complejos centrados en el usuario.",
    painPoints: ["Parálisis por falta de estructura técnica", "Interfaces confusas que generan fricción", "Plataformas que no escalan"],
    deliverables: ["Arquitectura de información", "Wireframes y prototipos navegables", "Diseño visual de alta fidelidad", "Handoff técnico"],
    icon: "◎",
  },
  {
    name: "Consultoría Digital & Performance",
    tagline: "Precisión estratégica",
    description: "Auditorías UX de alta profundidad, automatización de flujos y marketing digital orientado a resultados con Meta Ads y Google Ads.",
    painPoints: ["Inversión publicitaria sin retorno claro", "Procesos manuales que consumen tiempo", "Falta de datos para tomar decisiones"],
    deliverables: ["Auditoría UX detallada", "Estrategia de medios digitales", "Configuración y gestión de campañas", "Reportes de performance mensual"],
    icon: "◉",
  },
  {
    name: "Identity Pack",
    tagline: "Kit esencial de marca",
    description: "Logotipo, paleta cromática y tipografías con coherencia técnica absoluta.",
    painPoints: ["Marca sin identidad visual", "Logo genérico o desactualizado"],
    deliverables: ["Logotipo en múltiples versiones", "Paleta de colores", "Sistema tipográfico", "Guía de uso básica"],
    icon: "◈",
  },
  {
    name: "Landing Page de Alta Claridad",
    tagline: "Conversión sin fricciones",
    description: "Estructuras optimizadas para la conversión directa. Diseñadas para un servicio específico sin distracciones.",
    painPoints: ["Alto tráfico, baja conversión", "Mensaje confuso o disperso"],
    deliverables: ["Diseño y desarrollo completo", "Optimización SEO on-page", "Formulario de captura", "Analytics configurado"],
    icon: "◇",
  },
  {
    name: "Web Corporativa",
    tagline: "Presencia digital de autoridad",
    description: "Ecosistemas institucionales ágiles, optimizados para SEO y de gestión simplificada mediante CMS.",
    painPoints: ["Sitio desactualizado o lento", "Sin presencia en buscadores"],
    deliverables: ["Diseño y desarrollo completo", "CMS para gestión propia", "SEO técnico y de contenido", "Responsive y accesible"],
    icon: "◉",
  },
  {
    name: "Presentaciones de Impacto",
    tagline: "Convierte con autoridad visual",
    description: "Diseño visual estratégico para procesos de venta o levantamiento de capital.",
    painPoints: ["Decks que no transmiten valor", "Presentaciones visualmente pobres"],
    deliverables: ["Diseño de deck completo", "Animaciones y transiciones", "Versión PDF y editable", "Asesoría de estructura narrativa"],
    icon: "✦",
  },
];

function ServiceCard({ service, index }: { service: (typeof autorServices)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="card p-8 flex flex-col gap-5"
    >
      <div>
        <h3 className="heading-sm" style={{ color: "var(--accent)" }}>{service.name}</h3>
        <p className="text-[10.5px] uppercase tracking-widest mt-1" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>
          {service.tagline}
        </p>
      </div>

      <div style={{ height: 1, background: "var(--border)" }} />

      <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{service.description}</p>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest mb-2.5" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>Resuelve</p>
        <ul className="flex flex-col gap-1.5">
          {service.painPoints.map((p) => (
            <li key={p} className="flex gap-2 items-start">
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
              <span className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest mb-2.5" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>Entregables</p>
        <ul className="flex flex-col gap-1.5">
          {service.deliverables.map((d) => (
            <li key={d} className="flex gap-2 text-xs" style={{ color: "var(--text-2)" }}>
              <span style={{ color: "var(--text-3)" }}>—</span>
              {d}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/contacto"
        className="inline-flex items-center gap-2 text-sm font-semibold mt-auto pt-2 group/link"
        style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}
      >
        <span>Cotizar este servicio</span>
        <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
      </Link>
    </motion.div>
  );
}

function IsoIllustration() {
  // Concepto: stack de tarjetas — servicios como capas de valor
  return (
    <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 380 }}>
      <defs>
        <linearGradient id="gServFront" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6427E3"/>
          <stop offset="100%" stopColor="#B625EF"/>
        </linearGradient>
        <filter id="shadowServ" x="-25%" y="-25%" width="150%" height="175%">
          <feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="rgba(100,39,227,0.32)"/>
        </filter>
      </defs>

      {/* ── Card 3 — fondo ── */}
      <rect x="85" y="62" width="210" height="158" rx="18" fill="#3D52D5" fillOpacity="0.22"/>

      {/* ── Card 2 — medio ── */}
      <rect x="57" y="50" width="210" height="158" rx="18" fill="#3D52D5" fillOpacity="0.50"/>

      {/* ── Card 1 — frente ── */}
      <rect x="27" y="38" width="210" height="158" rx="18" fill="url(#gServFront)" filter="url(#shadowServ)"/>

      {/* Highlight borde superior */}
      <line x1="46" y1="39" x2="218" y2="39" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Pill label */}
      <rect x="44" y="55" width="60" height="18" rx="9" fill="rgba(255,255,255,0.18)"/>
      <text x="74" y="68" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="9" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600" letterSpacing="0.08em">SERVICIOS</text>

      {/* Divider */}
      <line x1="44" y1="87" x2="220" y2="87" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1"/>

      {/* ── Badge 1 — Branding (diamante) ── */}
      <rect x="44" y="100" width="34" height="34" rx="9" fill="rgba(255,255,255,0.14)"/>
      <polygon points="61,107 68,117 61,127 54,117" fill="#FFFFFF"/>

      {/* ── Badge 2 — UX/UI (grid 2×2) ── */}
      <rect x="88" y="100" width="34" height="34" rx="9" fill="rgba(255,255,255,0.14)"/>
      <rect x="97" y="109" width="7" height="7" rx="1.5" fill="#FFFFFF"/>
      <rect x="106" y="109" width="7" height="7" rx="1.5" fill="#FFFFFF"/>
      <rect x="97" y="118" width="7" height="7" rx="1.5" fill="#FFFFFF"/>
      <rect x="106" y="118" width="7" height="7" rx="1.5" fill="#FFFFFF"/>

      {/* ── Badge 3 — Analytics (barras) ── */}
      <rect x="132" y="100" width="34" height="34" rx="9" fill="rgba(255,255,255,0.14)"/>
      <rect x="141" y="116" width="5" height="8" rx="1.5" fill="#FFFFFF"/>
      <rect x="148" y="112" width="5" height="12" rx="1.5" fill="#FFFFFF"/>
      <rect x="155" y="118" width="5" height="6" rx="1.5" fill="#FFFFFF"/>

      {/* ── Badge 4 — Presentaciones (estrella ✦) ── */}
      <rect x="176" y="100" width="34" height="34" rx="9" fill="rgba(255,255,255,0.14)"/>
      <line x1="193" y1="108" x2="193" y2="126" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="184" y1="117" x2="202" y2="117" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="187" y1="111" x2="199" y2="123" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="199" y1="111" x2="187" y2="123" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>

      {/* Barras de contenido inferiores */}
      <rect x="44" y="151" width="90" height="9" rx="4.5" fill="rgba(255,255,255,0.28)"/>
      <rect x="146" y="151" width="54" height="9" rx="4.5" fill="rgba(255,255,255,0.16)"/>
      <rect x="212" y="151" width="18" height="9" rx="4.5" fill="rgba(255,255,255,0.09)"/>

    </svg>
  );
}

export default function ServiciosPage() {
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
                Todo lo que<br />
                <span className="gradient-text">necesitas.</span>
              </h1>
              <p className="body-lg max-w-xl">
                Desde identidad de marca hasta productos digitales complejos. Cada servicio está diseñado para darte resultados reales, con IA integrada en cada proceso.
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

      {/* Cards */}
      <section className="py-16 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {autorServices.map((s, i) => <ServiceCard key={s.name} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#1E1E2E" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(61,82,213,0.15), transparent 65%)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="heading-lg mb-4" style={{ color: "#fff" }}>¿No sabes cuál necesitas?</h2>
            <p className="body-lg mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>Hablemos y te ayudamos a encontrar el camino correcto para tu marca.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacto" className="btn-primary px-8 py-4 text-base">Agendar conversación →</Link>
              <a href="https://wa.me/56994509752" target="_blank" rel="noopener noreferrer" className="btn-outline-invert px-8 py-4 text-base">WhatsApp directo</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
