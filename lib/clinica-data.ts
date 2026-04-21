export type Medico = {
  nome: string;
  titulo: string;
  especialidade: string;
  iniciais: string;
  cor: string;
  bio: string[];
};

export type Assistente = {
  nome: string;
  funcao: string;
  iniciais: string;
};

export type Convenio = {
  nome: string;
  resumo: string;
  descricao: string;
  tipo: "subsistema" | "seguradora";
  iniciais: string;
  cor: string;
};

export type Horario = {
  dias: string;
  horas: string;
};

export type Contacto = {
  label: string;
  value: string;
  href: string;
};

export const emailClinica = "geral@clinicaquintadorio.com";
export const telefoneClinica = {
  label: "Telefone",
  value: "212 228 440",
  href: "tel:+351212228440",
};
export const telemovelClinica = {
  label: "Telemóvel",
  value: "929 033 712",
  href: "tel:+351929033712",
};

export const medicos: Medico[] = [
  {
    nome: "Dr. Pedro Matos Silvério",
    titulo: "Médico Dentista",
    especialidade: "Medicina Dentária · Implantologia",
    iniciais: "PS",
    cor: "bg-teal-600",
    bio: [
      "O Dr. Pedro Matos Silvério é médico dentista com formação em Medicina Dentária e uma área de dedicação especial à Implantologia. A sua prática clínica centra-se na reabilitação oral de pacientes que perderam um ou mais dentes, devolvendo função e estética de forma duradoura.",
      "Com uma abordagem centrada no paciente, valoriza o tempo de consulta como momento de escuta e planeamento conjunto, garantindo que cada pessoa compreende as opções disponíveis antes de tomar qualquer decisão.",
      "Exerce funções de Director Clínico na Clínica Quinta do Rio, onde coordena a equipa médica e assegura os mais elevados padrões de qualidade e segurança no atendimento.",
    ],
  },
  {
    nome: "Dr.ª Ana Lúcia Diogo",
    titulo: "Médica Dentista",
    especialidade: "Medicina Dentária · Ortodontia",
    iniciais: "AD",
    cor: "bg-cyan-600",
    bio: [
      "A Dr.ª Ana Lúcia Diogo é médica dentista com especialização em Ortodontia e Ortopedia Facial. Trabalha com crianças, adolescentes e adultos na correcção de má oclusões e no alinhamento dentário, utilizando tanto aparelhos fixos como soluções de alinhadores transparentes.",
      "Acredita que um sorriso alinhado vai muito além da estética: é também uma questão de saúde oral, de conforto mastigatório e de bem-estar geral. Por isso, cada plano de tratamento é desenhado de forma personalizada, adaptado ao ritmo e às necessidades de cada paciente.",
      "Na Clínica Quinta do Rio, acompanha pacientes em todas as fases do tratamento ortodôntico, desde a primeira avaliação até ao período de contenção.",
    ],
  },
  {
    nome: "Dr. João Diogo",
    titulo: "Médico Dentista",
    especialidade: "Medicina Dentária",
    iniciais: "JD",
    cor: "bg-stone-600",
    bio: [
      "O Dr. João Diogo é médico dentista com uma prática clínica abrangente em Medicina Dentária geral. O seu trabalho inclui consultas de rotina, diagnóstico precoce de patologias orais, dentisteria restauradora e tratamentos de preservação da saúde periodontal.",
      "Prima por criar um ambiente de confiança com os seus pacientes, especialmente com quem tem resistência ou ansiedade face às consultas dentárias. A comunicação clara e a gestão cuidadosa do desconforto são pilares da sua forma de trabalhar.",
      "Integra a equipa da Clínica Quinta do Rio, participando no acompanhamento regular dos pacientes e assegurando continuidade nos cuidados prestados.",
    ],
  },
  {
    nome: "Dr.ª Ana Sofia Alves",
    titulo: "Médica Dentista",
    especialidade: "Medicina Dentária",
    iniciais: "AA",
    cor: "bg-teal-700",
    bio: [
      "A Dr.ª Ana Sofia Alves é médica dentista com vocação para a Medicina Dentária geral e para o acompanhamento de pacientes ao longo do tempo. O seu trabalho inclui consultas de diagnóstico, prevenção, restaurações e tratamentos de endodontia.",
      "Dá especial atenção à saúde oral infantil e ao acompanhamento de pacientes mais jovens, criando desde cedo uma relação positiva com as consultas dentárias e com os hábitos de higiene oral.",
      "Na Clínica Quinta do Rio, colabora com toda a equipa num modelo de cuidados integrado, onde cada paciente tem um acompanhamento consistente e personalizado ao longo dos anos.",
    ],
  },
];

