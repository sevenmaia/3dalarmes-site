"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { contact } from "@/data/contact";
import { usePathname } from "next/navigation";

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const [tooltipVisible, setTooltipVisible] = useState(true);

  if (pathname === "/bio") {
    return null;
  }

  const defaultMsg = encodeURIComponent(contact.whatsapp.sales.defaultMessage);
  const waUrl = `https://wa.me/${contact.whatsapp.sales.clean}?text=${defaultMsg}`;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-navy-950 text-white text-xs py-2 px-3.5 rounded-full shadow-xl border border-navy-800 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-gray-200">
            Dúvidas? <strong className="text-yellow-400 font-bold">Fale conosco no WhatsApp</strong>
          </span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="ml-1 text-gray-400 hover:text-white"
            aria-label="Fechar balão"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a 3D ALARMES no WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-6 transition-transform" />
      </a>
    </aside>
  );
}
