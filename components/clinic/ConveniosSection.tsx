interface Convenio {
  sigla: string;
  nome: string;
}

const convenios: Convenio[] = [
  { sigla: "ADSE", nome: "Direcção-Geral de Protecção Social" },
  { sigla: "SAMS", nome: "Serviços de Assistência Médico-Social" },
  { sigla: "CGD", nome: "Caixa Geral de Depósitos" },
  { sigla: "INCM", nome: "Imprensa Nacional Casa da Moeda" },
  { sigla: "SNS", nome: "Serviço Nacional de Saúde" },
  { sigla: "Multicare", nome: "Seguro de Saúde Fidelidade" },
];

export function ConveniosSection() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
            Protocolos e acordos
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Convénios
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-stone-500">
            Trabalhamos com os principais subsistemas de saúde e seguradoras para que o tratamento
            seja mais acessível. Consulte as condições específicas do seu subsistema.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {convenios.map((c) => (
            <div
              key={c.sigla}
              className="flex flex-col items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-5 text-center shadow-sm"
            >
              <span className="text-xl font-bold text-teal-700">{c.sigla}</span>
              <span className="mt-1 text-xs leading-tight text-stone-400">{c.nome}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-stone-400">
          * Lista de convénios indicativa, sujeita a confirmação com a clínica.
        </p>
      </div>
    </section>
  );
}
