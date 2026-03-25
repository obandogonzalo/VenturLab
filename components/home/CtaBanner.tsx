"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: "#0A0A0F" }}
    >
      {/* Gradiente sutil en la parte superior */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,111,245,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="label-tag mb-6 justify-center"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          ¿Tienes una idea audaz?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="heading-lg mb-4"
          style={{ color: "#FFFFFF" }}
        >
          La aventura digital
          <br />
          <span style={{ color: "var(--accent-lt)" }}>comienza aquí.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.32, duration: 0.5 }}
          className="body-lg max-w-lg mx-auto mb-10"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Hablemos de tu proyecto. Sin compromiso, sin tecnicismos innecesarios.
          Una conversación honesta sobre cómo llevar tu marca al siguiente nivel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.44, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/contacto" className="btn-primary px-8 py-4 text-base">
            Hablemos de tu proyecto →
          </Link>
          <a
            href="https://wa.me/56900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-invert px-8 py-4 text-base"
          >
            WhatsApp directo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
