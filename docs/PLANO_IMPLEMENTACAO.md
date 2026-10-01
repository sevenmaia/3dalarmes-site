# 3D ALARMES — PLANO MESTRE DE IMPLEMENTAÇÃO

> **Projeto:** Redesign e Desenvolvimento do Website Institucional 3D ALARMES  
> **Local:** Manaus, Amazonas  
> **Stack Oficial:** Next.js 14+ (App Router) • TypeScript • Tailwind CSS • Lucide Icons  
> **Diretório:** `C:\Users\soare\Downloads\ANTIGRAVITY PROJETOS & SKILLs\3dalarmes-site`  
> **Status:** Documento de Planejamento Aprovado para Execução  

---

## 1. Arquitetura do Projeto

O projeto adotará uma estrutura modular com **Next.js App Router**, tipagem rigorosa com **TypeScript** e utilitários modernos de estilização com **Tailwind CSS**, permitindo renderização estática rápida (SSG) com componentes de servidor (RSC) para SEO máximo e componentes de cliente (`'use client'`) estritamente onde houver interatividade (menus drawer, formulários, modais e abas).

```text
3dalarmes-site/
├── docs/                                  # Documentações obrigatórias do projeto
│   ├── ANALISE_REFERENCIAS.md
│   ├── PLANO_IMPLEMENTACAO.md
│   ├── DESIGN_SYSTEM.md
│   └── RELATORIO_FINAL.md
│
├── public/                                # Ativos públicos e otimizados
│   ├── logos/                             # Brasão oficial frontal e 3D transparente
│   ├── images/
│   │   ├── hero/                          # Câmeras, cenários e composição visual
│   │   ├── team/                          # Técnicos uniformizados oficiais
│   │   ├── services/                      # CFTV, Alarmes, Cercas, Rastreamento, etc.
│   │   ├── testimonials/                  # Fotos dos clientes reais de Manaus
│   │   └── bio/                           # Background Manaus / Ponte Rio Negro
│   ├── favicon.ico
│   ├── sitemap.xml
│   └── robots.txt
│
├── src/
│   ├── app/                               # Rotas do Next.js (App Router)
│   │   ├── layout.tsx                     # Root Layout (Fontes, Header, Footer, WhatsApp flutuante)
│   │   ├── page.tsx                       # Homepage (/)
│   │   ├── a-empresa/
│   │   │   └── page.tsx                   # Página A Empresa (/a-empresa)
│   │   ├── solucoes/
│   │   │   ├── page.tsx                   # Página Geral de Soluções (/solucoes)
│   │   │   ├── cftv/page.tsx              # Página Individual de Serviço (/solucoes/cftv)
│   │   │   ├── alarmes/page.tsx           # Página Individual (/solucoes/alarmes)
│   │   │   ├── cercas-eletricas/page.tsx  # Página Individual (/solucoes/cercas-eletricas)
│   │   │   ├── rastreamento-veicular/page.tsx # (/solucoes/rastreamento-veicular)
│   │   │   ├── controle-de-acesso/page.tsx# (/solucoes/controle-de-acesso)
│   │   │   └── monitoramento-24h/page.tsx # (/solucoes/monitoramento-24h)
│   │   ├── trabalhe-conosco/
│   │   │   └── page.tsx                   # Trabalhe Conosco (/trabalhe-conosco)
│   │   ├── contato/
│   │   │   └── page.tsx                   # Contato e Localização (/contato)
│   │   ├── bio/
│   │   │   └── page.tsx                   # Página Link na Bio (/bio)
│   │   ├── not-found.tsx                  # 404 personalizada
│   │   └── globals.css                    # Tokens, CSS Variables e utilitários globais
│   │
│   ├── components/
│   │   ├── layout/                        # Componentes mestres estruturais
│   │   │   ├── Header.tsx                 # Header com transição de scroll e drawer mobile
│   │   │   ├── Footer.tsx                 # Footer institucional completo com dados de Manaus
│   │   │   ├── MobileDrawer.tsx           # Menu mobile deslizante acessível
│   │   │   └── FloatingWhatsApp.tsx       # Botão flutuante do WhatsApp oficial
│   │   │
│   │   ├── ui/                            # Design System Atoms & Molecules
│   │   │   ├── Button.tsx                 # Primário (amarelo), Secundário (outline), WhatsApp
│   │   │   ├── Badge.tsx                  # Pílulas de tags e status
│   │   │   ├── SectionHeading.tsx         # Títulos de seções padronizados com realce amarelo
│   │   │   ├── Card.tsx                   # Superfícies brancas e dark cards com sombras suaves
│   │   │   └── Modal.tsx                  # Diálogo de detalhes de vaga ou confirmação
│   │   │
│   │   ├── sections/                      # Seções especializadas reutilizáveis
│   │   │   ├── HeroHome.tsx               # Hero da página inicial com câmera e CTAs
│   │   │   ├── HeroInternal.tsx           # Hero das páginas internas
│   │   │   ├── ServicesGrid.tsx           # Grade de soluções com links e badges
│   │   │   ├── AboutSection.tsx           # Seção sobre com foto real de técnico
│   │   │   ├── HandheldSecurity.tsx       # "Segurança na palma da mão" (app mobile)
│   │   │   ├── TrustMetrics.tsx           # Faixa com indicadores (20+ anos, milhares de clientes)
│   │   │   ├── TestimonialsSection.tsx    # Prova social e avaliações 5 estrelas
│   │   │   ├── FinalCTA.tsx               # Banner de fechamento e conversão rápida
│   │   │   ├── CultureGrid.tsx            # 4 pilares do Trabalhe Conosco
│   │   │   ├── JobOpenings.tsx            # Lista de vagas e modal de candidatura
│   │   │   └── BioContent.tsx             # Lista interativa de links rápidos estilo Bio
│   │   │
│   │   └── forms/                         # Formulários com validação e estados
│   │       ├── QuoteForm.tsx              # Formulário de Orçamento (alta conversão)
│   │       ├── ContactForm.tsx            # Formulário geral de contato
│   │       └── JobApplicationForm.tsx     # Formulário de envio de currículo
│   │
│   ├── data/                              # Fonte única da verdade (Single Source of Truth)
│   │   ├── company.ts                     # Dados institucionais, história, missão/visão/valores
│   │   ├── contact.ts                     # Telefones, endereços, e-mails, coordenadas e WhatsApp
│   │   ├── navigation.ts                  # Itens de menu, rotas e links da bio
│   │   ├── services.ts                    # Catálogo dos 6 serviços e 8 soluções completas
│   │   ├── jobs.ts                        # Vagas em aberto e requisitos
│   │   └── testimonials.ts                # Depoimentos reais de clientes de Manaus
│   │
│   └── lib/                               # Utilitários
│       ├── utils.ts                       # cn (clsx + tailwind-merge)
│       └── whatsapp.ts                    # Gerador de links wa.me com mensagens personalizadas
```

