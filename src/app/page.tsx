import React from "react";
import { HeroHome } from "@/components/sections/HeroHome";
import { ServicesHome } from "@/components/sections/ServicesHome";
import { AboutHome } from "@/components/sections/AboutHome";
import { AppPreview } from "@/components/sections/AppPreview";
import { TestimonialsHome } from "@/components/sections/TestimonialsHome";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO COM CÂMERA E FACHADA RESIDENCIAL */}
      <HeroHome />

      {/* 2. SOLUÇÕES COMPLETAS EM SEGURANÇA ELETRÔNICA (5 SERVIÇOS) */}
      <ServicesHome />

      {/* 3. MAIS DE 20 ANOS LIDERANDO EM MANAUS (SOBRE A 3D ALARMES) */}
      <AboutHome />

      {/* 4. SUA SEGURANÇA NA PALMA DA MÃO (APP MÓVEL + BRASÃO) */}
      <AppPreview />

      {/* 5. DEPOIMENTOS DE CLIENTES REAIS DE MANAUS */}
      <TestimonialsHome />

      {/* 6. BANNER DE CONVERSÃO FINAL PARA O WHATSAPP */}
      <FinalCTA />
    </>
  );
}
