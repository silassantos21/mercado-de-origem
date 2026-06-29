# Mercado de Origem — Redesign do Site Institucional

> Redesign completo do site institucional do Mercado de Origem, um centro cultural gastronômico que reúne feira de produtos artesanais, espaços de lazer e eventos temáticos. O novo site terá visual moderno, imersivo e alinhado à identidade rústico-natural da marca, inspirado na qualidade de experiência do Espaço 356. O objetivo é converter visitantes em clientes e lojistas interessados em locar espaços.

**Tipo de Projeto:** `landing_page`
**Gerado em:** 21/06/2026 17:17
**Estimativa Total:** 30 dias (4.3 semanas)
**Custo Mensal Estimado:** USD 0.83 / BRL 4.73

---

## Problema que Resolve

O site atual do Mercado de Origem (mercadodeorigem.com.br) possui estrutura visual desatualizada, hierarquia de informações confusa, ausência de seção de eventos bem estruturada e baixo apelo visual comparado a concorrentes como o Espaço 356. Isso resulta em baixa conversão de visitantes em clientes presenciais e dificulta a captação de novos lojistas para locação de espaços.

## Público-Alvo

Visitantes potenciais (adultos 25–50 anos, famílias, apreciadores de gastronomia, classe média-alta de Minas Gerais e turistas); pequenos produtores e empreendedores interessados em locar lojas; parceiros institucionais e patrocinadores de eventos.

## Funcionalidades Principais

- Hero Section imersiva com vídeo ou imagem fullscreen do interior do mercado, headline impactante e CTA 'Visite Agora' + botão WhatsApp
- Seção 'O que é o Mercado' com storytelling visual sobre a missão de conectar produtores ao consumidor final
- Galeria de Espaços e Lojas com cards interativos — restaurantes, feira, lazer — com hover overlay e filtro por categoria
- Agenda de Eventos com cards datados, categorias (gastronomia, cultura, música) e link para mais informações via WhatsApp
- Seção 'Seja um Lojista' com formulário de cadastro para locação de espaços e destaque dos benefícios
- Seção de Filiais com mapa e detalhes de cada unidade do Mercado de Origem
- Blog integrado com posts sobre produtores, receitas e cultura regional
- Botão de WhatsApp flutuante fixo em toda a navegação
- Footer completo com acordos/parcerias, redes sociais, endereço e mapa

## Diferenciais

- Design rústico-moderno imersivo que traduz a experiência física do espaço para o digital, usando paleta verde-madeira e tipografia display bold
- Agenda de eventos dinâmica e visualmente rica, transformando o site em um hub de comunicação contínua com o público
- CTA de locação de lojas proeminente e formulário integrado, transformando o site em ferramenta ativa de captação de lojistas
- Animações suaves com Framer Motion que evocam a sensação orgânica e viva do mercado, sem comprometer a performance

## Escopo do MVP (Mínimo Produto Viável)

- [ ] Hero Section imersiva com foto do interior, headline 'Para quem busca novos sabores, novas histórias, novas culturas' e botão WhatsApp
- [ ] Seção 'O que é o Mercado' com texto de missão e imagens do espaço
- [ ] Grid de Espaços e Lojas com cards (foto + nome + categoria)
- [ ] Agenda de Eventos básica com pelo menos 3 eventos listados
- [ ] Seção 'Seja um Lojista' com formulário de cadastro funcional (nome, empresa, e-mail, telefone, tipo de produto)
- [ ] Botão WhatsApp flutuante fixo com número +55 31 98421-2848
- [ ] Footer com endereço, telefone, redes sociais e mapa Google
- [ ] Site responsivo (mobile-first) com score Lighthouse > 85

## Funcionalidades Futuras (v2+)

- Sistema de reservas online para espaços de eventos e mesas em restaurantes parceiros
- Portal do lojista com área logada para gerenciar vitrine, horários e promoções
- Programa de fidelidade digital com QR Code para clientes frequentes
- Newsletter automatizada sobre eventos da semana com integração Mailchimp/Brevo
- Integração com Instagram Graph API para exibir feed dinâmico do @mercadodeorigem no site
- Mapa interativo do espaço físico mostrando localização de cada loja dentro do mercado
- E-commerce para venda online de produtos selecionados dos feirantes (cesta delivery)
- App mobile (PWA) com notificações push para eventos e promoções

## Riscos Identificados

- Risco de conteúdo: Cliente não possui acervo fotográfico profissional de qualidade — Mitigação: incluir no contrato a responsabilidade do cliente de fornecer fotos; se necessário, cotar um ensaio fotográfico profissional (R$1.500–R$3.000) como item adicional
- Risco de aprovação lenta: Ciclos longos de feedback do cliente podem estender o prazo de 4 para 6+ semanas — Mitigação: definir no contrato SLA de resposta de 48h e número máximo de rodadas de revisão (ex: 2 rodadas incluídas)
- Risco de SEO: Troca de plataforma pode causar queda temporária no ranqueamento se URLs antigas não forem redirecionadas — Mitigação: mapear todas as URLs do site atual e implementar redirects 301 no Next.js antes do go-live
- Risco de CMS: Cliente pode ter dificuldade em usar Notion para atualizar eventos — Mitigação: oferecer 1h de treinamento incluída e documentação visual (Loom) sobre como adicionar/editar eventos; ter como fallback o desenvolvedor fazer atualizações mensais por taxa de manutenção
- Risco de domínio: Acesso ao registrador do domínio pode ser burocrático ou demorado — Mitigação: solicitar acesso ao Registro.br logo na Fase 1 e iniciar processo de apontamento de DNS com antecedência de 1 semana antes do go-live

## Resumo das Referências Analisadas

O site atual (mercadodeorigem.com.br) apresenta estrutura textual com boa proposta de valor ('novos sabores, novas histórias, novas culturas') mas design visualmente datado, sem hierarquia clara e sem seção de eventos estruturada. As imagens do espaço físico revelam uma identidade visual rica e diferenciada: paleta verde-madeira-bege com iluminação quente, estética rústico-moderna com plantas suspensas, banners de eventos temáticos e fachada em pedra/tijolo com branding forte. Esta identidade física deve ser o guia central do redesign digital. O Espaço 356 (espaco356.com.br) serve como referência de qualidade de execução digital para espaços de entretenimento similares — presume-se que possui navegação fluida, seções bem definidas (Lojas, Gastronomia, Lazer, Localização) e apelo visual moderno, servindo como benchmark de UX. A síntese das duas referências define o caminho: identidade autêntica e regional do Mercado de Origem + qualidade de execução digital e clareza de navegação do Espaço 356.
