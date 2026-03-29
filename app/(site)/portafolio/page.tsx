"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { caseStudiesQuery } from "@/sanity/lib/queries";
import PortafolioGrid from "@/components/portafolio/PortafolioGrid";
import { useState, useEffect } from "react";

const placeholderCases = [
  { _id: "placeholder-1", title: "Marca que Rompe el Molde", client: "Startup Fintech", category: "branding", challenge: "Una startup de pagos digitales con un producto poderoso pero una identidad genérica que no transmitía confianza.", result: "Nuevo ADN de marca con 40% más de engagement en redes y conversión duplicada en la landing.", tags: ["Branding", "Estrategia"], slug: { current: "coming-soon" }, coverImage: null, featured: true, publishedAt: "2024-01-01" },
  { _id: "placeholder-2", title: "Plataforma de Gestión SaaS", client: "AgriTech CL", category: "uxui", challenge: "Dashboard complejo con datos críticos que ningún usuario entendía. Alta tasa de abandono en onboarding.", result: "Rediseño UX completo. Tiempo de onboarding reducido en 60%. NPS aumentó de 32 a 67.", tags: ["UX/UI", "Producto Digital"], slug: { current: "coming-soon" }, coverImage: null, featured: true, publishedAt: "2024-02-01" },
  { _id: "placeholder-3", title: "Presencia Digital Premium", client: "Estudio de Arquitectura", category: "web", challenge: "Estudio de arquitectura de lujo con un sitio web de 2018 que contradecía la calidad de su trabajo.", result: "Web corporativa que proyecta la estética del estudio. Tráfico orgánico +120% en 3 meses.", tags: ["Web Corporativa", "SEO"], slug: { current: "coming-soon" }, coverImage: null, featured: false, publishedAt: "2024-03-01" },
  { _id: "placeholder-4", title: "Deck para Serie A", client: "EdTech Startup", category: "presentacion", challenge: "Equipo fundador con una historia de inversión increíble pero una presentación que no la comunicaba.", result: "Deck rediseñado usado en ronda de inversión de USD 2M. Feedback: 'La presentación más clara que hemos visto.'", tags: ["Presentación", "Levantamiento de Capital"], slug: { current: "coming-soon" }, coverImage: null, featured: false, publishedAt: "2024-04-01" },
];

