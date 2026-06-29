import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Termos de Uso — Mercado de Origem",
  description: "Termos e condições de uso do site do Mercado de Origem.",
};

export default function TermosDeUso() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAF6ED] min-h-screen">
        {/* Header */}
        <div className="bg-[#1A3A0F] pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#D4A84B] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Documentos Legais
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Termos de Uso
            </h1>
            <p className="text-white/60 text-sm">
              Última atualização: junho de 2026 · Leia com atenção antes de utilizar este site
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-10">

            <Section titulo="1. Aceitação dos Termos">
              <p>
                Ao acessar e utilizar o site do <strong>Mercado de Origem</strong> (Circuito Mercados de
                Origem), você declara ter lido, compreendido e concordado com estes Termos de Uso.
                Caso não concorde com alguma disposição, recomendamos que não utilize o site.
              </p>
              <p>
                Estes Termos regem a relação entre o usuário e o Mercado de Origem, com unidade
                localizada na Rua Adriano Chaves e Matos, 447 — Olhos D'Água, Belo Horizonte — MG,
                CEP 30390-402.
              </p>
            </Section>

            <Section titulo="2. Descrição dos Serviços">
              <p>
                Este site tem caráter informativo e institucional, tendo por objetivo apresentar o
                Mercado de Origem, suas atrações, espaços disponíveis para locação e formas de
                contato. As principais funcionalidades são:
              </p>
              <ul>
                <li>Apresentação dos espaços, atrações e eventos do Mercado de Origem — Olhos D'Água;</li>
                <li>Formulário de manifestação de interesse em locação de espaço comercial;</li>
                <li>Redirecionamento para contato via WhatsApp;</li>
                <li>Informações de localização e como chegar.</li>
              </ul>
              <p>
                O Mercado de Origem reserva-se o direito de alterar, suspender ou encerrar qualquer
                funcionalidade do site a qualquer momento, sem aviso prévio.
              </p>
            </Section>

            <Section titulo="3. Uso Permitido">
              <p>O site destina-se exclusivamente ao uso pessoal e não comercial. É permitido:</p>
              <ul>
                <li>Navegar pelo conteúdo para fins informativos;</li>
                <li>Preencher o formulário de interesse em locação;</li>
                <li>Compartilhar links do site nas redes sociais.</li>
              </ul>
            </Section>

            <Section titulo="4. Uso Proibido">
              <p>É expressamente proibido:</p>
              <ul>
                <li>Reproduzir, distribuir, modificar ou explorar comercialmente qualquer conteúdo do site sem autorização prévia e por escrito do Mercado de Origem;</li>
                <li>Utilizar o site para enviar comunicações não solicitadas (spam), conteúdo ilegal ou ofensivo;</li>
                <li>Tentar acessar áreas restritas do sistema, realizar ataques de negação de serviço (DDoS) ou qualquer outra atividade que comprometa a segurança ou funcionamento do site;</li>
                <li>Utilizar robôs, scrapers ou qualquer mecanismo automatizado para coletar dados do site sem autorização;</li>
                <li>Fazer uso do site de forma que viole a legislação brasileira vigente.</li>
              </ul>
            </Section>

            <Section titulo="5. Propriedade Intelectual">
              <p>
                Todo o conteúdo disponível neste site — incluindo, mas não se limitando a textos,
                imagens, logotipos, identidade visual, layout, código-fonte e marcas — é de
                propriedade exclusiva do Mercado de Origem ou de seus licenciadores, sendo protegido
                pela Lei nº 9.610/1998 (Lei de Direitos Autorais) e pela Lei nº 9.279/1996 (Lei de
                Propriedade Industrial).
              </p>
              <p>
                Qualquer uso não autorizado constitui violação dos direitos de propriedade intelectual
                e poderá ensejar responsabilização civil e criminal.
              </p>
            </Section>

            <Section titulo="6. Formulário de Interesse em Locação">
              <p>
                Ao preencher o formulário de interesse em locação de espaço, o usuário declara que:
              </p>
              <ul>
                <li>As informações fornecidas são verdadeiras e atualizadas;</li>
                <li>Está ciente de que o envio redireciona para o WhatsApp do Mercado de Origem para continuidade do atendimento;</li>
                <li>O preenchimento do formulário não garante a disponibilidade de espaço nem cria qualquer obrigação contratual entre as partes.</li>
              </ul>
              <p>
                O tratamento dos dados pessoais fornecidos é regido pela nossa{" "}
                <a href="/politica-de-privacidade" className="text-[#5C8A42] hover:text-[#1A3A0F] underline underline-offset-2 transition-colors">
                  Política de Privacidade
                </a>
                , em conformidade com a LGPD (Lei nº 13.709/2018).
              </p>
            </Section>

            <Section titulo="7. Links para Sites de Terceiros">
              <p>
                Este site pode conter links para plataformas de terceiros, como WhatsApp (Meta
                Platforms), Google Maps e Instagram. O Mercado de Origem não se responsabiliza pelo
                conteúdo, políticas de privacidade ou práticas de sites externos. O acesso a esses
                links é de responsabilidade exclusiva do usuário.
              </p>
            </Section>

            <Section titulo="8. Limitação de Responsabilidade">
              <p>O Mercado de Origem não se responsabiliza por:</p>
              <ul>
                <li>Danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do site;</li>
                <li>Interrupções, falhas técnicas ou indisponibilidade temporária do site por razões alheias ao nosso controle (caso fortuito, força maior, falhas de terceiros);</li>
                <li>Conteúdo de sites de terceiros acessados por meio de links disponíveis neste site;</li>
                <li>Atos praticados por terceiros que afetem a segurança do site.</li>
              </ul>
              <p>
                As informações contidas neste site têm caráter meramente informativo e não constituem
                oferta vinculante de produtos, serviços ou espaços para locação.
              </p>
            </Section>

            <Section titulo="9. Disponibilidade do Site">
              <p>
                Empenhamo-nos para manter o site disponível de forma contínua, mas não garantimos
                disponibilidade ininterrupta. O site pode ser suspenso temporariamente para
                manutenção, atualização ou por circunstâncias fora do nosso controle, sem que isso
                gere qualquer direito de indenização ao usuário.
              </p>
            </Section>

            <Section titulo="10. Alterações nos Termos">
              <p>
                Estes Termos de Uso podem ser atualizados a qualquer momento. A data de "última
                atualização" indicada no topo deste documento reflete a versão vigente. O uso
                continuado do site após a publicação de alterações implica a aceitação dos novos
                termos.
              </p>
            </Section>

            <Section titulo="11. Lei Aplicável e Foro">
              <p>
                Estes Termos de Uso são regidos pela legislação brasileira, em especial:
              </p>
              <ul>
                <li>Marco Civil da Internet — Lei nº 12.965/2014;</li>
                <li>Código de Defesa do Consumidor — Lei nº 8.078/1990;</li>
                <li>Lei Geral de Proteção de Dados — Lei nº 13.709/2018;</li>
                <li>Código Civil Brasileiro — Lei nº 10.406/2002.</li>
              </ul>
              <p>
                Fica eleito o foro da comarca de <strong>Belo Horizonte — MG</strong> para dirimir
                quaisquer controvérsias decorrentes destes Termos, com renúncia expressa a qualquer
                outro, por mais privilegiado que seja.
              </p>
            </Section>

            <Section titulo="12. Contato">
              <p>
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <ul>
                <li><strong>E-mail:</strong> contato@mercadodeorigem.com.br</li>
                <li><strong>WhatsApp:</strong> (31) 98421-2848</li>
                <li><strong>Endereço:</strong> R. Adriano Chaves e Matos, 447 — Olhos D'Água, Belo Horizonte — MG, CEP 30390-402</li>
              </ul>
            </Section>

            <div className="border-t border-[#F2E8D5] pt-8 mt-8">
              <p className="text-sm text-[#6B3010]/50">
                Ao utilizar este site, você confirma que leu e concorda com estes Termos de Uso.
                Consulte também nossa{" "}
                <a href="/politica-de-privacidade" className="text-[#5C8A42] hover:text-[#1A3A0F] underline underline-offset-2 transition-colors">
                  Política de Privacidade
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function Section({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2
        className="text-xl font-bold text-[#1A3A0F] border-b border-[#F2E8D5] pb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {titulo}
      </h2>
      <div className="text-[#3C1A08]/75 leading-relaxed space-y-3 text-sm md:text-base [&_strong]:text-[#1A3A0F] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[#5C8A42]">
        {children}
      </div>
    </section>
  );
}
