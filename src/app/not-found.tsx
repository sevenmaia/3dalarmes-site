import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-5 py-24 bg-white">
      <div className="relative w-24 h-28 mb-6">
        <Image
          src="/logos/logo-frontal.png"
          alt="3D ALARMES"
          fill
          className="object-contain"
        />
      </div>

      <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
        ERRO 404
      </span>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight">
        Página não encontrada
      </h1>

      <p className="mt-4 text-base text-gray-600 max-w-md">
        O endereço que você tentou acessar não existe ou foi alterado. Retorne para a página inicial da 3D ALARMES.
      </p>

      <div className="mt-8 flex gap-4">
        <Button
          href="/"
          variant="primary"
          size="md"
          icon={<Home className="w-4 h-4 text-navy-950" />}
          iconPosition="left"
        >
          Voltar para o Início
        </Button>
      </div>
    </div>
  );
}
