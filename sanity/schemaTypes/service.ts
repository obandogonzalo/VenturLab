import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Servicios",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del Servicio",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Proyectos de Autor", value: "autor" },
          { title: "Soluciones Modulares", value: "modular" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "painPoints",
      title: "Problemas que Resuelve",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Orden de visualización",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
