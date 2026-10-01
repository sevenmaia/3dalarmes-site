export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  badge?: string;
  benefits: string[];
  features: string[];
  targetAudience: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: ServiceItem[] = [
  {
    id: "cftv",
    slug: "cftv",
    title: "CFTV",
    subtitle: "Circuito Fechado de Televisão em Alta Definição",
    shortDescription:
      "Câmeras de alta definição com monitoramento remoto via aplicativo. Mais controle e segurança para o seu dia a dia.",
    fullDescription:
      "Sistemas completos de CFTV com tecnologia IP e analógica HD, gravação inteligente em nuvem ou local, visão noturna avançada e acesso em tempo real pelo smartphone. Projetado para residências, comércios e indústrias em Manaus.",
    iconName: "Camera",
    image: "/images/services/cftv.png",
    benefits: [
      "Visualização ao vivo e gravação contínua em Full HD e 4K",
      "Visão noturna com infravermelho de longo alcance e tecnologia colorida à noite",
      "Acesso simultâneo via aplicativo no celular, tablet e computador",
      "Detecção inteligente de movimento com alertas instantâneos",
    ],
    features: [
      "Câmeras bullet e dome blindadas contra intempéries (IP67)",
      "Gravadores NVR/DVR com backup seguro e redundância",
      "Cabeamento estruturado e fontes de alimentação protegidas",
      "Integração direta com a Central de Monitoramento 24h",
    ],
    targetAudience: [
      "Residências e condomínios que buscam controle de acessos",
      "Empresas e lojas para auditoria e prevenção de perdas",
      "Galpões e indústrias com grandes perímetros",
    ],
    faqs: [
      {
        question: "Consigo ver as câmeras no meu celular fora de casa?",
        answer:
          "Sim! Nosso aplicativo permite visualização ao vivo e reprodução de gravações em qualquer lugar com internet.",
      },
      {
        question: "As câmeras continuam gravando se faltar energia?",
        answer:
          "Com nossos sistemas de nobreaks dedicados, a gravação continua operando mesmo durante oscilações ou quedas de energia na rede pública.",
      },
    ],
  },
  {
    id: "alarmes",
    slug: "alarmes",
    title: "Sistemas de Alarme de Intrusão",
    subtitle: "Proteção Perimetral e Detecção Imediata",
    shortDescription:
      "Proteção contra invasões com sensores de alta precisão e central de alarme conectada 24 horas por dia.",
    fullDescription:
      "Soluções completas de alarmes com sensores de abertura, presença com função pet immune, barreiras infravermelhas e sirenes de alta potência interligadas à central 24h da 3D Alarmes.",
    iconName: "ShieldAlert",
    image: "/images/services/alarmes.png",
    benefits: [
      "Detecção imediata antes mesmo da violação interna do imóvel",
      "Sensores inteligentes imunes a animais domésticos",
      "Acionamento silencioso de emergência (botão de pânico)",
      "Arme e desarme remoto diretamente pelo celular",
    ],
    features: [
      "Centrais com comunicação via Wi-Fi, Ethernet e GPRS 4G redundante",
      "Baterias seladas de longa duração contra falta de luz",
      "Sensores com e sem fio de máxima confiabilidade",
      "Sinalização imediata para a viatura de apoio tático",
    ],
    targetAudience: [
      "Casas e apartamentos em condomínios fechados ou rua aberta",
      "Escritórios, consultórios e estabelecimentos comerciais",
      "Indústrias do Polo Industrial de Manaus",
    ],
    faqs: [
      {
        question: "O alarme dispara se meu cachorro ou gato passar pelo sensor?",
        answer:
          "Não. Utilizamos sensores com tecnologia Pet Immune calibrados para desconsiderar a presença de animais de estimação.",
      },
      {
        question: "O que acontece quando o alarme dispara?",
        answer:
          "A Central de Monitoramento 24h da 3D Alarmes recebe o evento instantaneamente, verifica a ocorrência e adota os protocolos de segurança e acionamento imediato.",
      },
    ],
  },
  {
    id: "cercas-eletricas",
    slug: "cercas-eletricas",
    title: "Cercas Elétricas e Concertinas",
    subtitle: "Barreira Física e Eletrônica de Alta Voltagem",
    shortDescription:
      "Mais segurança e proteção para seu imóvel com pulsos elétricos inibidores e lâminas perimetrais de aço.",
    fullDescription:
      "Instalação profissional de cercas elétricas homologadas pelo Inmetro com choque pulsativo de alta voltagem e baixa amperagem (não letal), combinadas a concertinas helicoidais em aço galvanizado para proteção máxima de muros.",
    iconName: "Zap",
    image: "/images/services/cercas-eletricas.png",
    benefits: [
      "Poderoso efeito inibidor visual e barreira física intransponível",
      "Disparo automático de sirene caso o fio seja rompido ou aterrado",
      "Em conformidade com todas as normas técnicas de segurança e legislação",
      "Hastes de alumínio e arames inoxidáveis resistentes ao clima de Manaus",
    ],
    features: [
      "Eletrificadores certificados com monitoramento de corte e curto",
      "Aterramento independente para máxima eficiência do pulso",
      "Placas de advertência regulamentares de alta visibilidade",
      "Interligação direta com a central de alarme e monitoramento",
    ],
    targetAudience: [
      "Residências com muros perimetrais expostos",
      "Condomínios horizontais e condomínios de galpões",
      "Sedes corporativas e estacionamentos comerciais",
    ],
    faqs: [
      {
        question: "A cerca elétrica pode machucar gravemente alguém?",
        answer:
          "O choque emitido pelas nossas centrais é de alta voltagem pulsativa, mas baixíssima corrente (amperagem), sendo inibidor e seguro conforme as normas da ABNT/Inmetro.",
      },
      {
        question: "O arame enferruja facilmente com a umidade de Manaus?",
        answer:
          "Utilizamos fios de aço inoxidável ou ligas resistentes à corrosão e hastes reforçadas, projetadas para resistir às chuvas e umidade da região amazônica.",
      },
    ],
  },
  {
    id: "rastreamento-veicular",
    slug: "rastreamento-veicular",
    title: "Rastreamento de Veículos",
    subtitle: "Telemetria e Localização em Tempo Real",
    shortDescription:
      "Acompanhe seu veículo em tempo real e tenha mais tranquilidade para você, sua família ou sua frota comercial.",
    fullDescription:
      "Módulos GPS de última geração com transmissão 4G para carros de passeio, motocicletas, frotas corporativas, caminhões e máquinas agrícolas. Histórico de rotas, alertas de cerca virtual e bloqueio remoto em caso de roubo ou furto.",
    iconName: "Car",
    image: "/images/services/rastreamento-veicular.png",
    benefits: [
      "Localização exata via satélite e mapa urbano atualizado",
      "Bloqueio preventivo e corte de ignição em emergências",
      "Notificação instantânea de ignição ligada, excesso de velocidade e saída de rota",
      "Redução comprovada no valor do seguro do veículo",
    ],
    features: [
      "Equipamento instalado de forma oculta e inviolável por técnicos próprios",
      "Aplicativo exclusivo para Android e iOS intuitivo",
      "Plataforma web com relatórios de telemetria e quilometragem rodada",
      "Suporte e assistência 24 horas por dia",
    ],
    targetAudience: [
      "Proprietários de veículos particulares e motociclistas",
      "Empresas de logística, distribuidoras e prestadores de serviço",
      "Frotas corporativas que buscam gestão de combustível e rotas",
    ],
    faqs: [
      {
        question: "Consigo bloquear o veículo pelo celular se ele for roubado?",
        answer:
          "Sim! O aplicativo oferece comando seguro de bloqueio e nossa central 24h também pode atuar no rastreamento imediato e suporte policial.",
      },
      {
        question: "A instalação descarrega a bateria do meu carro ou moto?",
        answer:
          "Não. Nossos rastreadores contam com modo de repouso inteligente (Sleep Mode) e bateria reserva, consumindo energia quase zero com o veículo desligado.",
      },
    ],
  },
  {
    id: "controle-de-acesso",
    slug: "controle-de-acesso",
    title: "Controle de Acesso",
    subtitle: "Gestão Inteligente de Entradas e Saídas",
    shortDescription:
      "Soluções para controle de entrada e saída de pessoas e veículos em condomínios, empresas e indústrias.",
    fullDescription:
      "Sistemas integrados de catracas eletrônicas, biometria digital, reconhecimento facial ultrarrápido, tags veiculares RFID e fechaduras eletromagnéticas para garantir que apenas pessoas autorizadas acessem seu ambiente.",
    iconName: "Lock",
    image: "/images/services/controle-acesso.png",
    benefits: [
      "Eliminação de chaves físicas e vulnerabilidades mecânicas",
      "Registro detalhado de horários de entrada e saída de colaboradores e visitantes",
      "Reconhecimento facial seguro sem contato físico",
      "Controle de portões veiculares com abertura rápida por tag",
    ],
    features: [
      "Leitores biométricos e faciais antivandalismo",
      "Software de gerenciamento em nuvem com relatórios instantâneos",
      "Fechaduras digitais, eletroímãs e molas hidráulicas de alto ciclo",
      "Interfonia IP com chamada em vídeo no aplicativo",
    ],
    targetAudience: [
      "Condomínios residenciais e empresariais",
      "Escritórios, consultórios, academias e escolas",
      "Fábricas e depósitos de grande circulação",
    ],
    faqs: [
      {
        question: "O reconhecimento facial funciona no escuro?",
        answer:
          "Sim. Nossos leitores faciais utilizam luz infravermelha adaptativa e câmeras duplas que realizam o reconhecimento instantâneo mesmo com pouca ou nenhuma luz.",
      },
    ],
  },
  {
    id: "monitoramento-24h",
    slug: "monitoramento-24h",
    title: "Monitoramento 24 Horas",
    subtitle: "Prontidão Operacional Contínua em Manaus",
    shortDescription:
      "Central de monitoramento própria com equipe especializada, pronta para agir com apoio operacional em qualquer situação.",
    fullDescription:
      "Nossa central funciona 24 horas por dia, 7 dias por semana, 365 dias ao ano em Manaus. Operadores altamente treinados supervisionam sinais de alarmes, rondas virtuais em CFTV e suporte presencial tático com viaturas operacionais.",
    iconName: "MonitorCheck",
    image: "/images/services/monitoramento-24h.png",
    benefits: [
      "Resposta operacional veloz para disparos de alarme ou pânico",
      "Ronda virtual preventiva de câmeras em horários estratégicos",
      "Comunicação direta com as autoridades e forças policiais",
      "Tranquilidade total para quando você estiver viajando ou dormindo",
    ],
    features: [
      "Infraestrutura de ponta com servidores redundantes e gerador próprio de energia",
      "Linhas telefônicas e conexões de internet duplicadas",
      "Gravação auditável de todos os eventos e ligações",
      "Frota própria de veículos de apoio para inspeção local",
    ],
    targetAudience: [
      "Proprietários de imóveis residenciais de Manaus",
      "Empresas de todos os portes e centros de distribuição",
      "Instituições financeiras, cooperativas e condomínios",
    ],
    faqs: [
      {
        question: "Como a central age se houver disparo de alarme?",
        answer:
          "A central recebe o sinal instantaneamente, faz a verificação por imagens de CFTV ou contato de segurança, e despacha a viatura de apoio tático para checagem presencial.",
      },
    ],
  },
];

export const additionalSolutions = [
  {
    id: "solucoes-residenciais",
    slug: "solucoes-residenciais",
    title: "Soluções para Residências",
    subtitle: "Proteção Integral para sua Família",
    shortDescription:
      "Proteja sua casa e sua família com soluções completas e personalizadas: alarme perimetral, CFTV com áudio e cerca elétrica.",
    image: "/images/services/solucoes-residenciais.png",
    iconName: "Home",
  },
  {
    id: "solucoes-empresariais",
    slug: "solucoes-empresariais",
    title: "Soluções para Empresas e Condomínios",
    subtitle: "Segurança Corporativa e Controle de Perímetros",
    shortDescription:
      "Projetos personalizados para diferentes segmentos corporativos, com instalação profissional e suporte contínuo da 3D Alarmes.",
    image: "/images/services/solucoes-empresariais.png",
    iconName: "Building2",
  },
];
