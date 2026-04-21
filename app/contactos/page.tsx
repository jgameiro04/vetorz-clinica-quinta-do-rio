import type { Metadata } from "next";
import { ContactForm } from "@/components/clinic/ContactForm";

export const metadata: Metadata = {
  title: "Contactos — Clínica Quinta do Rio",
  description:
    "Entre em contacto com a Clínica Quinta do Rio. Estamos em Torre da Marinha, Seixal. " +
    "Ligue para 212 228 440 ou envie-nos uma mensagem.",
};

const horarios = [
  { dias: "Segunda — Sexta", horas: "9h–13h / 14h–19h" },
  { dias: "Sábado", horas: "9h–13h" },
  { dias: "Domingo e feriados", horas: "Encerrado" },
];

const contactos = [
  {
    label: "Telefone",
    value: "212 228 440",
    href: "tel:+351212228440",
  },
  {
    label: "Telemóvel",
    value: "929 033 712",
    href: "tel:+351929033712",
  },
  {
    label: "Email",
    value: "geral@clinicaquintadorio.com",
    href: "mailto:geral@clinicaquintadorio.com",
  },
];

export default function ContactosPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-200 bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-teal-600" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-widest text-teal-600">
              Contactos
            </span>
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl">
            Entre em Contacto
          </h1>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-stone-600">
            A nossa equipa está disponível para responder às suas questões e ajudá-lo a marcar a sua
            consulta.
          </p>
        </div>
      </section>

      {/* Layout 2 colunas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Formulário — 60% */}
            <div className="lg:col-span-3">
              <h2 className="mb-8 text-2xl font-semibold text-stone-900">Envie-nos uma mensagem</h2>
              <ContactForm />
            </div>

            {/* Informações — 40% */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-semibold text-stone-900">Onde nos encontrar</h2>

              {/* Google Maps embed */}
              <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
                <iframe
                  loading="lazy"
                  title="Localização da Clínica Quinta do Rio no Google Maps"
                  src="https://maps.google.com/maps?q=Rua+Casal+do+Marco+67C+Torre+da+Marinha+Seixal&output=embed"
                  className="h-56 w-full"
                  aria-label="Mapa com a localização da clínica"
                />
              </div>

              {/* Morada */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-500">
                  Morada
                </h3>
                <address className="not-italic text-stone-700">
                  <p className="font-medium text-stone-900">Clínica Quinta do Rio</p>
                  <p>Rua Casal do Marco 67C, Torre da Marinha</p>
                  <p>2840-731 Seixal</p>
                </address>

                {/* Contactos */}
                <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-stone-500">
                  Contactos
                </h3>
                <ul className="space-y-2">
                  {contactos.map((c) => (
                    <li key={c.label} className="flex items-baseline gap-2 text-sm">
                      <span className="w-20 shrink-0 text-stone-400">{c.label}</span>
                      <a
                        href={c.href}
                        className="font-medium text-teal-700 transition-colors hover:text-teal-600"
                      >
                        {c.value}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Horários */}
                <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-stone-500">
                  Horário{" "}
                  <span className="text-xs font-normal normal-case text-stone-400">
                    (a confirmar)
                  </span>
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
