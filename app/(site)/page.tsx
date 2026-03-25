import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Attributes from "@/components/home/Attributes";
import ServicesPreview from "@/components/home/ServicesPreview";
import MethodPreview from "@/components/home/MethodPreview";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "VenturLab — Laboratorio Digital",
  description:
    "El puente entre tu idea y una realidad digital impecable. Branding, diseño web estratégico y consultoría digital para marcas valientes.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Attributes />
      <ServicesPreview />
      <MethodPreview />
      <CtaBanner />
    </>
  );
}
