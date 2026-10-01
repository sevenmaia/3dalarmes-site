"use client";

import React, { useState } from "react";
import { Upload, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function JobApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("O arquivo excede o limite máximo de 5MB.");
        return;
      }
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !area) {
      alert("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-navy-950 mb-2">Currículo Enviado com Sucesso!</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Obrigado pelo seu interesse em fazer parte da <strong>3D ALARMES</strong>. Nossa equipe de Recursos Humanos analisará o seu perfil e entrará em contato caso haja compatibilidade.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setPhone("");
            setArea("");
            setMessage("");
            setFileName("");
          }}
          className="mt-6 text-sm font-bold text-blue-700 hover:underline"
        >
          Enviar outro currículo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
            Seu Nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome completo"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 placeholder:text-gray-400 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
            Seu E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 placeholder:text-gray-400 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
            Telefone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(92) 9XXXX-XXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 placeholder:text-gray-400 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
            Selecione a área de interesse <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 bg-white transition-all"
          >
            <option value="">Selecione...</option>
            <option value="tecnico-instalacao">Técnico de Instalação</option>
            <option value="atendente-comercial">Atendente Comercial</option>
            <option value="monitoramento-24h">Monitoramento 24h</option>
            <option value="suporte-tecnico">Suporte Técnico</option>
            <option value="banco-talentos">Banco de Talentos (Outras áreas)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
          Mensagem (opcional)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Conte um pouco sobre você e sua experiência profissional..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-navy-950 placeholder:text-gray-400 transition-all resize-none"
        />
      </div>

      {/* UPLOAD DE ARQUIVO */}
      <div>
        <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
          Anexar Currículo (PDF, DOC, DOCX — máx. 5MB)
        </label>
        <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-blue-400 transition-colors">
          <div className="flex items-center gap-3">
            <Upload className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-gray-600 font-medium">
              {fileName ? fileName : "Nenhum arquivo selecionado"}
            </span>
          </div>
          <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-navy-950 font-bold text-xs px-3.5 py-1.5 rounded-lg transition-colors">
            Escolher arquivo
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={status === "submitting"}
          icon={<Send className="w-4 h-4 text-navy-950" />}
        >
          {status === "submitting" ? "Enviando Currículo..." : "Enviar Currículo"}
        </Button>
      </div>
    </form>
  );
}
