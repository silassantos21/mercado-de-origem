# Mercado de Origem — Redesign do Site Institucional

## Contexto do Projeto

Redesign completo do site institucional do Mercado de Origem, um centro cultural gastronômico que reúne feira de produtos artesanais, espaços de lazer e eventos temáticos. O novo site terá visual moderno, imersivo e alinhado à identidade rústico-natural da marca, inspirado na qualidade de experiência do Espaço 356. O objetivo é converter visitantes em clientes e lojistas interessados em locar espaços.

**Problema:** O site atual do Mercado de Origem (mercadodeorigem.com.br) possui estrutura visual desatualizada, hierarquia de informações confusa, ausência de seção de eventos bem estruturada e baixo apelo visual comparado a concorrentes como o Espaço 356. Isso resulta em baixa conversão de visitantes em clientes presenciais e dificulta a captação de novos lojistas para locação de espaços.

**Público-alvo:** Visitantes potenciais (adultos 25–50 anos, famílias, apreciadores de gastronomia, classe média-alta de Minas Gerais e turistas); pequenos produtores e empreendedores interessados em locar lojas; parceiros institucionais e patrocinadores de eventos.

## Stack Tecnológica

- **Frontend:** Next.js 14 + TypeScript
- **Backend:** Next.js API Routes (integrado)
- **Banco de Dados:** Notion API (CMS headless) ou arquivos JSON estáticos
- **Infraestrutura:** Vercel (deploy frontend + API Routes)

Detalhes completos em [docs/02_TECH_STACK.md](docs/02_TECH_STACK.md).

## Estrutura do Projeto

```
mercado-de-origem-redesign/
├── docs/           # Planejamento e documentação
│   ├── 00_OVERVIEW.md
│   ├── 01_ARCHITECTURE.md
│   ├── 02_TECH_STACK.md
│   ├── 03_AI_AGENTS.md
│   ├── 04_TIMELINE.md
│   └── 05_COST_ANALYSIS.md
├── src/            # Código-fonte (a criar)
└── CLAUDE.md       # Este arquivo
```

## Funcionalidades Principais

- Hero Section imersiva com vídeo ou imagem fullscreen do interior do mercado, headline impactante e CTA 'Visite Agora' + botão WhatsApp
- Seção 'O que é o Mercado' com storytelling visual sobre a missão de conectar produtores ao consumidor final
- Galeria de Espaços e Lojas com cards interativos — restaurantes, feira, lazer — com hover overlay e filtro por categoria
- Agenda de Eventos com cards datados, categorias (gastronomia, cultura, música) e link para mais informações via WhatsApp
- Seção 'Seja um Lojista' com formulário de cadastro para locação de espaços e destaque dos benefícios
- Seção de Filiais com mapa e detalhes de cada unidade do Mercado de Origem

## Agentes de IA Disponíveis

- **ConteudoSEOAgent** — Redator e otimizador de conteúdo para SEO local
- **ImagemAltTextAgent** — Gerador de textos alternativos acessíveis para imagens

Prompts completos em [docs/03_AI_AGENTS.md](docs/03_AI_AGENTS.md).

## Estimativa

- **Total:** 30 dias (4.3 semanas)
- **Custo Mensal:** USD 0.83 / BRL 4.73

## Arquitetura

O site é uma aplicação Next.js 14 totalmente estática com geração incremental (ISR), hospedada na Vercel com CDN global. O conteúdo dinâmico (eventos, lojas, blog) é consumido via Notion API ou arquivos JSON versionados no repositório, permitindo que o cliente atualize o site sem intervenção técnica. Formulários de contato e cadastro de lojistas são processados pelas API Routes do Next.js, que disparam e-mails via Nodemailer (SMTP Gmail) e opcionalmente persistem leads no Supabase free tier. Imagens são otimizadas e servidas pelo Cloudinary com transformações automáticas para WebP e lazy loading. O pipeline de CI/CD via GitHub Actions executa lint, build e deploy automático a cada merge na branch principal.
