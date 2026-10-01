# 3D ALARMES — WEBSITE REDESIGN
## Prompt mestre de análise, planejamento, Design System e implementação

Você está trabalhando no redesign completo do site institucional da **3D ALARMES**, empresa de segurança eletrônica e rastreamento veicular de Manaus/AM.

O objetivo NÃO é simplesmente reproduzir o site antigo.

O objetivo é:

- preservar a identidade reconhecível da 3D ALARMES;
- modernizar profundamente a experiência;
- aumentar percepção de autoridade;
- facilitar contato e solicitação de orçamento;
- apresentar os serviços de forma clara;
- transmitir segurança, tecnologia e confiança;
- melhorar navegação mobile;
- preparar o site para SEO, GEO e conversão;
- criar um sistema visual reutilizável;
- criar páginas visualmente consistentes;
- aproveitar os materiais reais já disponíveis no projeto.

---

# 0. DIRETÓRIO DO PROJETO

Diretório principal:

```text
C:\Users\soare\Downloads\ANTIGRAVITY PROJETOS & SKILLs\3dalarmes-site
```

Diretório prioritário de referências:

```text
C:\Users\soare\Downloads\ANTIGRAVITY PROJETOS & SKILLs\3dalarmes-site\REFERENCIAS
```

Antes de escrever qualquer interface:

1. percorra recursivamente todo o diretório `3dalarmes-site`;
2. identifique a estrutura existente;
3. identifique o stack já utilizado, se existir;
4. encontre logos;
5. encontre imagens institucionais;
6. encontre imagens geradas especificamente para o novo site;
7. encontre screenshots do site antigo;
8. encontre screenshots/mockups das novas páginas;
9. encontre arquivos de texto, documentação, briefing, SKILL.md e instruções;
10. catalogue todos os ativos relevantes.

NÃO comece desenvolvendo imediatamente.

---

# 1. PRIMEIRA FASE OBRIGATÓRIA — AUDITORIA

Analise primeiro:

```text
/REFERENCIAS
```

Analise TODAS as imagens encontradas dentro dessa pasta.

Não analise somente os nomes dos arquivos.

Abra as imagens e observe visualmente:

- composição;
- grid;
- espaçamento;
- hierarquia;
- cores;
- tipografia;
- proporções;
- hero sections;
- headers;
- CTAs;
- cards;
- imagens;
- rodapés;
- estrutura das páginas;
- disposição dos serviços;
- padrões mobile;
- elementos repetidos;
- características da marca;
- conteúdo do site antigo;
- problemas visuais do site antigo;
- soluções propostas nos novos mockups.

Depois procure as outras pastas do projeto.

Procure especialmente por conteúdos relacionados a:

```text
logo
logos
brand
branding
imagens
images
assets
fotos
photos
mockups
referencias
references
screenshots
site antigo
site novo
home
empresa
sobre
servicos
solucoes
trabalhe conosco
bio
link bio
```

Use os arquivos locais reais.

Não substitua automaticamente esses arquivos por imagens externas.

---

# 2. NÃO ALTERAR OS ASSETS ORIGINAIS

A logo oficial da 3D ALARMES é um ativo da marca.

Não redesenhe a logo usando CSS.

Não recrie a logo com texto.

Não gere uma nova versão artificial quando houver arquivo oficial disponível.

Use a melhor versão disponível na pasta de assets.

Dê preferência a:

1. PNG transparente de alta resolução;
2. SVG oficial, se existir;
3. versão frontal para navegação;
4. versões anguladas/3D apenas em áreas decorativas.

Não distorcer a proporção da logo.

Sempre usar:

```css
object-fit: contain;
```

---

# 3. IMAGENS COM FUNCIONÁRIOS

Existem imagens produzidas especificamente para representar profissionais da 3D ALARMES.

Quando houver pessoas, priorize essas imagens.

O uniforme oficial utilizado visualmente deve seguir:

- camisa polo preta;
- gola azul royal;
- acabamento azul nas mangas;
- pequenos detalhes brancos;
- escudo/logo 3D ALARMES no peito;
- calça escura;
- aparência profissional;
- técnicos de instalação e segurança eletrônica.

Não substitua arbitrariamente essas imagens por modelos genéricos de banco.

Evitar visual excessivamente artificial.

Priorizar cenas coerentes com:

