"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const autorServices = [
  { name: "Branding & ADN de Marca",              desc: "Propósito, naming, voz y universo visual completo." },
  { name: "Diseño de Producto Digital (UX/UI)",   desc: "Plataformas y ecosistemas centrados en el usuario." },
  { name: "Consultoría Digital & Performance",    desc: "Auditorías UX, automatización y marketing de precisión." },
];

const modularServices = [
  { name: "Identity Pack",               desc: "Kit esencial: logotipo, paleta y tipografía." },
  { name: "Landing Page",                desc: "Estructuras optimizadas para conversión directa." },
  { name: "Web Corporativa",             desc: "Ecosistemas institucionales con CMS integrado." },
  { name: "Presentaciones de Impacto",   desc: "Diseño visual estratégico para ventas e inversión." },
];

function ServiceColumn({
  label,
  badge,
  services,
  ctaText,
  ctaHref,
  delay,
}: {
  label: string;
  badge: string;
  services: { name: string; desc: string }[];
  ctaText: string;
  ctaHref: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="card p-8 flex flex-col gap-6"
    >
      {/* Badge */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold"
          style={{
            background: "var(--accent-dim)",
            color: "var(--accent)",
            fontFamily: "var(--font-space-grotesk)",
            border: "1px solid var(--accent-muted)",
          }}
        >
          {badge}
        </div>
        <p className="label-tag">{label}</p>
      </div>

      {/* Services list */}
      <ul className="flex flex-col">
        {services.map((s, i) => (
          <li
            key={s.name}
            className="py-4 flex flex-col gap-0.5"
            style={{ borderTop: i === 0 ? "1px solid var(--border)" : "1px solid var(--border)" }}
          >
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--text-1)", fontFamily: "var(--font-space-grotesk)" }}
            >
              {s.name}
            </span>
            <span className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
              {s.desc}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={ctaHref}
        className="inline-flex items-center gap-2 text-sm font-medium mt-auto transition-colors group/link"
        style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}
      >
        <span>{ctaText}</span>
        <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
      </Link>
    </motion.div>
  );
}

export default function ServicesPreview() {
  return (
    <section className="py-28 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="label-tag mb-4">Servicios</p>
            <h2 className="heading-lg" style={{ color: "var(--text-1)" }}>
              Dualidad estratégica
            </h2>
          </div>
          <Link
            href="/servicios"
            className="text-sm font-medium animated-underline self-start md:self-end"
            style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}
          >
            Descubre qué solución necesita tu marca →
          </Link>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ServiceColumn
            label="Proyectos de Autor"
            badge="A"
            services={autorServices}
            ctaText="Ver proyectos de autor"
            ctaHref="/servicios"
            delay={0}
          />
          <ServiceColumn
            label="Soluciones Modulares"
            badge="M"
            services={modularServices}
            ctaText="Ver soluciones modulares"
            ctaHref="/servicios"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
