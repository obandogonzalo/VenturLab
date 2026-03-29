"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

function Logo({ scrolled, isHome }: { scrolled: boolean; isHome: boolean }) {
  return (
    <img src={!scrolled && isHome ? "/logo-white.svg" : "/logo.svg"} alt="VenturLab" style={{ height: 44, width: "auto", maxWidth: 200 }} />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? "border-b" : "bg-transparent"
        }`}
        style={scrolled ? {
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-sm)",
        } : {}}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo scrolled={scrolled} isHome={isHome} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-[15px] font-semibold transition-colors duration-200 animated-underline"
                  style={{ color: (!scrolled && isHome) ? "rgba(255,255,255,0.90)" : "var(--text-1)", fontFamily: "var(--font-space-grotesk)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = (!scrolled && isHome) ? "rgba(255,255,255,1)" : "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = (!scrolled && isHome) ? "rgba(255,255,255,0.90)" : "var(--text-1)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:hola@venturlab.cl"
              className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-sm"
            >
              Hablemos
            </a>

            {/* Hamburger — bars oscuras (visibles sobre fondo blanco) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px origin-center"
                style={{ background: (!scrolled && isHome) ? "rgba(255,255,255,0.90)" : "var(--text-1)" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-px"
                style={{ background: (!scrolled && isHome) ? "rgba(255,255,255,0.90)" : "var(--text-1)" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px origin-center"
                style={{ background: (!scrolled && isHome) ? "rgba(255,255,255,0.90)" : "var(--text-1)" }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu — overlay oscuro */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6"
            style={{ background: "rgba(10,10,15,0.97)", backdropFilter: "blur(20px)" }}
          >
            <ul className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-2xl font-semibold border-b transition-colors"
                    style={{
                      borderColor: "rgba(255,255,255,0.08)",
                      color: "#fff",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-lt)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#fff")}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="btn-primary"
              >
                Hablemos de tu proyecto →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