- instalação de câmeras;
- monitoramento;
- atendimento residencial;
- atendimento empresarial;
- rastreamento veicular;
- suporte;
- equipe técnica;
- central de monitoramento.

---

# 4. RESULTADO DA AUDITORIA

Antes da implementação, crie:

```text
docs/ANALISE_REFERENCIAS.md
```

Inclua:

## Arquivos encontrados

Liste os principais arquivos e a finalidade provável de cada um.

## Site antigo

Identifique:

- pontos positivos;
- problemas;
- padrões que devem ser preservados;
- elementos ultrapassados;
- problemas de hierarquia;
- problemas de espaçamento;
- problemas mobile;
- problemas de conversão.

## Novo direcionamento

Identifique nas referências novas:

- linguagem visual;
- estrutura;
- cores;
- seções;
- componentes;
- estilo fotográfico;
- comportamento dos CTAs;
- padrões que deverão se repetir.

## Páginas

Faça uma análise individual de cada página encontrada.

---

# 5. PLANO ANTES DA IMPLEMENTAÇÃO

Depois da auditoria, crie:

```text
docs/PLANO_IMPLEMENTACAO.md
```

O documento deve conter:

1. arquitetura do projeto;
2. páginas;
3. rotas;
4. componentes compartilhados;
5. Design System;
6. componentes específicos;
7. estratégia responsive;
8. otimização de imagens;
9. SEO;
10. GEO;
11. formulários;
12. contatos;
13. acessibilidade;
14. etapas de implementação.

Somente depois disso iniciar o desenvolvimento.

---

# 6. PRINCÍPIO VISUAL

A nova identidade digital deve transmitir:

> SEGURANÇA + TECNOLOGIA + PRESENÇA + CONFIANÇA.

Não transformar a empresa em uma startup genérica.

A 3D ALARMES precisa parecer:

- consolidada;
- regionalmente forte;
- técnica;
- profissional;
- acessível;
- moderna;
- preparada para projetos residenciais e empresariais.

A linguagem visual pode utilizar referências contemporâneas de:

- empresas de segurança;
- SaaS técnico;
- tecnologia residencial;
- monitoramento;
- segurança automotiva;

mas sem apagar a identidade amarela e azul da marca.

---

# 7. DESIGN SYSTEM

Criar:

```text
src/styles/
src/components/ui/
```

ou equivalentes no stack encontrado.

Centralizar tokens.

---

# 8. PALETA PRINCIPAL

## Navy principal

```css
--navy-950: #020B18;
--navy-900: #04152D;
--navy-850: #061D3D;
--navy-800: #08264C;
```

É a base institucional.

Uso:

- header;
- hero;
- footer;
- blocos de destaque;
- overlays;
- fundos premium.

---

## Azul institucional

```css
--blue-700: #064DBA;
--blue-600: #0765D8;
--blue-500: #0A72ED;
```

Uso:

- ícones;
- elementos tecnológicos;
- links;
- estados ativos;
- detalhes;
- bordas especiais.

---

## Amarelo 3D

```css
--yellow-500: #FFD600;
--yellow-400: #FFE226;
--yellow-300: #FFEA55;
```

O amarelo é o principal elemento de atenção.

Utilizar em:

- CTA primário;
- palavras estratégicas;
- pequenos indicadores;
- estados ativos;
- linhas;
- detalhes visuais.

NÃO preencher a interface inteira de amarelo.

---

## Neutros

```css
--white: #FFFFFF;

--gray-50: #F7F9FC;
--gray-100: #EFF3F8;
--gray-200: #E4E9F0;
--gray-400: #A5AFBF;
--gray-600: #596579;
--gray-800: #202A39;
```

---

# 9. GRADIENTES

Usar com moderação.

Exemplo hero:

```css
linear-gradient(
  90deg,
  rgba(2, 11, 24, .98) 0%,
  rgba(4, 21, 45, .90) 42%,
  rgba(4, 21, 45, .25) 72%,
  rgba(4, 21, 45, 0) 100%
)
```

CTA:

```css
linear-gradient(
  135deg,
  #FFE600,
  #FFD000
)
```

Azul tecnológico:

```css
linear-gradient(
  135deg,
  #064DBA,
  #08264C
)
```

Evitar gradientes exagerados.

---

# 10. TIPOGRAFIA

Escolher uma combinação moderna, forte e altamente legível.

