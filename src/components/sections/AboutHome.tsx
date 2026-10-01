"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, MapPin, Headphones, ShieldCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutHome() {
  return (
    <section id="sobre" className="py-20 lg:py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* FOTOGRAFIA COM ANIMAÇÃO LATERAL ENTRANDO DA ESQUERDA */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="left" duration={850} className="w-full max-w-[460px]">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                <Image
                  src="/assets/generated/home/sobre-tecnico.jpg"
                  alt="Profissional técnico da 3D ALARMES em Manaus"
                  fill
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* CONTEÚDO COM ANIMAÇÃO LATERAL ENTRANDO DA DIREITA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal direction="right" duration={800}>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
                SOBRE A 3D ALARMES
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy-950 tracking-tight leading-tight">
                Mais de 20 anos liderando <br />
                <span className="text-navy-950">em segurança em Manaus</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                A <strong className="text-navy-950 font-bold">3D ALARMES</strong> é uma empresa especializada em soluções de segurança eletrônica. Atuamos há mais de 20 anos com foco em qualidade, tecnologia e atendimento próximo ao cliente.
              </p>

              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                Nosso objetivo é oferecer tranquilidade para você, sua família e seu patrimônio, com projetos personalizados e suporte contínuo.
              </p>
            </ScrollReveal>

            {/* 4 DIFERENCIAIS COM ANIMAÇÃO SUBINDO EM CASCATA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-lg">
              <ScrollReveal direction="up" delay={150} duration={650}>
                <div className="flex items-center gap-3 bg-gray-50/80 p-3 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-navy-950">
                    Equipe especializada
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250} duration={650}>
                <div className="flex items-center gap-3 bg-gray-50/80 p-3 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-navy-950">
                    Atendimento em Manaus
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={350} duration={650}>
                <div className="flex items-center gap-3 bg-gray-50/80 p-3 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-navy-950">
                    Suporte pós-venda
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={450} duration={650}>
                <div className="flex items-center gap-3 bg-gray-50/80 p-3 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-navy-950">
                    Projetos personalizados
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* BOTÃO CONHEÇA NOSSA HISTÓRIA */}
            <ScrollReveal direction="up" delay={500} duration={600} className="mt-10">
              <Link
                href="/a-empresa"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-black text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,214,0,0.35)] hover:-translate-y-0.5"
              >
                <span>Conheça nossa história</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