function IsoIllustrationPortafolio() {
  // Concepto: galería asimétrica — card destacada + 4 mini-cards de proyectos
  return (
    <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 380 }}>
      <defs>
        <linearGradient id="gPort1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6427E3"/>
          <stop offset="100%" stopColor="#3D52D5"/>
        </linearGradient>
        <linearGradient id="gPort2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#33D7B6"/>
          <stop offset="100%" stopColor="#5EC9A8"/>
        </linearGradient>
        <linearGradient id="gPort3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B625EF"/>
          <stop offset="100%" stopColor="#6427E3"/>
        </linearGradient>
        <linearGradient id="gPort4" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D52D5"/>
          <stop offset="100%" stopColor="#7C6FF5"/>
        </linearGradient>
        <linearGradient id="gPort5" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6427E3"/>
          <stop offset="100%" stopColor="#B625EF"/>
        </linearGradient>
        <filter id="shadowPort" x="-20%" y="-20%" width="145%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="rgba(61,82,213,0.28)"/>
        </filter>
        <filter id="shadowPortSm" x="-20%" y="-20%" width="145%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="rgba(61,82,213,0.22)"/>
        </filter>
      </defs>

      {/* ── Card destacada — izquierda, alta ── */}
      <rect x="25" y="50" width="108" height="178" rx="16" fill="url(#gPort1)" filter="url(#shadowPort)"/>
      {/* Highlight */}
      <line x1="40" y1="51" x2="118" y2="51" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Pill label */}
      <rect x="38" y="68" width="52" height="15" rx="7.5" fill="rgba(255,255,255,0.18)"/>
      <text x="64" y="79" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="7.5" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600" letterSpacing="0.07em">PORTAFOLIO</text>
      {/* Estrella central */}
      <line x1="79" y1="122" x2="79" y2="148" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="66" y1="135" x2="92" y2="135" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="70" y1="126" x2="88" y2="144" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="88" y1="126" x2="70" y2="144" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
      {/* Barras inferiores */}
      <rect x="38" y="190" width="60" height="8" rx="4" fill="rgba(255,255,255,0.28)"/>
      <rect x="38" y="204" width="44" height="8" rx="4" fill="rgba(255,255,255,0.16)"/>
      {/* Borde blanco featured */}
      <rect x="25" y="50" width="108" height="178" rx="16" fill="none" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1.5"/>

      {/* ── Mini-card A (top-left pequeño) ── */}
      <rect x="145" y="50" width="72" height="80" rx="12" fill="url(#gPort2)" filter="url(#shadowPortSm)"/>
      <line x1="157" y1="51" x2="206" y2="51" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="155" y="66" width="40" height="6" rx="3" fill="rgba(255,255,255,0.35)"/>
      <rect x="155" y="78" width="26" height="6" rx="3" fill="rgba(255,255,255,0.22)"/>
      <circle cx="191" cy="106" r="9" fill="rgba(255,255,255,0.22)"/>
      <polyline points="186,106 189,110 196,103" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

      {/* ── Mini-card B (top-right) ── */}
      <rect x="229" y="50" width="72" height="80" rx="12" fill="url(#gPort3)" filter="url(#shadowPortSm)"/>
      <line x1="241" y1="51" x2="290" y2="51" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="241" y="66" width="36" height="6" rx="3" fill="rgba(255,255,255,0.30)"/>
      <rect x="241" y="78" width="48" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>
      <rect x="241" y="96" width="18" height="18" rx="5" fill="rgba(255,255,255,0.2)"/>
      <rect x="261" y="96" width="18" height="18" rx="5" fill="rgba(255,255,255,0.12)"/>

      {/* ── Mini-card C (bottom-left) ── */}
      <rect x="145" y="148" width="72" height="80" rx="12" fill="url(#gPort4)" filter="url(#shadowPortSm)"/>
      <line x1="157" y1="149" x2="206" y2="149" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Mini bar chart */}
      <rect x="158" y="177" width="7" height="18" rx="2" fill="rgba(255,255,255,0.25)"/>
      <rect x="168" y="169" width="7" height="26" rx="2" fill="rgba(255,255,255,0.40)"/>
      <rect x="178" y="173" width="7" height="22" rx="2" fill="rgba(255,255,255,0.30)"/>
      <rect x="188" y="183" width="7" height="12" rx="2" fill="rgba(255,255,255,0.20)"/>
      <line x1="158" y1="196" x2="196" y2="196" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>

      {/* ── Mini-card D (bottom-right) ── */}
      <rect x="229" y="148" width="72" height="80" rx="12" fill="url(#gPort5)" filter="url(#shadowPortSm)"/>
      <line x1="241" y1="149" x2="290" y2="149" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="241" y="166" width="50" height="6" rx="3" fill="rgba(255,255,255,0.30)"/>
      <rect x="241" y="178" width="36" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>
      <rect x="241" y="196" width="50" height="7" rx="3.5" fill="rgba(255,255,255,0.15)"/>
      <rect x="241" y="196" width="32" height="7" rx="3.5" fill="rgba(255,255,255,0.30)"/>

    </svg>
  );
}

export default function PortafolioPage() {
  const [cases, setCases] = useState<typeof placeholderCases>(placeholderCases);

  useEffect(() => {
    client.fetch(caseStudiesQuery)
      .then((data) => {
        if (data?.length > 0) setCases(data);
      })
      .catch(() => {
        // keep placeholders
      });
  }, []);

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
              <h1 className="heading-xl mb-6 max-w-3xl" style={{ color: "var(--text-1)" }}>
                Reportes del<br />
                <span className="gradient-text">laboratorio.</span>
              </h1>
              <p className="body-lg max-w-xl">
                Cada proyecto es un experimento con hipótesis clara y resultado medible.
                Estos son algunos de nuestros casos de estudio.
              </p>
            </motion.div>
            {/* Ilustración — derecha */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <IsoIllustrationPortafolio />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-7xl mx-auto">
          <PortafolioGrid cases={cases} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#1E1E2E" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(61,82,213,0.15), transparent 65%)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="heading-lg mb-4" style={{ color: "#fff" }}>¿Tu proyecto podría ser el próximo?</h2>
          <p className="body-lg mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>Cuéntanos el reto. Nosotros diseñamos el experimento.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contacto" className="btn-primary px-8 py-4 text-base">Comenzar proyecto →</Link>
            <Link href="/servicios" className="btn-outline-invert px-8 py-4 text-base">Ver servicios</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
