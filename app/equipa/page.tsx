import type { Metadata } from "next";
import { CtaMarcacaoSection } from "@/components/clinic/CtaMarcacaoSection";

export const metadata: Metadata = {
  title: "A Nossa Equipa — Clínica Quinta do Rio",
  description:
    "Conheça a equipa de médicos dentistas da Clínica Quinta do Rio em Seixal. " +
    "Especialistas em Implantologia, Ortodontia e Medicina Dentária geral.",
};

type Medico = {
  nome: string;
  titulo: string;
  especialidade: string;
  iniciais: string;
  cor: string;
  bio: string[];
};

type Assistente = {
  nome: string;
  funcao: string;
  iniciais: string;
};

const medicos: Medico[] = [
  {
    nome: "Dr. Pedro Matos Silvério",
    titulo: "Dr.",
    especialidade: "Medicina Dentária · Implantologia",
    iniciais: "PS",
    cor: "bg-teal-600",
    /* Bio genérica — validar com profissional */
    bio: [
      "O Dr. Pedro Matos Silvério é médico dentista com formação em Medicina Dentária e uma área de dedicação especial à Implantologia. A sua prática clínica centra-se na reabilitação oral de pacientes que perderam um ou mais dentes, devolvendo função e estética de forma duradoura.",
      "Com uma abordagem centrada no paciente, valoriza o tempo de consulta como momento de escuta e planeamento conjunto, garantindo que cada pessoa compreende as opções disponíveis antes de tomar qualquer decisão.",
      "Exerce funções de Director Clínico na Clínica Quinta do Rio, onde coordena a equipa médica e assegura os mais elevados padrões de qualidade e segurança no atendimento.",
    ],
  },
  {
    nome: "Dr.ª Ana Lúcia Diogo",
    titulo: "Dr.ª",
    especialidade: "Medicina Dentária · Ortodontia",
    iniciais: "AD",
    cor: "bg-cyan-600",
    /* Bio genérica — validar com profissional */
    bio: [
      "A Dr.ª Ana Lúcia Diogo é médica dentista com especialização em Ortodontia e Ortopedia Facial. Trabalha com crianças, adolescentes e adultos na correcção de má oclusões e no alinhamento dentário, utilizando tanto aparelhos fixos como soluções de alinhadores transparentes.",
      "Acredita que um sorriso alinhado vai muito além da estética: é também uma questão de saúde oral, de conforto mastigatório e de bem-estar geral. Por isso, cada plano de tratamento é desenhado de forma personalizada, adaptado ao ritmo e às necessidades de cada paciente.",
      "Na Clínica Quinta do Rio, acompanha pacientes em todas as fases do tratamento ortodôntico, desde a primeira avaliação até ao período de contenção.",
    ],
  },
  {
    nome: "Dr. João Diogo",
    titulo: "Dr.",
    especialidade: "Medicina Dentária",
    iniciais: "JD",
    cor: "bg-stone-600",
    /* Bio genérica — validar com profissional */
    bio: [
      "O Dr. João Diogo é médico dentista com uma prática clínica abrangente em Medicina Dentária geral. O seu trabalho inclui consultas de rotina, diagnóstico precoce de patologias orais, dentisteria restauradora e tratamentos de preservação da saúde periodontal.",
      "Prima por criar um ambiente de confiança com os seus pacientes, especialmente com quem tem resistência ou ansiedade face às consultas dentárias. A comunicação clara e a gestão cuidadosa do desconforto são pilares da sua forma de trabalhar.",
      "Integra a equipa da Clínica Quinta do Rio, participando no acompanhamento regular dos pacientes e assegurando continuidade nos cuidados prestados.",
    ],
  },
  {
    nome: "Dr.ª Ana Sofia Alves",
    titulo: "Dr.ª",
    especialidade: "Medicina Dentária",
    iniciais: "AA",
    cor: "bg-teal-700",
    /* Bio genérica — validar com profissional */
    bio: [
      "A Dr.ª Ana Sofia Alves é médica dentista com vocação para a Medicina Dentária geral e para o acompanhamento de pacientes ao longo do tempo. O seu trabalho inclui consultas de diagnóstico, prevenção, restaurações e tratamentos de endodontia.",
      "Dá especial atenção à saúde oral infantil e ao acompanhamento de pacientes mais jovens, criando desde cedo uma relação positiva com as consultas dentárias e com os hábitos de higiene oral.",
      "Na Clínica Quinta do Rio, colabora com toda a equipa num modelo de cuidados integrado, onde cada paciente tem um acompanhamento consistente e personalizado ao longo dos anos.",
    ],
  },
];

