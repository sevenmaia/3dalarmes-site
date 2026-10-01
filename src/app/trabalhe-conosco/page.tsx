import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Users,
  TrendingUp,
  GraduationCap,
  Award,
  ArrowRight,
  Camera,
  Headphones,
  MonitorCheck,
  Settings,
  MessageCircle,
} from "lucide-react";
import { contact } from "@/data/contact";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Trabalhe Conosco — Faça Parte da Equipe 3D ALARMES em Manaus",
  description:
    "Venha crescer com a 3D ALARMES em Manaus. Confira as vagas em aberto para técnico de instalação, comercial, monitoramento 24h e cadastre seu currículo.",
};

const jobPositions = [
  {
    id: "tecnico-instalacao",
    title: "Técnico de Instalação",
    location: "Manaus/AM",
    badges: ["Presencial", "Efetivo"],
    description:
      "Instalação e manutenção de sistemas de alarme, CFTV e cercas elétricas.",
    icon: Camera,
  },
  {
    id: "atendente-comercial",
    title: "Atendente Comercial",
    location: "Manaus/AM",
    badges: ["Presencial", "Efetivo"],
    description:
      "Atendimento ao cliente, prospecção e fechamento de vendas.",
    icon: Headphones,
  },
  {
    id: "monitoramento-24h",
    title: "Monitoramento 24h",
    location: "Manaus/AM",
    badges: ["Presencial", "Turno"],
    description:
      "Acompanhamento dos sistemas de alarme e rastreamento, comunicação e suporte.",
    icon: MonitorCheck,
  },
  {
    id: "suporte-tecnico",
    title: "Suporte Técnico",
    location: "Manaus/AM",
    badges: ["Presencial", "Efetivo"],
    description:
      "Suporte aos clientes e manutenção preventiva de equipamentos.",
    icon: Settings,
  },
];

