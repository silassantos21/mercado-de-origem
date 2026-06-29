# Análise de Custo-Benefício — Mercado de Origem — Redesign do Site Institucional

## Resumo Financeiro

| Categoria | Mensal (USD) | Mensal (BRL) |
|-----------|-------------|-------------|
| Infraestrutura | $0.83 | R$ 4.73 |
| APIs Externas | $0.00 | R$ 0.00 |
| **Total Mensal** | **$0.83** | **R$ 4.73** |
| **Setup Inicial** | **$2800.00** | **R$ 15960.00** |

✅ **Este projeto pode começar com free tier** das ferramentas listadas.

---

## Infraestrutura & Hosting

| Serviço/Item | Mensal (USD) | Setup (USD) | Free Tier | Observações |
|--------------|-------------|------------|-----------|-------------|
| Vercel (Hobby/Pro) | $0.00 | $0.00 | ✅ Sim | Plano Hobby gratuito é suficiente para o tráfego inicial de um centro cultural regional. Upgrade para Pro (USD 20/mês) apenas se o site superar 100GB de bandwidth ou precisar de múltiplos colaboradores. |
| Cloudinary (imagens e mídia) | $0.00 | $0.00 | ✅ Sim | Free tier inclui 25 créditos mensais (equivalente a ~25GB de transformações/bandwidth). Para o volume de um site institucional com ~50-100 fotos, é mais que suficiente indefinidamente. |
| Supabase (banco de dados para leads) | $0.00 | $0.00 | ✅ Sim | Free tier inclui 500MB de banco de dados e 2 projetos gratuitos. Para armazenar leads do formulário de lojistas (dezenas a centenas de registros/mês), é gratuito por tempo indeterminado. |
| Domínio mercadodeorigem.com.br (renovação anual) | $0.83 | $0.00 | ❌ Não | Registro.br cobra aproximadamente R$40-50/ano (≈ USD 10/ano ou USD 0.83/mês) para domínios .com.br. Cliente provavelmente já possui este domínio — custo de manutenção apenas. |

## APIs & Serviços Externos

| Serviço/Item | Mensal (USD) | Setup (USD) | Free Tier | Observações |
|--------------|-------------|------------|-----------|-------------|
| Gmail SMTP via Nodemailer (envio de e-mails) | $0.00 | $0.00 | ✅ Sim | Gmail SMTP gratuito permite até 500 e-mails/dia para contas Google Workspace ou Gmail pessoal. Suficiente para notificações de formulário. Alternativa paga: Resend.com (USD 0/mês até 3.000 e-mails, USD 20/mês depois). |
| Google reCAPTCHA v3 | $0.00 | $0.00 | ✅ Sim | Completamente gratuito para até 1 milhão de avaliações/mês. Sem necessidade de upgrade para o volume esperado. |
| Notion API (CMS headless) | $0.00 | $0.00 | ✅ Sim | API do Notion é gratuita. O plano gratuito do Notion suporta uso básico para gerenciar eventos e blog. Alternativa: Contentful free tier (25.000 records) ou simplesmente arquivos JSON no repositório GitHub. |
| Google Analytics 4 + Search Console | $0.00 | $0.00 | ✅ Sim | Ambas as ferramentas são completamente gratuitas e essenciais para monitorar tráfego orgânico local e comportamento dos visitantes. |

## Ferramentas de Desenvolvimento

| Serviço/Item | Mensal (USD) | Setup (USD) | Free Tier | Observações |
|--------------|-------------|------------|-----------|-------------|
| Desenvolvimento (hora técnica — freelancer sênior) | $0.00 | $2800.00 | ❌ Não | Estimativa de 40h de desenvolvimento × R$400/h = R$16.000 (≈ USD 2.800 na taxa atual). Inclui design, desenvolvimento, testes e entrega. Valor único, sem recorrência. |

---

## Análise de ROI

O investimento único de ≈ R$16.000 no redesign se justifica pela captação de novos lojistas: uma única locação de loja no Mercado de Origem (estimada entre R$2.000–R$8.000/mês) paga o projeto em 2–8 meses. Adicionalmente, um site moderno com SEO local melhora o ranqueamento em buscas como 'o que fazer em [cidade] MG', aumentando o fluxo de visitantes presenciais. O custo operacional mensal de R$4,73 (apenas renovação do domínio) torna o projeto financeiramente sustentável indefinidamente. Meta de sucesso: aumentar em 30% o tráfego orgânico em 6 meses e converter 5 novos leads de lojistas nos primeiros 3 meses pós-lançamento.

---

## Notas sobre Escalabilidade de Custos

- Preços baseados em uso inicial (MVP/early stage)
- Custos aumentam com volume de usuários e dados
- Reavalie a stack se atingir 10k+ usuários ativos
- Considere contratos anuais para economias de 20-40%
