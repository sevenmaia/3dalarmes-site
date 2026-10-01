"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, ShieldAlert, Zap, Car, MonitorCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const homeServicesList = [
  {
    id: "cftv",
    slug: "cftv",
    title: "CFTV",
    description: "Câmeras de alta definição com monitoramento remoto via aplicativo.",
    image: "/assets/generated/home/services/cftv.jpg",
    icon: <Camera className="w-4 h-4 text-white" />,
  },
  {
    id: "alarmes",
    slug: "alarmes",
    title: "Sistemas de Alarme de Intrusão",
    description: "Proteção contra invasões com sensores e central de alarme.",
    image: "/assets/generated/home/services/alarme.jpg",
    icon: <ShieldAlert className="w-4 h-4 text-white" />,
  },
  {
    id: "cercas",
    slug: "cercas-eletricas",
    title: "Cercas Elétricas e Concertinas",
    description: "Mais segurança e proteção para seu imóvel.",
    image: "/assets/generated/home/services/cerca.jpg",
    icon: <Zap className="w-4 h-4 text-white" />,
  },
  {
    id: "rastreamento",
    slug: "rastreamento-veicular",
    title: "Rastreamento de Veículos",
    description: "Acompanhe seu veículo em tempo real e tenha mais tranquilidade.",
    image: "/assets/generated/home/services/rastreamento.jpg",
    icon: <Car className="w-4 h-4 text-white" />,
  },
  {
    id: "monitoramento",
    slug: "monitoramento-24h",
    title: "Monitoramento 24 horas",
    description: "Central de monitoramento com equipe especializada.",
    image: "/assets/generated/home/services/monitoramento.jpg",
    icon: <MonitorCheck className="w-4 h-4 text-white" />,
  },
];

export function ServicesHome() {
  return (
    <section id="solucoes" className="py-20 lg:py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* CABEÇALHO COM ANIMAÇÃO DESCENDO */}
        <ScrollReveal direction="down" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
                NOSSOS SERVIÇOS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy-950 tracking-tight leading-tight">
                Soluções completas em segurança eletrônica
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-2xl">
                Tecnologia, instalação profissional e monitoramento contínuo para residências, empresas e condomínios.
              </p>
            </div>

            <Link
              href="/solucoes"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-bold text-xs sm:text-sm transition-colors self-start md:self-end shrink-0"
            >
              <span>Ver todos os serviços</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* GRADE DE 5 CARDS COM ANIMAÇÃO SUBINDO EM CASCATA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {homeServicesList.map((service, idx) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={idx * 100}
              duration={700}
              className="h-full"
            >
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group h-full">
                {/* IMAGEM COM BADGE FLUTUANTE DE ÍCONE */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* ÍCONE QUADRADO ARREDONDADO AZUL */}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                </div>

                {/* CORPO DO CARD */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base font-bold text-navy-950 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 min-h-[44px]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100">
                    <Link
                      href={`/solucoes/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 group-hover:text-yellow-600 transition-colors"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