export default function TrabalheConoscoPage() {
  const waCareersUrl = `https://wa.me/${contact.whatsapp.sales.clean}?text=${encodeURIComponent(
    "Olá! Gostaria de tirar dúvidas sobre as oportunidades de trabalho na 3D ALARMES."
  )}`;

  return (
    <>
      {/* 1. HERO TRABALHE CONOSCO PADRONIZADO */}
      <section className="relative bg-navy-950 text-white min-h-[480px] lg:min-h-[540px] pt-32 lg:pt-38 pb-16 flex flex-col justify-center overflow-hidden border-b border-navy-900">
        {/* IMAGEM DO PROFISSIONAL INTEGRADA AO HERO (LADO DIREITO DOMINANTE) */}
        <div className="absolute top-0 right-0 w-full lg:w-[62%] h-full z-0 pointer-events-none overflow-hidden">
          <Image
            src="/assets/generated/home/sobre-tecnico.jpg"
            alt="Profissional da 3D ALARMES uniformizado"
            fill
            priority
            className="object-cover object-top-right lg:object-right opacity-70 lg:opacity-90"
          />
          {/* OVERLAYS DE INTEGRAÇÃO COM DEEP NAVY */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-transparent lg:via-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/50 lg:to-transparent" />
        </div>

        {/* BADGE AZUL */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 z-10 hidden sm:flex items-center gap-3 bg-navy-900/90 backdrop-blur-md border border-blue-500/40 rounded-2xl px-5 py-3 shadow-2xl">
          <Users className="w-5 h-5 text-blue-400 shrink-0" />
          <div className="text-left">
            <p className="text-xs font-bold text-white leading-tight">Aqui,</p>
            <p className="text-[11px] text-gray-300 leading-tight">pessoas fazem a diferença.</p>
          </div>
        </div>

        {/* CONTEÚDO HERO */}
        <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-[620px] flex flex-col items-start">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-4">
              <span className="text-yellow-400 font-extrabold">TRABALHE</span>
              <span className="text-gray-300">CONOSCO</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight leading-[1.06] text-white">
              Faça parte de uma<br />
              equipe que protege<br />
              <span className="text-yellow-400">o que importa.</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl font-normal">
              Na 3D ALARMES, valorizamos pessoas comprometidas, que buscam crescimento e querem fazer a diferença na segurança de famílias, empresas e condomínios.
            </p>

            <div className="mt-8">
              <a
                href="#vagas"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-extrabold text-sm transition-all duration-200 shadow-[0_4px_20px_rgba(255,214,0,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Ver Vagas Abertas</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OS 4 PILARES DA CULTURA (BARRA CLARA) */}
      <section className="py-14 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={0} duration={600} once={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-navy-950">Ambiente colaborativo</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Trabalhe em equipe com respeito e apoio mútuo.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} duration={600} once={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-navy-950">Oportunidade de crescimento</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Desenvolva sua carreira em uma empresa sólida.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} duration={600} once={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-navy-950">Treinamento contínuo</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Capacitação técnica e comercial.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} duration={600} once={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-navy-950">Reconhecimento por resultados</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Valorizamos o seu esforço e desempenho.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. NOSSA EQUIPE (DEEP NAVY BACKGROUND) */}
      <section className="py-20 md:py-24 bg-navy-950 text-white relative overflow-hidden border-b border-navy-900">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LADO ESQUERDO: FOTO REAL DA EQUIPE */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" duration={750} once={false}>
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/images/team/equipe-sede.png"
                    alt="Equipe técnica da 3D ALARMES reunida em frente à sede em Manaus"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* LADO DIREITO: TEXTO + BOTÃO */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <ScrollReveal direction="right" duration={700} delay={100} once={false}>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 inline-block mb-3">
                  NOSSA EQUIPE
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.12]">
                  Talento, dedicação<br />
                  e <span className="text-yellow-400">propósito em comum.</span>
                </h2>

                <p className="mt-5 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  Nossa equipe é formada por profissionais capacitados e apaixonados pelo que fazem. Aqui, você encontra um ambiente de trabalho sério, com foco em qualidade, atendimento e inovação, sempre colocando o cliente em primeiro lugar.
                </p>

                <div className="mt-8">
                  <Link
                    href="/a-empresa"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-extrabold text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,214,0,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Conheça nossa empresa</span>
                    <ArrowRight className="w-4 h-4 text-navy-950" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VAGAS DISPONÍVEIS */}
      <section id="vagas" className="py-20 md:py-24 bg-[#F8FAFC] border-b border-gray-200 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <ScrollReveal direction="down" duration={700} once={false}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                  VAGAS DISPONÍVEIS
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-navy-950 tracking-tight">
                  Oportunidades em aberto
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Confira as vagas disponíveis e faça parte do nosso time.
                </p>
              </div>

              <a
                href="#candidatura"
                className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-xs text-gray-600 max-w-sm hover:border-blue-400 transition-colors group flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-navy-950">Não encontrou sua vaga?</p>
                  <p className="mt-1 text-gray-500">Cadastre seu currículo e entraremos em contato quando surgir uma oportunidade.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 shrink-0 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobPositions.map((job, idx) => {
              const IconComp = job.icon;
              return (
                <ScrollReveal
                  key={job.id}
                  direction="up"
                  delay={idx * 100}
                  duration={600}
                  once={false}
                  className="h-full"
                >
                  <div
                    className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 h-full"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                        <IconComp className="w-5 h-5" />
                      </div>

                      <h3 className="text-base font-black text-navy-950 leading-snug">
                        {job.title}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1">{job.location}</p>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {job.badges.map((b, bIdx) => (
                          <span
                            key={bIdx}
                            className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                          >
                            {b}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <a
                        href="#candidatura"
                        className="block text-center py-2.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition-colors shadow-sm"
                      >
                        Ver Detalhes →
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ENVIE SEU CURRÍCULO + FOTO DA COLABORADORA */}
      <section id="candidatura" className="py-20 md:py-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* FORMULÁRIO */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <ScrollReveal direction="left" duration={700} once={false}>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                  ENVIE SEU CURRÍCULO
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight mb-2">
                  Quero trabalhar na 3D ALARMES
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 mb-8 leading-relaxed">
                  Preencha o formulário abaixo e envie seu currículo. Nossa equipe irá analisar seu perfil e entraremos em contato.
                </p>

                <JobApplicationForm />
              </ScrollReveal>
            </div>

            {/* COLUNA LATERAL COM FOTO DA COLABORADORA E BOTÃO WHATSAPP */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ScrollReveal direction="right" duration={750} delay={100} once={false}>
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-gray-200 group">
                  <Image
                    src="/images/team/colaboradora-atendimento.png"
                    alt="Colaboradora da 3D ALARMES uniformizada"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </ScrollReveal>

              {/* CARD FLUTUANTE DE DÚVIDAS NO WHATSAPP */}
              <ScrollReveal direction="right" duration={650} delay={200} once={false}>
                <a
                  href={waCareersUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-4 border border-emerald-500/40 shadow-md flex items-center justify-between hover:border-emerald-500 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-950 group-hover:text-emerald-600 transition-colors">
                        Dúvidas sobre vagas?
                      </h4>
                      <p className="text-[11px] text-gray-500">Fale no WhatsApp →</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-all" />
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
