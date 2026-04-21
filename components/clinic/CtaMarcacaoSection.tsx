import { telefoneClinica, telemovelClinica } from "@/lib/clinica-data";

export function CtaMarcacaoSection() {
  return (
    <section className="bg-gradient-to-r from-teal-800 to-teal-600 py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Pronto para cuidar do seu sorriso?
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-teal-100">
          Marque a sua consulta hoje. A nossa equipa está disponível para o receber sem longas
          esperas e com toda a atenção que merece.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/marcacoes"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-lg transition-colors duration-200 hover:bg-teal-50"
          >
            Marcar Consulta
          </a>
          <a
            href="/contactos"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10"
          >
            Falar Connosco
          </a>
        </div>

        <p className="mt-8 text-sm text-teal-200">
          <a
            href={telefoneClinica.href}
            className="font-medium text-white hover:text-teal-100 transition-colors"
          >
            {telefoneClinica.value}
          </a>
          {" · "}
          <a
            href={telemovelClinica.href}
            className="font-medium text-white hover:text-teal-100 transition-colors"
          >
            {telemovelClinica.value}
          </a>
          {" · "}
          Rua Casal do Marco 67C, Torre da Marinha, Seixal
        </p>
      </div>
    </section>
  );
}