---

## 2. Páginas e Rotas

| Rota | Nome | Descrição |
| :--- | :--- | :--- |
| `/` | **Início (Home)** | Vitrine principal: Hero com câmera de segurança, 6 serviços essenciais, história rápida (20+ anos), segurança no app móvel, depoimentos reais e CTA final de orçamento. |
| `/a-empresa` | **A Empresa** | História desde 2003, fachada real da sede em Manaus, Missão/Visão/Valores, métricas sólidas e destaque da equipe especializada. |
| `/solucoes` | **Soluções para Você** | Catálogo amplo das 8 soluções para residências, condomínios e empresas, faixas de segmentos atendidos e atendimento consultivo. |
| `/solucoes/[slug]` | **Páginas Individuais** | Detalhamento profundo de cada serviço (CFTV, Alarmes, Cercas Elétricas, Rastreamento Veicular, Controle de Acesso, Monitoramento 24h). |
| `/trabalhe-conosco` | **Trabalhe Conosco** | Cultura organizacional, fotos reais de equipe uniformizada, mural de vagas ativas com filtros e formulário com upload de currículo. |
| `/contato` | **Contato e Suporte** | Endereço oficial na Av. Constantinopla, mapa interativo, telefones diretos, canais de WhatsApp por setor e formulário de mensagem. |
| `/bio` | **Link na Bio** | Página dedicada mobile-first para links de redes sociais (Instagram, Facebook), contatos rápidos de orçamentos, monitoramento 24h e portais de clientes. |
| `/404` | **Página 404** | Layout amigável integrado à marca com botão de retorno à Home. |