Preferência:

```text
Headings: Manrope
Body: Inter
```

Fallback:

```css
font-family:
  "Manrope",
  "Inter",
  system-ui,
  sans-serif;
```

Caso o projeto já possua fonte institucional adequada, avaliá-la antes de trocar.

---

# 11. ESCALA TIPOGRÁFICA

## Desktop

```text
Hero Display:
64–76px
font-weight: 750–800
line-height: 0.96–1.02

H1:
52–64px
700–800

H2:
38–48px
700–800

H3:
24–30px
650–750

Body Large:
18–20px

Body:
16–18px

Small:
14px

Label:
12–14px
600–700
uppercase opcional
letter-spacing: .04em
```

## Mobile

```text
Hero:
42–52px

H1:
38–46px

H2:
30–36px

H3:
22–26px

Body:
16–17px
```

Não deixar headings enormes a ponto de esmagar a interface.

---

# 12. HIERARQUIA DAS HEADLINES

Usar destaque amarelo de forma pontual.

Exemplo:

```text
Proteção real para
o que mais importa.
```

onde:

```text
Proteção real para
```

fica branco e:

```text
o que mais importa.
```

fica amarelo.

Outro exemplo:

```text
Segurança completa
para cada necessidade.
```

Evitar colorir frases inteiras.

---

# 13. GRID

Desktop:

```text
max-width: 1280–1360px
padding-inline: 32–48px
```

Telas grandes:

```text
max-width: 1440px
```

Tablet:

```text
padding-inline: 24px
```

Mobile:

```text
padding-inline: 20px
```

Usar sistema de 12 colunas no desktop.

---

# 14. ESPAÇAMENTO

Base:

```text
4
8
12
16
24
32
40
48
64
80
96
120
```

Seção desktop:

```text
padding-block: 96–120px
```

Seção mobile:

```text
padding-block: 64–80px
```

Evitar páginas espremidas.

Criar bastante espaço respirável.

---

# 15. BORDER RADIUS

Cards:

```text
16–22px
```

Botões:

```text
999px
```

Imagens:

```text
18–24px
```

Badges:

```text
999px
```

---

# 16. SOMBRAS

Cards:

```css
box-shadow:
0 12px 40px rgba(9, 28, 58, .08);
```

Dark cards:

```css
box-shadow:
0 16px 50px rgba(0, 0, 0, .20);
```

Não usar sombras pesadas.

---

# 17. BOTÕES

## Primário

Amarelo.

Texto navy.

Ícone opcional.

Exemplo:

```text
Solicitar orçamento →
```

## WhatsApp

Amarelo ou verde somente quando o contexto deixar claro que é WhatsApp.

Exemplo:

```text
Falar no WhatsApp →
```

## Secundário

Fundo transparente.

Borda branca em fundos escuros.

Borda azul em fundos claros.

---

# 18. INTERAÇÕES

Hover suave:

```text
150–250ms
```

Pode utilizar:

- leve translateY;
- troca de fundo;
- borda;
- brilho discreto;
- escala máxima ~1.02.

Não criar animações que pareçam jogo ou landing page de criptomoeda.

---

# 19. ICONOGRAFIA

Utilizar uma única biblioteca consistente.

Sugestão:

```text
Lucide
```

Estilo:

- outline;
- 1.75–2px;
- azul;
- branco;
- amarelo apenas como destaque.

Não misturar dezenas de estilos diferentes.

---

# 20. COMPONENTES GLOBAIS

Criar componentes reutilizáveis para:

```text
Header
MobileMenu
Hero
PageHero
SectionHeader
Button
WhatsAppButton
ServiceCard
FeatureCard
MetricCard
TestimonialCard
ImageFeature
CTASection
ContactCard
ContactForm
Footer
SocialLinks
Breadcrumb
Logo
FloatingWhatsApp
```

Evitar duplicação.

---

# 21. HEADER

Desktop:

```text
LOGO

Início
A Empresa
Soluções para Você
Trabalhe Conosco
Contatos

[ Área do Cliente ]
```

Pode também existir CTA:

```text
Falar no WhatsApp
```

Header sobre hero pode iniciar transparente.

Ao rolar:

- navy sólido ou blur;
- altura reduzida;
- sombra/borda discreta.

Mobile:

- logo;
- menu hambúrguer;
- drawer;
- botão WhatsApp;
- área do cliente.

