# Stack Tecnológica — Mercado de Origem — Redesign do Site Institucional

| Camada | Tecnologia Principal | Complementos |
|--------|---------------------|-------------|
| Frontend | `Next.js 14 + TypeScript` | `Tailwind CSS`, `shadcn/ui`, `Framer Motion` |
| Backend | `Next.js API Routes (integrado)` | `Nodemailer`, `React Hook Form`, `Zod` |
| Banco de Dados | `Notion API (CMS headless) ou arquivos JSON estáticos` | `Supabase (opcional para formulários)` |
| Autenticação | `Não aplicável (site público)` | `Proteção básica de formulário via reCAPTCHA v3` |
| Cache | `Next.js ISR (Incremental Static Regeneration)` | `Vercel Edge Cache` |
| Infraestrutura | `Vercel (deploy frontend + API Routes)` | `GitHub Actions CI/CD`, `Cloudinary (imagens)` |
| Monitoramento | `Vercel Analytics` | `Google Analytics 4`, `Google Search Console` |

---

## Frontend

**Tecnologia Principal:** `Next.js 14 + TypeScript`

**Complementos:**
- `Tailwind CSS`
- `shadcn/ui`
- `Framer Motion`

**Justificativa:** Next.js 14 com App Router garante SEO excelente via SSG/SSR, essencial para um negócio local que depende de buscas orgânicas (Google Maps, 'mercado gastronômico BH'). Tailwind permite implementar a paleta customizada verde-madeira com rapidez. Framer Motion entrega as animações de scroll e hover que diferenciam o Espaço 356 do site atual.

## Backend

**Tecnologia Principal:** `Next.js API Routes (integrado)`

**Complementos:**
- `Nodemailer`
- `React Hook Form`
- `Zod`

**Justificativa:** Por se tratar de um site institucional/landing page sem necessidade de lógica de negócio complexa, as API Routes do próprio Next.js são suficientes para o formulário de contato/cadastro de lojistas e envio de e-mails, eliminando a necessidade de um backend separado e reduzindo custos e complexidade operacional.

## Banco de Dados

**Tecnologia Principal:** `Notion API (CMS headless) ou arquivos JSON estáticos`

**Complementos:**
- `Supabase (opcional para formulários)`

**Justificativa:** Os eventos, lojas e posts de blog podem ser gerenciados pelo próprio cliente via Notion ou Google Sheets como CMS leve, sem necessidade de banco relacional completo. Se o cliente precisar de formulários persistidos, Supabase free tier é mais que suficiente para o volume esperado de leads.

## Autenticação & Autorização

**Tecnologia Principal:** `Não aplicável (site público)`

**Complementos:**
- `Proteção básica de formulário via reCAPTCHA v3`

**Justificativa:** O site é 100% público e não requer autenticação de usuários finais. reCAPTCHA protege o formulário de cadastro de lojistas contra spam.

## Cache & Sessão

**Tecnologia Principal:** `Next.js ISR (Incremental Static Regeneration)`

**Complementos:**
- `Vercel Edge Cache`

**Justificativa:** ISR permite revalidar páginas de eventos e blog automaticamente a cada intervalo definido, mantendo o site ultrarrápido sem precisar de Redis externo. Ideal para o volume de tráfego de um centro cultural regional.

## Infraestrutura & Deploy

**Tecnologia Principal:** `Vercel (deploy frontend + API Routes)`

**Complementos:**
- `GitHub Actions CI/CD`
- `Cloudinary (imagens)`

**Justificativa:** Vercel é a escolha natural para Next.js: deploy automático em cada push, CDN global, HTTPS gratuito e domínio customizado. Cloudinary gerencia o upload e otimização das fotos do mercado (compressão automática, WebP), crítico dado o volume de imagens de um espaço físico.

## Monitoramento & Observabilidade

**Tecnologia Principal:** `Vercel Analytics`

**Complementos:**
- `Google Analytics 4`
- `Google Search Console`

**Justificativa:** Vercel Analytics nativo monitora performance e Web Vitals sem custo adicional. GA4 + Search Console são essenciais para um negócio local acompanhar tráfego orgânico, palavras-chave e comportamento de visitantes vindos de busca.

## Comandos de Setup Rápido

```bash
npx create-next-app@latest . --typescript --tailwind --app
npx shadcn@latest init
npm install framer-motion react-hook-form zod
```
