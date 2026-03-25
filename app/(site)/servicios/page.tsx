"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
];

const modularServices = [
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
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10.5px] uppercase tracking-widest mb-1" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>
            {service.tagline}
          </p>
          <h3 className="heading-sm" style={{ color: "var(--text-1)" }}>{service.name}</h3>
        </div>
        <span className="text-xl opacity-20 flex-shrink-0 ml-3 mt-1" style={{ color: "var(--accent)" }}>{service.icon}</span>
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

export default function ServiciosPage() {
  const [activeTab, setActiveTab] = useState<"autor" | "modular">("autor");

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <p className="label-tag mb-6">Servicios</p>
            <h1 className="heading-xl mb-6 max-w-3xl" style={{ color: "var(--text-1)" }}>
              Dos caminos,<br />
              <span style={{ color: "var(--accent)" }}>un mismo objetivo.</span>
            </h1>
            <p className="body-lg max-w-xl">
              Segmentamos nuestra oferta para resolver dos necesidades críticas: la Diferenciación
              Profunda y la Aceleración Profesional. Elige según el momento de tu marca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs + Cards */}
      <section className="py-16 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-7xl mx-auto">
          {/* Tab selector */}
          <div
            className="flex gap-2 p-1 w-fit mb-12 rounded-full"
            style={{ background: "#FFFFFF", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
          >
            {(["autor", "modular"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 text-sm font-semibold rounded-full transition-all duration-250"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  background: activeTab === tab ? "var(--accent)" : "transparent",
                  color: activeTab === tab ? "#fff" : "var(--text-2)",
                  boxShadow: activeTab === tab ? "var(--shadow-accent)" : "none",
                }}
              >
                {tab === "autor" ? "Proyectos de Autor" : "Soluciones Modulares"}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "autor" ? (
              <motion.div key="autor" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                <p className="text-sm mb-10 max-w-2xl" style={{ color: "var(--text-2)" }}>
                  Procesos de inmersión total para marcas que requieren desarrollos complejos e identidades únicas. El resultado no se replica.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {autorServices.map((s, i) => <ServiceCard key={s.name} service={s} index={i} />)}
                </div>
              </motion.div>
            ) : (
              <motion.div key="modular" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                <p className="text-sm mb-10 max-w-2xl" style={{ color: "var(--text-2)" }}>
                  Estructuras Ready-to-Go diseñadas para Pymes que exigen profesionalismo y autoridad desde el primer día. Sin tiempos muertos.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {modularServices.map((s, i) => <ServiceCard key={s.name} service={s} index={i} />)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#0A0A0F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,111,245,0.12), transparent 65%)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="heading-lg mb-4" style={{ color: "#fff" }}>¿No sabes cuál necesitas?</h2>
            <p className="body-lg mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>Hablemos y te ayudamos a encontrar el camino correcto para tu marca.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacto" className="btn-primary px-8 py-4 text-base">Agendar conversación →</Link>
              <a href="https://wa.me/56900000000" target="_blank" rel="noopener noreferrer" className="btn-outline-invert px-8 py-4 text-base">WhatsApp directo</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
