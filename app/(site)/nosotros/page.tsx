"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  { title: "No elegimos lo seguro",               icon: "◈", description: "Elegimos lo que reta, lo que incomoda y lo que transforma. Solo en ese territorio nace lo auténtico." },
  { title: "El experimento como método",           icon: "◎", description: "Cada variable se somete a prueba rigurosa. La experimentación no es azarosa, es una metodología de precisión." },
  { title: "El cliente como co-experimentador",   icon: "◉", description: "No trabajamos para el cliente, trabajamos con él. Su contexto es parte fundamental del experimento." },
  { title: "Estética con propósito",              icon: "✦", description: "Lo bello no es suficiente. Cada decisión visual responde a un objetivo de negocio medible." },
];

const audience = [
  { num: "01", title: "Emprendedores",         desc: "Con una idea poderosa pero sin la estructura técnica para proyectar su verdadero potencial." },
  { num: "02", title: "Pymes en crecimiento",  desc: "Que exigen profesionalismo y autoridad desde el primer día, sin tiempos de espera." },
  { num: "03", title: "Marcas en transición",  desc: "Que saben que necesitan cambiar pero buscan un aliado estratégico para hacerlo bien." },
];

export default function NosotrosPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <p className="label-tag mb-6">Sobre Nosotros</p>
            <h1 className="heading-xl mb-6 max-w-3xl" style={{ color: "var(--text-1)" }}>
              No somos una agencia.<br />
              <span style={{ color: "var(--accent)" }}>Somos un laboratorio.</span>
            </h1>
            <p className="body-lg max-w-xl">Donde las marcas viven, evolucionan y se atreven a desafiar lo predecible.</p>
          </motion.div>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="py-20 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="label-tag mb-5">Manifiesto</p>
            <h2 className="heading-lg mb-6" style={{ color: "var(--text-1)" }}>La aventura digital</h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
              <p>En VenturLab creemos que toda marca merece una aventura: una que comience con una idea audaz y termine transformándose en una experiencia digital memorable.</p>
              <p><span style={{ color: "var(--text-1)", fontWeight: 600 }}>"Ventur"</span> nace de la aventura, del lanzarse y atreverse. No elegimos lo seguro; elegimos lo que reta, lo que incomoda y lo que transforma.</p>
              <p>Somos el laboratorio donde las marcas viven, evolucionan y se atreven a desafiar lo predecible.</p>
              <p style={{ color: "var(--accent)", fontWeight: 600 }}>La aventura digital comienza aquí.</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}>Nuestro enfoque</p>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card p-6 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold" style={{ color: "var(--text-1)", fontFamily: "var(--font-space-grotesk)" }}>{v.title}</h3>
                  <span className="text-lg opacity-20 group-hover:opacity-60 transition-opacity duration-300 flex-shrink-0 ml-3" style={{ color: "var(--accent)" }}>{v.icon}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mb-12">
            <p className="label-tag mb-5">¿Para quién somos?</p>
            <h2 className="heading-lg max-w-xl" style={{ color: "var(--text-1)" }}>Trabajamos con marcas valientes</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audience.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.1, duration: 0.55 }} className="card p-8 group">
                <span className="text-xs font-mono block mb-4" style={{ color: "var(--text-3)" }}>{item.num}</span>
                <h3 className="heading-sm mb-3" style={{ color: "var(--text-1)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{item.desc}</p>
                <div className="mt-5 h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: "var(--border)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#0A0A0F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,111,245,0.12), transparent 65%)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="heading-lg mb-4" style={{ color: "#fff" }}>¿Te identificas?</h2>
            <p className="body-lg mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>Si estás listo para la aventura, nosotros tenemos el laboratorio.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacto" className="btn-primary px-8 py-4 text-base">Hablemos →</Link>
              <Link href="/servicios" className="btn-outline-invert px-8 py-4 text-base">Ver servicios</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