---

# 22. HOME

Rota:

```text
/
```

Estrutura:

## Hero

Imagem forte de segurança eletrônica.

Pode utilizar:

- câmera;
- fachada residencial;
- técnico;
- monitoramento.

Headline sugerida:

```text
Proteção real para
o que mais importa.
```

Subheadline:

```text
Sistemas de alarme, monitoramento 24 horas, CFTV,
cercas elétricas e rastreamento veicular para
residências, condomínios e empresas.
```

CTAs:

```text
Solicitar orçamento
Conhecer soluções
```

Microbenefícios:

```text
Monitoramento 24 horas
Equipe especializada em Manaus
Projetos personalizados
Instalação e suporte
```

---

## Serviços principais

Cards para:

```text
CFTV
Sistemas de Alarme
Cercas Elétricas
Rastreamento de Veículos
Monitoramento 24 Horas
Controle de Acesso
```

Imagem real por card quando disponível.

---

## Sobre

Layout imagem + conteúdo.

Headline:

```text
Mais de 20 anos
protegendo Manaus.
```

Usar os dados históricos somente quando forem confirmados pelas referências/documentos.

Não inventar estatísticas.

---

## Segurança na palma da mão

Mostrar:

- smartphone;
- visualização das câmeras;
- rastreamento;
- notificações;
- monitoramento remoto.

---

## Segmentos

```text
Residências
Empresas
Condomínios
Comércios
Indústrias
```

---

## Prova social

Criar estrutura para avaliações reais.

Não inventar depoimentos atribuídos a pessoas reais.

Se não houver avaliações reais disponíveis:

usar placeholders claramente marcados no código/dados até serem substituídos.

---

## CTA final

```text
Vamos proteger
o que é importante para você?
```

Botão:

```text
Falar no WhatsApp
```

---

# 23. PÁGINA A EMPRESA

Rota:

```text
/a-empresa
```

Hero:

```text
Mais de 20 anos
protegendo o que importa.
```

Estrutura:

```text
Hero
História
Missão / Visão / Valores
Indicadores
Soluções
Equipe especializada
CTA
Footer
```

---

## História

Usar o conteúdo encontrado no site antigo como fonte.

Preservar informações importantes.

Reescrever apenas para melhorar:

- clareza;
- leitura;
- hierarquia;
- apresentação.

Não inventar acontecimentos.

---

## Missão

Card próprio.

## Visão

Card próprio.

## Valores

Card próprio.

Usar o conteúdo verdadeiro encontrado nas referências.

---

# 24. SOLUÇÕES PARA VOCÊ

Rota:

```text
/solucoes
```

Hero:

```text
Segurança completa
para cada necessidade.
```

Introdução:

```text
Soluções em segurança eletrônica para residências,
empresas e condomínios.
```

Grid:

```text
CFTV
Alarmes de Intrusão
Cercas Elétricas e Concertinas
Rastreamento de Veículos
Controle de Acesso
Monitoramento 24 horas
Soluções Residenciais
Soluções Empresariais
```

Cada card:

```text
imagem
ícone
título
descrição
CTA
```

---

# 25. PÁGINAS INDIVIDUAIS DE SERVIÇO

Preparar arquitetura para:

```text
/solucoes/cftv
/solucoes/alarmes
/solucoes/cercas-eletricas
/solucoes/rastreamento-veicular
/solucoes/controle-de-acesso
/solucoes/monitoramento-24h
```

Mesmo que inicialmente algumas sejam implementadas como templates.

Cada página:

```text
Hero
O que é
Benefícios
Como funciona
Para quem serve
Diferenciais
FAQ
CTA
Contato
```

---

# 26. TRABALHE CONOSCO

Rota:

```text
/trabalhe-conosco
```

Hero:

```text
Faça parte de uma equipe
que protege o que importa.
```

Apresentar:

```text
Ambiente colaborativo
Oportunidade de crescimento
Treinamento contínuo
Reconhecimento
```

---

## Equipe

Usar fotografias da equipe/uniformes encontradas na pasta.

Headline:

```text
Talento, dedicação
e propósito em comum.
```

---

## Vagas

Criar componente baseado em dados.

Exemplo estrutural:

```ts
{
  title,
  location,
  type,
  description,
  slug
}
```

