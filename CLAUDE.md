# CLAUDE.md — Clínica Quinta do Rio (VetorZ)

## Contexto
Template Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 + shadcn/ui + Biome.
Deploy: Vercel fra1. Idioma: **PT-PT estrito** (ecrã, telemóvel, marcação, utilizador, consulta).

## Stack
- App Router sempre (nunca Pages Router). `params` é `Promise` no Next 15+.
- Server Components por defeito. `"use client"` só quando necessário (justifica em comentário).
- `next/image` para todas as imagens (com `alt` descritivo obrigatório).
- Strings visíveis ao utilizador em `messages/pt.json` (next-intl).
- Biome: 2 espaços, aspas duplas, vírgulas finais, ponto-e-vírgula, 100 chars/linha.
- Corre `pnpm check` e `pnpm build` antes de declarar qualquer tarefa concluída.

## Clínica
**Nome:** Clínica Quinta do Rio | **Tipo:** Dentária multidisciplinar | **17+ anos**
**Morada:** Rua Casal do Marco 67C, Torre da Marinha, 2840-731 Seixal

**Equipa médica:** Dr. Pedro Matos Silvério (Implantologia), Dr.ª Ana Lúcia Diogo (Ortodontia), Dr. João Diogo, Dr.ª Ana Sofia Alves
**Apoio:** Sofia, Rita Tavares, Carla Gonçalves (sem páginas individuais)

**Especialidades:** Implantologia · Dentes fixos no próprio dia · Ortodontia · Prótese · Branqueamento · Odontopediatria · Periodontologia · Cirurgia oral · Endodontia · Dentisteria · Facetas · Radiologia

**Convénios (a confirmar):** ADSE · SAMS · CGD · INCM

## Conformidade obrigatória

**ERS — obrigatório no site (recusa build de produção se faltar):**
- Link Livro de Reclamações (https://www.livroreclamacoes.pt/inicio) em local destacado
- Director clínico identificado com nome completo
- Razão social, NIF, morada completa, telefone, email institucional

**RGPD — RED LINES (nunca implementar):**
- Campo de texto livre para sintomas/motivo em formulários públicos → usar dropdown genérico
- Session recording / heatmaps com captura de ecrã (Hotjar, Clarity, etc.)
- Dados de saúde em localStorage sem cifra
- Secrets ou dados pessoais reais em git

**Conteúdo de saúde (blog):** autor identificado + cédula OMD + data revisão médica + fontes + schema MedicalWebPage.

## Schema.org (injectar como JSON-LD)
Páginas de clínica: `MedicalClinic` + `WebSite` no root layout.
Páginas de dentista: `Physician` com `worksFor` e cédula OMD (marcar "a confirmar").
Blog: `MedicalWebPage` + `Article` com `author`, `reviewedBy`, `lastReviewed`.

## Tom de voz
Registo profissional-próximo. Tratamento por "você". Sem emojis. Sem jargão médico sem explicação.
✅ "Pode marcar a sua consulta através do formulário abaixo"
❌ "Marca já a tua consulta!" | "O Senhor deverá preencher..."

## Estrutura de pastas (referência rápida)
```
app/(marketing)/    → página, sobre, equipa, servicos/[slug], marcacoes, contactos, blog/[slug]
components/ui/      → shadcn
components/clinic/  → TeamMemberCard, ServiceCard, TestimonialCard, ConvenioLogo, ConsultationButton
content/posts/      → MDX
messages/pt.json    → todas as strings visíveis
```

## Checklist antes de "concluído"
- [ ] `pnpm build` sem erros
- [ ] `pnpm check` (Biome) sem erros
- [ ] Sem `console.log` em produção
- [ ] Todas as imagens com `alt`
- [ ] Links internos testados
- [ ] Schema.org válido (https://validator.schema.org/)
- [ ] RGPD: nenhuma RED LINE cruzada
- [ ] ERS: itens obrigatórios presentes (se página pública)

## Dependências pré-aprovadas (instala sem pedir)
`@radix-ui/*` · shadcn components · `clsx` · `cva` · `tailwind-merge` · `zod` · `react-hook-form` · `@hookform/resolvers` · `date-fns` · `lucide-react` · `next-intl` · `@vercel/analytics` · `@vercel/speed-insights` · `sharp`
Tudo o resto: pede confirmação primeiro.

## Regras de trabalho
- Plano estruturado antes de tarefas com >2 ficheiros ou >20 min.
- Nunca faças `git commit`, `git push` ou deploy autonomamente.
- Nunca modifiques ficheiros `.env*` sem confirmação explícita.
- Ambiguidades técnicas: propõe uma opção com justificação, não faças perguntas abertas.
- Credenciais médicas (cédulas OMD, bios): marca sempre como "a confirmar" até haver fonte verificável.

---
*v2.0 — 2026-04-21 — VetorZ / João Gameiro*