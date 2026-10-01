"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, Clock, Users, ShieldCheck, Wrench } from "lucide-react";
import { contact } from "@/data/contact";

export function HeroHome() {
  const defaultMsg = encodeURIComponent(contact.whatsapp.sales.defaultMessage);
  const waUrl = `https://wa.me/${contact.whatsapp.sales.clean}?text=${defaultMsg}`;

  return (
    <section className="relative bg-navy-950 text-white min-h-[640px] lg:min-h-[720px] pt-32 lg:pt-36 pb-12 flex flex-col justify-between overflow-hidden">
      {/* IMAGEM DA CÂMERA INTEGRADA AO HERO (LADO DIREITO DOMINANTE) */}
      <div className="absolute top-0 right-0 w-full lg:w-[62%] h-full z-0 pointer-events-none overflow-hidden">
        <Image
          src="/assets/generated/home/hero-camera-dome.jpg"
          alt="Câmera de segurança CFTV 3D ALARMES em Manaus"
          fill
          priority
          className="object-cover object-top-right lg:object-right opacity-70 lg:opacity-90"
        />
        {/* OVERLAYS DE INTEGRAÇÃO COM DEEP NAVY */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-transparent lg:via-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60 lg:to-transparent" />
      </div>

      {/* CONTEÚDO PRINCIPAL (CONTAINER) */}
      <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10 my-auto">
        <div className="max-w-[620px] flex flex-col items-start">
          {/* TAG CATEGORIA */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
              SEGURANÇA ELETRÔNICA EM MANAUS
            </span>
          </div>

          {/* HEADLINE PRINCIPAL */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.04] text-white">
            Proteção real <br />
            para o que <br />
            <span className="text-yellow-400">mais importa.</span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="mt-5 text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-[520px]">
            Sistemas de alarme, monitoramento 24 horas, CFTV, cercas elétricas e rastreamento veicular para residências, condomínios e empresas.
          </p>

          {/* BOTÕES DE AÇÃO */}
          <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-extrabold text-sm transition-all duration-200 shadow-[0_4px_20px_rgba(255,214,0,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current text-navy-950 shrink-0" />
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-4 h-4 text-navy-950" />
            </a>

            <Link
              href="/#solucoes"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy-900/60 hover:bg-navy-900/90 text-white font-bold text-sm border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Nossos Serviços</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAIXA INFERIOR DE 4 BENEFÍCIOS CONECTADA AO HERO */}
      <div className="relative z-10 w-full pt-10 mt-12 border-t border-navy-800/80">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-blue-700/80 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-white leading-tight">Monitoramento</p>
                <p className="text-gray-300">24 horas</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-blue-700/80 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-white leading-tight">Equipe especializada</p>
                <p className="text-gray-300">em Manaus</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-blue-700/80 text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-white leading-tight">Projetos personalizados</p>
                <p className="text-gray-300">para cada necessidade</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-blue-700/80 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-white leading-tight">Instalação e suporte</p>
                <p className="text-gray-300">pós-venda contínuo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
