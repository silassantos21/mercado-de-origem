"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Store, TrendingUp, Users, Leaf, Send } from "lucide-react";

const beneficios = [
  {
    icon: Users,
    titulo: "Público qualificado",
    descricao: "Mais de 5.000 visitantes por fim de semana buscando produtos artesanais e experiências únicas.",
  },
  {
    icon: TrendingUp,
    titulo: "Visibilidade imediata",
    descricao: "Presença nas nossas redes sociais, newsletter mensal e divulgação nos pontos físicos.",
  },
  {
    icon: Store,
    titulo: "Infraestrutura completa",
    descricao: "Ponto comercial mobiliado, energia, Wi-Fi, segurança e estacionamento incluídos.",
  },
  {
    icon: Leaf,
    titulo: "Comunidade engajada",
    descricao: "Faça parte de uma rede de produtores comprometidos com qualidade e sustentabilidade.",
  },
];

const items = [
  "Produto artesanal, orgânico ou de origem regional",
  "Alimentos, bebidas, artesanato ou serviços culturais",
  "Comprometimento com a identidade do Mercado",
  "Documentação fiscal em dia (MEI ou CNPJ)",
];

export default function LojistasSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    produto: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = encodeURIComponent(
      `Olá! Tenho interesse em ser lojista no Mercado de Origem.\n\nNome: ${form.nome}\nE-mail: ${form.email}\nSegmento: ${form.produto}\n\n${form.mensagem}`
    );
    window.open(`https://wa.me/5531984212848?text=${texto}`, "_blank");
    setEnviado(true);
  };

  return (
    <section id="lojistas" className="py-24 md:py-32 bg-[#FAF6ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Esquerda — benefícios */}
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#5C8A42] text-sm font-semibold tracking-[0.2em] uppercase">
                Seja Lojista
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1A3A0F] mt-3 mb-5 text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Leve seu negócio
                <br />
                <span className="text-[#C4783A]">para o próximo nível</span>
              </h2>
              <p className="text-[#6B3010]/70 text-lg leading-relaxed mb-10">
                Temos espaços modulares disponíveis para lojistas e produtores que se identificam com a proposta do Mercado de Origem. Vagas limitadas.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {beneficios.map((b, i) => (
                <motion.div
                  key={b.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="p-5 bg-white rounded-2xl border border-[#F2E8D5] shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F2E8D5] flex items-center justify-center mb-3">
                    <b.icon className="w-5 h-5 text-[#5C8A42]" />
                  </div>
                  <h4
                    className="font-bold text-[#1A3A0F] mb-1.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {b.titulo}
                  </h4>
                  <p className="text-sm text-[#6B3010]/65 leading-relaxed">{b.descricao}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 bg-[#1A3A0F] rounded-2xl text-white"
            >
              <h4
                className="font-bold text-[#D4A84B] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Perfil que buscamos
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#5C8A42] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Direita — formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#F2E8D5] lg:sticky lg:top-28"
          >
            {enviado ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#5C8A42]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9 text-[#5C8A42]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#1A3A0F] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Mensagem enviada!
                </h3>
                <p className="text-[#6B3010]/70">
                  Nossa equipe entrará em contato pelo WhatsApp em breve.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-6 text-sm text-[#5C8A42] underline underline-offset-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-2xl font-bold text-[#1A3A0F] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Quero ser lojista
                </h3>
                <p className="text-sm text-[#6B3010]/60 mb-7">
                  Preencha e entraremos em contato em até 48h.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3C1A08] mb-1.5">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#F2E8D5] bg-[#FAF6ED] text-[#3C1A08] placeholder-[#3C1A08]/40 focus:outline-none focus:ring-2 focus:ring-[#5C8A42]/40 focus:border-[#5C8A42] transition"
                      placeholder="Maria Silva"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#3C1A08] mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#F2E8D5] bg-[#FAF6ED] text-[#3C1A08] placeholder-[#3C1A08]/40 focus:outline-none focus:ring-2 focus:ring-[#5C8A42]/40 focus:border-[#5C8A42] transition"
                        placeholder="maria@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3C1A08] mb-1.5">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#F2E8D5] bg-[#FAF6ED] text-[#3C1A08] placeholder-[#3C1A08]/40 focus:outline-none focus:ring-2 focus:ring-[#5C8A42]/40 focus:border-[#5C8A42] transition"
                        placeholder="(31) 99999-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3C1A08] mb-1.5">
                      O que você vende? *
                    </label>
                    <select
                      required
                      value={form.produto}
                      onChange={(e) => setForm({ ...form, produto: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#F2E8D5] bg-[#FAF6ED] text-[#3C1A08] focus:outline-none focus:ring-2 focus:ring-[#5C8A42]/40 focus:border-[#5C8A42] transition"
                    >
                      <option value="">Selecione um segmento</option>
                      <option>Alimentos artesanais</option>
                      <option>Bebidas (café, sucos, cervejas)</option>
                      <option>Queijos e laticínios</option>
                      <option>Artesanato e decoração</option>
                      <option>Moda e acessórios</option>
                      <option>Gastronomia (restaurante/lanchonete)</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3C1A08] mb-1.5">
                      Conte um pouco sobre o seu negócio
                    </label>
                    <textarea
                      rows={3}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#F2E8D5] bg-[#FAF6ED] text-[#3C1A08] placeholder-[#3C1A08]/40 focus:outline-none focus:ring-2 focus:ring-[#5C8A42]/40 focus:border-[#5C8A42] transition resize-none"
                      placeholder="Há quanto tempo você produz? Qual é o diferencial do seu produto?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#1A3A0F] text-white font-semibold hover:bg-[#2D5A1B] transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Enviar via WhatsApp
                  </button>
                  <p className="text-xs text-center text-[#3C1A08]/40">
                    Ao enviar, você será redirecionado ao WhatsApp com suas informações.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
