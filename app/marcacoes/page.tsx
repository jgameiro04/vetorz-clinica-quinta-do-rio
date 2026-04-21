import type { Metadata } from "next";
import { MarcacaoForm } from "@/components/clinic/MarcacaoForm";
import { emailClinica, horarios, telefoneClinica, telemovelClinica } from "@/lib/clinica-data";

export const metadata: Metadata = {
  title: "Marcar Consulta | Clínica Quinta do Rio",
  description:
    "Marque a sua consulta de medicina dentária em Seixal. Atendimento personalizado com equipa experiente.",
};

const passos = [
  {
    n: "1",
    titulo: "Preencha o formulário",
    descricao: "Indique o serviço pretendido e os seus dados de contacto.",
  },
  {
    n: "2",
    titulo: "Confirmação em 24h úteis",
    descricao: "A nossa equipa contacta-o para confirmar o dia e hora da consulta.",
  },
  {
    n: "3",
    titulo: "Compareça na clínica",
    descricao: "Dirija-se à Clínica Quinta do Rio no horário confirmado.",
  },
];

export default function MarcacoesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-200 bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-teal-600" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-widest text-teal-600">
              Marcações
            </span>
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl">
            Marque a Sua Consulta
          </h1>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-stone-600">
            Escolha o serviço e entraremos em contacto para confirmar o dia e hora que melhor lhe
            convém.
          </p>
        </div>
      </section>

      {/* Layout 2 colunas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Formulário — 60% */}
            <div className="lg:col-span-3">
              <h2 className="mb-8 text-2xl font-semibold text-stone-900">Pedido de Marcação</h2>
              <MarcacaoForm />
            </div>

            {/* Coluna direita — 40% */}
            <div className="space-y-6 lg:col-span-2">
              {/* Como funciona */}
              <div className="rounded-2xl border border-stone-200 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
                  <svg
                    className="h-6 w-6 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
                <h2 className="mb-5 text-lg font-semibold text-stone-900">Como funciona</h2>
                <ol className="space-y-5">
                  {passos.map((passo) => (
                    <li key={passo.n} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
                        {passo.n}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-stone-900">{passo.titulo}</p>
                        <p className="mt-0.5 text-sm text-stone-500">{passo.descricao}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contactos + horários */}
              <div className="rounded-2xl border border-stone-200 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-500">
                  Prefere ligar?
                </h3>
                <div className="space-y-2">
                  <a
                    href={telefoneClinica.href}
                    className="flex items-center gap-2 text-base font-medium text-teal-700 transition-colors hover:text-teal-600"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    {telefoneClinica.value}
                  </a>
                  <a
                    href={telemovelClinica.href}
                    className="flex items-center gap-2 text-base font-medium text-teal-700 transition-colors hover:text-teal-600"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    {telemovelClinica.value}
                  </a>
                  <a
                    href={`mailto:${emailClinica}`}
                    className="flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-teal-600"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    {emailClinica}
                  </a>
                </div>

                <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-stone-500">
                  Horário
                </h3>
                <ul className="space-y-1.5">
                  {horarios.map((h) => (
                    <li key={h.dias} className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="text-stone-600">{h.dias}</span>
                      <span
                        className={`font-medium ${
                          h.horas === "Encerrado" ? "text-stone-400" : "text-stone-900"
                        }`}
                      >
                        {h.horas}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
