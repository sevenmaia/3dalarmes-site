import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Target,
  Eye,
  Diamond,
  Calendar,
  Users,
  MapPin,
  ShieldCheck,
  Wrench,
  Headphones,
  LayoutGrid,
  ArrowRight,
  ShieldAlert,
  Zap,
  Lock,
  Camera,
  MonitorCheck,
  Car,
} from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "A Empresa — Mais de 20 anos em Manaus | 3D ALARMES",
  description:
    "Fundada em 2003, a 3D ALARMES é referência em segurança eletrônica e monitoramento 24h em Manaus/AM. Conheça nossa história, missão, visão e valores.",
};

const companyServices = [
  {
    title: "Alarmes",
    image: "/images/services/alarmes.png",
    icon: ShieldAlert,
    href: "/solucoes/alarmes",
  },
  {
    title: "Cerca Elétrica",
    image: "/images/services/cercas-eletricas.png",
    icon: Zap,
    href: "/solucoes/cercas-eletricas",
  },
  {
    title: "Controle de Acesso",
    image: "/images/services/controle-acesso.png",
    icon: Lock,
    href: "/solucoes/controle-de-acesso",
  },
  {
    title: "CCTV e CFTV",
    image: "/images/services/cftv.png",
    icon: Camera,
    href: "/solucoes/cftv",
  },
  {
    title: "Monitoramento 24h",
    image: "/images/services/monitoramento-24h.png",
    icon: MonitorCheck,
    href: "/solucoes/monitoramento-24h",
  },
  {
    title: "Rastreamento de Veículos",
    image: "/images/services/rastreamento-veicular.png",
    icon: Car,
    href: "/solucoes/rastreamento-veicular",
  },
];

