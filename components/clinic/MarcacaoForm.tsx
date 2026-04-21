"use client"; // necessário para useState, useEffect (min date) + React Hook Form

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { submitMarcacaoForm } from "@/app/actions/marcacao";
import { type MarcacaoFormData, marcacaoFormSchema } from "@/lib/validations";

const servicoOpcoes = [
  { value: "implantologia", label: "Implantologia" },
  { value: "dentes-fixos", label: "Dentes Fixos no Próprio Dia" },
  { value: "ortodontia", label: "Ortodontia e Ortopedia Facial" },
  { value: "protese", label: "Prótese Fixa / Removível" },
  { value: "branqueamento", label: "Branqueamento Dentário" },
  { value: "odontopediatria", label: "Odontopediatria" },
  { value: "periodontologia", label: "Periodontologia" },
  { value: "cirurgia-oral", label: "Cirurgia Oral" },
  { value: "endodontia", label: "Endodontia" },
  { value: "dentisteria", label: "Dentisteria" },
  { value: "facetas", label: "Facetas Dentárias" },
] as const;

const periodoOpcoes = [
  { value: "manha", label: "Manhã (9h–13h)" },
  { value: "tarde", label: "Tarde (14h–19h)" },
  { value: "indiferente", label: "Indiferente" },
] as const;

const inputBase =
  "w-full rounded-lg border px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:ring-2 focus:ring-teal-500/40";
const inputOk = "border-stone-300 bg-white focus:border-teal-500";
const inputErr = "border-red-400 bg-red-50";

export function MarcacaoForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [minDate, setMinDate] = useState("");

  // Calculado client-side para evitar hydration mismatch
  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<MarcacaoFormData>({
    resolver: zodResolver(marcacaoFormSchema),
    defaultValues: { periodoPreferido: "indiferente" },
  });

  const periodoActual = watch("periodoPreferido");

  async function onSubmit(data: MarcacaoFormData) {
    setServerError(null);
    const result = await submitMarcacaoForm(data);
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
        <h3 className="mb-2 text-xl font-semibold text-stone-900">Pedido recebido!</h3>
        <p className="text-stone-600">
          Pedido de marcação recebido. Entraremos em contacto em 24h úteis para confirmar a sua
          consulta.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Nome + Telefone */}
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
            className={`${inputBase} ${errors.nome ? inputErr : inputOk}`}
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
            Telefone{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="telefone"
            type="tel"
            autoComplete="tel"
            className={`${inputBase} ${errors.telefone ? inputErr : inputOk}`}
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

      {/* Email */}
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
          className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
          placeholder="maria.silva@email.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Serviço */}
      <div>
        <label htmlFor="servico" className="mb-1.5 block text-sm font-medium text-stone-700">
          Serviço pretendido{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </label>
        <select
          id="servico"
          className={`${inputBase} ${errors.servico ? inputErr : inputOk}`}
          defaultValue=""
          {...register("servico")}
        >
          <option value="" disabled>
            Seleccione um serviço
          </option>
          {servicoOpcoes.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
        {errors.servico && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {errors.servico.message}
          </p>
        )}
      </div>

      {/* Data preferida */}
      <div>
        <label htmlFor="dataPreferida" className="mb-1.5 block text-sm font-medium text-stone-700">
          Data preferida <span className="text-stone-400 text-xs">(opcional)</span>
        </label>
        <input
          id="dataPreferida"
          type="date"
          min={minDate}
          className={`${inputBase} ${errors.dataPreferida ? inputErr : inputOk}`}
          {...register("dataPreferida")}
        />
      </div>

      {/* Período preferido */}
      <fieldset>
        <legend className="mb-2.5 text-sm font-medium text-stone-700">
          Período preferido <span className="text-stone-400 text-xs">(opcional)</span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {periodoOpcoes.map((op) => (
            <label
              key={op.value}
              className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                periodoActual === op.value
                  ? "border-teal-500 bg-teal-50 text-teal-700 font-medium"
                  : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
              }`}
            >
              <input
                type="radio"
                value={op.value}
                className="sr-only"
                {...register("periodoPreferido")}
              />
              {op.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Mensagem adicional */}
      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-stone-700">
          Mensagem adicional <span className="text-stone-400 text-xs">(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          rows={3}
          className={`${inputBase} resize-none ${errors.mensagem ? inputErr : inputOk}`}
          placeholder="Informações adicionais relevantes para a marcação…"
          {...register("mensagem")}
        />
        {errors.mensagem && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {errors.mensagem.message}
          </p>
        )}
        {/* Aviso RGPD obrigatório — dados de saúde são categoria especial */}
        <p className="mt-1.5 text-xs text-amber-700">
          Não inclua informações clínicas ou sintomas. Para questões médicas urgentes, contacte-nos
          por telefone.
        </p>
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
          "Pedir Marcação"
        )}
      </button>

      <p className="text-center text-xs text-stone-400">
        Os seus dados são tratados conforme a nossa{" "}
        <a href="/politica-privacidade" className="underline hover:text-stone-600">
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  );
}
