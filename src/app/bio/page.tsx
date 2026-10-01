import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Globe,
  FileText,
  Headphones,
  Car,
  MessageCircle,
  User,
  MapPin,
  Users,
  Facebook,
  Instagram,
  Mail,
  ChevronRight,
} from "lucide-react";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "3D ALARMES — Links Rápidos e Atendimento",
  description:
    "Sua segurança nas mãos de quem entende! Acesse nosso site, solicite orçamentos, fale com a Central 24h e acesse os portais de monitoramento.",
};

interface BioItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  variant?: "yellow" | "whatsapp" | "facebook" | "instagram" | "default";
}

const bioItems: BioItem[] = [
  {
    title: "Site",
    href: "/",
    icon: <Globe className="w-5 h-5 text-navy-950" />,
    variant: "yellow",
  },
  {
    title: "Para Orçamentos comerciais e rastreamento veicular",
    href: `https://wa.me/${contact.whatsapp.sales.clean}?text=${encodeURIComponent(
      "Olá! Gostaria de um orçamento para segurança eletrônica ou rastreamento veicular."
    )}`,
    icon: <FileText className="w-5 h-5 text-blue-400" />,
    variant: "default",
  },
  {
    title: "Para suporte técnico do setor de monitoramento",
    href: `https://wa.me/${contact.whatsapp.monitoring24h.clean}?text=${encodeURIComponent(
      "Olá! Preciso de suporte técnico com meu alarme / CFTV monitorado."
    )}`,
    icon: <Headphones className="w-5 h-5 text-blue-400" />,
    variant: "default",
  },
  {
    title: "Para suporte técnico do setor de rastreamento veicular",
    href: `https://wa.me/${contact.whatsapp.trackingSupport.clean}?text=${encodeURIComponent(
      "Olá! Preciso de suporte para meu rastreador veicular."
    )}`,
    icon: <Car className="w-5 h-5 text-blue-400" />,
    variant: "default",
  },
  {
    title: "Whatsapp Central de Monitoramento 24 h",
    href: `https://wa.me/${contact.whatsapp.monitoring24h.clean}?text=${encodeURIComponent(
      "Olá! Gostaria de falar com a Central de Monitoramento 24 Horas."
    )}`,
    icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
    variant: "whatsapp",
  },
  {
    title: "Portal do Cliente",
    href: contact.portals.customerArea,
    icon: <User className="w-5 h-5 text-blue-400" />,
    variant: "default",
  },
  {
    title: "Portal de Acesso Rastreamento",
    href: contact.portals.trackingArea,
    icon: <MapPin className="w-5 h-5 text-blue-400" />,
    variant: "default",
  },
  {
    title: "Trabalhe conosco",
    href: "/trabalhe-conosco",
    icon: <Users className="w-5 h-5 text-blue-400" />,
    variant: "default",
  },
  {
    title: "Facebook",
    href: contact.social.facebook,
    icon: <Facebook className="w-5 h-5 text-white" />,
    variant: "facebook",
  },
  {
    title: "Instagram",
    href: contact.social.instagram,
    icon: <Instagram className="w-5 h-5 text-white" />,
    variant: "instagram",
  },
];

