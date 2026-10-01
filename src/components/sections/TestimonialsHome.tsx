"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TestimonialsHome() {
  return (
    <section id="depoimentos" className="py-20 lg:py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* CABEÇALHO CENTRALIZADO COM ENTRADA DESCENDENTE */}
        <ScrollReveal direction="down" duration={700} once={false}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              DEPOIMENTOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy-950 tracking-tight leading-tight">
              O que nossos clientes dizem
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-500">
              A confiança de quem já escolheu a 3D ALARMES para proteger o que importa.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 CARDS EM LINHA COM REVELAÇÃO SUBINDO EM CASCATA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 120}
              duration={650}
              once={false}
              className="h-full"
            >
              <div
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div>
                  {/* 5 ESTRELAS AMARELAS */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* TEXTO ENTRE ASPAS */}
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    “ {item.content} ”
                  </p>
                </div>

                {/* AUTOR DO DEPOIMENTO */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-navy-950 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      {item.category} — {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
