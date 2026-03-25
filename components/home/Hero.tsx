"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "100%", label: "Enfoque estratégico" },
  { value: "5",    label: "Fases de metodología" },
  { value: "2×",   label: "Resultados promedio" },
  { value: "∞",    label: "Iteraciones posibles" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.55, delay, ease },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at -10% -10%, rgba(124,111,245,0.05) 0%, transparent 70%)",
      }}
    >
      {/* Gradiente esquina opuesta — muy sutil */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(192,132,252,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Label */}
        <motion.p {...fadeUp(0.1)} className="label-tag mb-8 justify-center">
          Laboratorio Digital · Chile
        </motion.p>

        {/* Headline — peso variable */}
        <h1 className="heading-xl mb-6" style={{ letterSpacing: "-0.04em" }}>
          <motion.span
            {...fadeUp(0.2)}
            className="block"
            style={{ fontWeight: 300, color: "var(--text-1)" }}
          >
            El puente entre tu
          </motion.span>
          <motion.span
            {...fadeUp(0.32)}
            className="block"
            style={{ fontWeight: 700, color: "var(--text-1)" }}
          >
            idea y una realidad{" "}
            <span style={{ color: "var(--accent)" }}>digital.</span>
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.46)} className="body-lg max-w-xl mx-auto mb-10">
          Creamos marcas y experiencias digitales de alto impacto para emprendedores
          y Pymes que exigen autoridad, precisión y resultados medibles.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.58)} className="flex flex-wrap gap-4 justify-center mb-20">
          <Link href="/contacto" className="btn-primary px-8 py-4 text-base">
            ¿Comenzamos el experimento? →
          </Link>
          <Link href="/servicios" className="btn-outline px-8 py-4 text-base">
            Ver servicios
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.72)}
          className="flex flex-wrap justify-center"
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-5 px-8"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                className="text-2xl font-bold mb-1"
                style={{ color: "var(--text-1)", fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.03em" }}
              >
                {s.value}
              </span>
              <span className="text-xs" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
