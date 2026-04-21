import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaMarcacaoSection } from "@/components/clinic/CtaMarcacaoSection";
import { getServico, servicos } from "@/lib/servicos-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servico = getServico(slug);
  if (!servico) return {};

  return {
    title: `${servico.titulo} — Clínica Quinta do Rio`,
    description: servico.descricaoCurta,
  };
}

export default async function ServicoPage({ params }: Props) {
  const { slug } = await params;
  const servico = getServico(slug);

  if (!servico) notFound();

  const { Icon } = servico;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: servico.titulo,
    description: servico.descricaoCurta,
    procedureType: servico.procedureType,
    performedBy: servico.medicoResponsavel
      ? {
          "@type": "Physician",
          name: servico.medicoResponsavel,
          worksFor: {
            "@type": "MedicalClinic",
            "@id": "https://clinicaquintadorio.com/#clinic",
          },
        }
      : undefined,
    partOfSystem: {
      "@type": "AnatomicalSystem",
      name: "Sistema estomatognático",
    },
    followup: "Consulta de controlo conforme indicação clínica",
    howPerformed: servico.emQueConsiste[0],
  };

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
            <a
              href="/servicos"
              className="text-sm font-medium text-teal-600 transition-colors hover:text-teal-700"
            >
              Serviços
            </a>
            <span className="text-stone-300" aria-hidden="true">
              /
            </span>
            <span className="text-sm text-stone-500">{servico.titulo}</span>
          </div>
          <div className="mt-6 flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              {servico.titulo}
            </h1>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
            {servico.descricaoCurta}
          </p>
          {servico.medicoResponsavel && (
            <p className="mt-3 text-sm text-stone-400">
              Responsável clínico:{" "}
              <a href="/equipa" className="font-medium text-teal-700 hover:text-teal-600">
                {servico.medicoResponsavel}
              </a>
            </p>
          )}
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-14">
            {/* O que é */}
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-stone-900">
                O que é a {servico.titulo}?
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-stone-600">
                {servico.oQueE.map((paragrafo, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: ordem fixa de parágrafos editoriais
                  <p key={i}>{paragrafo}</p>
                ))}
              </div>
            </div>

            {/* Em que consiste */}
            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-8">
              <h2 className="mb-6 text-2xl font-semibold text-stone-900">Em que consiste?</h2>
              <div className="space-y-4 text-base leading-relaxed text-stone-700">
                {servico.emQueConsiste.map((paragrafo, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: ordem fixa de parágrafos editoriais
                  <p key={i}>{paragrafo}</p>
                ))}
              </div>
            </div>

            {/* Benefícios */}
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-stone-900">Benefícios</h2>
              <ul className="space-y-3">
                {servico.beneficios.map((beneficio) => (
                  <li key={beneficio} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-600"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base text-stone-600">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quando procurar */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <h2 className="mb-6 text-2xl font-semibold text-stone-900">Quando consultar?</h2>
              <ul className="space-y-3">
                {servico.quandoProcurar.map((situacao) => (
                  <li key={situacao} className="flex items-start gap-3 text-base text-stone-600">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"
                      aria-hidden="true"
                    />
                    {situacao}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-stone-400">
                Em caso de dúvida, a consulta de avaliação é sempre o primeiro passo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaMarcacaoSection />
    </>
  );
}
