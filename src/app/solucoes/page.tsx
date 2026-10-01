import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Camera,
  ShieldAlert,
  Zap,
  Car,
  Lock,
  MonitorCheck,
  Home,
  Building2,
  Factory,
  Store,
  Users,
  ShieldCheck,
  Clock,
  ArrowRight,
  Headphones,
  Cog,
  Handshake,
  MessageCircle,
} from "lucide-react";
import { contact } from "@/data/contact";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Soluções para Você e Sua Empresa — CFTV, Alarmes e Rastreamento | 3D ALARMES",
  description:
    "Soluções completas em segurança eletrônica para residências, condomínios e empresas em Manaus: CFTV, Alarmes de Intrusão, Cercas Elétricas, Rastreamento Veicular e Monitoramento 24h.",
};

interface SolutionCard {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const solutionsList: SolutionCard[] = [
  {
    id: "cftv",
    slug: "cftv",
    title: "CFTV",
    description:
      "Câmeras de alta definição com monitoramento remoto via aplicativo. Mais controle e segurança para o seu dia a dia.",
    image: "/images/services/cftv.png",
    icon: Camera,
    href: "/solucoes/cftv",
  },
  {
    id: "alarmes",
    slug: "alarmes",
    title: "Alarmes de Intrusão",
    description:
      "Sistemas de alarme com sensores e central de alarme para proteção contra invasões, com aviso em tempo real.",
    image: "/images/services/alarmes.png",
    icon: ShieldAlert,
    href: "/solucoes/alarmes",
  },
  {
    id: "cercas",
    slug: "cercas-eletricas",
    title: "Cercas Elétricas e Concertinas",
    description:
      "Proteção perimetral com alta eficiência, ideal para residências, empresas e condomínios.",
    image: "/images/services/cercas-eletricas.png",
    icon: Zap,
    href: "/solucoes/cercas-eletricas",
  },
  {
    id: "rastreamento",
    slug: "rastreamento-veicular",
    title: "Rastreamento de Veículos",
    description:
      "Acompanhe seu veículo em tempo real com mais segurança e tranquilidade para você, sua família ou sua empresa.",
    image: "/images/services/rastreamento-veicular.png",
    icon: Car,
    href: "/solucoes/rastreamento-veicular",
  },
  {
    id: "controle-acesso",
    slug: "controle-de-acesso",
    title: "Controle de Acesso",
    description:
      "Soluções para controle de entrada e saída de pessoas em empresas, condomínios e indústrias.",
    image: "/images/services/controle-acesso.png",
    icon: Lock,
    href: "/solucoes/controle-de-acesso",
  },
  {
    id: "monitoramento",
    slug: "monitoramento-24h",
    title: "Monitoramento 24 horas",
    description:
      "Central de monitoramento com equipe especializada, pronta para agir em qualquer situação.",
    image: "/images/services/monitoramento-24h.png",
    icon: MonitorCheck,
    href: "/solucoes/monitoramento-24h",
  },
  {
    id: "residenciais",
    slug: "solucoes-residenciais",
    title: "Soluções para Residências",
    description:
      "Proteja sua casa e sua família com soluções completas e personalizadas.",
    image: "/images/services/solucoes-residenciais.png",
    icon: Home,
    href: "/contato",
  },
  {
    id: "empresariais",
    slug: "solucoes-empresariais",
    title: "Soluções para Empresas e Condomínios",
    description:
      "Projetos personalizados para diferentes segmentos, com instalação profissional e suporte contínuo.",
    image: "/images/services/solucoes-empresariais.png",
    icon: Building2,
    href: "/contato",
  },
];

export default function SolucoesPage() {
  const quoteWaUrl = `https://wa.me/${contact.whatsapp.sales.clean}?text=${encodeURIComponent(
    contact.whatsapp.sales.defaultMessage
  )}`;

  return (
    <>
      {/* 1. HERO SOLUÇÕES PADRONIZADO */}
      <section className="relative bg-navy-950 text-white min-h-[480px] lg:min-h-[540px] pt-32 lg:pt-38 pb-16 flex flex-col justify-center overflow-hidden border-b border-navy-900">
        {/* IMAGEM DA CÂMERA INTEGRADA AO HERO (LADO DIREITO DOMINANTE) */}
        <div className="absolute top-0 right-0 w-full lg:w-[62%] h-full z-0 pointer-events-none overflow-hidden">
          <Image
            src="/assets/generated/home/hero-camera-dome.jpg"
            alt="Soluções em segurança 3D ALARMES em Manaus"
            fill
            priority
            className="object-cover object-top-right lg:object-right opacity-70 lg:opacity-90"
          />
          {/* OVERLAYS DE INTEGRAÇÃO COM DEEP NAVY */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-transparent lg:via-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/50 lg:to-transparent" />
        </div>

        {/* BADGE AZUL DE SEGURANÇA */}
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
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-4">
              <span className="text-yellow-400 font-extrabold">NOSSAS</span>
              <span className="text-gray-300">SOLUÇÕES</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight leading-[1.06] text-white">
              Segurança completa<br />
              para <span className="text-yellow-400">cada necessidade.</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl font-normal">
              Soluções em alarmes, cercas elétricas, CFTV, controle de acesso, rastreamento e monitoramento 24 horas para residências, empresas e condomínios em Manaus.
            </p>

            {/* 3 BADGES RÁPIDOS */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <div className="flex items-center gap-2.5 bg-navy-900/90 border border-blue-500/30 rounded-full px-4 py-2 text-xs font-semibold text-gray-200 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Tecnologia de ponta</span>
              </div>

              <div className="flex items-center gap-2.5 bg-navy-900/90 border border-blue-500/30 rounded-full px-4 py-2 text-xs font-semibold text-gray-200 backdrop-blur-sm">
                <Users className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Equipe especializada</span>
              </div>

              <div className="flex items-center gap-2.5 bg-navy-900/90 border border-blue-500/30 rounded-full px-4 py-2 text-xs font-semibold text-gray-200 backdrop-blur-sm">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Suporte e monitoramento 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GRADE DE 8 SOLUÇÕES EM SEGURANÇA ELETRÔNICA */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-gray-200 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <ScrollReveal direction="down" duration={700} once={false}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-blue-200/60">
                SOLUÇÕES PARA VOCÊ
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-navy-950 tracking-tight leading-tight">
                Soluções em segurança eletrônica
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Conheça nossas principais soluções e escolha a ideal para sua residência, empresa ou condomínio. Trabalhamos com instalações profissionais e suporte completo.
              </p>
            </div>
          </ScrollReveal>

          {/* GRID 4 COLUNAS X 2 LINHAS = 8 CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal
                  key={item.id}
                  direction="up"
                  delay={(idx % 4) * 100}
                  duration={600}
                  once={false}
                  className="h-full"
                >
                  <div
                    className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group h-full"
                  >
                    {/* IMAGEM DO CARD COM BADGE DE ÍCONE AZUL NO CANTO */}
                    <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-md">
                        <IconComp className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* CORPO DO CARD */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-base sm:text-lg font-black text-navy-950 leading-snug group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-xs text-gray-600 leading-relaxed flex-grow">
                        {item.description}
                      </p>

                      {/* BOTÃO AZUL PÍLULA "SAIBA MAIS →" EXATAMENTE COMO NO MOCKUP */}
                      <div className="mt-5 pt-3">
                        <Link
                          href={item.href}
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition-colors shadow-sm w-fit"
                        >
                          <span>Saiba mais</span>
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BANNER ESCURO DE SEGMENTOS */}
      <section className="bg-navy-950 text-white py-20 relative overflow-hidden border-b border-navy-900">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LADO ESQUERDO: TEXTO + BOTÃO */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <ScrollReveal direction="left" duration={700} once={false}>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-white">
                  Segurança para<br />
                  <span className="text-yellow-400">todos os momentos.</span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  Soluções completas, tecnologia de ponta e atendimento especializado para garantir a sua tranquilidade.
                </p>

                <div className="mt-8">
                  <a
                    href={quoteWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-extrabold text-sm transition-all duration-200 shadow-[0_4px_20px_rgba(255,214,0,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-navy-950 shrink-0" />
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-4 h-4 text-navy-950" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* LADO DIREITO: 5 CÍRCULOS DE SEGMENTOS */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
              <ScrollReveal direction="up" delay={0} duration={550} once={false}>
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-navy-900/80 border border-blue-500/20 hover:border-yellow-400/40 transition-colors h-full">
                  <div className="w-13 h-13 rounded-full bg-blue-600/25 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-3">
                    <Home className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white">Residências</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={80} duration={550} once={false}>
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-navy-900/80 border border-blue-500/20 hover:border-yellow-400/40 transition-colors h-full">
                  <div className="w-13 h-13 rounded-full bg-blue-600/25 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-3">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white">Empresas</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={160} duration={550} once={false}>
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-navy-900/80 border border-blue-500/20 hover:border-yellow-400/40 transition-colors h-full">
                  <div className="w-13 h-13 rounded-full bg-blue-600/25 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white">Condomínios</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={240} duration={550} once={false}>
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-navy-900/80 border border-blue-500/20 hover:border-yellow-400/40 transition-colors h-full">
                  <div className="w-13 h-13 rounded-full bg-blue-600/25 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-3">
                    <Factory className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white">Indústrias</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={320} duration={550} once={false} className="col-span-2 sm:col-span-1">
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-navy-900/80 border border-blue-500/20 hover:border-yellow-400/40 transition-colors h-full">
                  <div className="w-13 h-13 rounded-full bg-blue-600/25 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-3">
                    <Store className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white">Comércios</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ATENDIMENTO ESPECIALIZADO / CTA FINAL */}
      <section className="bg-white py-16 lg:py-20 border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-gray-100">
            {/* LADO ESQUERDO */}
            <ScrollReveal direction="left" duration={700} once={false} className="max-w-2xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                  ATENDIMENTO ESPECIALIZADO
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-tight text-navy-950">
                  Vamos encontrar a melhor solução para você
                </h2>

                <p className="mt-3 text-sm sm:text-base text-gray-600">
                  Fale agora com nossa equipe e receba um atendimento personalizado.
                </p>
              </div>
            </ScrollReveal>

            {/* LADO DIREITO: BOTÃO WHATSAPP */}
            <ScrollReveal direction="right" duration={700} delay={150} once={false} className="shrink-0">
              <a
                href={quoteWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-extrabold text-sm sm:text-base transition-all duration-200 shadow-[0_4px_20px_rgba(255,214,0,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current text-navy-950 shrink-0" />
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-5 h-5 text-navy-950" />
              </a>
            </ScrollReveal>
          </div>

          {/* 3 BENEFÍCIOS INFERIORES */}
          <ScrollReveal direction="up" duration={600} delay={200} once={false}>
            <div className="pt-8 flex flex-wrap items-center justify-start gap-8 sm:gap-12 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2.5">
                <Headphones className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-semibold text-navy-950">Atendimento rápido</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Cog className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-semibold text-navy-950">Projeto personalizado</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Handshake className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-semibold text-navy-950">Sem compromisso</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
