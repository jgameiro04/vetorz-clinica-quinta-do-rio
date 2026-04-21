import type { Metadata } from "next";
import { CtaMarcacaoSection } from "@/components/clinic/CtaMarcacaoSection";
import { assistentes, emailClinica, medicos } from "@/lib/clinica-data";

export const metadata: Metadata = {
  title: "A Nossa Equipa — Clínica Quinta do Rio",
  description:
    "Conheça a equipa de médicos dentistas da Clínica Quinta do Rio em Seixal. " +
    "Especialistas em Implantologia, Ortodontia e Medicina Dentária geral.",
};

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
                className="flex flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Avatar + nome */}
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 ${medico.cor}`}
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
                    href={`mailto:${emailClinica}`}
                    className="text-sm font-medium text-teal-700 transition-colors hover:text-teal-600"
                  >
                    {emailClinica}
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
                className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white px-6 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
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
