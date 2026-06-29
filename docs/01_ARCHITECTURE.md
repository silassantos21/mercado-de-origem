# Arquitetura do Sistema — Mercado de Origem — Redesign do Site Institucional

## Visão Geral

O site é uma aplicação Next.js 14 totalmente estática com geração incremental (ISR), hospedada na Vercel com CDN global. O conteúdo dinâmico (eventos, lojas, blog) é consumido via Notion API ou arquivos JSON versionados no repositório, permitindo que o cliente atualize o site sem intervenção técnica. Formulários de contato e cadastro de lojistas são processados pelas API Routes do Next.js, que disparam e-mails via Nodemailer (SMTP Gmail) e opcionalmente persistem leads no Supabase free tier. Imagens são otimizadas e servidas pelo Cloudinary com transformações automáticas para WebP e lazy loading. O pipeline de CI/CD via GitHub Actions executa lint, build e deploy automático a cada merge na branch principal.

## Diagrama de Arquitetura

```
USUÁRIO (browser) → Vercel CDN Edge → Next.js 14 App (SSG/ISR) → [1] Notion API (leitura de eventos/lojas/blog) | [2] API Route /api/contact → Nodemailer → Gmail SMTP → email do cliente | [3] API Route /api/lojista → Supabase (tabela leads) + Nodemailer → notificação email | Cloudinary CDN → imagens otimizadas servidas pelo next/image | GitHub Actions → build → deploy Vercel a cada push na main
```

## Componentes Principais

| Camada | Tecnologia Principal | Complementos |
|--------|---------------------|-------------|
| Frontend | `Next.js 14 + TypeScript` | `Tailwind CSS`, `shadcn/ui`, `Framer Motion` |
| Backend | `Next.js API Routes (integrado)` | `Nodemailer`, `React Hook Form`, `Zod` |
| Banco de Dados | `Notion API (CMS headless) ou arquivos JSON estáticos` | `Supabase (opcional para formulários)` |
| Autenticação | `Não aplicável (site público)` | `Proteção básica de formulário via reCAPTCHA v3` |
| Cache | `Next.js ISR (Incremental Static Regeneration)` | `Vercel Edge Cache` |
| Infraestrutura | `Vercel (deploy frontend + API Routes)` | `GitHub Actions CI/CD`, `Cloudinary (imagens)` |
| Monitoramento | `Vercel Analytics` | `Google Analytics 4`, `Google Search Console` |

## Decisões Arquiteturais

As decisões foram baseadas no briefing do projeto e nas referências fornecidas.
Consulte [02_TECH_STACK.md](02_TECH_STACK.md) para justificativas detalhadas de cada escolha.

## Padrões de Projeto Recomendados

- **Frontend:** Component-driven development com Server Components (Next.js App Router)
- **Backend:** Clean Architecture (Domain → Application → Infrastructure)
- **API:** REST com versionamento (`/api/v1/`) ou tRPC para type-safety full-stack
- **Estado:** Zustand (client state) + React Query / TanStack Query (server state)
- **Testes:** Vitest (unit) + Playwright (E2E)
