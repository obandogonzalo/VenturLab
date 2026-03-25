"use client";

import { motion } from "framer-motion";

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

export default function PortafolioGrid({ cases }: { cases: Case[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {cases.map((c, i) => (
        <motion.div
          key={c._id}
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="card overflow-hidden group"
        >
          {/* Cover placeholder */}
          <div
            className="h-52 relative overflow-hidden flex items-center justify-center"
            style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(ellipse at center, rgba(124,111,245,0.08) 0%, transparent 70%)" }}
            />
            <div className="text-center relative z-10">
              <div
                className="text-5xl font-bold"
                style={{ color: "rgba(124,111,245,0.40)", fontFamily: "var(--font-space-grotesk)" }}
              >
                {c.client.substring(0, 2).toUpperCase()}
              </div>
              {c.featured && (
                <span className="lab-tag text-[10px] mt-3 inline-flex">Destacado</span>
              )}
            </div>
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
      ))}
    </div>
  );
}