Se não houver arquivo com vagas reais, não inventar oportunidades como se fossem reais.

Pode mostrar:

```text
Nenhuma vaga publicada no momento.
Envie seu currículo para nosso banco de talentos.
```

---

## Formulário de currículo

Campos:

```text
Nome
E-mail
Telefone / WhatsApp
Área de interesse
Mensagem
Currículo
```

Arquivo:

```text
PDF
DOC
DOCX
```

Adicionar validação.

Adicionar estado:

```text
enviando
sucesso
erro
```

---

# 27. LINK NA BIO

Rota:

```text
/bio
```

A página NÃO deve parecer Linktree genérico.

Precisa parecer parte do novo site da 3D ALARMES.

Mobile first.

Estrutura:

```text
logo
3D ALARMES
frase curta
serviços
lista de links
redes sociais
localização
assinatura
```

Links previstos:

```text
Site
Orçamentos comerciais
Rastreamento veicular
Suporte técnico do monitoramento
Suporte técnico do rastreamento
WhatsApp Central de Monitoramento 24h
Portal do Cliente
Portal de Rastreamento
Trabalhe Conosco
Facebook
Instagram
```

Usar os URLs verdadeiros encontrados no projeto/site.

Não inventar URLs.

---

# 28. CONTATO

Rota:

```text
/contato
```

ou seção correspondente.

Informações devem ser obtidas das fontes reais.

O material de referência apresenta informações como:

```text
Av. Constantinopla, 11
Quadra 30, Sala B
Conjunto Campos Elísios
Planalto
Manaus/AM
```

Telefones vistos nas referências:

```text
(92) 3236-6336
(92) 3304-4206
```

E-mail:

```text
faleconosco@3dalarmes.com.br
```

CONFIRME esses dados nos arquivos locais antes de consolidá-los no site.

Se houver conflito, utilize a fonte mais atual e confiável encontrada no projeto.

---

# 29. WHATSAPP

O WhatsApp deverá ser uma das principais conversões.

Implementar:

```text
CTA no hero
CTA intermediário
CTA final
botão flutuante
link no footer
link na bio
```

Não exagerar na repetição visual.

Usar `wa.me` com número verdadeiro encontrado nas referências.

Mensagem inicial pode ser configurável.

Exemplo:

```text
Olá! Gostaria de solicitar um orçamento com a 3D ALARMES.
```

---

# 30. FORMULÁRIO DE ORÇAMENTO

Criar formulário de alta conversão.

Campos:

```text
Nome
WhatsApp
E-mail opcional
Tipo de cliente
Serviço de interesse
Mensagem
```

Tipo:

```text
Residencial
Empresa
Condomínio
Comércio
Outro
```

Serviços:

```text
CFTV
Alarme
Cerca Elétrica
Rastreamento
Controle de Acesso
Monitoramento 24h
Projeto personalizado
```

---

# 31. RESPONSIVIDADE

Prioridade absoluta.

Breakpoints aproximados:

```text
360
390
430
768
1024
1280
1440
```

Testar especificamente:

```text
360x800
390x844
430x932
768x1024
1366x768
1440x900
1920x1080
```

---

# 32. MOBILE

Não simplesmente empilhar a versão desktop.

No mobile:

- simplificar hero;
- limitar tamanho dos headings;
- reorganizar imagens;
- cards 1 coluna;
- algumas listas podem virar carrossel horizontal;
- CTAs devem ter pelo menos 48px de altura;
- menu em drawer;
- reduzir elementos decorativos;
- manter contato visível;
- evitar seções gigantes;
- formulário em uma coluna.

---

# 33. HERO RESPONSIVO

Desktop:

```text
texto à esquerda
imagem/produto/pessoa à direita
```

ou composição baseada na referência visual.

Mobile:

```text
headline
subheadline
CTA
imagem
microbenefícios
```

Evitar colocar texto importante em cima de partes muito complexas da fotografia.

---

# 34. IMAGENS

Usar:

```html
loading="lazy"
```

exceto hero.

Usar formatos modernos quando possível:

```text
AVIF
WebP
```

Preservar arquivos originais.

Gerar derivados otimizados somente quando necessário.

---

# 35. OBJECT POSITION

Não usar automaticamente:

```css
object-position: center;
```

em todas as imagens.

Ajustar individualmente para não cortar:

- rostos;
- câmeras;
- equipamentos;
- logos;
- mãos;
- veículos.

