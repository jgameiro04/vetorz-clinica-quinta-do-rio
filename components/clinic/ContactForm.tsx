"use client"; // necessário para useState (loading/success) + React Hook Form

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitContactForm } from "@/app/actions/contact";
import { type ContactFormData, contactFormSchema } from "@/lib/validations";

const assuntoOpcoes = [
  { value: "consulta-rotina", label: "Consulta de rotina" },
  { value: "informacoes-tratamento", label: "Informações sobre tratamento" },
  { value: "urgencia-dentaria", label: "Urgência dentária" },
  { value: "outro", label: "Outro assunto" },
] as const;

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setServerError(null);
    const result = await submitContactForm(data);
    if ("error" in result) {
      setServerError(result.error);
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-100 bg-teal-50 p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-600">
          <svg
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-stone-900">Mensagem enviada!</h3>
        <p className="text-stone-600">
          Obrigado pelo seu contacto. A nossa equipa responder-lhe-á com a maior brevidade possível.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-stone-700">
            Nome completo{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="nome"
            type="text"
            autoComplete="name"
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:ring-2 focus:ring-teal-500/40 ${
              errors.nome
                ? "border-red-400 bg-red-50"
                : "border-stone-300 bg-white focus:border-teal-500"
            }`}
            placeholder="Maria Silva"
            {...register("nome")}
          />
          {errors.nome && (
            <p className="mt-1 text-xs text-red-600" role="alert">
              {errors.nome.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-stone-700">
            Telefone <span className="text-stone-400 text-xs">(opcional)</span>
          </label>
          <input
            id="telefone"
            type="tel"
            autoComplete="tel"
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:ring-2 focus:ring-teal-500/40 ${
              errors.telefone
                ? "border-red-400 bg-red-50"
                : "border-stone-300 bg-white focus:border-teal-500"
            }`}
            placeholder="912 345 678"
            {...register("telefone")}
          />
          {errors.telefone && (
            <p className="mt-1 text-xs text-red-600" role="alert">
              {errors.telefone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700">
          Email{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:ring-2 focus:ring-teal-500/40 ${
            errors.email
              ? "border-red-400 bg-red-50"
              : "border-stone-300 bg-white focus:border-teal-500"
          }`}
          placeholder="maria.silva@email.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="assunto" className="mb-1.5 block text-sm font-medium text-stone-700">
          Assunto{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </label>
        <select
          id="assunto"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:ring-2 focus:ring-teal-500/40 ${
            errors.assunto
              ? "border-red-400 bg-red-50"
              : "border-stone-300 bg-white focus:border-teal-500"
          }`}
          defaultValue=""
          {...register("assunto")}
        >
          <option value="" disabled>
            Seleccione um assunto
          </option>
          {assuntoOpcoes.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
        {errors.assunto && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {errors.assunto.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-stone-700">
          Mensagem{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="mensagem"
          rows={5}
          className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:ring-2 focus:ring-teal-500/40 ${
            errors.mensagem
              ? "border-red-400 bg-red-50"
              : "border-stone-300 bg-white focus:border-teal-500"
          }`}
          placeholder="Como podemos ajudá-lo?"
          {...register("mensagem")}
        />
        {errors.mensagem && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {errors.mensagem.message}
          </p>
        )}
      </div>

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA"}
        onSuccess={(token) => setValue("turnstileToken", token)}
        options={{ language: "pt" }}
      />
      {errors.turnstileToken && (
        <p className="text-xs text-red-600" role="alert">
          {errors.turnstileToken.message}
        </p>
      )}

      {serverError && (
        <div
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              aria-hidden="true"
            />
            A enviar…
          </>
        ) : (
          "Enviar mensagem"
        )}
      </button>

      <p className="text-center text-xs text-stone-400">
        Os seus dados são tratados de acordo com o nosso{" "}
        <a href="/politica-privacidade" className="underline hover:text-stone-600">
          aviso de privacidade
        </a>
        .
      </p>
    </form>
  );
}
