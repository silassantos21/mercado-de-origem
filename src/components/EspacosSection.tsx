"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categorias = ["Todos", "Gastronomia", "Cultura", "Lazer"];

const espacos = [
  {
    nome: "Cervejaria 3 Orelhas",
    categoria: "Gastronomia",
    descricao: "No rooftop do Mercado, a renomada 3 Orelhas produz lotes limitados de cervejas artesanais exclusivas em ambiente único com vista panorâmica.",
    imagem: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=85",
    tag: "Rooftop",
  },
  {
    nome: "Queijaria Senzala",
    categoria: "Gastronomia",
    descricao: "O premiado Queijo Senzala, produzido em Caxambu ao longo de 5 gerações. Sabor autêntico do interior de Minas direto para a sua mesa.",
    imagem: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=85",
    tag: null,
  },
  {
    nome: "Museu das Reduções",
    categoria: "Cultura",
    descricao: "Uma viagem pela história de 15 estados brasileiros através de réplicas fascinantes. Uma aula viva da nossa rica herança cultural.",
    imagem: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=85",
    tag: "Gratuito",
  },
  {
    nome: "Espaço Kids — Casa do Sol",
    categoria: "Lazer",
    descricao: "Em parceria com a Casa do Sol, referência em festas infantis de BH. Diversão garantida e memórias inesquecíveis para toda a família.",
    imagem: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=85",
    tag: null,
  },
  {
    nome: "Cachaçaria — Cava José Ribeiro",
    categoria: "Gastronomia",
    descricao: "A primeira e maior escola de destilados do Brasil, com produtores de diferentes regiões de Minas. Explore o universo das cachaças artesanais.",
    imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=85",
    tag: null,
  },
  {
    nome: "Armazém a Mineira",
    categoria: "Gastronomia",
    descricao: "Um mix selecionado de produtos regionais, temperos, conservas e quitandas com origem garantida e curadoria especializada.",
    imagem: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=85",
    tag: null,
  },
];

export default function EspacosSection() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtrados =
    categoriaAtiva === "Todos"
      ? espacos
      : espacos.filter((e) => e.categoria === categoriaAtiva);

  return (
    <section id="espacos" className="py-24 md:py-32 bg-[#F2E8D5]/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-[#5C8A42] text-sm font-semibold tracking-[0.2em] uppercase">
            Espaços & Lojas
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1A3A0F] mt-3 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Um mundo de experiências
            <br />
            num só lugar
          </h2>
          <p className="text-[#6B3010]/70 text-lg max-w-xl mx-auto">
            Do restaurante à banca de artesanato, cada espaço é uma descoberta.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                categoriaAtiva === cat
                  ? "bg-[#1A3A0F] text-white shadow-md"
                  : "bg-white text-[#3C1A08]/70 border border-[#F2E8D5] hover:border-[#5C8A42] hover:text-[#1A3A0F]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filtrados.map((espaco, i) => (
            <motion.div
              key={espaco.nome}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={espaco.imagem}
                  alt={espaco.nome}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#1A3A0F]/0 group-hover:bg-[#1A3A0F]/30 transition-all duration-300" />

                {espaco.tag && (
                  <span className="absolute top-4 left-4 bg-[#D4A84B] text-[#1A3A0F] text-xs font-bold px-3 py-1 rounded-full">
                    {espaco.tag}
                  </span>
                )}
                <span className="absolute top-4 right-4 bg-white/90 text-[#5C8A42] text-xs font-semibold px-3 py-1 rounded-full">
                  {espaco.categoria}
                </span>
              </div>
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-[#1A3A0F] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {espaco.nome}
                </h3>
                <p className="text-sm text-[#6B3010]/65 leading-relaxed mb-4">
                  {espaco.descricao}
                </p>
                <button className="flex items-center gap-1.5 text-sm font-semibold text-[#5C8A42] hover:text-[#1A3A0F] transition-colors group/btn">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