---

# 36. PERFORMANCE

Metas:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

Evitar:

- bibliotecas gigantes;
- vídeos autoplay pesados;
- imagens PNG enormes em backgrounds;
- JS desnecessário;
- animações excessivas.

---

# 37. ACESSIBILIDADE

Implementar:

- HTML semântico;
- alt real em imagens;
- aria-label;
- foco visível;
- navegação por teclado;
- contraste WCAG;
- labels reais;
- mensagens de erro associadas;
- `prefers-reduced-motion`.

---

# 38. SEO

Configurar por página:

```text
title
description
canonical
Open Graph
Twitter Card
robots
```

Criar:

```text
sitemap.xml
robots.txt
```

Headings corretos:

```text
1 único H1
H2 por seção
H3 nos cards quando necessário
```

---

# 39. SEO LOCAL

O site precisa deixar claro:

```text
3D ALARMES
Segurança eletrônica
Manaus
Amazonas
```

Sem keyword stuffing.

Criar páginas semanticamente compreensíveis para buscas relacionadas a:

```text
segurança eletrônica em Manaus
alarme em Manaus
câmeras de segurança em Manaus
CFTV em Manaus
rastreamento veicular em Manaus
monitoramento 24 horas em Manaus
cerca elétrica em Manaus
```

---

# 40. SCHEMA.ORG

Quando os dados estiverem confirmados, implementar JSON-LD.

Principal:

```text
LocalBusiness
```

ou subtipo apropriado.

Adicionar:

```text
name
url
logo
image
telephone
email
address
sameAs
areaServed
```

Para serviços:

```text
Service
```

FAQ:

```text
FAQPage
```

Breadcrumb:

```text
BreadcrumbList
```

---

# 41. GEO — GENERATIVE ENGINE OPTIMIZATION

Estruturar conteúdo de forma facilmente interpretável por mecanismos de busca e sistemas de IA.

Cada página deve responder claramente:

```text
Quem é a empresa?
Onde atende?
O que faz?
Para quem?
Quais serviços?
Como funciona?
Como entrar em contato?
```

Evitar textos genéricos.

Usar frases concretas.

---

# 42. COPY

Tom:

```text
profissional
seguro
direto
humano
local
técnico sem ser difícil
```

Não utilizar clichês de IA como:

```text
No mundo atual...
Em um cenário cada vez mais...
Na era digital...
Revolucione...
Transforme sua jornada...
```

A empresa deve soar como uma empresa real.

---

# 43. NÃO INVENTAR INFORMAÇÕES

Nunca inventar:

- quantidade de clientes;
- número de instalações;
- avaliações;
- certificados;
- parceiros;
- marcas;
- tempo de resposta;
- cobertura;
- estatísticas;
- vagas;
- depoimentos;
- números;
- preços.

Utilize apenas dados encontrados nas referências.

Quando um dado necessário não existir:

```text
TODO_CONTENT
```

ou usar estrutura neutra temporária.

---

# 44. CONTEÚDO CENTRALIZADO

Não espalhar conteúdo pelo JSX.

Criar algo como:

```text
src/data/company.ts
src/data/services.ts
src/data/navigation.ts
src/data/contact.ts
src/data/social.ts
```

Exemplo:

```ts
export const company = {
  name: "3D ALARMES",
  location: "Manaus/AM",
};
```

Assim informações reais poderão ser atualizadas facilmente.

---

# 45. LINKS EXTERNOS

Links de:

```text
Instagram
Facebook
WhatsApp
Portal do Cliente
Portal Rastreamento
```

devem ser centralizados.

Nunca criar links fictícios.

Extrair URLs existentes dos materiais do projeto quando disponíveis.

---

# 46. MAPA

Não utilizar screenshot estática se houver possibilidade de embed oficial.

Preparar componente:

```text
LocationMap
```

com fallback.

Não bloquear carregamento inicial por causa do mapa.

Lazy-load.

---

# 47. RODAPÉ

Estrutura:

### Marca

```text
Logo
3D ALARMES
Segurança eletrônica em Manaus
```

### Navegação

```text
Início
A Empresa
Soluções para Você
Trabalhe Conosco
Contatos
```

### Soluções

```text
CFTV
Alarmes
Cercas Elétricas
Rastreamento
Controle de Acesso
Monitoramento 24 horas
```

