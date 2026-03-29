"use client";

import { motion } from "framer-motion";

const attributes = [
  {
    number: "01",
    icon: "◈",
    title: "Creatividad",
    description: "La búsqueda incesante de innovación y belleza estética. Comunicamos la esencia de cada marca de forma fresca y disruptiva.",
  },
  {
    number: "02",
    icon: "◎",
    title: "Estrategia",
    description: "Cada decisión creativa está respaldada por datos y objetivos claros. El arte sin propósito es decoración; nosotros creamos resultados.",
  },
  {
    number: "03",
    icon: "◉",
    title: "Confiabilidad",
    description: "Trabajamos bajo estándares rigurosos de entrega y comunicación. El laboratorio no improvisa: experimenta con método.",
  },
];

export default function Attributes() {
  return (
    <section className="py-28 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="label-tag mb-4">Por qué elegirnos</p>
          <h2 className="heading-lg" style={{ color: "var(--text-1)" }}>
            Tres atributos que garantizan{" "}
            <span className="gradient-text">resultados impecables.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {attributes.map((attr, i) => (
            <motion.div
              key={attr.title}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="card p-8 group flex flex-col gap-4"
            >
              {/* Number + icon */}
              <div className="flex items-start justify-between">
                <span
                  className="text-4xl font-bold leading-none"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  {attr.number}
                </span>
                <span
                  className="text-xl transition-all duration-300 opacity-20 group-hover:opacity-70"
                  style={{ color: "var(--accent)" }}
                >
                  {attr.icon}
                </span>
              </div>

              {/* Title — pegado al número */}
              <h3 className="heading-md" style={{ color: "var(--accent)", marginTop: "-8px" }}>
                {attr.title}
              </h3>

              {/* Divider */}
              <div style={{ height: 1, background: "var(--border)" }} />

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                {attr.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AI Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 card p-6 flex flex-col md:flex-row items-start md:items-center gap-4"
          style={{ borderLeft: "3px solid var(--accent-teal)" }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold"
            style={{ background: "rgba(94,201,168,0.1)", color: "var(--accent-teal)", border: "1px solid rgba(94,201,168,0.2)", fontFamily: "var(--font-space-grotesk)" }}
          >
            ✦
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-1)", fontFamily: "var(--font-space-grotesk)" }}>
              Potenciado por Inteligencia Artificial
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
              Integramos IA en cada etapa: diseño, desarrollo, marketing y análisis. No para reemplazar la creatividad, sino para multiplicarla — entregando más rápido, con mayor precisión y a menor costo.
            </p>
          </div>
          <span className="lab-tag flex-shrink-0">IA-powered</span>
        </motion.div>
      </div>
    </section>
  );
}
