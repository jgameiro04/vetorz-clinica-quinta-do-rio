import { medicos } from "@/lib/clinica-data";

export function EquipaSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
            A nossa equipa
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Médicos Dentistas
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-stone-500">
            Uma equipa multidisciplinar dedicada a oferecer os melhores cuidados dentários a toda a
            família, com formação especializada em cada área.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {medicos.map((medico) => (
            <div
              key={medico.nome}
              className="group rounded-2xl border border-stone-100 p-6 text-center transition duration-200 hover:shadow-md"
            >
              {/* Avatar com iniciais — fotografia profissional a adicionar pós-produção */}
              <div
                className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105 ${medico.cor}`}
                aria-hidden="true"
              >
                <span className="text-xl font-bold text-white">{medico.iniciais}</span>
              </div>

              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-teal-500">
                {medico.especialidade}
              </p>
              <h3 className="text-base font-semibold text-stone-900">{medico.nome}</h3>
              <p className="mt-1 text-sm text-stone-500">{medico.titulo}</p>
              <p className="mt-3 text-xs text-stone-400">
                Cédula OMD: <span className="italic">[a confirmar]</span>
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-stone-400">
          Fotografias e cédulas profissionais serão actualizadas após confirmação com cada
          profissional.
        </p>
      </div>
    </section>
  );
}
