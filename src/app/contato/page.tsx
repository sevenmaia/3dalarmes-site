import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  ShieldCheck,
  Building,
} from "lucide-react";
import { contact } from "@/data/contact";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contato e Localização em Manaus — 3D ALARMES",
  description:
    "Entre em contato com a 3D ALARMES em Manaus/AM. Telefones (92) 3236-6336 / (92) 3304-4206, WhatsApp e endereço na Av. Constantinopla, Planalto.",
};

export default function ContatoPage() {
  return (
    <>
      {/* 1. HERO CONTATO PADRONIZADO */}
      <section className="relative bg-navy-950 text-white min-h-[440px] lg:min-h-[480px] pt-32 lg:pt-38 pb-16 flex flex-col justify-center overflow-hidden border-b border-navy-900">
        {/* IMAGEM INTEGRADA AO HERO (LADO DIREITO DOMINANTE) */}
        <div className="absolute top-0 right-0 w-full lg:w-[62%] h-full z-0 pointer-events-none overflow-hidden">
          <Image
            src="/assets/generated/home/hero-camera-dome.jpg"
            alt="Atendimento 3D ALARMES em Manaus"
            fill
            priority
            className="object-cover object-top-right lg:object-right opacity-70 lg:opacity-85"
          />
          {/* OVERLAYS DE INTEGRAÇÃO COM DEEP NAVY */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-transparent lg:via-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/50 lg:to-transparent" />
        </div>

        {/* CONTEÚDO HERO */}
        <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-[620px] flex flex-col items-start">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-400 inline-flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-xs">▶</span>
              FALE CONOSCO
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight leading-[1.06] text-white">
              Estamos prontos para<br />
              <span className="text-yellow-400">proteger você.</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl font-normal">
              Atendimento presencial em nossa sede em Manaus ou suporte imediato por telefone e WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CANAIS DE CONTATO + FORMULÁRIO */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200 overflow-hidden">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* INFORMAÇÕES DE CONTATO */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ScrollReveal direction="left" duration={700} once={false}>
                {/* CARD ENDEREÇO */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-1">
                        Nossa Sede
                      </h3>
                      <p className="text-sm text-gray-700 leading-snug font-medium">
                        {contact.address.fullFormatted}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Manaus, Amazonas</p>
                    </div>
                  </div>
                </div>

                {/* CARD TELEFONES */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-1">
                        Central Telefônica
                      </h3>
                      <div className="flex flex-col gap-1 mt-2">
                        <a
                          href={`tel:${contact.phones.primaryClean}`}
                          className="text-base font-extrabold text-navy-950 hover:text-blue-600 transition-colors"
                        >
                          {contact.phones.primary}
                        </a>
                        <a
                          href={`tel:${contact.phones.secondaryClean}`}
                          className="text-base font-extrabold text-navy-950 hover:text-blue-600 transition-colors"
                        >
                          {contact.phones.secondary}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD WHATSAPP OFICIAL */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-1">
                        WhatsApp Comercial
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        Atendimento rápido e envio de propostas
                      </p>
                      <a
                        href={`https://wa.me/${contact.whatsapp.sales.clean}?text=${encodeURIComponent(
                          contact.whatsapp.sales.defaultMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        <span>Conversar no WhatsApp</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD E-MAIL */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-1">
                        E-mail Oficial
                      </h3>
                      <a
                        href={`mailto:${contact.email.primary}`}
                        className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors break-all"
                      >
                        {contact.email.primary}
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* FORMULÁRIO DE ORÇAMENTO */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl">
              <ScrollReveal direction="right" duration={750} delay={100} once={false}>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 inline-flex items-center gap-1.5 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  SOLICITAÇÃO RÁPIDA
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-2">
                  Peça seu orçamento sem compromisso
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 mb-8">
                  Preencha os dados abaixo e entraremos em contato com um plano sob medida para sua residência ou empresa.
                </p>

                <QuoteForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAPA DA LOCALIZAÇÃO DA SEDE EM MANAUS */}
      <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <ScrollReveal direction="down" duration={600} once={false}>
            <div className="mb-8">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 inline-flex items-center gap-1.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                LOCALIZAÇÃO
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">
                Onde estamos em Manaus
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Fácil acesso no Conjunto Campos Elíseos, bairro Planalto.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" duration={750} delay={150} once={false}>
            <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-gray-200 shadow-md">
              <iframe
                src="https://googleusercontent.b-cdn.net/maps/embed?pb=!1m18!1m12!1m3!1d3984.0725359781617!2d-60.05315872412586!3d-3.075429840228383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1001d24c084f%3A0xe4a1cb5d933bb3e!2sAv.%20Constantinopla%2C%20Manaus%20-%20AM!5e0!3m2!1spt-BR!2sbr!4v1727635200000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da 3D ALARMES em Manaus"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <FinalCTA />
    </>
  );
}
