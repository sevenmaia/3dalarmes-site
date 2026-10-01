# 3D ALARMES — DESIGN SYSTEM

> **Guia Oficial de Estilo, Tokens e Componentes**  
> **Versão:** 1.0.0  
> **Empresa:** 3D ALARMES (Manaus/AM)  
> **Princípio Visual:** SEGURANÇA + TECNOLOGIA + PRESENÇA + CONFIANÇA  

---

## 1. Paleta de Cores e Tokens CSS

As cores foram calibradas para transmitir a autoridade institucional de mais de 20 anos da 3D ALARMES, combinando o azul marinho profundo (segurança e prontidão 24 horas), o azul institucional (tecnologia e conectividade) e o amarelo ouro característico da marca (conversão e foco).

### 1.1. Deep Navy (Base Institucional e Fundos Escuros)
```css
:root {
  --navy-950: #020B18; /* Hero, Header sobre hero, Fundo principal escuro */
  --navy-900: #04152D; /* Seções alternadas, cards escuros, overlays */
  --navy-850: #061D3D; /* Destaques intermediários e borders sutis */
  --navy-800: #08264C; /* Superfícies elevadas escuras e inputs */
}
```

### 1.2. Azul Corporativo e Tecnológico
```css
:root {
  --blue-700: #064DBA; /* Azul corporativo base, ícones circulares */
  --blue-600: #0765D8; /* Ações secundárias, links e hover */
  --blue-500: #0A72ED; /* Elementos luminosos, badges tecnológicos */
  --blue-100: #E6F0FC; /* Fundo suave para ícones em superfícies claras */
}
```

### 1.3. Amarelo 3D (Ponto Focal de Conversão)
> **Regra de Ouro**: O amarelo é o elemento de maior atração visual. Nunca preencher a tela inteira de amarelo. Usar estritamente em botões primários, palavras-chave de headlines, badges de atenção e estados ativos.

```css
:root {
  --yellow-500: #FFD600; /* Amarelo oficial da marca — CTAs primários */
  --yellow-400: #FFE226; /* Hover do botão primário */
  --yellow-300: #FFEA55; /* Detalhes e brilhos sutis */
  --yellow-gradient: linear-gradient(135deg, #FFE600 0%, #FFD000 100%);
}
```

### 1.4. Neutros e Superfícies
```css
:root {
  --white: #FFFFFF;
  --gray-50: #F7F9FC; /* Fundo de seções claras alternadas */
  --gray-100: #EFF3F8; /* Bordas de cards e divisores suaves */
  --gray-200: #E4E9F0; /* Bordas de inputs */
  --gray-400: #A5AFBF; /* Textos de apoio e ícones desabilitados */
  --gray-600: #596579; /* Texto corrido sobre fundo claro */
  --gray-800: #202A39; /* Títulos em superfícies claras */
}
```

---

## 2. Tipografia

A identidade tipográfica equilibra a força geométrica e moderna nos títulos com a máxima legibilidade de leitura rápida no corpo de texto.

- **Família de Títulos (Headings)**: `Manrope`, sans-serif
- **Família de Texto Corrido (Body)**: `Inter`, system-ui, sans-serif

### 2.1. Escala Tipográfica Desktop
| Elemento | Tamanho | Peso | Line Height | Aplicação |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 64px – 72px | 800 (Bold) | 1.0 | Frase de impacto do Hero Home |
| **H1** | 52px – 60px | 700 / 800 | 1.05 | Título principal de páginas internas |
| **H2** | 36px – 44px | 700 / 800 | 1.15 | Títulos das seções principais |
| **H3** | 22px – 26px | 700 | 1.25 | Títulos de cards de serviço e valores |
| **Body Large** | 18px – 20px | 400 / 500 | 1.5 | Subtítulos de hero e introduções |
| **Body** | 16px | 400 / 500 | 1.6 | Descrições e parágrafos informativos |
| **Small / Legenda**| 14px | 400 / 500 | 1.5 | Metadados, copyright e notas |
| **Badge / Tag** | 12px – 13px | 700 | 1.2 | Categorias (uppercase, tracking +0.05em) |

### 2.2. Escala Tipográfica Mobile (< 768px)
- **Hero Display**: 38px – 46px
- **H1**: 34px – 40px
- **H2**: 28px – 34px
- **H3**: 20px – 22px
- **Body**: 15px – 16px

### 2.3. Padrão Visual de Headlines
Títulos estratégicos utilizam a técnica de **realce bicolor**:
- Texto base em Branco (`#FFFFFF`) ou Navy Escuro (`#020B18`).
- Palavra final de impacto envolvida em `<span>` com cor Amarela (`#FFD600`).
*Exemplo:* `Proteção real para <span className="text-yellow-400">o que mais importa.</span>`

