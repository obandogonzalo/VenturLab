import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configuración del Sitio",
  type: "document",
  fields: [
    defineField({ name: "contactEmail", title: "Email de Contacto", type: "string" }),
    defineField({ name: "whatsapp", title: "Número WhatsApp (con código país)", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Redes Sociales",
      type: "object",
      fields: [
        { name: "instagram", title: "Instagram URL", type: "url" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
        { name: "behance", title: "Behance URL", type: "url" },
      ],
    }),
    defineField({ name: "seoTitle", title: "Título SEO por defecto", type: "string" }),
    defineField({ name: "seoDescription", title: "Descripción SEO por defecto", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "seoTitle" } },
});