export default function BioPage() {
  return (
    <div className="min-h-screen bg-navy-950 text-white relative flex flex-col items-center justify-between py-10 px-4 overflow-hidden font-sans">
      {/* IMAGEM DE FUNDO AMBIENTADA NA NOITE DE MANAUS */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bio/bio-background.png"
          alt="Manaus e Ponte Rio Negro"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/92 to-navy-950/98 pointer-events-none" />
      </div>

      {/* CONTAINER CENTRAL MOBILE-FIRST */}
      <div className="relative z-10 w-full max-w-[440px] mx-auto flex flex-col items-center text-center">
        {/* BRASÃO OFICIAL 3D ALARMES EM DESTAQUE COM BRILHO CROMADO */}
        <div className="relative w-28 h-32 mb-4 drop-shadow-[0_12px_30px_rgba(255,214,0,0.35)] transition-transform hover:scale-105 duration-300">
          <Image
            src="/logos/logo-frontal.png"
            alt="Brasão Oficial 3D ALARMES"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* IDENTIDADE E SLOGAN */}
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
          3D ALARMES
        </h1>

        <p className="mt-1 text-sm sm:text-base font-bold text-gray-200">
          Sua segurança nas{" "}
          <span className="relative inline-block">
            mãos de quem entende!
            <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-yellow-400 rounded-full" />
          </span>
        </p>

        {/* CHIPS DE ESPECIALIDADES */}
        <div className="flex items-center justify-center flex-wrap gap-2 text-[11px] text-gray-300 font-medium mt-3 mb-6">
          <span>Segurança eletrônica</span>
          <span className="text-yellow-400 font-bold">•</span>
          <span>Rastreamento veicular</span>
          <span className="text-yellow-400 font-bold">•</span>
          <span>Monitoramento 24h</span>
        </div>

        {/* LISTA DE 10 LINKS EM PÍLULA */}
        <div className="w-full flex flex-col gap-3">
          {bioItems.map((item, idx) => {
            const isYellow = item.variant === "yellow";
            const isWa = item.variant === "whatsapp";
            const isFb = item.variant === "facebook";
            const isIg = item.variant === "instagram";

            return (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between p-3.5 rounded-2xl transition-all duration-200 border ${
                  isYellow
                    ? "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-navy-950 font-black border-yellow-300 shadow-[0_4px_25px_rgba(255,214,0,0.45)] hover:scale-[1.02]"
                    : isWa
                    ? "bg-navy-900/90 hover:bg-emerald-950/30 text-white font-bold border-emerald-500/60 shadow-[0_4px_18px_rgba(16,185,129,0.25)] hover:border-emerald-400"
                    : "bg-navy-900/80 hover:bg-navy-850/90 text-white font-semibold border-blue-500/25 hover:border-blue-400/50 shadow-sm hover:scale-[1.01]"
                }`}
              >
                <div className="flex items-center gap-3.5 text-left">
                  {/* ÍCONE */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isYellow
                        ? "bg-navy-950/15 text-navy-950"
                        : isWa
                        ? "bg-emerald-500/20 text-emerald-400"
                        : isFb
                        ? "bg-blue-600 text-white"
                        : isIg
                        ? "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white"
                        : "bg-navy-800 text-blue-400"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* TÍTULO */}
                  <span
                    className={`text-xs sm:text-sm leading-snug ${
                      isYellow ? "text-navy-950 font-black" : "text-white"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>

                {/* CHEVRON DIREITA */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 ${
                    isYellow
                      ? "bg-navy-950 text-yellow-400"
                      : isWa
                      ? "bg-emerald-900/40 text-emerald-400"
                      : "bg-navy-800/80 text-gray-300"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>

        {/* 4 REDES SOCIAIS EM CÍRCULOS COM BORDA AMARELA */}
        <div className="flex items-center justify-center gap-4 mt-8 mb-5">
          <a
            href={contact.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da 3D ALARMES"
            className="w-11 h-11 rounded-full bg-navy-900 border-2 border-yellow-400/60 hover:border-yellow-400 text-white flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_15px_rgba(255,214,0,0.25)]"
          >
            <Instagram className="w-5 h-5 text-yellow-400" />
          </a>

          <a
            href={contact.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da 3D ALARMES"
            className="w-11 h-11 rounded-full bg-navy-900 border-2 border-yellow-400/60 hover:border-yellow-400 text-white flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_15px_rgba(255,214,0,0.25)]"
          >
            <Facebook className="w-5 h-5 text-yellow-400 fill-current" />
          </a>

          <a
            href={`https://wa.me/${contact.whatsapp.sales.clean}?text=${encodeURIComponent(
              contact.whatsapp.sales.defaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da 3D ALARMES"
            className="w-11 h-11 rounded-full bg-navy-900 border-2 border-yellow-400/60 hover:border-yellow-400 text-white flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_15px_rgba(255,214,0,0.25)]"
          >
            <MessageCircle className="w-5 h-5 text-yellow-400 fill-current" />
          </a>

          <a
            href={`mailto:${contact.email.primary}`}
            aria-label="E-mail da 3D ALARMES"
            className="w-11 h-11 rounded-full bg-navy-900 border-2 border-yellow-400/60 hover:border-yellow-400 text-white flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_15px_rgba(255,214,0,0.25)]"
          >
            <Mail className="w-5 h-5 text-yellow-400" />
          </a>
        </div>

        {/* LOCALIZAÇÃO COM LINHAS DOURADAS LATERAIS */}
        <div className="w-full flex items-center justify-center gap-3 text-xs font-bold text-gray-300 mb-6">
          <div className="h-px bg-yellow-400/40 flex-1 max-w-[80px]" />
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-yellow-400" />
            Manaus/AM
          </span>
          <div className="h-px bg-yellow-400/40 flex-1 max-w-[80px]" />
        </div>

        {/* ASSINATURA FINAL */}
        <div className="border-t border-navy-800/80 pt-6 pb-2 text-center">
          <p className="font-black text-white text-xs mb-1 tracking-[0.25em]">
            3 D &nbsp; A L A R M E S
          </p>
          <p className="text-[9px] text-gray-400 uppercase tracking-widest">
            SEGURANÇA PARA PESSOAS, FAMÍLIAS, EMPRESAS E CONDOMÍNIOS.
          </p>
        </div>
      </div>
    </div>
  );
}
