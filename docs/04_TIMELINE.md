# Cronograma do Projeto — Mercado de Origem — Redesign do Site Institucional

## Resumo

| # | Fase | Duração |
|---|------|---------|
| 1 | Fase 1 — Descoberta, Identidade Visual e Conteúdo | 7 dias |
| 2 | Fase 2 — Desenvolvimento dos Componentes Core | 10 dias |
| 3 | Fase 3 — Agenda de Eventos, Blog e Formulários | 7 dias |
| 4 | Fase 4 — Animações, SEO, Responsividade e Entrega | 6 dias |
| | **Total** | **30 dias (4.3 semanas)** |

---

## Detalhamento das Fases

### Fase 1: Fase 1 — Descoberta, Identidade Visual e Conteúdo (7 dias)

#### Tarefas

- [ ] Reunião de alinhamento com cliente para validar paleta de cores, tipografias e tom de voz
- [ ] Definição final da paleta (verde-escuro #2D6A1F, marrom-madeira #8B4513, bege #F5F0E8, dourado #F5C842)
- [ ] Seleção e curadoria do acervo fotográfico do espaço físico
- [ ] Upload e organização das fotos no Cloudinary com categorias
- [ ] Criação do conteúdo textual com apoio do ConteudoSEOAgent (headlines, descrições, bio do mercado)
- [ ] Geração de alt texts com ImagemAltTextAgent
- [ ] Configuração do repositório GitHub, projeto Next.js e deploy inicial na Vercel
- [ ] Configuração do Notion como CMS (se escolhido pelo cliente) ou estrutura JSON

#### Entregáveis

- Documento de identidade visual aprovado (paleta, tipografia, tom)
- Repositório GitHub configurado com Next.js 14 + Tailwind + shadcn/ui
- Acervo fotográfico organizado no Cloudinary
- Documento de conteúdo textual aprovado pelo cliente

---

### Fase 2: Fase 2 — Desenvolvimento dos Componentes Core (10 dias)

#### Tarefas

- [ ] Desenvolvimento da Navbar responsiva (transparente → sólida no scroll) com logo e menu
- [ ] Desenvolvimento da Hero Section com imagem/vídeo fullscreen, headline animada e CTAs
- [ ] Desenvolvimento da seção 'O que é o Mercado de Origem' com storytelling visual
- [ ] Desenvolvimento dos cards de Espaços e Lojas com hover overlay e filtro por categoria
- [ ] Desenvolvimento da seção de Filiais com descrições e imagens de cada unidade
- [ ] Botão WhatsApp flutuante fixo implementado
- [ ] Configuração de fontes display (ex: Playfair Display + Inter) via next/font

#### Entregáveis

- Navbar + Hero Section funcionais e responsivos
- Seção de Espaços/Lojas com pelo menos 6 cards de exemplo
- Seção de Filiais funcional
- Botão WhatsApp flutuante ativo

---

### Fase 3: Fase 3 — Agenda de Eventos, Blog e Formulários (7 dias)

#### Tarefas

- [ ] Desenvolvimento da Agenda de Eventos com cards datados e categorias
- [ ] Integração com Notion API (ou JSON) para renderizar eventos dinamicamente via ISR
- [ ] Desenvolvimento do Blog com listagem de posts e página de post individual
- [ ] Desenvolvimento da seção 'Seja um Lojista' com formulário de cadastro (React Hook Form + Zod)
- [ ] Implementação da API Route para processamento do formulário e envio de e-mail
- [ ] Integração opcional com Supabase para persistência de leads
- [ ] Implementação do reCAPTCHA v3 no formulário

#### Entregáveis

- Agenda de eventos funcional e integrada com CMS
- Blog com 3 posts de exemplo
- Formulário de lojista funcionando com envio de e-mail real
- Dashboard simples no Supabase para o cliente visualizar leads

---

### Fase 4: Fase 4 — Animações, SEO, Responsividade e Entrega (6 dias)

#### Tarefas

- [ ] Implementação de animações Framer Motion em todas as seções (fade-in no scroll, hover states)
- [ ] Revisão completa de responsividade mobile (320px a 1440px+)
- [ ] Configuração de metadados SEO (next/metadata) em todas as páginas
- [ ] Configuração do Google Analytics 4 e Google Search Console
- [ ] Configuração do domínio customizado mercadodeorigem.com.br na Vercel
- [ ] Testes de performance (Lighthouse > 90 em todas as métricas)
- [ ] Correção de bugs e ajustes finais com feedback do cliente
- [ ] Documentação básica para o cliente atualizar eventos/blog via Notion

#### Entregáveis

- Site completo com animações e totalmente responsivo
- Score Lighthouse > 90 em Performance, Acessibilidade e SEO
- Domínio próprio configurado com HTTPS
- Documento de instruções para o cliente atualizar o conteúdo

---

## Premissas

- Cliente fornece acervo fotográfico de qualidade (mínimo 30 fotos do espaço físico e eventos) na Fase 1
- Aprovações de design e conteúdo ocorrem em até 48h após envio — atrasos do cliente não estão incluídos no prazo
- O cliente já possui o domínio mercadodeorigem.com.br e fornece acesso ao registrador para apontar DNS para Vercel
- Não inclui criação de vídeo profissional para hero — se necessário, adiciona 1 semana ao prazo
- CMS via Notion: cliente já usa Notion ou aceita aprender a plataforma; caso contrário, usa-se JSON e o dev atualiza conteúdo
- Não inclui desenvolvimento de sistema de e-commerce ou vendas online
