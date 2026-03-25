import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { caseStudiesQuery } from "@/sanity/lib/queries";
import PortafolioGrid from "@/components/portafolio/PortafolioGrid";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Casos de estudio de VenturLab. Proyectos de branding, diseño web y consultoría digital.",
};

const placeholderCases = [
  { _id: "placeholder-1", title: "Marca que Rompe el Molde", client: "Startup Fintech", category: "branding", challenge: "Una startup de pagos digitales con un producto poderoso pero una identidad genérica que no transmitía confianza.", result: "Nuevo ADN de marca con 40% más de engagement en redes y conversión duplicada en la landing.", tags: ["Branding", "Estrategia"], slug: { current: "coming-soon" }, coverImage: null, featured: true, publishedAt: "2024-01-01" },
  { _id: "placeholder-2", title: "Plataforma de Gestión SaaS", client: "AgriTech CL", category: "uxui", challenge: "Dashboard complejo con datos críticos que ningún usuario entendía. Alta tasa de abandono en onboarding.", result: "Rediseño UX completo. Tiempo de onboarding reducido en 60%. NPS aumentó de 32 a 67.", tags: ["UX/UI", "Producto Digital"], slug: { current: "coming-soon" }, coverImage: null, featured: true, publishedAt: "2024-02-01" },
  { _id: "placeholder-3", title: "Presencia Digital Premium", client: "Estudio de Arquitectura", category: "web", challenge: "Estudio de arquitectura de lujo con un sitio web de 2018 que contradecía la calidad de su trabajo.", result: "Web corporativa que proyecta la estética del estudio. Tráfico orgánico +120% en 3 meses.", tags: ["Web Corporativa", "SEO"], slug: { current: "coming-soon" }, coverImage: null, featured: false, publishedAt: "2024-03-01" },
  { _id: "placeholder-4", title: "Deck para Serie A", client: "EdTech Startup", category: "presentacion", challenge: "Equipo fundador con una historia de inversión increíble pero una presentación que no la comunicaba.", result: "Deck rediseñado usado en ronda de inversión de USD 2M. Feedback: 'La presentación más clara que hemos visto.'", tags: ["Presentación", "Levantamiento de Capital"], slug: { current: "coming-soon" }, coverImage: null, featured: false, publishedAt: "2024-04-01" },
];

export default async function PortafolioPage() {
  let cases: typeof placeholderCases = [];
  try {
    const sanityData = await client.fetch(caseStudiesQuery);
    cases = sanityData?.length > 0 ? sanityData : placeholderCases;
  } catch {
    cases = placeholderCases;
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-6">Portafolio</p>
          <h1 className="heading-xl mb-6 max-w-3xl" style={{ color: "var(--text-1)" }}>
            Reportes del<br />
            <span style={{ color: "var(--accent)" }}>laboratorio.</span>
          </h1>
          <p className="body-lg max-w-xl">
            Cada proyecto es un experimento con hipótesis clara y resultado medible.
            Estos son algunos de nuestros casos de estudio.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-7xl mx-auto">
          <PortafolioGrid cases={cases} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#0A0A0F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,111,245,0.12), transparent 65%)" }} />
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
