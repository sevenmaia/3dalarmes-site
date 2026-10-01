export interface CompanyInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  foundationYear: number;
  yearsExperience: string;
  location: string;
  headquarters: string;
  mission: string;
  vision: string;
  values: string[];
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
  differentials: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const company: CompanyInfo = {
  name: "3D ALARMES",
  tagline: "Proteção real para o que mais importa.",
  shortDescription:
    "Empresa especializada em soluções completas de segurança eletrônica, fundada em 2003, prestando serviços de qualidade e comercializando equipamentos de alta tecnologia em Manaus/AM.",
  fullDescription:
    "A 3D ALARMES é uma empresa que oferece soluções em segurança eletrônica, fundada em 2003, prestando serviços de qualidade e comercializando equipamentos. Há mais de 20 anos atuando nesse mercado, temos uma constante preocupação em manter-se atualizada frente às evoluções tecnológicas, investindo no desenvolvimento de novos produtos e serviços para oferecer e implementar as soluções adequadas a cada situação.",
  foundationYear: 2003,
  yearsExperience: "20+",
  location: "Manaus/AM",
  headquarters:
    "Av. Constantinopla, 11, Quadra 30, Sala B — Conjunto Campos Elíseos, Planalto — Manaus/AM",
  mission:
    "Prover soluções de segurança contribuindo para uma sociedade mais segura, tranquila e consciente, prestando serviços de alta qualidade e buscando sempre a satisfação de nossos clientes.",
  vision:
    "Ser a empresa referência no segmento de segurança eletrônica na região norte do Brasil.",
  values: [
    "Honestidade e transparência em nossos negócios",
    "Pontualidade e rapidez",
    "Investimento constante em tecnologia",
    "Inovação e criatividade técnica",
    "Qualidade rigorosa nos serviços prestados",
    "Atenção, respeito e dedicação personalizada aos clientes",
  ],
  metrics: [
    {
      value: "20+",
      label: "anos de experiência",
      description: "Mais de duas décadas de liderança em segurança eletrônica em Manaus.",
    },
    {
      value: "Milhares",
      label: "de clientes atendidos",
      description: "Residências, condomínios, empresas e comércios protegidos.",
    },
    {
      value: "Manaus/AM",
      label: "e toda região",
      description: "Atendimento especializado em todos os bairros e adjacências.",
    },
    {
      value: "Atendimento",
      label: "especializado",
      description: "Equipe técnica própria homologada e suporte contínuo 24 horas.",
    },
  ],
  differentials: [
    {
      title: "Monitoramento 24 horas",
      description: "Central própria em prontidão contínua com resposta ágil.",
      icon: "Clock",
    },
    {
      title: "Equipe especializada em Manaus",
      description: "Técnicos uniformizados, capacitados e homologados pela marca.",
      icon: "Users",
    },
    {
      title: "Projetos personalizados",
      description: "Dimensionamento sob medida para sua residência ou empresa.",
      icon: "ShieldCheck",
    },
    {
      title: "Instalação e suporte pós-venda",
      description: "Acompanhamento preventivo e manutenção de alto padrão.",
      icon: "Wrench",
    },
  ],
};
