import type { Metadata } from "next";
import { CtaMarcacaoSection } from "@/components/clinic/CtaMarcacaoSection";

export const metadata: Metadata = {
  title: "Convénios e Subsistemas — Clínica Quinta do Rio",
  description:
    "A Clínica Quinta do Rio trabalha com os principais subsistemas de saúde e seguradoras privadas. " +
    "Consulte a lista de convénios disponíveis em Seixal.",
};

type Convenio = {
  nome: string;
  descricao: string;
  tipo: "subsistema" | "seguradora";
  iniciais: string;
  cor: string;
};

const subsistemas: Convenio[] = [
  {
    nome: "ADSE",
    descricao: "Subsistema de saúde dos funcionários da Administração Pública",
    tipo: "subsistema",
    iniciais: "AD",
    cor: "bg-blue-600",
  },
  {
    nome: "SAMS",
    descricao: "Serviços de Assistência Médico-Social do Sector Bancário",
    tipo: "subsistema",
    iniciais: "SA",
    cor: "bg-teal-700",
  },
  {
    nome: "CGD",
    descricao: "Subsistema de saúde da Caixa Geral de Depósitos",
    tipo: "subsistema",
    iniciais: "CG",
    cor: "bg-green-700",
  },
  {
    nome: "INCM",
    descricao: "Subsistema de saúde da Imprensa Nacional — Casa da Moeda",
    tipo: "subsistema",
    iniciais: "IN",
    cor: "bg-stone-600",
  },
  {
    nome: "SNS",
    descricao: "Serviço Nacional de Saúde — acordos específicos",
    tipo: "subsistema",
    iniciais: "SN",
    cor: "bg-sky-700",
  },
];

const seguradoras: Convenio[] = [
  {
    nome: "Multicare",
    descricao: "Seguro de saúde da Fidelidade",
    tipo: "seguradora",
    iniciais: "MC",
    cor: "bg-violet-600",
  },
  {
    nome: "Médis",
    descricao: "Seguro de saúde da Ageas Portugal",
    tipo: "seguradora",
    iniciais: "MD",
    cor: "bg-orange-600",
  },
  {
    nome: "AdvanceCare",
    descricao: "Gestão de seguros de saúde empresariais",
    tipo: "seguradora",
    iniciais: "AC",
    cor: "bg-cyan-700",
  },
];

const passos = [
  {
    n: "1",
    titulo: "Informe-nos no momento da marcação",
    descricao:
      "Quando contactar a clínica para marcar a sua consulta, indique que é beneficiário de um subsistema ou seguradora.",
  },
  {
    n: "2",
    titulo: "Confirme a cobertura antes da consulta",
    descricao:
      "A nossa equipa verifica previamente as condições de cobertura do seu plano para o tratamento pretendido. Evita surpresas.",
  },
  {
    n: "3",
    titulo: "Apresente o seu cartão no dia",
    descricao:
      "Traga o cartão de beneficiário e o seu documento de identificação. Pagará apenas a diferença não coberta pelo seu plano.",
  },
];

function ConvenioCard({ convenio }: { convenio: Convenio }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${convenio.cor}`}
        aria-hidden="true"
      >
        <span className="text-sm font-bold text-white">{convenio.iniciais}</span>
      </div>
      <div>
        <h3 className="font-semibold text-stone-900">{convenio.nome}</h3>
        <p className="mt-0.5 text-sm text-stone-500">{convenio.descricao}</p>
        <span className="mt-2 inline-block rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-500">
          {convenio.tipo === "subsistema" ? "Subsistema de saúde" : "Seguradora privada"}
        </span>
      </div>
    </div>
  );
}

export default function ConveniosPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-200 bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-teal-600" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-widest text-teal-600">
              Convénios
            </span>
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl">
            Convénios e Subsistemas
          </h1>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-stone-600">
            Trabalhamos com os principais subsistemas de saúde e seguradoras privadas para que possa
            aceder aos nossos cuidados com as condições do seu plano.
          </p>
        </div>
      </section>

      {/* Aviso de confirmação */}
      <section className="border-b border-amber-100 bg-amber-50 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-amber-800">
            <strong>Nota importante:</strong> A lista abaixo é indicativa e está sujeita a
            actualização. As condições de cobertura variam consoante o plano e o tratamento. Antes
            da consulta, confirme sempre a sua cobertura connosco —{" "}
            <a
              href="tel:+351212228440"
              className="font-medium underline underline-offset-2 hover:text-amber-900"
            >
              212 228 440
            </a>{" "}
            /{" "}
            <a
              href="tel:+351929033712"
              className="font-medium underline underline-offset-2 hover:text-amber-900"
            >
              929 033 712
            </a>
            .
          </p>
        </div>
      </section>

      {/* Subsistemas de saúde */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-2xl font-semibold text-stone-900">Subsistemas de Saúde</h2>
          <p className="mb-8 text-stone-500">
            Acordos com subsistemas da função pública e sector empresarial público.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subsistemas.map((c) => (
              <ConvenioCard key={c.nome} convenio={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Seguradoras privadas */}
      <section className="border-t border-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-2xl font-semibold text-stone-900">Seguradoras Privadas</h2>
          <p className="mb-8 text-stone-500">
            Parceiros de seguros de saúde com cobertura para medicina dentária.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {seguradoras.map((c) => (
              <ConvenioCard key={c.nome} convenio={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-t border-stone-100 bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-2 text-2xl font-semibold text-stone-900">
              Como utilizar o seu convénio
            </h2>
            <p className="mb-10 text-stone-500">
              O processo é simples. A nossa equipa trata de toda a burocracia para que se concentre
              apenas na sua saúde oral.
            </p>

            <ol className="space-y-6">
              {passos.map((passo) => (
                <li key={passo.n} className="flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                    {passo.n}
                  </span>
                  <div className="pt-1">
                    <p className="font-semibold text-stone-900">{passo.titulo}</p>
                    <p className="mt-1 text-sm leading-relaxed text-stone-500">{passo.descricao}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-teal-100 bg-teal-50 p-6">
              <p className="text-sm leading-relaxed text-stone-700">
                <strong className="text-stone-900">O seu subsistema não está na lista?</strong>{" "}
                Contacte-nos antes da consulta — podemos verificar se existe cobertura para o seu
                plano específico ou apresentar-lhe as nossas condições de pagamento particulares.
              </p>
              <a
                href="mailto:geral@clinicaquintadorio.com"
                className="mt-3 inline-flex text-sm font-medium text-teal-700 transition-colors hover:text-teal-600"
              >
                geral@clinicaquintadorio.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaMarcacaoSection />
    </>
  );
}
