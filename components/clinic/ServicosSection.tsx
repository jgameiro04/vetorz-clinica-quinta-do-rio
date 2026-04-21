import type { LucideIcon } from "lucide-react";
import { AlignCenter, Baby, CircleDot, ShieldCheck, Sparkles, Zap } from "lucide-react";

interface Servico {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
}

const servicos: Servico[] = [
  {
    icon: CircleDot,
    titulo: "Implantologia",
    descricao:
      "Reabilitação oral com implantes de titânio de alta qualidade para repor dentes perdidos com estética e função.",
  },
  {
    icon: Zap,
    titulo: "Dentes Fixos no Próprio Dia",
    descricao:
      "Solução rápida e definitiva para múltiplos dentes em falta, recupere o seu sorriso numa única sessão.",
  },
  {
    icon: AlignCenter,
    titulo: "Ortodontia",
    descricao:
      "Aparelhos dentários fixos e amovíveis para crianças, adolescentes e adultos, com resultados duradouros.",
  },
  {
    icon: Sparkles,
    titulo: "Branqueamento Dentário",
    descricao:
      "Tratamentos profissionais supervisionados por médico dentista para um sorriso mais luminoso e natural.",
  },
  {
    icon: Baby,
    titulo: "Odontopediatria",
    descricao:
      "Cuidados dentários especializados para crianças, num ambiente acolhedor pensado para os mais novos.",
  },
  {
    icon: ShieldCheck,
    titulo: "Periodontologia",
    descricao:
      "Prevenção e tratamento de doenças das gengivas para garantir uma saúde oral completa e duradoura.",
  },
];

export function ServicosSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da secção */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
            O que oferecemos
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Especialidades
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-stone-500">
            Tratamentos completos de medicina dentária para toda a família, com equipamento moderno
            e uma equipa com mais de 17 anos de experiência.
          </p>
        </div>

        {/* Grelha de especialidades */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => {
            const Icon = servico.icon;
            return (
              <div
                key={servico.titulo}
                className="group rounded-2xl border border-stone-100 bg-stone-50 p-6 transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 transition-colors duration-200 group-hover:bg-teal-600 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-stone-900">{servico.titulo}</h3>
                <p className="text-sm leading-relaxed text-stone-500">{servico.descricao}</p>
              </div>
            );
          })}
        </div>

        {/* Link para todas as especialidades */}
        <div className="mt-10 text-center">
          <a
            href="/servicos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 transition-colors hover:text-teal-700"
          >
            Ver todas as especialidades
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
