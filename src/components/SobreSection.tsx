"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Building2, Car, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2, value: "14.000 m²", label: "de área construída" },
  { icon: Car, value: "350 vagas", label: "de estacionamento" },
  { icon: Users, value: "6 milhões", label: "de pessoas na região/mês" },
  { icon: TrendingUp, value: "R$ 40M", label: "de investimento inicial" },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function SobreSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#FAF6ED]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#5C8A42] text-sm font-semibold tracking-[0.2em] uppercase">
              Nossa História
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A3A0F] mt-3 mb-5 text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Um ponto de encontro
              <br />
              <span className="text-[#C4783A]">entre pessoas e histórias</span>
            </h2>
            <p className="text-[#6B3010]/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Uma proposta surpreendente e inédita em Belo Horizonte. Um corredor cultural onde diferentes regiões, tradições e conhecimentos se encontram para celebrar o sabor, a cultura e as histórias de Minas, do Brasil e do mundo.
            </p>
          </div>
        </FadeIn>

        {/* Grid storytelling */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <FadeIn delay={0.1}>
            <div className="relative h-70 md:h-130 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=85"
                alt="Produtores locais exibindo seus produtos artesanais no Mercado de Origem"
                fill
                className="object-cover"
              />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-[#1A3A0F]/90 backdrop-blur-sm text-white px-5 py-3 rounded-2xl">
                <p className="text-[#D4A84B] text-xs font-semibold uppercase tracking-wider mb-1">Destaque</p>
                <p className="text-sm font-medium">Feira de produtores toda semana</p>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div className="p-7 bg-white rounded-2xl border border-[#F2E8D5] shadow-sm">
                <h3
                  className="text-xl font-bold text-[#1A3A0F] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Produtor ao consumidor
                </h3>
                <p className="text-[#6B3010]/70 leading-relaxed">
                  Os Mercados de Origem foram pensados para ser uma central de distribuição dos pequenos produtores agrícolas, aproximando-os do consumidor final, sem a necessidade de atravessadores.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-7 bg-[#1A3A0F] rounded-2xl text-white">
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Experiências de alto padrão
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Gastronomia, lazer e conhecimento num único destino de 14.000 m² às margens da BR-040, em frente ao Leroy Merlin e ao BH Outlet — o complexo de compras e entretenimento sem comparativo na capital mineira.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="relative h-52 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85"
                  alt="Gastronomia artesanal no Mercado de Origem"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={0.1 * i}>
              <div className="text-center p-6 bg-white rounded-2xl border border-[#F2E8D5] shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F2E8D5] mb-4">
                  <s.icon className="w-6 h-6 text-[#5C8A42]" />
                </div>
                <p
                  className="text-3xl font-bold text-[#1A3A0F] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </p>
                <p className="text-sm text-[#6B3010]/60 font-medium">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
