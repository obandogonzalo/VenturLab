"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const phases = [
  { num: "01", name: "Explora",    tagline: "Inmersión diagnóstica",                  icon: "◎", description: "Escuchamos y analizamos la marca para detectar oportunidades reales. No ejecutamos sin una comprensión profunda del terreno. Esta fase incluye entrevistas, análisis competitivo y auditoría del estado actual.", outputs: ["Diagnóstico de marca", "Mapa de oportunidades", "Brief estratégico"], duration: "1–2 semanas" },
  { num: "02", name: "Define",     tagline: "Arquitectura de la hoja de ruta",         icon: "◈", description: "Establecemos el propósito, público objetivo y objetivos de conversión medibles. Construimos la hoja de ruta del proyecto con hitos claros y entregables definidos.", outputs: ["Propuesta estratégica", "Definición de KPIs", "Cronograma de proyecto"], duration: "1 semana" },
  { num: "03", name: "Diseña",     tagline: "Prototipado creativo bajo modelo lab",    icon: "◇", description: "Construimos la experiencia bajo un modelo de laboratorio: prueba + ajuste. Refinamos la propuesta hasta la excelencia, incorporando feedback en ciclos controlados.", outputs: ["Prototipos iterativos", "Diseño visual validado", "Feedback implementado"], duration: "2–4 semanas" },
  { num: "04", name: "Lanza",      tagline: "Implementación con precisión técnica",    icon: "◉", description: "Ejecución final asegurando que el producto sea escalable y esté listo para conectar con el mercado real. Cada detalle técnico verificado antes del despliegue.", outputs: ["Producto final en producción", "Documentación técnica", "Capacitación del equipo"], duration: "1–2 semanas" },
  { num: "05", name: "Evoluciona", tagline: "Acompañamiento post-entrega",             icon: "✦", description: "Soporte continuo y nuevas iteraciones estratégicas para adaptar la marca a la evolución constante del entorno digital. La relación no termina en el lanzamiento.", outputs: ["Soporte técnico activo", "Revisiones estratégicas periódicas", "Nuevas iteraciones"], duration: "Continuo" },
];

export default function MetodologiaPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <p className="label-tag mb-6">Metodología</p>
            <h1 className="heading-xl mb-6 max-w-3xl" style={{ color: "var(--text-1)" }}>El Método Ventur</h1>
            <p className="body-lg max-w-xl">
              Nuestra metodología sustituye la linealidad por un ciclo de experimentación estructurada.
              Cinco fases diseñadas para transformar ideas en realidades digitales impecables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="card p-8 md:p-10 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Left */}
                <div className="flex-shrink-0 md:w-52">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-[52px] h-[52px] rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ border: "1px solid var(--border)", background: "#fff" }}
                    >
                      <span className="text-sm font-bold" style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}>
                        {phase.num}
                      </span>
                    </div>
                    <span className="text-lg opacity-20 group-hover:opacity-60 transition-opacity duration-300" style={{ color: "var(--accent)" }}>
                      {phase.icon}
                    </span>
                  </div>
                  <h2 className="heading-md mb-1" style={{ color: "var(--text-1)" }}>{phase.name}</h2>
                  <p className="text-[10.5px] uppercase tracking-widest mb-3" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>
                    {phase.tagline}
                  </p>
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)", border: "1px solid var(--accent-muted)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {phase.duration}
                  </span>
                </div>

                {/* Right */}
                <div className="flex-1">
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-2)" }}>{phase.description}</p>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>Outputs</p>
                    <ul className="flex flex-wrap gap-2">
                      {phase.outputs.map((o) => (
                        <li key={o} className="text-xs px-3 py-1.5 rounded-full" style={{ background: "var(--accent-dim)", color: "var(--accent)", border: "1px solid var(--accent-muted)", fontFamily: "var(--font-space-grotesk)" }}>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: "var(--border)" }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#0A0A0F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,111,245,0.12), transparent 65%)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="heading-lg mb-4" style={{ color: "#fff" }}>¿Listo para comenzar el experimento?</h2>
            <p className="body-lg mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>Cada proceso comienza con una conversación. Cuéntanos tu proyecto.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacto" className="btn-primary px-8 py-4 text-base">Comenzar con Explora →</Link>
              <Link href="/servicios" className="btn-outline-invert px-8 py-4 text-base">Ver servicios</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
