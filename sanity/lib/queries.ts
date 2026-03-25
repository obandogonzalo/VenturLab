import { groq } from "next-sanity";

export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id, title, slug, client, category, coverImage, challenge, result, tags, featured, publishedAt
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id, title, slug, client, category, coverImage, challenge, solution, result, tags, publishedAt
  }
`;

export const featuredCasesQuery = groq`
  *[_type == "caseStudy" && featured == true] | order(publishedAt desc)[0...3] {
    _id, title, slug, client, category, coverImage, challenge, result, tags
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id, name, category, description, painPoints
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    contactEmail, whatsapp, socialLinks, seoTitle, seoDescription
  }
`;