const assistentes: Assistente[] = [
  { nome: "Sofia", funcao: "Assistente Dentária", iniciais: "So" },
  { nome: "Rita Tavares", funcao: "Assistente Dentária", iniciais: "RT" },
  { nome: "Carla Gonçalves", funcao: "Assistente Dentária", iniciais: "CG" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": medicos.map((m) => ({
    "@type": "Physician",
    name: m.nome,
    jobTitle: "Médico Dentista",
    worksFor: {
      "@type": "MedicalClinic",
      "@id": "https://clinicaquintadorio.com/#clinic",
      name: "Clínica Quinta do Rio",
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Cédula OMD",
      value: "a confirmar",
    },
    medicalSpecialty: "Dentistry",
  })),
};

export default function EquipaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-stone-200 bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-teal-600" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-widest text-teal-600">
              Equipa
            </span>
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl">
            A Nossa Equipa
          </h1>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-stone-600">
            Profissionais experientes ao seu serviço. Conheça quem cuida do seu sorriso na Clínica
            Quinta do Rio.
          </p>
        </div>
      </section>

      {/* Médicos Dentistas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-semibold text-stone-900">Médicos Dentistas</h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {medicos.map((medico) => (
              <article
                key={medico.nome}
                className="flex flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
              >
                {/* Avatar + nome */}
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${medico.cor}`}
                    aria-hidden="true"
                  >
                    <span className="text-lg font-bold text-white">{medico.iniciais}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900">{medico.nome}</h3>
                    <p className="mt-0.5 text-sm text-teal-700">{medico.especialidade}</p>
                    <p className="mt-1 text-xs text-stone-400">
                      Cédula OMD: <span className="italic">[a confirmar]</span>
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-6 space-y-3 text-sm leading-relaxed text-stone-600">
                  {/* Bio genérica — validar com profissional */}
                  {medico.bio.map((paragrafo, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: ordem fixa, sem reordenação
                    <p key={i}>{paragrafo}</p>
                  ))}
                </div>

                {/* Contacto */}
                <div className="mt-6 border-t border-stone-100 pt-5">
                  <a
                    href="mailto:geral@clinicaquintadorio.com"
                    className="text-sm font-medium text-teal-700 transition-colors hover:text-teal-600"
                  >
                    geral@clinicaquintadorio.com
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Equipa de Apoio */}
      <section className="border-t border-stone-100 bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-semibold text-stone-900">Equipa de Apoio</h2>
          <p className="mb-10 max-w-xl text-stone-600">
            A nossa equipa de assistentes dentárias garante que cada visita decorre com conforto,
            pontualidade e todo o apoio necessário.
          </p>

          <div className="grid gap-5 sm:grid-cols-3">
            {assistentes.map((a) => (
              <div
                key={a.nome}
                className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white px-6 py-5"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-stone-200"
                  aria-hidden="true"
                >
                  <span className="text-sm font-semibold text-stone-600">{a.iniciais}</span>
                </div>
                <div>
                  <p className="font-medium text-stone-900">{a.nome}</p>
                  <p className="text-sm text-stone-500">{a.funcao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaMarcacaoSection />
    </>
  );
}