export const assistentes: Assistente[] = [
  { nome: "Sofia", funcao: "Assistente Dentária", iniciais: "So" },
  { nome: "Rita Tavares", funcao: "Assistente Dentária", iniciais: "RT" },
  { nome: "Carla Gonçalves", funcao: "Assistente Dentária", iniciais: "CG" },
];

export const convenios: Convenio[] = [
  {
    nome: "ADSE",
    resumo: "Direcção-Geral de Protecção Social",
    descricao: "Subsistema de saúde dos funcionários da Administração Pública",
    tipo: "subsistema",
    iniciais: "AD",
    cor: "bg-blue-600",
  },
  {
    nome: "SAMS",
    resumo: "Serviços de Assistência Médico-Social",
    descricao: "Serviços de Assistência Médico-Social do Sector Bancário",
    tipo: "subsistema",
    iniciais: "SA",
    cor: "bg-teal-700",
  },
  {
    nome: "CGD",
    resumo: "Caixa Geral de Depósitos",
    descricao: "Subsistema de saúde da Caixa Geral de Depósitos",
    tipo: "subsistema",
    iniciais: "CG",
    cor: "bg-green-700",
  },
  {
    nome: "INCM",
    resumo: "Imprensa Nacional Casa da Moeda",
    descricao: "Subsistema de saúde da Imprensa Nacional — Casa da Moeda",
    tipo: "subsistema",
    iniciais: "IN",
    cor: "bg-stone-600",
  },
  {
    nome: "SNS",
    resumo: "Serviço Nacional de Saúde",
    descricao: "Serviço Nacional de Saúde — acordos específicos",
    tipo: "subsistema",
    iniciais: "SN",
    cor: "bg-sky-700",
  },
  {
    nome: "Multicare",
    resumo: "Seguro de saúde Fidelidade",
    descricao: "Seguro de saúde da Fidelidade",
    tipo: "seguradora",
    iniciais: "MC",
    cor: "bg-violet-600",
  },
  {
    nome: "Médis",
    resumo: "Seguro de saúde Ageas",
    descricao: "Seguro de saúde da Ageas Portugal",
    tipo: "seguradora",
    iniciais: "MD",
    cor: "bg-orange-600",
  },
  {
    nome: "AdvanceCare",
    resumo: "Gestão de seguros de saúde",
    descricao: "Gestão de seguros de saúde empresariais",
    tipo: "seguradora",
    iniciais: "AC",
    cor: "bg-cyan-700",
  },
];

export const subsistemas = convenios.filter((convenio) => convenio.tipo === "subsistema");

export const seguradoras = convenios.filter((convenio) => convenio.tipo === "seguradora");

export const horarios: Horario[] = [
  { dias: "Segunda — Sexta", horas: "9h–13h / 14h–19h" },
  { dias: "Sábado", horas: "9h–13h" },
  { dias: "Domingo e feriados", horas: "Encerrado" },
];

export const contactos: Contacto[] = [
  telefoneClinica,
  telemovelClinica,
  {
    label: "Email",
    value: emailClinica,
    href: `mailto:${emailClinica}`,
  },
];
