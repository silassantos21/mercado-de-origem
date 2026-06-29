"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=85"
          alt="Interior do Mercado de Origem — ambiente acolhedor com madeira e vegetação"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay gradiente verde-floresta + marrom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3A0F]/80 via-[#3C1A08]/60 to-[#1A3A0F]/90" />
      </div>

      {/* Textura granulada sutil */}
      <div
        className="absolute inset-0 z-[1] opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 text-[#D4A84B] text-sm font-medium tracking-[0.2em] uppercase mb-6">
            <MapPin className="w-4 h-4" />
            Olhos D'Água · Belo Horizonte, MG
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-balance"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          O sabor que
          <br />
          <span className="text-[#D4A84B]">nasce da terra</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          Feira artesanal, gastronomia de raiz, espaços de lazer e eventos culturais — tudo reunido num único destino em Minas Gerais.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <a
            href="#sobre"
            className="px-8 py-4 rounded-full bg-[#D4A84B] text-[#1A3A0F] font-semibold text-base hover:bg-[#C4783A] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Conheça o Mercado
          </a>
          <a
            href="https://wa.me/5531984212848?text=Olá! Quero saber mais sobre o Mercado de Origem — Olhos D'Água."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Fale no WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
