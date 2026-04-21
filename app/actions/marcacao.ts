"use server";

import { marcacaoFormSchema } from "@/lib/validations";

type ActionResult = { success: true } | { error: string };

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    if (process.env.NODE_ENV === "development") return true;
    return false;
  }

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = (await res.json()) as { success: boolean };
  return data.success;
}

export async function submitMarcacaoForm(formData: unknown): Promise<ActionResult> {
  const parsed = marcacaoFormSchema.safeParse(formData);
  if (!parsed.success) {
    return { error: "Dados inválidos. Verifique o formulário e tente novamente." };
  }

  const { turnstileToken, ...marcacaoData } = parsed.data;

  const turnstileOk = await verifyTurnstile(turnstileToken);
  if (!turnstileOk) {
    return { error: "Verificação de segurança falhou. Recarregue a página e tente novamente." };
  }

  // Stub — integração Resend/SendGrid a implementar
  if (process.env.NODE_ENV === "development") {
    console.log("[marcacao] Novo pedido de marcação:", marcacaoData);
  }

  return { success: true };
}
