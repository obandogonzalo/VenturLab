"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const phases = [
  { num: "01", name: "Explora",    tagline: "Inmersión diagnóstica",       desc: "Escuchamos y analizamos la marca para detectar oportunidades reales." },
  { num: "02", name: "Define",     tagline: "Arquitectura de ruta",         desc: "Propósito, público objetivo y objetivos de conversión medibles." },
  { num: "03", name: "Diseña",     tagline: "Prototipado creativo",         desc: "Construimos bajo modelo de laboratorio: prueba + ajuste + refinamiento." },
  { num: "04", name: "Lanza",      tagline: "Precisión técnica",            desc: "Ejecución final asegurando escalabilidad y conexión con el mercado." },
  { num: "05", name: "Evoluciona", tagline: "Acompañamiento continuo",      desc: "Soporte e iteraciones estratégicas para adaptarse al entorno digital." },
];

export default function MethodPreview() {
  return (
    <section className="py-28 px-6" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="label-tag mb-4">Cómo trabajamos</p>
            <h2 className="heading-lg" style={{ color: "var(--text-1)" }}>
              Así trabajamos
            </h2>
          </div>
          <Link
            href="/nosotros"
            className="text-sm font-medium animated-underline self-start md:self-end"
            style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}
          >
            Conoce el equipo →
          </Link>
        </motion.div>

        {/* Flow */}
        <div className="relative">

          {/* Línea conectora (desktop) */}
          <div
            className="absolute top-[26px] left-[26px] right-[26px] hidden md:block pointer-events-none"
            style={{ height: 1, background: "var(--border)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="card p-5 flex flex-col gap-4 cursor-default"
              >
                {/* Circle number */}
                <div
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    border: "1px solid var(--border)",
                    background: "#FFFFFF",
                  }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {phase.num}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <div
                    className="font-bold mb-0.5"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)", fontSize: "1.1rem" }}
                  >
                    {phase.name}
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {phase.tagline}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
