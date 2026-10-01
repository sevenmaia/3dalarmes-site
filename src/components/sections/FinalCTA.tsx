"use client";

import React from "react";
import { MessageCircle, Clock, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { contact } from "@/data/contact";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FinalCTAProps {
  badge?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
}

export function FinalCTA({
  badge = "SOLICITE UM ORÇAMENTO",
  title = "Vamos proteger o que é importante para você?",
  highlightText = "o que é importante para você?",
  subtitle = "Fale agora com nossa equipe e receba uma proposta personalizada.",
}: FinalCTAProps) {
  const defaultMsg = encodeURIComponent(contact.whatsapp.sales.defaultMessage);
  const waUrl = `https://wa.me/${contact.whatsapp.sales.clean}?text=${defaultMsg}`;

  let renderedTitle: React.ReactNode = title;
  if (highlightText && title.includes(highlightText)) {
    const parts = title.split(highlightText);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="text-yellow-400 block sm:inline">{highlightText}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden border-t border-navy-800">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-navy-850">
          {/* LADO ESQUERDO COM REVELAÇÃO LATERAL ESQUERDA */}
          <ScrollReveal direction="left" duration={700} once={false} className="max-w-2xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
                {badge}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight text-white">
                {renderedTitle}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-gray-300">
                {subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* LADO DIREITO: BOTÃO WHATSAPP COM ENTRADA LATERAL DIREITA */}
          <ScrollReveal direction="right" duration={700} delay={150} once={false} className="shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-extrabold text-sm sm:text-base transition-all duration-200 shadow-[0_4px_25px_rgba(255,214,0,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-current text-navy-950 shrink-0" />
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-5 h-5 text-navy-950" />
            </a>
          </ScrollReveal>
        </div>

        {/* 3 BENEFÍCIOS INFERIORES SUBINDO COM DELAY */}
        <ScrollReveal direction="up" duration={600} delay={250} once={false}>
          <div className="pt-8 flex flex-wrap items-center justify-start gap-8 sm:gap-12 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="font-semibold text-white">Atendimento rápido</span>
            </div>

            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="font-semibold text-white">Sem compromisso</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="font-semibold text-white">Equipe especializada</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