### Contato

```text
Endereço
Telefone
WhatsApp
E-mail
```

### Bottom

```text
copyright
redes sociais
```

Preservar créditos existentes apenas se realmente forem necessários/contratualmente obrigatórios.

Não copiar automaticamente o crédito do desenvolvedor do site antigo para um projeto novo.

---

# 48. PÁGINA 404

Criar página coerente.

Mensagem:

```text
Página não encontrada.
```

CTA:

```text
Voltar para o início
```

---

# 49. ESTADOS DA INTERFACE

Criar estados para:

```text
loading
empty
success
error
disabled
hover
focus
active
```

---

# 50. ANIMAÇÕES

Podem existir:

- reveal suave;
- fade;
- translate;
- hover;
- microinterações.

Duração:

```text
180–500ms
```

Não animar tudo.

O site precisa continuar elegante mesmo com animações desativadas.

---

# 51. COMPONENTES DECORATIVOS

Permitido:

- glow azul discreto;
- grid tecnológico muito sutil;
- linhas;
- elementos de segurança;
- pequenos pontos;
- halos;
- gradients.

Não usar:

- Matrix verde;
- circuitos exagerados;
- cyberpunk;
- hologramas excessivos;
- neon por toda parte.

---

# 52. REFERÊNCIA VISUAL PRINCIPAL

As imagens em `/REFERENCIAS` representam a direção aprovada.

Elas devem orientar:

- composição;
- proporção;
- densidade;
- estilo dos cards;
- hero;
- CTAs;
- seção sobre;
- serviços;
- trabalhe conosco;
- página bio.

NÃO devem ser copiadas como uma imagem única.

O site precisa ser interface HTML real.

---

# 53. RELAÇÃO COM O SITE ANTIGO

Preservar do site antigo:

- informações válidas;
- serviços;
- identidade;
- reconhecimento visual;
- contatos;
- links importantes;
- funcionalidades essenciais.

Modernizar:

- composição;
- tipografia;
- espaçamento;
- responsividade;
- imagens;
- CTAs;
- navegação;
- organização;
- hierarquia.

---

# 54. QUALIDADE DE IMPLEMENTAÇÃO

Não produzir código de protótipo descartável.

O projeto deve ser:

```text
modular
escalável
tipado
organizado
reutilizável
responsivo
acessível
performático
SEO-friendly
```

---

# 55. STACK

Primeiro detecte o stack existente.

Se já existir projeto:

> PRESERVAR o stack e arquitetura sempre que forem adequados.

Não migrar por preferência pessoal.

Se a pasta estiver realmente vazia e não houver stack definido, utilizar:

```text
Next.js
TypeScript
Tailwind CSS
Lucide
```

preferencialmente arquitetura moderna com App Router.

---

# 56. ESTRUTURA SUGERIDA

Somente se compatível com o stack:

```text
src/
├── app/
│   ├── page.tsx
│   ├── a-empresa/
│   ├── solucoes/
│   ├── trabalhe-conosco/
│   ├── contato/
│   └── bio/
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── forms/
│
├── data/
│   ├── company.ts
│   ├── services.ts
│   ├── navigation.ts
│   ├── contact.ts
│   └── social.ts
│
├── styles/
├── lib/
└── assets/
```

---

# 57. DESIGN SYSTEM DOCUMENTADO

Criar:

```text
docs/DESIGN_SYSTEM.md
```

Documentar:

```text
cores
tipografia
grid
spacing
radii
shadows
buttons
cards
icons
images
responsive
animation
```

---

# 58. HOMEPAGE COMO REFERÊNCIA DO SISTEMA

Implemente primeiro a HOME.

Depois revise visualmente:

- desktop;
- tablet;
- mobile.

Somente quando o Design System estiver consistente, avance para as páginas internas.

---

# 59. ORDEM DE IMPLEMENTAÇÃO

Executar nesta ordem:

```text
01 — auditoria
02 — plano
03 — Design System
04 — estrutura global
05 — header/footer
06 — home
07 — a empresa
08 — soluções
09 — serviços internos
10 — trabalhe conosco
11 — contato
12 — bio
13 — mobile
14 — SEO/GEO
15 — acessibilidade
16 — performance
17 — QA
```

---

# 60. QA VISUAL

Ao terminar cada página:

