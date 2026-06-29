"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, MapPin, MessageCircle, Music, Utensils, Palette } from "lucide-react";

const categoriaIcon = {
  Gastronomia: Utensils,
  Cultura: Palette,
  Música: Music,
};

const categoriaColor = {
  Gastronomia: "bg-[#C4783A]/15 text-[#C4783A]",
  Cultura: "bg-[#5C8A42]/15 text-[#5C8A42]",
  Música: "bg-[#D4A84B]/20 text-[#8B4A20]",
};

const eventos = [
  {
    titulo: "Festival do Queijo Mineiro",
    categoria: "Gastronomia" as const,
    data: "05 Jul 2026",
    hora: "10h às 18h",
    local: "Praça Central — Filial Sete Lagoas",
    descricao: "Degustação de mais de 40 variedades de queijo artesanal, harmonização com cachaças e vinhos, e workshops com queijeiros da região.",
    destaque: true,
  },
  {
    titulo: "Noite de Jazz & Vinhos",
    categoria: "Música" as const,
    data: "12 Jul 2026",
    hora: "19h às 23h",
    local: "Bistrô das Matas",
    descricao: "Uma noite especial com o Quinteto Vereda, wine pairing elaborado pelo sommelier e menu exclusivo de petiscos artesanais.",
    destaque: false,
  },
  {
    titulo: "Oficina de Cerâmica Viva",
    categoria: "Cultura" as const,
    data: "19 Jul 2026",
    hora: "9h às 13h",
    local: "Ateliê do Artesão",
    descricao: "Aprenda técnicas tradicionais de cerâmica com a mestra Dona Amélia, referência da olaria mineira com mais de 40 anos de experiência.",
    destaque: false,
  },
  {
    titulo: "Brunch Farm to Table",
    categoria: "Gastronomia" as const,
    data: "26 Jul 2026",
    hora: "9h às 13h",
    local: "Espaço Verde",
    descricao: "Brunch ao ar livre com produtos colhidos na véspera pelos agricultores parceiros, com mesa farta e ambiente musical ao vivo.",
    destaque: false,
  },
];

export default function EventosSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="eventos" className="py-24 md:py-32 bg-[#1A3A0F]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-[#D4A84B] text-sm font-semibold tracking-[0.2em] uppercase">
            Agenda Cultural
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sempre há algo especial
            <br />
            acontecendo aqui
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Eventos de gastronomia, música ao vivo e oficinas culturais. Escolha o seu próximo fim de semana.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {eventos.map((evento, i) => {
            const Icon = categoriaIcon[evento.categoria];
            const colorClass = categoriaColor[evento.categoria];
            return (
              <motion.div
                key={evento.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: "easeOut" }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  evento.destaque
                    ? "bg-[#D4A84B] border-[#D4A84B] text-[#1A3A0F]"
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {evento.destaque && (
                  <span className="absolute top-4 right-4 bg-[#1A3A0F] text-[#D4A84B] text-xs font-bold px-3 py-1 rounded-full">
                    Em destaque
                  </span>
                )}

                <div className="flex items-start gap-4">
                  {/* Data */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center text-center ${
                      evento.destaque ? "bg-[#1A3A0F]/15" : "bg-white/10"
                    }`}
                  >
                    <span className="text-xs font-semibold opacity-70 uppercase tracking-wide leading-none">
                      {evento.data.split(" ")[1]}
                    </span>
                    <span className="text-2xl font-bold leading-tight">
                      {evento.data.split(" ")[0]}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          evento.destaque ? "bg-[#1A3A0F]/15 text-[#1A3A0F]" : colorClass
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        {evento.categoria}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {evento.titulo}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mb-3 ${
                        evento.destaque ? "text-[#1A3A0F]/75" : "text-white/60"
                      }`}
                    >
                      {evento.descricao}
                    </p>
                    <div
                      className={`flex flex-wrap gap-4 text-xs font-medium ${
                        evento.destaque ? "text-[#1A3A0F]/70" : "text-white/50"
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {evento.hora}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {evento.local}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-current/10">
                  <a
                    href={`https://wa.me/5531999999999?text=Quero saber mais sobre o evento: ${evento.titulo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 ${
                      evento.destaque ? "text-[#1A3A0F]" : "text-[#D4A84B]"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Saber mais no WhatsApp
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5531999999999?text=Quero ver todos os eventos do Mercado de Origem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#D4A84B] text-[#D4A84B] font-semibold hover:bg-[#D4A84B] hover:text-[#1A3A0F] transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Ver agenda completa
          </a>
        </div>
      </div>
    </section>
  );
}
