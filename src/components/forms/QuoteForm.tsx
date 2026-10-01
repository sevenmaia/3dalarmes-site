"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle, Mail, MapPin, Building, ShieldCheck, ArrowRight, Copy, Check } from "lucide-react";
import { contact } from "@/data/contact";

export function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [clientType, setClientType] = useState("Residencial (Casa / Sobrado)");
  const [service, setService] = useState("CFTV (Câmeras de Segurança)");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  // Formata mensagem para o WhatsApp com padrão profissional
  const generateWhatsAppMessage = () => {
    return `🛡️ *SOLICITAÇÃO DE ORÇAMENTO — 3D ALARMES*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Nome:* ${name}
📱 *WhatsApp:* ${phone}
✉️ *E-mail:* ${email || "Não informado"}
📍 *Bairro / Região:* ${neighborhood || "Manaus/AM"}
🏢 *Tipo de Imóvel:* ${clientType}
🔒 *Serviço de Interesse:* ${service}
━━━━━━━━━━━━━━━━━━━━━━
📝 *Detalhes do Projeto:*
${message ? `"${message}"` : "Gostaria de um orçamento detalhado para o serviço selecionado."}
━━━━━━━━━━━━━━━━━━━━━━
_Enviado pelo formulário do site oficial 3D ALARMES_`;
  };

  // Formata corpo de e-mail profissional
  const generateEmailBody = () => {
    return `SOLICITAÇÃO DE ORÇAMENTO — 3D ALARMES
=================================================

DADOS DO SOLICITANTE:
• Nome: ${name}
• Telefone / WhatsApp: ${phone}
• E-mail: ${email || "Não informado"}
• Bairro / Região: ${neighborhood || "Manaus/AM"}

DETALHES DO PROJETO:
• Tipo de Imóvel / Cliente: ${clientType}
• Serviço Solicitado: ${service}

MENSAGEM / OBSERVAÇÕES:
${message || "Gostaria de receber uma proposta comercial para o serviço selecionado."}

=================================================
Enviado através do formulário de contato do site 3D ALARMES.
Data: ${new Date().toLocaleDateString("pt-BR")}`;
  };

  const getWaLink = () => {
    return `https://wa.me/${contact.whatsapp.sales.clean}?text=${encodeURIComponent(
      generateWhatsAppMessage()
    )}`;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[Orçamento Site] ${service} - ${name} (${neighborhood || "Manaus"})`);
    const body = encodeURIComponent(generateEmailBody());
    return `mailto:${contact.email.primary}?subject=${subject}&body=${body}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent, channel: "whatsapp" | "email" = "whatsapp") => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Por favor, preencha pelo menos seu Nome e WhatsApp.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (channel === "whatsapp") {
        window.open(getWaLink(), "_blank");
      } else {
        window.location.href = getMailtoLink();
      }
    }, 400);
  };

  if (isSuccess) {
    return (
      <div className="bg-gradient-to-b from-blue-50/70 to-white border border-blue-200/80 rounded-3xl p-6 sm:p-8 text-navy-950">
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h3 className="text-xl font-black text-navy-950">
              Orçamento Organizado com Sucesso!
            </h3>
            <p className="text-xs text-gray-600">
              As informações foram compiladas e estão prontas para atendimento imediato.
            </p>
          </div>
        </div>

        {/* CARTÃO COM RESUMO FORMATADO */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm my-5 text-xs text-gray-700 space-y-2">
          <div className="flex justify-between border-b border-gray-100 pb-2 font-medium">
            <span className="text-gray-500">Cliente:</span>
            <span className="font-bold text-navy-950">{name}</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">WhatsApp:</span>
            <span className="font-bold text-navy-950">{phone}</span>
          </div>
          {email && (
            <div className="flex justify-between border-b border-gray-100 pb-2">
              <span className="text-gray-500">E-mail:</span>
              <span className="font-semibold text-navy-950">{email}</span>
            </div>
          )}
          {neighborhood && (
            <div className="flex justify-between border-b border-gray-100 pb-2">
              <span className="text-gray-500">Bairro:</span>
              <span className="font-semibold text-navy-950">{neighborhood}</span>
            </div>
          )}
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500">Imóvel:</span>
            <span className="font-semibold text-navy-950">{clientType}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-gray-500">Serviço:</span>
            <span className="font-bold text-blue-700">{service}</span>
          </div>
        </div>

        {/* 2 BOTÕES DE DISPARO RÁPIDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <a
            href={getWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5 fill-current shrink-0" />
            <span>Enviar no WhatsApp</span>
          </a>

          <a
            href={getMailtoLink()}
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02]"
          >
            <Mail className="w-5 h-5 shrink-0" />
            <span>Enviar por E-mail</span>
          </a>
        </div>

        <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-gray-200/80">
          <button
            onClick={handleCopySummary}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-navy-950 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copiado para a área de transferência!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gray-500" />
                <span>Copiar texto formatado</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setIsSuccess(false);
              setName("");
              setPhone("");
              setEmail("");
              setNeighborhood("");
              setMessage("");
            }}
            className="text-xs font-bold text-blue-700 hover:underline"
          >
            Preencher novo orçamento
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, "whatsapp")} className="space-y-4">
      {/* LINHA 1: NOME E WHATSAPP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
            Seu Nome Completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Carlos Eduardo"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 placeholder:text-gray-400 transition-all bg-gray-50/50 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
            WhatsApp com DDD <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(92) 9XXXX-XXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 placeholder:text-gray-400 transition-all bg-gray-50/50 focus:bg-white"
          />
        </div>
      </div>

      {/* LINHA 2: E-MAIL E BAIRRO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
            Seu E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@exemplo.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 placeholder:text-gray-400 transition-all bg-gray-50/50 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
            Bairro / Cidade em Manaus
          </label>
          <input
            type="text"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            placeholder="Ex: Adrianópolis, Planalto, Ponta Negra..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 placeholder:text-gray-400 transition-all bg-gray-50/50 focus:bg-white"
          />
        </div>
      </div>

      {/* LINHA 3: TIPO DE IMÓVEL E SERVIÇO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
            Tipo de Imóvel / Cliente
          </label>
          <select
            value={clientType}
            onChange={(e) => setClientType(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 bg-white transition-all cursor-pointer"
          >
            <option value="Residencial (Casa / Sobrado)">Residencial (Casa / Sobrado)</option>
            <option value="Apartamento / Condomínio">Apartamento / Condomínio Fechado</option>
            <option value="Comércio / Loja de Rua">Comércio / Loja de Rua</option>
            <option value="Empresa / Escritório">Empresa / Escritório</option>
            <option value="Galpão / Indústria (PIM)">Galpão / Indústria (Polo Industrial)</option>
            <option value="Veículo Particular / Frota">Veículo Particular / Frota Corporativa</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
            Serviço de Interesse
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 bg-white transition-all cursor-pointer font-medium"
          >
            <option value="CFTV (Câmeras de Segurança)">CFTV (Câmeras de Segurança e Gravação)</option>
            <option value="Sistemas de Alarme de Intrusão">Sistemas de Alarme de Intrusão</option>
            <option value="Central de Monitoramento 24 Horas">Central de Monitoramento 24 Horas</option>
            <option value="Cercas Elétricas e Concertinas">Cercas Elétricas e Concertinas</option>
            <option value="Rastreamento Veicular com Bloqueio">Rastreamento Veicular (GPS / Telemetria)</option>
            <option value="Controle de Acesso (Biometria / Facial)">Controle de Acesso (Biometria / Facial / Catraca)</option>
            <option value="Projeto Completo Integrado">Projeto Completo Integrado (CFTV + Alarme + Cerca)</option>
          </select>
        </div>
      </div>

      {/* LINHA 4: DETALHES DO PROJETO */}
      <div>
        <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
          Mensagem ou Detalhes da sua Necessidade (opcional)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ex: Preciso de 8 câmeras para um galpão ou alarme para residência..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 placeholder:text-gray-400 transition-all resize-none bg-gray-50/50 focus:bg-white"
        />
      </div>

      {/* BOTÕES DE ENVIO DUPLO: WHATSAPP (PRIMÁRIO) E E-MAIL (SECUNDÁRIO) */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-navy-950 font-black text-sm transition-all duration-200 shadow-[0_4px_20px_rgba(255,214,0,0.35)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
        >
          <MessageCircle className="w-5 h-5 fill-current text-navy-950 shrink-0" />
          <span>{isSubmitting ? "Organizando..." : "Solicitar via WhatsApp"}</span>
          <ArrowRight className="w-4 h-4 text-navy-950" />
        </button>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={(e) => handleSubmit(e, "email")}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-navy-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-all duration-200 border border-navy-800 hover:border-blue-600 shadow-sm"
        >
          <Mail className="w-4 h-4 text-blue-400 shrink-0" />
          <span>Enviar por E-mail</span>
        </button>
      </div>

      <p className="text-[11px] text-gray-500 text-center sm:text-left mt-2 flex items-center justify-center sm:justify-start gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
        <span>Seus dados são protegidos e enviados diretamente aos canais oficiais da 3D ALARMES.</span>
      </p>
    </form>
  );
}