export default function EmpresaPage() {
  return (
    <>
      {/* 1. HERO INSTITUCIONAL PADRONIZADO */}
      <section className="relative bg-navy-950 text-white min-h-[480px] lg:min-h-[540px] pt-32 lg:pt-38 pb-16 flex flex-col justify-center overflow-hidden border-b border-navy-900">
        {/* IMAGEM DA CÂMERA INTEGRADA AO HERO (LADO DIREITO DOMINANTE) */}
        <div className="absolute top-0 right-0 w-full lg:w-[62%] h-full z-0 pointer-events-none overflow-hidden">
          <Image
            src="/assets/generated/home/hero-camera-dome.jpg"
            alt="Câmera de segurança 3D ALARMES em Manaus"
            fill
            priority
            className="object-cover object-top-right lg:object-right opacity-70 lg:opacity-90"
          />
          {/* OVERLAYS DE INTEGRAÇÃO COM DEEP NAVY */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-transparent lg:via-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/50 lg:to-transparent" />
        </div>

        {/* BADGE AZUL DE SEGURANÇA NO CANTO INFERIOR DIREITO */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 z-10 hidden sm:flex items-center gap-3 bg-navy-900/90 backdrop-blur-md border border-blue-500/40 rounded-2xl px-5 py-3 shadow-2xl">
          <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
          <div className="text-left">
            <p className="text-xs font-bold text-white leading-tight">Segurança</p>
            <p className="text-[11px] text-gray-300 leading-tight">dentro e fora de casa.</p>
          </div>
        </div>

        {/* CONTEÚDO HERO */}
        <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-[620px] flex flex-col items-start">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-400 inline-flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-xs">▶</span>
              A EMPRESA
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight leading-[1.06] text-white">
              Mais de 20 anos<br />
              protegendo<br />
              <span className="text-yellow-400">o que importa.</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl font-normal">
              Segurança eletrônica com tecnologia, atendimento especializado e compromisso com a sua tranquilidade.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SOBRE A 3D ALARMES + FACHADA DA SEDE REAL */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LADO ESQUERDO: TEXTO */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <ScrollReveal direction="left" duration={700} once={false}>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 inline-flex items-center gap-2 mb-3">
                  <span className="text-blue-600 text-xs">▶</span>
                  SOBRE A 3D ALARMES
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-navy-950 tracking-tight leading-[1.15]">
                  Tradição, tecnologia<br />
                  e confiança em Manaus.
                </h2>

                <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                  A <strong className="text-navy-950 font-bold">3D ALARMES</strong> é uma empresa que oferece soluções completas em segurança eletrônica, fundada em 2003, prestando serviços de qualidade e comercializando equipamentos.
                </p>

                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  Há mais de 20 anos atuando nesse mercado, temos um constante preocupação em manter-se atualizada frente às evoluções tecnológicas, investindo no desenvolvimento de novos produtos e serviços para oferecer e implementar as soluções adequadas a cada situação.
                </p>

                <div className="mt-8">
                  <Link
                    href="/solucoes"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-extrabold text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,214,0,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Nossa História</span>
                    <ArrowRight className="w-4 h-4 text-navy-950" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* LADO DIREITO: FOTO REAL DA FACHADA DA SEDE */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" duration={750} delay={100} once={false}>
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                  <Image
                    src="/images/company/fachada-sede.png"
                    alt="Fachada oficial da sede da 3D ALARMES na Av. Constantinopla em Manaus"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSÃO, VISÃO E VALORES (3 CARDS HORIZONTAIS) */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-gray-200 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* MISSÃO */}
            <ScrollReveal direction="up" delay={0} duration={650} once={false} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col items-start hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center mb-5 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-navy-950 mb-3 tracking-wide">MISSÃO</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Prover soluções de segurança contribuindo para uma sociedade mais segura, tranquila e consciente, prestando serviços de alta qualidade e buscando sempre a satisfação de nossos clientes.
                </p>
              </div>
            </ScrollReveal>

            {/* VISÃO */}
            <ScrollReveal direction="up" delay={150} duration={650} once={false} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col items-start hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center mb-5 shadow-sm">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-navy-950 mb-3 tracking-wide">VISÃO</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Ser a empresa referência no segmento de segurança eletrônica na região norte do Brasil.
                </p>
              </div>
            </ScrollReveal>

            {/* VALORES */}
            <ScrollReveal direction="up" delay={300} duration={650} once={false} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col items-start hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center mb-5 shadow-sm">
                  <Diamond className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-navy-950 mb-3 tracking-wide">VALORES</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Valorizamos a honestidade e transparência em nossos negócios; pontualidade e rapidez; investimento em tecnologia; inovações e criatividade; qualidade nos serviços prestados; atenção, respeito e dedicação aos nossos clientes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. FAIXA DE INDICADORES (MÉTRICAS) */}
      <section className="bg-navy-950 text-white py-12 border-b border-navy-900 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={0} duration={600} once={false}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">20+</p>
                  <p className="text-xs text-gray-400">anos de experiência</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} duration={600} once={false}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">Milhares</p>
                  <p className="text-xs text-gray-400">de clientes atendidos</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} duration={600} once={false}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">Manaus/AM</p>
                  <p className="text-xs text-gray-400">e toda região</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} duration={600} once={false}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">Atendimento</p>
                  <p className="text-xs text-gray-400">especializado</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. O QUE FAZEMOS: SOLUÇÕES COMPLETAS EM SEGURANÇA ELETRÔNICA */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LADO ESQUERDO: TEXTO + BOTÃO */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <ScrollReveal direction="left" duration={700} once={false}>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 inline-flex items-center gap-2 mb-3">
                  <span className="text-blue-600 text-xs">▶</span>
                  O QUE FAZEMOS
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-navy-950 tracking-tight leading-[1.15]">
                  Soluções completas<br />
                  em segurança eletrônica.
                </h2>

                <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  Para isso, dispomos de uma diversificada linha de produtos e marcas utilizadas nos segmentos de: Alarmes, Cerca Elétrica, Circuito Fechado de Televisão, Controle de Acesso, Proteção Perimetral, Transmissão e Gravação de Imagens, Central de Monitoramento de Alarme 24 horas e entre outros.
                </p>

                <div className="mt-8">
                  <Link
                    href="/solucoes"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-extrabold text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,214,0,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Nossos Serviços</span>
                    <ArrowRight className="w-4 h-4 text-navy-950" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* LADO DIREITO: GRID 3x2 DE SERVIÇOS */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {companyServices.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <ScrollReveal
                    key={item.title}
                    direction="up"
                    delay={idx * 80}
                    duration={600}
                    once={false}
                  >
                    <Link
                      href={item.href}
                      className="relative block group rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* BADGE INFERIOR COM ÍCONE AZUL E NOME */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-sm rounded-xl p-2 flex items-center gap-2 shadow-sm border border-gray-100">
                        <div className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-bold text-navy-950 leading-tight truncate">
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. EQUIPE ESPECIALIZADA COM FOTO REAL EM CAMPO */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-gray-200 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LADO ESQUERDO: FOTO REAL DE INSTALAÇÃO */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" duration={750} once={false}>
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
                  <Image
                    src="/images/team/instalacao-cftv.png"
                    alt="Técnico especialista da 3D Alarmes executando instalação com fardamento oficial"
                    fill
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* LADO DIREITO: TEXTO + 3 ITENS COM ÍCONES */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <ScrollReveal direction="right" duration={700} delay={100} once={false}>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 inline-flex items-center gap-2 mb-3">
                  <span className="text-blue-600 text-xs">▶</span>
                  EQUIPE ESPECIALIZADA
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-navy-950 tracking-tight leading-[1.15]">
                  Profissionais capacitados<br />
                  para atender você.
                </h2>

                <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  A 3D ALARMES se orgulha de poder contar com uma equipe própria e altamente capacitada, que prioriza a qualidade total no atendimento e na execução dos projetos aos seus clientes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8 w-full">
                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-navy-950 leading-snug">
                      Instalação profissional
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-navy-950 leading-snug">
                      Suporte pós-venda
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0">
                      <LayoutGrid className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-navy-950 leading-snug">
                      Projetos personalizados
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <FinalCTA
        badge="SOLICITE UM ORÇAMENTO"
        title="Vamos proteger o que é importante para você?"
        highlightText="o que é importante para você?"
        subtitle="Fale agora com nossa equipe e receba uma proposta personalizada."
      />
    </>
  );
}
