"use client";

import { useState } from "react";
import { Instagram, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const instagramUsername = "_.carlosvfb._"; // substitua pelo user real
  const whatsappNumber = "5562999999999"; // substitua pelo número real

  const partnershipMessage = "Olá! Estou entrando em contato para propor uma parceria com você.";

  const handleCopyAndRedirect = (platform: "instagram" | "whatsapp") => {
    navigator.clipboard.writeText(partnershipMessage).then(() => {
      setCopied(platform);
      setTimeout(() => {
        const url =
          platform === "instagram"
            ? `https://instagram.com/${instagramUsername}`
            : `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(partnershipMessage)}`;

        window.open(url, "_blank");
      }, 1500);
      setTimeout(() => setCopied(null), 3000);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Entre em Contato
        </h2>

        <p className="text-xl text-gray-300 mb-4">
          Para parcerias ou colaborações, entre em contato pelas redes abaixo:
        </p>

        <div className="flex flex-col items-center gap-4 max-w-lg mx-auto">

          {/* Botão Instagram */}
          <Button
            onClick={() => handleCopyAndRedirect("instagram")}
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-lg px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Instagram className="w-5 h-5" />
            Copiar mensagem e abrir Instagram
          </Button>

          {/* Botão WhatsApp */}
          <Button
            onClick={() => handleCopyAndRedirect("whatsapp")}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white text-lg px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            Copiar mensagem e abrir WhatsApp
          </Button>

          {/* Mensagens de feedback */}
          {copied && (
            <p className="text-sm text-green-400 mt-2 flex items-center justify-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Mensagem copiada! Redirecionando para {copied === "instagram" ? "Instagram" : "WhatsApp"}...
            </p>
          )}

          {/* Mensagem visível para copiar manualmente */}
          <div className="bg-gray-800 text-purple-300 text-sm p-4 rounded-xl border border-purple-500/10 mt-4 w-full">
            <p className="mb-2 font-medium">Mensagem padrão:</p>
            <p className="italic break-words">"{partnershipMessage}"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
