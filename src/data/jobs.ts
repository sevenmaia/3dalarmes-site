export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  location: string;
  modality: string;
  contractType: string;
  shortDescription: string;
  requirements: string[];
  responsibilities: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "tecnico-instalacao",
    slug: "tecnico-de-instalacao",
    title: "Técnico de Instalação",
    location: "Manaus/AM",
    modality: "Presencial",
    contractType: "Efetivo (CLT)",
    shortDescription:
      "Instalação e manutenção preventiva e corretiva de sistemas de alarme, CFTV IP/HD e cercas elétricas.",
    requirements: [
      "Ensino médio completo ou curso técnico em Eletrônica/Eletrotécnica",
      "CNH categoria B (desejável CNH AB)",
      "Experiência com ferramentas e passagem de cabos",
      "Comprometimento com normas de segurança do trabalho (NR-10 e NR-35)",
    ],
    responsibilities: [
      "Executar instalações de câmeras, sensores e centrais em clientes residenciais e corporativos",
      "Realizar testes operacionais e orientar o cliente sobre o manuseio básico",
      "Preencher ordens de serviço e zelar pela viatura e ferramentas",
    ],
  },
  {
    id: "atendente-comercial",
    slug: "atendente-comercial",
    title: "Atendente Comercial",
    location: "Manaus/AM",
    modality: "Presencial",
    contractType: "Efetivo (CLT)",
    shortDescription:
      "Atendimento ao cliente, prospecção ativa, elaboração de propostas e fechamento de novos projetos de segurança.",
    requirements: [
      "Ensino médio completo (superior cursando em Administração ou áreas afins é um diferencial)",
      "Boa comunicação verbal e escrita",
      "Experiência prévia com vendas consultivas ou televendas",
      "Domínio do pacote Office e ferramentas de CRM",
    ],
    responsibilities: [
      "Recepcionar e qualificar leads vindos do site, WhatsApp e telefone",
      "Elaborar propostas comerciais e acompanhar o pós-venda",
      "Realizar agendamento de visitas técnicas",
    ],
  },
  {
    id: "monitoramento-24h",
    slug: "monitoramento-24h",
    title: "Monitoramento 24h",
    location: "Manaus/AM",
    modality: "Presencial",
    contractType: "Turno (Escala 12x36)",
    shortDescription:
      "Acompanhamento dos sistemas de alarme e rastreamento veicular, comunicação operacional e suporte em ocorrências.",
    requirements: [
      "Ensino médio completo",
      "Facilidade com softwares de monitoramento e informática básica",
      "Atenção concentrada, agilidade e calma para lidar com situações de alerta",
      "Disponibilidade para trabalhar em escala diurna ou noturna",
    ],
    responsibilities: [
      "Supervisionar telas da central e identificar disparos de alarme ou alertas de pânico",
      "Seguir protocolos rígidos de acionamento tático e contato com o cliente",
      "Registrar ocorrências no sistema operacional da central",
    ],
  },
  {
    id: "suporte-tecnico",
    slug: "suporte-tecnico",
    title: "Suporte Técnico",
    location: "Manaus/AM",
    modality: "Presencial",
    contractType: "Efetivo (CLT)",
    shortDescription:
      "Suporte aos clientes e manutenção preventiva de equipamentos, diagnóstico remoto de falhas e configuração de apps.",
    requirements: [
      "Formação técnica em Redes, Informática ou Eletrônica",
      "Conhecimento de redes TCP/IP, portas de roteador e configuração de DDNS",
      "Perfil resolutivo e facilidade no atendimento ao cliente",
    ],
    responsibilities: [
      "Auxiliar clientes na configuração de aplicativos móveis de CFTV e alarmes",
      "Diagnosticar problemas de conexão e agendar intervenção presencial quando necessário",
      "Realizar manutenção em laboratório de equipamentos recolhidos",
    ],
  },
];
