import Link from "next/link";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div
              className="flex items-center"
              style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "1.125rem", letterSpacing: "-0.02em" }}
            >
              <span style={{ color: "var(--text-1)" }}>Ventur</span>
              <span
                style={{
                  background: "linear-gradient(135deg, #7C6FF5, #C084FC)",
                  borderRadius: 8,
                  padding: "1px 8px 2px",
                  color: "#fff",
                  marginLeft: 1,
                  fontSize: "1rem",
                }}
              >
                lab
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-2)" }}>
              El laboratorio donde las marcas viven, evolucionan y se atreven a desafiar lo predecible.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Navegación
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors animated-underline"
                    style={{ color: "var(--text-2)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Contacto
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hola@venturlab.cl"
                className="block text-sm transition-opacity hover:opacity-70"
                style={{ color: "var(--text-2)" }}
              >
                hola@venturlab.cl
              </a>
              <a
                href="https://wa.me/56900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm transition-opacity hover:opacity-70"
                style={{ color: "var(--text-2)" }}
              >
                WhatsApp →
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              {["Instagram", "LinkedIn", "Behance"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs uppercase tracking-wider transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--text-3)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border-soft)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-3)" }}>
            © {new Date().getFullYear()} VenturLab. Todos los derechos reservados.
          </p>
          <span className="label-tag">La aventura digital comienza aquí</span>
        </div>
      </div>
    </footer>
  );
}
