import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://venturlab.cl";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/servicios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/metodologia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/portafolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
  ];

  try {
    const cases = await client.fetch(
      groq`*[_type == "caseStudy"]{ slug, publishedAt }`
    );

    const caseRoutes: MetadataRoute.Sitemap = cases.map((c: { slug: { current: string }; publishedAt: string }) => ({
      url: `${baseUrl}/portafolio/${c.slug.current}`,
      lastModified: new Date(c.publishedAt || Date.now()),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    return [...staticRoutes, ...caseRoutes];
  } catch {
    return staticRoutes;
  }
}
