"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "IA",   label: "Potenciado por inteligencia artificial" },
  { value: "100%", label: "Enfoque estratégico" },
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
      style={{ background: "#0D0828" }}
    >
      {/* Blob morado — arriba izquierda */}
      <div className="absolute pointer-events-none" style={{
        top: "-15%", left: "-10%", width: "65%", height: "75%",
        background: "radial-gradient(ellipse, rgba(120,50,250,0.72) 0%, rgba(100,39,227,0.28) 45%, transparent 70%)",
        animation: "gradient-drift 14s ease-in-out infinite",
        filter: "blur(40px)",
      }} />
      {/* Blob azul — centro */}
      <div className="absolute pointer-events-none" style={{
        top: "5%", left: "20%", width: "60%", height: "65%",
        background: "radial-gradient(ellipse, rgba(61,82,237,0.62) 0%, transparent 65%)",
        animation: "gradient-drift-2 18s ease-in-out infinite",
        filter: "blur(45px)",
      }} />
      {/* Blob teal — derecha */}
      <div className="absolute pointer-events-none" style={{
        top: "10%", right: "-10%", width: "50%", height: "65%",
        background: "radial-gradient(ellipse, rgba(51,215,182,0.48) 0%, rgba(30,160,140,0.15) 55%, transparent 70%)",
        animation: "gradient-drift-3 20s ease-in-out infinite",
        filter: "blur(40px)",
      }} />
      {/* Blob magenta — izquierda baja */}
      <div className="absolute pointer-events-none" style={{
        top: "35%", left: "-5%", width: "30%", height: "45%",
        background: "radial-gradient(ellipse, rgba(200,50,255,0.48) 0%, transparent 65%)",
        animation: "gradient-drift 22s ease-in-out infinite reverse",
        filter: "blur(50px)",
      }} />

      {/* Trama de puntos — sutil */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 0.7px, transparent 0.7px)",
        backgroundSize: "28px 28px",
        opacity: 0.6,
      }} />

      {/* Contenido */}
      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Label */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-8">
          <span className="lab-tag" style={{
            background: "rgba(255,255,255,0.08)",
            borderColor: "rgba(255,255,255,0.18)",
            color: "rgba(255,255,255,0.85)",
          }}>
            El laboratorio digital de Chile
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="heading-xl mb-6" style={{ letterSpacing: "-0.04em" }}>
          <motion.span
            {...fadeUp(0.2)}
            className="block"
            style={{ fontWeight: 300, color: "rgba(255,255,255,0.88)" }}
          >
            El puente entre tu
          </motion.span>
          <motion.span
            {...fadeUp(0.32)}
            className="block"
            style={{ fontWeight: 700, color: "#ffffff" }}
          >
            idea y una realidad{" "}
            <span className="gradient-text">digital.</span>
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.46)}
          className="body-lg max-w-xl mx-auto mb-10"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Creamos marcas y experiencias digitales de alto impacto para emprendedores
          y Pymes que exigen autoridad, precisión y resultados medibles.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.58)} className="flex flex-wrap gap-4 justify-center mb-16">
          <Link href="/contacto" className="btn-primary px-8 py-4 text-base">
            Comenzar proyecto →
          </Link>
          <Link href="/servicios" className="btn-outline-invert px-8 py-4 text-base">
            Ver servicios
          </Link>
        </motion.div>

        {/* Stats — grid 2×2 liquid glass */}
        <motion.div
          {...fadeUp(0.72)}
          className="grid grid-cols-2 gap-3 max-w-sm mx-auto"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-5 px-4 rounded-2xl"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <span
                className="text-3xl font-bold mb-2 gradient-text"
                style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.03em" }}
              >
                {s.value}
              </span>
              <span
                className="text-sm text-center leading-snug"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-space-grotesk)" }}
              >
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
            <path d="M8 3v10M4 9l4 4 4-4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
