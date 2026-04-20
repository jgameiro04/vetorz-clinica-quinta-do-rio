import { Star } from "lucide-react";

interface Testemunho {
  nome: string;
  localidade: string;
  tratamento: string;
  texto: string;
}

const testemunhos: Testemunho[] = [
  {
    nome: "Maria F.",
    localidade: "Corroios, Seixal",
    tratamento: "Implantologia",
    texto:
      "Fiz implantes na Clínica Quinta do Rio e fiquei muito satisfeita. A equipa foi sempre " +
      "muito atenciosa, explicaram tudo ao pormenor e o resultado ficou excelente.",
  },
  {
    nome: "João S.",
    localidade: "Torre da Marinha, Seixal",
    tratamento: "Medicina Dentária Familiar",
    texto:
      "Os meus filhos são pacientes desde pequenos. É uma clínica de confiança, com profissionais " +
      "dedicados e um ambiente que não assusta as crianças.",
  },
  {
    nome: "Ana R.",
    localidade: "Amora, Seixal",
    tratamento: "Ortodontia",
    texto:
      "Fiz aparelho dentário já adulta. O médico levou o tempo necessário para explicar o plano " +
      "de tratamento. O resultado ficou acima das expectativas.",
  },
];

function CincoEstelas() {
  return (
    <div className="flex gap-0.5" role="img" aria-label="Classificação: 5 estrelas">
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
    </div>
  );
}

export function TestemunhosSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
            O que dizem os nossos pacientes
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Testemunhos
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testemunhos.map((t) => (
            <figure key={t.nome} className="rounded-2xl border border-stone-100 bg-stone-50 p-6">
              <CincoEstelas />
              <blockquote className="mt-4">
                <p className="text-sm leading-relaxed text-stone-600">"{t.texto}"</p>
              </blockquote>
              <figcaption className="mt-4 border-t border-stone-200 pt-4">
                <p className="text-sm font-semibold text-stone-900">{t.nome}</p>
                <p className="text-xs text-stone-400">{t.localidade}</p>
                <p className="mt-1 text-xs font-medium text-teal-600">{t.tratamento}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-stone-400">
          Testemunhos representativos de pacientes reais. Nomes abreviados por protecção de
          privacidade (RGPD art. 5.º).
        </p>
      </div>
    </section>
  );
}
