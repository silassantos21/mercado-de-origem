import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Política de Privacidade — Mercado de Origem",
  description: "Política de Privacidade e tratamento de dados pessoais do Mercado de Origem, conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",
};

export default function PoliticaDePrivacidade() {
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
              Política de Privacidade
            </h1>
            <p className="text-white/60 text-sm">
              Última atualização: junho de 2026 · Conforme a LGPD — Lei nº 13.709/2018
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose prose-stone max-w-none space-y-10">

            <Section titulo="1. Quem somos">
              <p>
                O <strong>Mercado de Origem</strong> (Circuito Mercados de Origem), com unidade localizada na
                Rua Adriano Chaves e Matos, 447 — Olhos D'Água, Belo Horizonte — MG, CEP 30390-402,
                é o <strong>Controlador</strong> dos dados pessoais tratados no âmbito deste site,
                nos termos da Lei nº 13.709/2018 (LGPD).
              </p>
              <p>
                Para dúvidas sobre esta política ou para exercer seus direitos, entre em contato:
              </p>
              <ul>
                <li><strong>WhatsApp:</strong> (31) 98421-2848</li>
                <li><strong>E-mail:</strong> contato@mercadodeorigem.com.br</li>
              </ul>
            </Section>

            <Section titulo="2. Quais dados coletamos">
              <p>Coletamos apenas os dados que você nos fornece voluntariamente:</p>
              <ul>
                <li><strong>Formulário de interesse em locação:</strong> nome completo, endereço de e-mail, número de WhatsApp, segmento de produto/serviço e mensagem descritiva do negócio.</li>
                <li><strong>Comunicações via WhatsApp:</strong> ao clicar nos botões "Fale no WhatsApp" ou "Alugue sua loja", você é redirecionado ao aplicativo WhatsApp com uma mensagem pré-preenchida. A partir desse momento, os dados trafegam pela plataforma da Meta Platforms, Inc., sujeita às próprias políticas de privacidade.</li>
                <li><strong>Dados de navegação:</strong> podemos coletar automaticamente informações técnicas como endereço IP, tipo de navegador, páginas visitadas e tempo de permanência, por meio de ferramentas de análise de tráfego (ex.: Google Analytics), para fins de melhoria do site.</li>
              </ul>
            </Section>

            <Section titulo="3. Finalidade e base legal do tratamento">
              <p>Tratamos seus dados pessoais com as seguintes finalidades e bases legais (art. 7º, LGPD):</p>
              <table>
                <thead>
                  <tr>
                    <th>Finalidade</th>
                    <th>Base legal (LGPD, art. 7º)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Responder ao interesse de locação de espaço comercial</td>
                    <td>Execução de contrato ou diligências pré-contratuais (inciso V)</td>
                  </tr>
                  <tr>
                    <td>Comunicação via WhatsApp</td>
                    <td>Legítimo interesse do controlador (inciso IX)</td>
                  </tr>
                  <tr>
                    <td>Análise de tráfego e melhoria do site</td>
                    <td>Legítimo interesse do controlador (inciso IX)</td>
                  </tr>
                  <tr>
                    <td>Cumprimento de obrigação legal ou regulatória</td>
                    <td>Cumprimento de obrigação legal (inciso II)</td>
                  </tr>
                </tbody>
              </table>
            </Section>

            <Section titulo="4. Compartilhamento de dados">
              <p>
                Seus dados <strong>não são vendidos</strong> a terceiros. Podemos compartilhá-los apenas nas
                seguintes situações:
              </p>
              <ul>
                <li><strong>Meta Platforms / WhatsApp:</strong> ao utilizar os botões de WhatsApp, as mensagens trafegam pela infraestrutura da Meta, sujeita à sua própria política de privacidade.</li>
                <li><strong>Prestadores de serviço:</strong> empresas que nos auxiliam na operação do site (hospedagem, análise de tráfego), vinculadas por contratos de confidencialidade e limitadas a tratar dados conforme nossas instruções.</li>
                <li><strong>Autoridades competentes:</strong> quando exigido por lei, ordem judicial ou regulatória.</li>
              </ul>
            </Section>

            <Section titulo="5. Período de retenção">
              <p>
                Os dados coletados pelo formulário de interesse em locação serão retidos pelo prazo necessário
                para resposta à solicitação e, se houver relação contratual, pelo período exigido pela
                legislação aplicável. Dados de navegação são anonimizados ou excluídos em até 26 meses.
              </p>
              <p>
                Você pode solicitar a exclusão dos seus dados a qualquer momento, conforme descrito na
                seção de direitos abaixo.
              </p>
            </Section>

            <Section titulo="6. Seus direitos como titular (art. 18, LGPD)">
              <p>A LGPD garante a você os seguintes direitos sobre seus dados pessoais:</p>
              <ul>
                <li><strong>Confirmação e acesso:</strong> saber se tratamos seus dados e acessá-los.</li>
                <li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                <li><strong>Anonimização, bloqueio ou eliminação:</strong> de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</li>
                <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado.</li>
                <li><strong>Informação sobre compartilhamento:</strong> saber com quem compartilhamos seus dados.</li>
                <li><strong>Revogação do consentimento:</strong> quando o tratamento se basear em consentimento, você pode revogá-lo a qualquer momento.</li>
                <li><strong>Oposição:</strong> se discordar do tratamento baseado em legítimo interesse.</li>
              </ul>
              <p>
                Para exercer qualquer direito, entre em contato pelo e-mail{" "}
                <strong>contato@mercadodeorigem.com.br</strong> ou WhatsApp{" "}
                <strong>(31) 98421-2848</strong>. Responderemos em até 15 dias úteis.
              </p>
            </Section>

            <Section titulo="7. Segurança dos dados">
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra
                acesso não autorizado, perda, alteração ou divulgação indevida, incluindo uso de
                protocolos HTTPS e restrição de acesso aos dados por pessoal autorizado.
              </p>
              <p>
                Embora adotemos boas práticas de segurança, nenhum sistema é 100% seguro. Em caso de
                incidente relevante, notificaremos a Autoridade Nacional de Proteção de Dados (ANPD)
                e os titulares afetados, nos termos do art. 48 da LGPD.
              </p>
            </Section>

            <Section titulo="8. Cookies">
              <p>
                Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para
                entender como os visitantes interagem com nossas páginas. Você pode desabilitar cookies
                nas configurações do seu navegador, porém algumas funcionalidades podem ser afetadas.
              </p>
            </Section>

            <Section titulo="9. Transferência internacional de dados">
              <p>
                Ao utilizar os botões de WhatsApp, seus dados podem ser processados em servidores
                localizados fora do Brasil (infraestrutura da Meta Platforms). Essa transferência
                é realizada com base nas garantias adequadas previstas no art. 33 da LGPD.
              </p>
            </Section>

            <Section titulo="10. Alterações nesta política">
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. A data de "última
                atualização" no topo deste documento indica quando foi revisada pela última vez.
                Recomendamos a consulta regular desta página.
              </p>
            </Section>

            <Section titulo="11. Encarregado de Dados (DPO)">
              <p>
                Nos termos do art. 41 da LGPD, o encarregado pelo tratamento de dados pessoais do
                Mercado de Origem pode ser contatado pelo e-mail{" "}
                <strong>contato@mercadodeorigem.com.br</strong>.
              </p>
            </Section>

            <div className="border-t border-[#F2E8D5] pt-8 mt-8">
              <p className="text-sm text-[#6B3010]/50">
                Esta política é regida pela legislação brasileira, em especial a Lei nº 13.709/2018
                (LGPD), o Código de Defesa do Consumidor (Lei nº 8.078/1990) e o Marco Civil da
                Internet (Lei nº 12.965/2014). Foro competente: Belo Horizonte — MG.
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
      <div className="text-[#3C1A08]/75 leading-relaxed space-y-3 text-sm md:text-base [&_strong]:text-[#1A3A0F] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-semibold [&_th]:text-[#1A3A0F] [&_th]:pb-2 [&_th]:border-b [&_th]:border-[#F2E8D5] [&_td]:py-2 [&_td]:pr-4 [&_td]:border-b [&_td]:border-[#F2E8D5]/60 [&_td]:align-top">
        {children}
      </div>
    </section>
  );
}
