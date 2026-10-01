"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { contact } from "@/data/contact";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AppPreview() {
  const quoteWaUrl = `https://wa.me/${contact.whatsapp.sales.clean}?text=${encodeURIComponent(
    "Olá! Gostaria de um orçamento para segurança na palma da mão via aplicativo com a 3D ALARMES."
  )}`;

  return (
    <section className="relative bg-navy-950 text-white py-24 lg:py-28 overflow-hidden border-y border-navy-850">
      {/* 1. IMAGEM PANORÂMICA DE FUNDO COM REVEAL SUAVE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/generated/home/banner-residencia-dusk.jpg"
          alt="Residência contemporânea protegida ao entardecer"
          fill
          priority
          className="object-cover object-right lg:object-center opacity-85"
        />
        {/* Degradê à esquerda para contraste e legibilidade impecável dos textos */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/25 pointer-events-none" />
        {/* Vinheta sutil superior e inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950/80 pointer-events-none" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          {/* LADO ESQUERDO COM ANIMAÇÃO ENTRANDO DA ESQUERDA */}
          <ScrollReveal direction="left" duration={850} className="max-w-xl flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight leading-[1.08] text-white">
              Sua segurança <br />
              <span className="text-yellow-400">na palma da mão</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-lg">
              Acompanhe suas câmeras, alarmes ou veículos diretamente pelo celular, de onde você estiver.
            </p>

            {/* 3 CHECKS COM ÍCONE AMARELO SÓLIDO */}
            <ul className="mt-7 space-y-3.5">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-navy-950 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-white">
                  Acesso via aplicativo
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-navy-950 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-white">
                  Notificações em tempo real
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-navy-950 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-white">
                  Mais controle e tranquilidade
                </span>
              </li>
            </ul>
          </ScrollReveal>

          {/* LADO DIREITO COM ANIMAÇÃO ENTRANDO DA DIREITA */}
          <ScrollReveal direction="right" duration={850} delay={150} className="flex flex-col items-start lg:items-end text-left lg:text-right shrink-0">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 shrink-0 drop-shadow-[0_10px_25px_rgba(255,214,0,0.35)]">
                <Image
                  src="/logos/logo-3d-left.png"
                  alt="Brasão Oficial 3D ALARMES"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Segurança <br />
                  dentro e fora <br />
                  de casa.
                </p>
              </div>
            </div>

            <a
              href={quoteWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-black text-sm sm:text-base transition-all duration-200 shadow-[0_4px_25px_rgba(255,214,0,0.45)] hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 fill-current text-navy-950 shrink-0" />
              <span>Quero um orçamento</span>
              <ArrowRight className="w-4 h-4 text-navy-950" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
