import { z } from "zod";

const telefonePTRegex = /^(\+351\s?)?(2\d{8}|9[1236]\d{7})$/;

export const contactFormSchema = z.object({
  nome: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Introduza um endereço de email válido."),
  telefone: z
    .string()
    .optional()
    .refine(
      (val) => !val || telefonePTRegex.test(val.replace(/\s/g, "")),
      "Introduza um número de telefone português válido.",
    ),
  assunto: z.enum(["consulta-rotina", "informacoes-tratamento", "urgencia-dentaria", "outro"], {
    error: "Seleccione um assunto.",
  }),
  mensagem: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres.")
    .max(500, "A mensagem não pode exceder 500 caracteres."),
  turnstileToken: z.string().min(1, "Verificação de segurança obrigatória."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

const servicosMarcacao = [
  "implantologia",
  "dentes-fixos",
  "ortodontia",
  "protese",
  "branqueamento",
  "odontopediatria",
  "periodontologia",
  "cirurgia-oral",
  "endodontia",
  "dentisteria",
  "facetas",
] as const;

export const marcacaoFormSchema = z.object({
  nome: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Introduza um endereço de email válido."),
  telefone: z
    .string()
    .min(1, "O telefone é obrigatório para confirmar a marcação.")
    .refine(
      (val) => telefonePTRegex.test(val.replace(/\s/g, "")),
      "Introduza um número de telefone português válido.",
    ),
  servico: z.enum(servicosMarcacao, { error: "Seleccione um serviço." }),
  dataPreferida: z.string().optional(),
  periodoPreferido: z.enum(["manha", "tarde", "indiferente"]).optional(),
  mensagem: z.string().max(300, "A mensagem não pode exceder 300 caracteres.").optional(),
  turnstileToken: z.string().min(1, "Verificação de segurança obrigatória."),
});

export type MarcacaoFormData = z.infer<typeof marcacaoFormSchema>;
