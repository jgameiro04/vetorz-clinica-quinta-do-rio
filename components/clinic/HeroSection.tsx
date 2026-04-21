export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-teal-500 text-white">
      {/* Círculos decorativos de fundo */}
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-teal-300" aria-hidden="true" />
            17 anos a cuidar do seu sorriso
          </div>

          {/* Headline principal */}
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            O seu sorriso,
            <br />
            <span className="text-teal-200">o nosso compromisso</span>
          </h1>

          {/* Subtítulo */}
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-teal-100">
            Clínica dentária multidisciplinar em Torre da Marinha, Seixal. Tratamentos modernos,
            equipa especializada e atendimento personalizado para toda a família.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/marcacoes"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-lg transition-colors duration-200 hover:bg-teal-50"
            >
              Marcar Consulta
            </a>
            <a
              href="/servicos"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 grid max-w-sm grid-cols-3 gap-8">
          <div>
            <p className="text-3xl font-bold text-white">17+</p>
            <p className="mt-1 text-sm text-teal-200">Anos de experiência</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">11</p>
            <p className="mt-1 text-sm text-teal-200">Especialidades</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">4</p>
            <p className="mt-1 text-sm text-teal-200">Médicos dentistas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
