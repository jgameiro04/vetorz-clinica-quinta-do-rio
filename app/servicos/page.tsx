import type { Metadata } from "next";
import Link from "next/link";
import { servicos } from "@/lib/servicos-data";

export const metadata: Metadata = {
  title: "Serviços — Clínica Quinta do Rio",
  description:
    "Conheça todas as especialidades da Clínica Quinta do Rio em Seixal: Implantologia, " +
    "Ortodontia, Branqueamento, Odontopediatria e muito mais.",
};

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-200 bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-teal-600" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-widest text-teal-600">
              Serviços
            </span>
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl">
            Os Nossos Serviços
          </h1>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-stone-600">
            Cuidados dentários completos para toda a família. Desde a primeira consulta até à
            reabilitação oral avançada, a nossa equipa está preparada para o receber.
          </p>
        </div>
      </section>

      {/* Grid de serviços */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico) => {
              const { Icon } = servico;
              return (
                <Link
                  key={servico.slug}
                  href={`/servicos/${servico.slug}`}
                  className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors duration-200 group-hover:bg-teal-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mb-2 text-base font-semibold text-stone-900 group-hover:text-teal-700">
                    {servico.titulo}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-stone-500">
                    {servico.descricaoCurta}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-600">
                    Saber mais
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
