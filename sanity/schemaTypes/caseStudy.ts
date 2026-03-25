import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Casos de Estudio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título del Proyecto",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Cliente",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoría de Servicio",
      type: "string",
      options: {
        list: [
          { title: "Branding & ADN de Marca", value: "branding" },
          { title: "Diseño de Producto Digital (UX/UI)", value: "uxui" },
          { title: "Consultoría Digital & Performance", value: "consultoria" },
          { title: "Identity Pack", value: "identity" },
          { title: "Landing Page", value: "landing" },
          { title: "Web Corporativa", value: "web" },
          { title: "Presentación de Impacto", value: "presentacion" },
        ],
      },
    }),
    defineField({
      name: "coverImage",
      title: "Imagen de Portada",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "challenge",
      title: "El Reto",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "solution",
      title: "La Solución en el Laboratorio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "result",
      title: "El Resultado",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "tags",
      title: "Etiquetas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Destacado en Home",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "client", media: "coverImage" },
  },
});
