"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categoryLabels: Record<string, string> = {
  branding: "Branding", uxui: "UX/UI", consultoria: "Consultoría",
  identity: "Identity Pack", landing: "Landing Page", web: "Web Corporativa", presentacion: "Presentación",
};

type Case = {
  _id: string; title: string; client: string; category: string;
  challenge: string; result: string; tags: string[];
  slug: { current: string }; coverImage: null | { asset: { _ref: string } };
  featured: boolean; publishedAt: string;
};

const mockupSets = [
  [
    "linear-gradient(135deg, #6427E3 0%, #3D52D5 100%)",
    "linear-gradient(135deg, #3D52D5 0%, #7C6FF5 100%)",
    "linear-gradient(135deg, #4A35D9 0%, #5A3EE8 100%)",
  ],
  [
    "linear-gradient(135deg, #3D52D5 0%, #6427E3 100%)",
    "linear-gradient(135deg, #6427E3 0%, #B625EF 100%)",
    "linear-gradient(135deg, #5535D0 0%, #3D52D5 100%)",
  ],
  [
    "linear-gradient(135deg, #5A3EE8 0%, #3D52D5 100%)",
    "linear-gradient(135deg, #3D52D5 0%, #6427E3 100%)",
    "linear-gradient(135deg, #6427E3 0%, #7C6FF5 100%)",
  ],
  [
    "linear-gradient(135deg, #7C6FF5 0%, #6427E3 100%)",
    "linear-gradient(135deg, #6427E3 0%, #3D52D5 100%)",
    "linear-gradient(135deg, #3D52D5 0%, #4A35D9 100%)",
  ],
];

export default function PortafolioGrid({ cases }: { cases: Case[] }) {
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});
  const getSlide = (id: string) => activeSlides[id] ?? 0;
  const setSlide = (id: string, idx: number) => setActiveSlides(prev => ({ ...prev, [id]: idx }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {cases.map((c, i) => {
        const mockups = mockupSets[i % mockupSets.length];
        const activeIdx = getSlide(c._id);
        return (
        <motion.div
          key={c._id}
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="card overflow-hidden group"
        >
          {/* Cover slideshow */}
          <div
            className="h-52 relative overflow-hidden"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            {/* Mockup slides */}
            {mockups.map((bg, idx) => (
              <div
                key={idx}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ background: bg, opacity: idx === activeIdx ? 1 : 0 }}
              >
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-6xl font-bold select-none"
                    style={{ color: "rgba(255,255,255,0.12)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {c.client.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                {/* Grid pattern overlay */}
                <div className="absolute inset-0" style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }} />
              </div>
            ))}

            {/* Featured badge */}
            {c.featured && (
              <span className="absolute top-3 left-3 z-10 lab-tag text-[10px]"
                style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.9)" }}>
                Destacado
              </span>
            )}

            {/* Slide dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {mockups.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(c._id, idx)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: idx === activeIdx ? 16 : 6,
                    height: 6,
                    background: idx === activeIdx ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                  }}
                  aria-label={`Imagen ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next arrows */}
            <button
              onClick={() => setSlide(c._id, (activeIdx - 1 + mockups.length) % mockups.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(0,0,0,0.3)" }}
              aria-label="Anterior"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7 2L3 6l4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => setSlide(c._id, (activeIdx + 1) % mockups.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(0,0,0,0.3)" }}
              aria-label="Siguiente"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M5 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>
                {categoryLabels[c.category] || c.category}
              </span>
              <span className="text-xs font-mono" style={{ color: "var(--text-3)" }}>{c.client}</span>
            </div>

            <h3 className="heading-sm mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: "var(--text-1)" }}>
              {c.title}
            </h3>

            <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text-2)" }}>
              {c.challenge}
            </p>

            {c.result && (
              <div className="p-4 rounded-xl mb-4" style={{ background: "var(--accent-dim)", border: "1px solid var(--accent-muted)" }}>
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--accent)", fontFamily: "var(--font-space-grotesk)" }}>El Resultado</p>
                <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--text-2)" }}>{c.result}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {c.tags?.map((tag) => (
                <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full" style={{ background: "var(--bg-3)", color: "var(--text-3)", border: "1px solid var(--border)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        );
      })}
    </div>
  );
}