1. abra a página;
2. compare visualmente com as referências;
3. tire screenshot;
4. confira hierarquia;
5. confira espaçamento;
6. confira cortes de imagens;
7. confira logo;
8. confira textos;
9. confira CTA;
10. confira mobile.

Corrija antes de continuar.

---

# 61. QA TÉCNICO

No final rodar:

```text
lint
typecheck
build
```

Não considerar concluído caso existam:

```text
TypeScript errors
console errors
404 de assets
broken images
links internos quebrados
overflow horizontal
layout shift evidente
```

---

# 62. TESTE MOBILE OBRIGATÓRIO

Verificar cada página em largura aproximada:

```text
390px
```

Prestar atenção em:

- menu;
- hero;
- quebra de título;
- botões;
- cards;
- formulários;
- imagens;
- footer;
- WhatsApp;
- links;
- espaçamento.

---

# 63. REGRA SOBRE AS REFERÊNCIAS

A pasta:

```text
C:\Users\soare\Downloads\ANTIGRAVITY PROJETOS & SKILLs\3dalarmes-site\REFERENCIAS
```

é obrigatória na etapa de análise.

Não assuma que já conhece os layouts.

Abra os arquivos reais.

Analise-os.

Use-os para formular o plano.

Se houver diferenças entre este documento e uma referência visual claramente aprovada, preserve:

1. informações reais;
2. consistência do Design System;
3. intenção visual da referência.

---

# 64. NÃO FAZER

Evitar:

- site genérico criado só com template;
- excesso de cards;
- excesso de sombras;
- blobs aleatórios;
- gradients por toda parte;
- tipografia gigante sem função;
- animações excessivas;
- ícones inconsistentes;
- logos inventadas;
- pessoas sem relação com o uniforme;
- fundos de IA desnecessários;
- textos inventados;
- falsa prova social;
- números fictícios;
- seções espremidas;
- desktop simplesmente reduzido para mobile;
- imagens deformadas;
- imagens genéricas quando já existem assets próprios.

---

# 65. OBJETIVO FINAL

O resultado deve parecer o novo site oficial de uma empresa consolidada de segurança eletrônica de Manaus.

Ele precisa combinar:

```text
autoridade institucional
+
tecnologia
+
segurança
+
proximidade
+
conversão
```

Visualmente, deve ser claramente superior ao site antigo sem perder a identidade histórica da empresa.

---

# 66. ENTREGÁVEIS OBRIGATÓRIOS

Ao concluir, devem existir:

```text
docs/ANALISE_REFERENCIAS.md
docs/PLANO_IMPLEMENTACAO.md
docs/DESIGN_SYSTEM.md
```

Além das páginas funcionais:

```text
/
/a-empresa
/solucoes
/trabalhe-conosco
/contato
/bio
```

e a estrutura preparada para páginas individuais de serviço.

---

# 67. RELATÓRIO FINAL

Criar:

```text
docs/RELATORIO_FINAL.md
```

Informar:

```text
- páginas criadas;
- componentes criados;
- assets utilizados;
- URLs implementadas;
- dados que vieram das referências;
- placeholders ainda existentes;
- melhorias de SEO;
- melhorias de acessibilidade;
- melhorias de performance;
- testes realizados;
- possíveis pendências.
```

---

# 68. INSTRUÇÃO FINAL

Não me pergunte qual arquivo utilizar se a resposta puder ser descoberta analisando o projeto.

Não peça para eu reenviar imagens que já estão dentro das pastas.

Não ignore `/REFERENCIAS`.

Não comece pelo código.

Fluxo obrigatório:

```text
EXPLORAR
↓
ANALISAR
↓
DOCUMENTAR
↓
PLANEJAR
↓
CRIAR DESIGN SYSTEM
↓
IMPLEMENTAR
↓
COMPARAR COM AS REFERÊNCIAS
↓
CORRIGIR
↓
TESTAR
↓
FINALIZAR
```

Primeiro, faça agora a auditoria completa dos arquivos e das imagens existentes em:

C:\Users\soare\Downloads\ANTIGRAVITY PROJETOS & SKILLs\3dalarmes-site

com atenção especial a:

C:\Users\soare\Downloads\ANTIGRAVITY PROJETOS & SKILLs\3dalarmes-site\REFERENCIAS

Depois apresente e salve o plano de implementação.

Somente então comece a construir o novo site.
