export interface ContactInfo {
  address: {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode?: string;
    fullFormatted: string;
  };
  phones: {
    primary: string;
    primaryClean: string;
    secondary: string;
    secondaryClean: string;
  };
  whatsapp: {
    sales: {
      number: string;
      clean: string;
      label: string;
      defaultMessage: string;
    };
    monitoring24h: {
      number: string;
      clean: string;
      label: string;
      defaultMessage: string;
    };
    trackingSupport: {
      number: string;
      clean: string;
      label: string;
      defaultMessage: string;
    };
  };
  email: {
    primary: string;
    sales: string;
    careers: string;
  };
  portals: {
    customerArea: string;
    trackingArea: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export const contact: ContactInfo = {
  address: {
    street: "Av. Constantinopla",
    number: "11",
    complement: "Quadra 30, Sala B — Conjunto Campos Elíseos",
    neighborhood: "Planalto",
    city: "Manaus",
    state: "AM",
    fullFormatted:
      "Av. Constantinopla, 11, Quadra 30, Sala B — Conjunto Campos Elíseos, Planalto — Manaus/AM",
  },
  phones: {
    primary: "(92) 3236-6336",
    primaryClean: "9232366336",
    secondary: "(92) 3304-4206",
    secondaryClean: "9233044206",
  },
  whatsapp: {
    sales: {
      number: "(92) 3236-6336",
      clean: "559232366336",
      label: "Orçamentos e Comercial",
      defaultMessage:
        "Olá! Gostaria de solicitar um orçamento de segurança eletrônica com a 3D ALARMES.",
    },
    monitoring24h: {
      number: "(92) 3236-6336",
      clean: "559232366336",
      label: "Central de Monitoramento 24h",
      defaultMessage:
        "Olá! Preciso de atendimento da Central de Monitoramento 24 Horas da 3D ALARMES.",
    },
    trackingSupport: {
      number: "(92) 3236-6336",
      clean: "559232366336",
      label: "Suporte Rastreamento Veicular",
      defaultMessage:
        "Olá! Gostaria de suporte técnico para o meu rastreador veicular 3D ALARMES.",
    },
  },
  email: {
    primary: "faleconosco@3dalarmes.com.br",
    sales: "comercial@3dalarmes.com.br",
    careers: "rh@3dalarmes.com.br",
  },
  portals: {
    customerArea: "https://www.3dalarmes.com.br/area-do-cliente",
    trackingArea: "https://www.3dalarmes.com.br/rastreamento",
  },
  social: {
    instagram: "https://www.instagram.com/3dalarmes",
    facebook: "https://www.facebook.com/3dalarmes",
    youtube: "https://www.youtube.com/@3dalarmes",
  },
};
