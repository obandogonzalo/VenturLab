import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#2B4EED" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/logo-white.svg"
              alt="VenturLab"
              style={{ height: 36, width: "auto", maxWidth: 180 }}
            />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
              El laboratorio donde las marcas viven, evolucionan y se atreven a desafiar lo predecible.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-space-grotesk)" }}>
              Navegación
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-space-grotesk)" }}>
              Contacto
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hola@venturlab.cl"
                className="block text-sm transition-opacity hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                hola@venturlab.cl
              </a>
              <a
                href="https://wa.me/56994509752"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm transition-opacity hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} VenturLab. Todos los derechos reservados.
          </p>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.08em" }}>
            La aventura digital comienza aquí
          </span>
        </div>
      </div>
    </footer>
  );
}
