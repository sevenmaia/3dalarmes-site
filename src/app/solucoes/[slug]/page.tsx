import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { services } from "@/data/services";
import { contact } from "@/data/contact";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Serviço não encontrado" };

  return {
    title: `${service.title} em Manaus — 3D ALARMES`,
    description: service.shortDescription,
  };
}

export default function SingleServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const quoteWaUrl = `https://wa.me/${contact.whatsapp.sales.clean}?text=${encodeURIComponent(
    `Olá! Gostaria de um orçamento especializado para ${service.title} com a 3D ALARMES.`
  )}`;

  return (
    <>
      {/* 1. HERO DO SERVIÇO */}
      <section className="relative bg-navy-950 text-white pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden border-b border-navy-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        <div className="max-w-container mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-400 inline-flex items-center gap-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                SERVIÇOS ESPECIALIZADOS EM MANAUS
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                {service.title}{" "}
                <span className="text-yellow-400 block sm:inline">
                  em Manaus.
                </span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-blue-300 font-semibold">
                {service.subtitle}
              </p>

              <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-normal">
                {service.shortDescription}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button
                  href={quoteWaUrl}
                  isExternal
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5 text-navy-950" />}
                >
                  Solicitar Orçamento
                </Button>

                <Button
                  href={`tel:${contact.phones.primaryClean}`}
                  variant="outline-white"
                  size="lg"
                  icon={<Phone className="w-4 h-4" />}
                >
                  Ligar para {contact.phones.primary}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-navy-900/50">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O QUE É E DETALHES TÉCNICOS */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 inline-flex items-center gap-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              VISÃO GERAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight leading-[1.15]">
              Como funciona o sistema de {service.title}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* BENEFÍCIOS E CARACTERÍSTICAS TÉCNICAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-navy-950 mb-6 flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                Principais Benefícios
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-950 text-white rounded-2xl p-8 border border-navy-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-yellow-400" />
                Especificações e Diferenciais
              </h3>
              <ul className="space-y-4">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0 mt-2" />
                    <span className="text-sm sm:text-base text-gray-300 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARA QUEM SERVE */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 mb-8">
            Para quem é indicado este serviço?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.targetAudience.map((audience, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mb-3 text-sm">
                  {idx + 1}
                </div>
                <p className="text-sm sm:text-base font-semibold text-navy-950 leading-snug">
                  {audience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PERGUNTAS FREQUENTES (FAQ) */}
      {service.faqs.length > 0 && (
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 inline-flex items-center gap-1.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                TIRA-DÚVIDAS
              </span>
              <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
                Perguntas Frequentes sobre {service.title}
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                >
                  <h3 className="text-base font-bold text-navy-950 flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FINAL CTA */}
      <FinalCTA
        badge="ORÇAMENTO SOB MEDIDA"
        title={`Proteja seu imóvel com ${service.title}`}
        highlightText={service.title}
        subtitle="Solicite uma visita técnica sem compromisso de nossa equipe especializada em Manaus."
      />
    </>
  );
}