---

## 3. Componentes Compartilhados

1. **Header com Detecção de Scroll**:
   - Fundo translúcido inicial sobre a hero; transição para Navy sólido com desfoque de fundo (`backdrop-blur-md`) e sombra leve após 50px de rolagem.
   - Navegação com realce visual da página atual.
   - Botão de ação rápida no desktop e botão hambúrguer mobile com toque amplo.
2. **Footer Institucional Consolidado**:
   - Brasão oficial nítido em `object-fit: contain`.
   - Links categorizados, informações completas de contato oficial e redes sociais oficiais.
3. **Floating WhatsApp**:
   - Botão pulsante fixo no canto inferior direito com badge de prontidão ("Online 24h") e link formatado para o canal comercial.
4. **SectionHeading Reutilizável**:
   - Suporte a tag superior (badge), título principal com recorte para palavra-chave em amarelo ouro (`#FFD600`) e texto de apoio com largura calibrada (máximo 680px).
5. **Card de Serviço Universal**:
   - Fotografia real do serviço com corte visual protegido, ícone temático em destaque, descrição clara e gatilho de ação.

---

## 4. Design System e Tokens

- **Cores Primárias**:
  - `navy-950`: `#020B18` (Fundo primário escuro / Hero / Headers)
  - `navy-900`: `#04152D` (Fundo institucional profundo)
  - `navy-800`: `#08264C` (Cards escuros e superfícies destacadas)
  - `blue-700`: `#064DBA` (Azul clássico de segurança)
  - `blue-600`: `#0765D8` (Botões de ação informativa / Ícones)
  - `yellow-500`: `#FFD600` (Amarelo oficial 3D ALARMES — CTAs e pontos focais)
  - `yellow-400`: `#FFE226` (Hover do amarelo)
- **Neutros**:
  - `white`: `#FFFFFF`
  - `gray-50`: `#F7F9FC`
  - `gray-100`: `#EFF3F8`
  - `gray-200`: `#E4E9F0`
  - `gray-600`: `#596579`
  - `gray-800`: `#202A39`
- **Tipografia**:
  - Títulos: `Manrope`, sans-serif (pesos 700 e 800)
  - Corpo: `Inter`, sans-serif (pesos 400, 500 e 600)
- **Border Radius**:
  - Botões e Badges: `999px` (Pílula completa)
  - Cards e Painéis: `18px` a `22px`
  - Imagens com moldura: `16px` a `20px`

---

## 5. Estratégia de Responsividade

- **Grid Fluido de 12 Colunas**: No desktop atinge `max-width: 1320px` com `padding: 0 32px`.
- **Telas Grandes (1440px+)**: Conteúdo contido e alinhado, sem distorção dos blocos visuais.
- **Tablets (768px a 1024px)**: Adaptação dos grids de serviços de 5 colunas para 2 ou 3 colunas balanceadas.
- **Smartphones (360px a 430px)**:
  - Cards em 1 coluna vertical com espaçamento otimizado (`gap: 16px`).
  - Headings calibrados entre `32px` e `40px` para evitar quebra feia de palavras.
  - CTAs ocupando largura total (`w-full`) com altura mínima de 48px para facilidade de toque com o polegar.
  - Drawer mobile deslizante com links espaçados e botão de contato imediato.

---

## 6. Otimização de Imagens e Tratamento de Assets

- **Preservação dos Arquivos Oficiais**: Todos os arquivos originais permanecerão intactos em suas pastas originais.
- **Extração Precisa de Recortes**: As fotografias dos serviços (CFTV, Alarme Intelbras, Cerca Elétrica no muro, etc.), fachadas e clientes serão extraídas das referências visuais com alta fidelidade para abastecer diretamente as páginas.
- **`next/image` Nativo**: Renderização com `sizes`, `priority` exclusivo no Hero, e `loading="lazy"` em todas as imagens inferiores.
- **`object-position` Calibrado**: Cada fotografia de técnico terá enquadramento específico (`object-position: top center` ou `object-position: 50% 25%`) para garantir que os rostos, equipamentos e logomarcas nos uniformes nunca sejam cortados.

---

## 7. Estratégia de SEO e Local GEO (Manaus/Amazonas)

