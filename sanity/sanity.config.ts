"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "VenturLab CMS",
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("VenturLab CMS")
          .items([
            S.listItem().title("Casos de Estudio").schemaType("caseStudy").child(
              S.documentTypeList("caseStudy").title("Casos de Estudio")
            ),
            S.listItem().title("Servicios").schemaType("service").child(
              S.documentTypeList("service").title("Servicios")
            ),
            S.divider(),
            S.listItem().title("Configuración del Sitio").id("siteSettings").child(
              S.document().schemaType("siteSettings").documentId("siteSettings")
            ),
          ]),
    }),
    visionTool(),
  ],
});
