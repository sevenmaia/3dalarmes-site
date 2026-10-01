export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "A Empresa", href: "/a-empresa" },
  { label: "Soluções para Você", href: "/solucoes" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { label: "Contatos", href: "/contato" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "CFTV", href: "/solucoes/cftv" },
  { label: "Alarmes de Intrusão", href: "/solucoes/alarmes" },
  { label: "Cercas Elétricas", href: "/solucoes/cercas-eletricas" },
  { label: "Rastreamento de Veículos", href: "/solucoes/rastreamento-veicular" },
  { label: "Controle de Acesso", href: "/solucoes/controle-de-acesso" },
  { label: "Monitoramento 24 horas", href: "/solucoes/monitoramento-24h" },
];

export const bioLinks = [
  {
    title: "Site Oficial",
    subtitle: "Conheça nossas soluções completas",
    href: "/",
    isHighlighted: true,
    icon: "Globe",
  },
  {
    title: "Para Orçamentos comerciais e rastreamento veicular",
    subtitle: "Fale com nossos consultores",
    href: "https://wa.me/559232366336?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20comercial%20ou%20rastreamento%20veicular.",
    isHighlighted: false,
    icon: "FileText",
  },
  {
    title: "Para suporte técnico do setor de monitoramento",
    subtitle: "Atendimento técnico especializado",
    href: "https://wa.me/559232366336?text=Ol%C3%A1!%20Preciso%20de%20suporte%20t%C3%A9cnico%20do%20setor%20de%20monitoramento.",
    isHighlighted: false,
    icon: "Headphones",
  },
  {
    title: "Para suporte técnico do setor de rastreamento veicular",
    subtitle: "Suporte e telemetria de veículos",
    href: "https://wa.me/559232366336?text=Ol%C3%A1!%20Preciso%20de%20suporte%20t%C3%A9cnico%20de%20rastreamento%20veicular.",
    isHighlighted: false,
    icon: "Car",
  },
  {
    title: "Whatsapp Central de Monitoramento 24 h",
    subtitle: "Prontidão operacional contínua",
    href: "https://wa.me/559232366336?text=Ol%C3%A1!%20Contato%20de%20urg%C3%AAncia%20com%20a%20Central%20de%20Monitoramento%2024h.",
    isHighlighted: false,
    isWhatsapp: true,
    icon: "MessageCircle",
  },
  {
    title: "Portal do Cliente",
    subtitle: "Acesse boletos, relatórios e eventos",
    href: "https://www.3dalarmes.com.br/area-do-cliente",
    isHighlighted: false,
    icon: "User",
  },
  {
    title: "Portal de Acesso Rastreamento",
    subtitle: "Localize sua frota ou veículo no mapa",
    href: "https://www.3dalarmes.com.br/rastreamento",
    isHighlighted: false,
    icon: "MapPin",
  },
  {
    title: "Trabalhe conosco",
    subtitle: "Cadastre seu currículo em nosso time",
    href: "/trabalhe-conosco",
    isHighlighted: false,
    icon: "Users",
  },
  {
    title: "Facebook",
    subtitle: "Siga nossa página oficial",
    href: "https://www.facebook.com/3dalarmes",
    isHighlighted: false,
    icon: "Facebook",
  },
  {
    title: "Instagram",
    subtitle: "Novidades, dicas de segurança e bastidores",
    href: "https://www.instagram.com/3dalarmes",
    isHighlighted: false,
    icon: "Instagram",
  },
];
