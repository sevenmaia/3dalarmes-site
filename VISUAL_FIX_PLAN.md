# 3D ALARMES — PLANO DE REFINAMENTO VISUAL (HOME)

> **Documento:** VISUAL_FIX_PLAN.md  
> **Objetivo:** Adequar a Home com fidelidade absoluta à referência `home page.png`  

---

## 1. Diagnóstico e Correções por Seção

### 1. Header
- **Problema Visual:** Header atual inclui "Área do Cliente" e links diferentes da referência da Home.
- **Correção:**
  - Links: `Início`, `Sobre`, `Serviços`, `Nossos Projetos`, `Depoimentos`, `Contato`.
  - Botão direito único em destaque: `Falar no WhatsApp` (amarelo com ícone WhatsApp à esquerda e sem botão secundário concorrendo).
  - Altura e padding alinhados com o Hero para parecer integrado.

### 2. Hero Section
- **Problema Visual Crítico:** Câmera domo está dentro de um pequeno card retangular isolado com moldura, parecendo um widget secundário.
- **Correção:**
  - Reconstruir a composição do Hero: lado direito ocupado por fotografia em grande escala de câmera de segurança domo profissional integrada diretamente ao fundo Deep Navy (sem caixa/card preso).
  - Headline com escala forte (60px-70px no desktop), quebra natural em 3 linhas:
    `Proteção real`
    `para o que`
    `<span class="text-yellow-400">mais importa.</span>`
  - Subtítulo com espaçamento exato.
  - Botões: `Solicitar Orçamento →` (amarelo) e `Nossos Serviços →` (outline).
  - Faixa inferior de 4 benefícios bem distribuída conectada visualmente à base do Hero.
- **Asset Necessário:** Gerar imagem em alta resolução e grande escala de câmera domo profissional de segurança instalada em parede/marquise com fundo noturno suave integrado (`public/assets/generated/home/hero-camera-dome.png`).

### 3. Soluções Completas (5 Cards de Serviços)
- **Problema Visual:** O quinto card exibido foi "Controle de Acesso" em vez de "Monitoramento 24 horas", e a grade ficou com espaçamento excessivo.
- **Correção:**
  - Os 5 cards exatos:
    1. `CFTV`
    2. `Sistemas de Alarme de Intrusão`
    3. `Cercas Elétricas e Concertinas`
    4. `Rastreamento de Veículos`
    5. `Monitoramento 24 horas`
  - Proporção robusta dos cards ocupando a largura total do container (1280px-1320px).
  - Fotografias independentes de alta qualidade em proporção correta para cada card (sem crops de screenshots).
  - Ícone azul royal no canto inferior esquerdo da imagem, títulos H3 e link `Saiba mais →`.
- **Assets Necessários:** Gerar imagens fotográficas exclusivas para os 5 cards em `public/assets/generated/home/services/`.

### 4. Sobre a 3D ALARMES
- **Problema Visual:** A imagem do técnico ficou comprimida num card pequeno com espaço vazio excessivo ao lado.
- **Correção:**
  - Proporção ~45% imagem à esquerda e 55% texto à direita.
  - Imagem de grande presença com o técnico uniformizado e o brasão ao fundo.
  - 4 diferenciais circulares azuis bem alinhados em 2 colunas.
  - Botão amarelo `Conheça nossa história →`.
- **Asset:** Utilizar/adaptar fotografia oficial de modelo com o uniforme oficial homologado da 3D Alarmes.

### 5. Sua Segurança na Palma da Mão
- **Problema Visual Crítico:** Foi transformado em 3 cards separados quebrados em grid.
- **Correção:**
  - Reconstruir a seção como **composição panorâmica integrada**:
    - **Esquerda:** Headline `Sua segurança <span class="text-yellow-400">na palma da mão</span>`, subtítulo e os 3 checks amarelos.
    - **Centro:** Smartphone em escala dominante exibindo mosaico de câmeras de segurança.
    - **Direita:** Brasão oficial 3D ALARMES em grande destaque com o texto `Segurança dentro e fora de casa.` e botão amarelo largo `Quero um orçamento →`.
- **Asset Necessário:** Mockup profissional de alta escala de smartphone com aplicativo de videomonitoramento (`public/assets/generated/home/smartphone-monitoring.png`).

### 6. Depoimentos
- **Problema Visual:** Cards menores e espaçados.
- **Correção:**
  - Alinhamento de largura total com 4 cards de presença forte, estrelas amarelas vibrantes, aspas e avatares nítidos.

### 7. CTA Final
- **Problema Visual:** Alinhamento e peso visual.
- **Correção:**
  - Banner Deep Navy unificado, headline forte, botão WhatsApp amplo e 3 microbenefícios abaixo em linha fluida.

### 8. Footer
- **Ajustes:** Proporção do brasão à esquerda, tipografia das 4 colunas e copyright.
