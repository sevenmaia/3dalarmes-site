export interface TestimonialItem {
  id: string;
  name: string;
  category: string;
  location: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "Carlos Menezes",
    category: "Residência",
    location: "Manaus",
    content:
      "Atendimento excelente e instalação muito bem feita. Me sinto muito mais seguro agora.",
    rating: 5,
    avatar: "/assets/generated/home/testimonials/carlos.jpg",
  },
  {
    id: "2",
    name: "Fernanda Lima",
    category: "Condomínio",
    location: "Manaus",
    content:
      "Equipe muito profissional e atenciosa. O monitoramento 24h realmente funciona.",
    rating: 5,
    avatar: "/assets/generated/home/testimonials/fernanda.jpg",
  },
  {
    id: "3",
    name: "Ricardo Alves",
    category: "Empresa",
    location: "Manaus",
    content:
      "Instalei câmeras e alarme na minha empresa. Serviço de qualidade e suporte sempre disponível.",
    rating: 5,
    avatar: "/assets/generated/home/testimonials/ricardo.jpg",
  },
  {
    id: "4",
    name: "Mariana Souza",
    category: "Veículo",
    location: "Manaus",
    content:
      "Rastreamento veicular me deu muita tranquilidade. Recomendo!",
    rating: 5,
    avatar: "/assets/generated/home/testimonials/mariana.jpg",
  },
];