---

## 3. Grid, Layout e Espaçamento

### 3.1. Containers e Breakpoints
- **Max Width Padrão**: `1320px` (centralizado com `margin: 0 auto`)
- **Telas Grandes (Wide)**: `1440px`
- **Padding Horizontal**:
  - Desktop (> 1024px): `padding: 0 40px`
  - Tablet (768px – 1024px): `padding: 0 24px`
  - Mobile (< 768px): `padding: 0 20px`

### 3.2. Escala de Espaçamento Vertical de Seções
- **Desktop**: `padding-top: 96px; padding-bottom: 96px` (ou `120px` em seções comemorativas)
- **Mobile**: `padding-top: 64px; padding-bottom: 64px`

---

## 4. Bordas e Raios (Border Radius)

- **Botões e Badges**: `rounded-full` (`999px` — estilo pílula fluido e amigável)
- **Cards de Conteúdo**: `rounded-2xl` (`18px` a `22px`)
- **Imagens e Banners**: `rounded-2xl` (`20px`)
- **Inputs e Controles de Formulário**: `rounded-xl` (`12px`)

---

## 5. Sombras e Elevação (Box Shadows)

- **Cards em Fundo Claro**:
  ```css
  box-shadow: 0 12px 36px -8px rgba(2, 11, 24, 0.07), 0 2px 8px rgba(2, 11, 24, 0.04);
  ```
- **Cards em Fundo Escuro (Dark Glass / Neon Glow)**:
  ```css
  box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  ```
- **Botão Primário Amarelo (Hover Glow)**:
  ```css
  box-shadow: 0 8px 24px -4px rgba(255, 214, 0, 0.40);
  ```

---

## 6. Componentes Básicos

### 6.1. Botões (`Button`)
1. **Primário (`variant="primary"`)**:
   - Fundo: Amarelo `#FFD600`
   - Texto: Azul Marinho `#020B18`, peso 700
   - Hover: Amarelo `#FFE226`, leve elevação (`translateY(-2px)`) e brilho dourado suave.
2. **WhatsApp (`variant="whatsapp"`)**:
   - Fundo: Verde WhatsApp oficial `#25D366` ou Amarelo Dourado com ícone do WhatsApp
   - Texto: Branco ou Marinho
   - Uso: Botão flutuante, hero e contatos diretos.
3. **Secundário Escuro (`variant="outline-white"`)**:
   - Fundo transparente, borda branca (`border border-white/30`), texto branco.
   - Hover: Fundo branco translúcido (`bg-white/10`).
4. **Secundário Claro (`variant="outline-blue"`)**:
   - Fundo transparente, borda azul (`border border-blue-600`), texto azul.
   - Hover: Fundo azul suave (`bg-blue-50`).

### 6.2. Cards de Serviços
- Topo: Fotografia real proporcional (`aspect-video` ou `h-48`) com cantos superiores arredondados.
- Badge Flutuante: Círculo azul royal (`#064DBA`) contendo o ícone outline do serviço (ex.: Câmera, Escudo, Cerca, Carro, Workstation).
- Corpo: Título H3 em Marinho `#020B18`, resumo claro em `#596579` e link de texto interativo com flecha direcional (`Saiba mais →`).

### 6.3. Iconografia (Lucide Icons)
- Estilo: Outline com traço de `1.75px` a `2px`.
- Cores: Azul corporativo (`#0765D8`), Branco (`#FFFFFF`) e Amarelo ouro (`#FFD600`).
- Sem mistura de bibliotecas para manter unidade visual impecável.

---

## 7. Tratamento de Imagens e Identidade Visual

1. **Logotipo Oficial**:
   - Sempre renderizado a partir do arquivo transparente de alta resolução `LOGO FRONTAL.png`.
   - Proporção estritamente bloqueada com `object-fit: contain`. Proibido achatar, esticar ou redesenhar em CSS.
2. **Fotografias Operacionais e Uniforme**:
   - Sempre priorizar as imagens oficiais do projeto (`IMAGENS PRA MODELO`).
   - O uniforme oficial homologado (polo preta, gola azul com friso, brasão oficial no peito) reforça a integridade da marca e a autenticidade de equipe própria local.
3. **Enquadramentos (`object-position`)**:
   - Imagens de técnicos utilizam `object-position: top center` para nunca cortar os rostos nem o brasão da farda.

---

## 8. Acessibilidade e Microinterações

- Transições suaves com duração padronizada de `200ms` a `300ms` em `ease-in-out`.
- Suporte a navegação completa por teclado com foco bem visível (`focus-visible:ring-2 focus-visible:ring-yellow-400`).
- Respeito integral à preferência de redução de movimento do sistema operacional (`@media (prefers-reduced-motion: reduce)`).
