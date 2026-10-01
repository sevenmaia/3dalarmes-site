"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { contact } from "@/data/contact";

const footerNavItems = [
  { label: "Início", href: "/" },
  { label: "A Empresa", href: "/a-empresa" },
  { label: "Soluções para Você", href: "/solucoes" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { label: "Contatos", href: "/contato" },
  { label: "Página de Bio", href: "/bio" },
];

const footerServicesList = [
  { label: "CFTV", href: "/solucoes/cftv" },
  { label: "Alarmes de Intrusão", href: "/solucoes/alarmes" },
  { label: "Cercas Elétricas", href: "/solucoes/cercas-eletricas" },
  { label: "Rastreamento de Veículos", href: "/solucoes/rastreamento-veicular" },
  { label: "Controle de Acesso", href: "/solucoes/controle-de-acesso" },
  { label: "Monitoramento 24 horas", href: "/solucoes/monitoramento-24h" },
];

export function Footer() {
  const pathname = usePathname();

  // Não renderiza na página de Bio
  if (pathname === "/bio") {
    return null;
  }

  const defaultMsg = encodeURIComponent(contact.whatsapp.sales.defaultMessage);
  const waUrl = `https://wa.me/${contact.whatsapp.sales.clean}?text=${defaultMsg}`;

  return (
    <footer className="bg-[#F8FAFC] text-navy-950 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-200">
          {/* COLUNA 1: MARCA */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-block group mb-3">
              <div className="relative w-20 h-24 mb-3 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logos/logo-frontal.png"
                  alt="3D ALARMES — Segurança Eletrônica em Manaus"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black text-navy-950 tracking-tight block">
                3D ALARMES
              </span>
              <span className="text-xs font-semibold text-gray-500 mt-0.5 block">
                Segurança eletrônica em Manaus
              </span>
            </Link>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO INSTITUCIONAL */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {footerNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`transition-colors ${
                        isActive
                          ? "text-blue-600 font-bold underline"
                          : "text-gray-600 hover:text-navy-950"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUNA 3: SERVIÇOS */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-4">
              Nossas Soluções
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
              {footerServicesList.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-navy-950 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 4: CONTATO */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-4">
              Contato
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Av. Constantinopla, 11 <br />
                  Quadra 30, Sala B — Conjunto Campos Elíseos <br />
                  Planalto — Manaus/AM
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="flex flex-col font-semibold text-navy-950">
                  <a href={`tel:${contact.phones.primaryClean}`} className="hover:text-blue-600">
                    {contact.phones.primary}
                  </a>
                  <a href={`tel:${contact.phones.secondaryClean}`} className="hover:text-blue-600">
                    {contact.phones.secondary}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-navy-950 hover:text-blue-600 transition-colors"
                >
                  Chamar no WhatsApp
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={`mailto:${contact.email.primary}`}
                  className="hover:text-blue-600 transition-colors break-all"
                >
                  {contact.email.primary}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BARRA INFERIOR DE COPYRIGHT */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <p>© 2024 3D ALARMES. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco na sua segurança.</p>
        </div>
      </div>
    </footer>
  );
}
