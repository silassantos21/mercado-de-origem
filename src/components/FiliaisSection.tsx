"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin, Car, Users, Building2, ExternalLink } from "lucide-react";

const stats = [
  { icon: Building2, value: "14.000 m²", label: "de área construída" },
  { icon: Car, value: "350 vagas", label: "de estacionamento" },
  { icon: Users, value: "6 milhões", label: "de pessoas na região/mês" },
  { icon: MapPin, value: "BR-040", label: "a 1,9 km do BH Shopping" },
];

const parceiros = [
  { nome: "3 Orelhas", logo: "/logos/3-orelhas.png" },
  { nome: "Casa do Sol", logo: "/logos/casa-do-sol.png" },
  { nome: "Museu das Reduções", logo: "/logos/museu-das-reducoes.png" },
  { nome: "Amizartes", logo: "/logos/amizartes.png" },
  { nome: "Padilha Choperia", logo: "/logos/padilha-choperia.png" },
  { nome: "D Design Brasil", logo: "/logos/d-desidn-brasil.png" },
  { nome: "Armazém a Mineira", logo: "/logos/armazem-a-mineira.png" },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function FiliaisSection() {
  return (
    <section id="filiais" className="py-24 md:py-32 bg-[#F2E8D5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#5C8A42] text-sm font-semibold tracking-[0.2em] uppercase">
              Onde Estamos
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A3A0F] mt-3 mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Olhos D'Água,
              <br />
              <span className="text-[#C4783A]">Belo Horizonte</span>
            </h2>
            <p className="text-[#6B3010]/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Uma das localizações mais estratégicas de BH — em frente ao Leroy Merlin e ao BH Outlet,
              num dos maiores complexos de compras e entretenimento da capital mineira.
            </p>
          </div>
        </FadeIn>

        {/* Conteúdo principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Esquerda — imagem real */}
          <FadeIn delay={0.1}>
            <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/imagem-local.png"
                alt="Mercado de Origem Olhos D'Água — fachada e ambiente externo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A0F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[#D4A84B] text-xs font-semibold uppercase tracking-wider mb-1">
                  Unidade em operação
                </p>
                <p className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Mercado de Origem — Olhos D'Água
                </p>
                <p className="text-sm text-white/70 mt-1">
                  R. Adriano Chaves e Matos, 447 · BH, MG
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Direita — info + stats + CTA */}
          <div className="space-y-6">
            {/* Stats grid */}
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-2xl p-5 border border-[#F2E8D5] shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F2E8D5] flex items-center justify-center mb-3">
                      <s.icon className="w-5 h-5 text-[#5C8A42]" />
                    </div>
                    <p
                      className="text-lg font-bold text-[#1A3A0F] leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.value}
                    </p>
                    <p className="text-xs text-[#6B3010]/60 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Endereço */}
            <FadeIn delay={0.25}>
              <div className="bg-[#1A3A0F] rounded-2xl p-6 text-white space-y-3">
                <h4
                  className="font-bold text-[#D4A84B] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Como chegar
                </h4>
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <MapPin className="w-4 h-4 text-[#A3C98A] flex-shrink-0 mt-0.5" />
                  <span>R. Adriano Chaves e Matos, 447 — Olhos D'Água, Belo Horizonte — MG, 30390-402</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <Car className="w-4 h-4 text-[#A3C98A] flex-shrink-0 mt-0.5" />
                  <span>350 vagas de estacionamento disponíveis</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.+Adriano+Chaves+e+Matos+447+Olhos+D%27%C3%81gua+Belo+Horizonte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-[#D4A84B] hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver no Google Maps
                </a>
              </div>
            </FadeIn>

            {/* CTA locação */}
            <FadeIn delay={0.35}>
              <div className="bg-[#FAF6ED] rounded-2xl p-6 border border-[#F2E8D5]">
                <p className="text-sm font-semibold text-[#1A3A0F] mb-1">
                  Interessado em locar um espaço?
                </p>
                <p className="text-sm text-[#6B3010]/65 mb-4 leading-relaxed">
                  Temos lojas modulares disponíveis no Olhos D'Água. Fale com nossa equipe e saiba como fazer parte do circuito.
                </p>
                <a
                  href="https://wa.me/5531984212848?text=Olá! Gostaria de saber mais sobre a locação de espaços no Mercado de Origem — Olhos D'Água."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A3A0F] text-white text-sm font-semibold hover:bg-[#2D5A1B] transition-colors"
                >
                  Alugue sua loja — (31) 98421-2848
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Parceiros */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-10">
            <span className="text-[#5C8A42] text-sm font-semibold tracking-[0.2em] uppercase">
              Empresas Parceiras
            </span>
            <p className="text-[#6B3010]/60 text-sm mt-2">
              Marcas que já fazem parte do nosso circuito
            </p>
          </div>
          <div className="overflow-hidden marquee-fade py-4 bg-[#F2E8D5]">
            <motion.div
              className="flex items-center gap-16"
              style={{ width: "max-content", mixBlendMode: "multiply" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {[...parceiros, ...parceiros].map((p, i) => (
                <div
                  key={`${p.nome}-${i}`}
                  className="relative h-16 w-36 shrink-0 grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={p.logo}
                    alt={p.nome}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
