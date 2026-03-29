"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const allServices = [
  { name: "Branding & ADN de Marca", desc: "Propósito, naming, voz y universo visual completo.", icon: "◈" },
  { name: "Diseño de Producto Digital (UX/UI)", desc: "Plataformas y ecosistemas centrados en el usuario.", icon: "◎" },
  { name: "Consultoría Digital & Performance", desc: "Auditorías UX, automatización y marketing de precisión.", icon: "◉" },
  { name: "Identity Pack", desc: "Kit esencial: logotipo, paleta y tipografía.", icon: "◇" },
  { name: "Landing Page", desc: "Estructuras optimizadas para conversión directa.", icon: "◈" },
  { name: "Web Corporativa", desc: "Ecosistemas institucionales con CMS integrado.", icon: "◉" },
  { name: "Presentaciones de Impacto", desc: "Diseño visual estratégico para ventas e inversión.", icon: "✦" },
];

export default function ServicesPreview() {
  return (
    <section className="py-28 px-6 relative overflow-hidden" style={{ background: "#1A9E85" }}>
      {/* Trama de líneas — sutil, estilo hero */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        opacity: 0.8,
      }} />
      {/* Brillos verdes claros */}
      <div className="absolute pointer-events-none" style={{ top: "-20%", right: "-10%", width: "60%", height: "95%", background: "radial-gradient(ellipse, rgba(180,255,235,1) 0%, transparent 60%)", filter: "blur(38px)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-10%", left: "-10%", width: "55%", height: "75%", background: "radial-gradient(ellipse, rgba(110,255,218,1) 0%, transparent 60%)", filter: "blur(38px)" }} />
      <div className="absolute pointer-events-none" style={{ top: "20%", left: "25%", width: "50%", height: "60%", background: "radial-gradient(ellipse, rgba(215,255,244,0.88) 0%, transparent 60%)", filter: "blur(42px)" }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="label-tag mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Servicios</p>
            <h2 className="heading-lg" style={{ color: "#FFFFFF" }}>
              Conoce nuestros servicios
            </h2>
          </div>
          <Link
            href="/servicios"
            className="text-sm font-medium animated-underline self-start md:self-end"
            style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-space-grotesk)" }}
          >
            Ver todos los servicios →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allServices.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 flex flex-col gap-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.80)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.60)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                minHeight: 160,
              }}
            >
              <h3 className="heading-md leading-snug" style={{ color: "var(--text-1)", fontFamily: "var(--font-space-grotesk)" }}>{s.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
