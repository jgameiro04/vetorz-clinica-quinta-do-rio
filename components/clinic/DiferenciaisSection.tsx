import type { LucideIcon } from "lucide-react";
import { Award, CreditCard, Users } from "lucide-react";

interface Diferencial {
  icon: LucideIcon;
  destaque: string;
  titulo: string;
  descricao: string;
}

const diferenciais: Diferencial[] = [
  {
    icon: Award,
    destaque: "Desde 2008",
    titulo: "17 Anos de Experiência",
    descricao:
      "Fundada em 2008, a Clínica Quinta do Rio é uma referência em medicina dentária no Seixal. " +
      "Gerações de famílias confiam-nos o seu sorriso.",
  },
  {
    icon: Users,
    destaque: "4 especialistas",
    titulo: "Equipa Especializada",
    descricao:
      "Quatro médicos dentistas com formações complementares em implantologia, ortodontia e " +
      "medicina dentária geral, assistidos por uma equipa de apoio dedicada.",
  },
  {
    icon: CreditCard,
    destaque: "ADSE · SAMS · CGD",
    titulo: "Acordos e Seguros",
    descricao:
      "Trabalhamos com os principais subsistemas de saúde e seguradoras para facilitar o acesso " +
      "aos tratamentos. Consulte as condições do seu subsistema.",
  },
];

export function DiferenciaisSection() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
            Porquê escolher-nos
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            A diferença que sente desde a primeira consulta
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {diferenciais.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.titulo}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-100"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-teal-500">
                  {d.destaque}
                </p>
                <h3 className="mb-3 text-lg font-semibold text-stone-900">{d.titulo}</h3>
                <p className="text-sm leading-relaxed text-stone-500">{d.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