- **Metadata Completo por Página**:
  - Títulos com autoridade e geolocalização clara (ex.: *"3D ALARMES — Segurança Eletrônica e Monitoramento 24h em Manaus"*).
  - OpenGraph e Twitter Cards configurados com o brasão oficial.
- **Schema.org Estruturado (JSON-LD)**:
  - Entidade `LocalBusiness` / `SecurityService`: Nome empresarial oficial, endereço na Av. Constantinopla, telefones (92) 3236-6336, área atendida ("Manaus, Amazonas, Região Metropolitana"), horários (Central 24 horas).
  - Entidade `Service` para cada produto de segurança.
  - Entidade `FAQPage` para dúvidas frequentes.
- **GEO (Generative Engine Optimization)**: Textos diretos e factuais que respondem claramente o que a empresa faz, onde atua, quais equipamentos instala e como entrar em contato.

---

## 8. Formulários e Canais de Atendimento

1. **Formulário de Solicitação de Orçamento**:
   - Campos: Nome completo, WhatsApp com DDD, E-mail, Tipo de Imóvel (Residencial, Comercial, Condomínio, Indústria), Serviço de Interesse e Descrição.
   - Envio dinâmico com feedback visual imediato (estados: digitando, enviando, sucesso, erro) e integração direta com abertura de conversa no WhatsApp.
2. **Formulário de Trabalhe Conosco**:
   - Campos: Nome, E-mail, Telefone, Vaga de Interesse, Mensagem e Upload de Arquivo (.pdf, .doc até 5MB) com validação de formato e tamanho.
3. **Canais Telefônicos e WhatsApp**:
   - Telefones fixos linkados com `tel:+559232366336` e `tel:+559233044206`.
   - Links de WhatsApp com `wa.me/559232366336?text=...` com mensagens contextuais para cada página e serviço.

---

## 9. Acessibilidade (WCAG 2.1 AA) e Performance

- **HTML Semântico**: Estrutura com `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
- **Hierarquia de Títulos Rigorosa**: Exatamente 1 `<h1>` por página, seguido por `<h2>` em seções e `<h3>` em cards.
- **Contraste de Cores**: Relação de contraste mínima de 4.5:1 para texto normal e 3:1 para botões e textos grandes. O texto sobre o botão amarelo `#FFD600` usará a cor azul marinho profundo `#020B18` para atingir nota máxima de contraste.
- **Suporte a Navegação por Teclado e Leitor de Tela**: Foco visível (`focus-visible:ring-2`), atributos `aria-label` e `aria-expanded` no menu mobile.
- **Respeito a `prefers-reduced-motion`**: Microinterações desativáveis automaticamente em dispositivos com restrição de movimento.

---

## 10. Cronograma de Execução e Etapas

```text
[Fase 1] Inicialização do Ambiente Next.js + Tailwind + TypeScript
[Fase 2] Configuração do Design System, Tokens e Fontes (Manrope + Inter)
[Fase 3] Processamento e Cópia Otimizada dos Assets Oficiais (Logos e Fotos Reais)
[Fase 4] Criação da Camada de Dados Centralizada (company.ts, services.ts, etc.)
[Fase 5] Desenvolvimento dos Componentes Globais (Header, Footer, FloatingWhatsApp, Button)
[Fase 6] Implementação da Homepage (/) e Validação com 'home page.png'
[Fase 7] Implementação da Página A Empresa (/a-empresa) e Validação com 'Pagina Empresa.png'
[Fase 8] Implementação da Página Soluções (/solucoes) e Validação com 'Pagina Solucoes Pra Empresas.png'
[Fase 9] Implementação das Páginas Individuais de Serviço (/solucoes/[slug])
[Fase 10] Implementação de Trabalhe Conosco (/trabalhe-conosco) e Validação com 'Pagina Trabalhe conosco.png'
[Fase 11] Implementação de Contato (/contato) com Mapa e Telefones Oficiais
[Fase 12] Implementação da Página Bio (/bio) e Validação com 'Pagina Bio.png'
[Fase 13] Ajustes de Responsividade Mobile (360px - 430px)
[Fase 14] SEO Local, Meta Tags e Schema.org JSON-LD
[Fase 15] Testes de Build, Lint e Validação Final (docs/RELATORIO_FINAL.md)
```
