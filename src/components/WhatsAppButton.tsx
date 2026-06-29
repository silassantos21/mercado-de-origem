"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-5 w-72 border border-[#F2E8D5]"
          >
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#F2E8D5]">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#1A3A0F] text-sm">Mercado de Origem</p>
                <p className="text-xs text-[#5C8A42]">● Online agora</p>
              </div>
            </div>
            <p className="text-sm text-[#6B3010]/70 mb-4 leading-relaxed">
              Olá! 👋 Como podemos te ajudar? Fale com a nossa equipe agora mesmo.
            </p>
            <div className="space-y-2">
              {[
                { label: "Quero visitar o mercado", msg: "Olá! Quero saber mais sobre como visitar o Mercado de Origem — Olhos D'Água." },
                { label: "Informações sobre eventos", msg: "Olá! Gostaria de saber sobre os próximos eventos do Mercado de Origem." },
                { label: "Quero ser lojista", msg: "Olá! Tenho interesse em locar um espaço no Mercado de Origem como lojista." },
              ].map((opt) => (
                <a
                  key={opt.label}
                  href={`https://wa.me/5531984212848?text=${encodeURIComponent(opt.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-sm px-4 py-2.5 rounded-xl bg-[#FAF6ED] text-[#3C1A08] hover:bg-[#F2E8D5] transition-colors border border-[#F2E8D5]"
                >
                  {opt.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200"
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Fechar chat" : "Abrir chat WhatsApp"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
