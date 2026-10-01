"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, User } from "lucide-react";
import { contact } from "@/data/contact";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "A Empresa", href: "/a-empresa" },
  { label: "Soluções para Você", href: "/solucoes" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { label: "Contatos", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Não renderiza na página de Bio
  if (pathname === "/bio") {
    return null;
  }

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const defaultMsg = encodeURIComponent(contact.whatsapp.sales.defaultMessage);
  const waUrl = `https://wa.me/${contact.whatsapp.sales.clean}?text=${defaultMsg}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-md py-3.5 border-b border-navy-800/80"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        {/* LOGO OFICIAL 3D ALARMES COM IDENTIDADE COMPLETA (SÍMBOLO + NOME) */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-10 h-12 sm:w-11 sm:h-13 md:w-12 md:h-14 shrink-0 transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/logos/logo-frontal.png"
              alt="3D ALARMES — Segurança Eletrônica"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl md:text-[22px] font-black tracking-tight text-white uppercase leading-none group-hover:text-yellow-400 transition-colors">
              3D ALARMES
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-yellow-400 uppercase mt-1 leading-none">
              SEGURANÇA ELETRÔNICA
            </span>
          </div>
        </Link>

        {/* NAVEGAÇÃO CENTRAL DESKTOP: LINKS DIRETOS PARA TODAS AS PÁGINAS */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Menu Principal">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-semibold tracking-tight transition-colors duration-200 relative py-1",
                  isActive
                    ? "text-white font-bold"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* BOTÃO ÚNICO EM DESTAQUE À DIREITA (WHATSAPP NA HOME, ÁREA DO CLIENTE NAS INTERNAS) */}
        <div className="hidden lg:flex items-center">
          {isHome ? (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-extrabold text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,214,0,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current text-navy-950 shrink-0" />
              <span>Falar no WhatsApp</span>
            </a>
          ) : (
            <a
              href={contact.portals.customerArea}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-extrabold text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(255,214,0,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <User className="w-4 h-4 text-navy-950 shrink-0" />
              <span>Área do Cliente</span>
            </a>
          )}
        </div>

        {/* BOTÃO MOBILE */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="w-10 h-10 rounded-full bg-yellow-500 text-navy-950 flex items-center justify-center shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-yellow-400 transition-colors focus:outline-none rounded-lg"
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* DRAWER MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-navy-950/98 backdrop-blur-xl z-50 flex flex-col px-6 py-8 border-t border-navy-800">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-3 text-base font-bold text-gray-200 hover:text-yellow-400 border-b border-navy-800/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/bio"
              className="py-3 text-base font-bold text-yellow-400 hover:underline border-b border-navy-800/80 transition-colors"
            >
              Link na Bio (Redes e Canais)
            </Link>
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-yellow-500 text-navy-950 font-extrabold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp</span>
            </a>

            <a
              href={contact.portals.customerArea}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-navy-900 border border-blue-500/30 text-white font-bold text-sm"
            >
              <User className="w-4 h-4 text-blue-400" />
              <span>Área do Cliente</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
