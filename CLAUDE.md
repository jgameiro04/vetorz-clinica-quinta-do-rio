@AGENTS.md
CLAUDE.md — Template VetorZ para Clínicas de Saúde (Portugal)
Sobre este projeto
Este é um template Next.js 16 reutilizável da VetorZ, agência portuguesa especializada em websites para pequenos negócios do setor saúde. O template serve como base para sites institucionais de clínicas médicas, dentárias, e outros prestadores de saúde regulados pela ERS (Entidade Reguladora da Saúde) em Portugal.
Projeto actual: Vetorz Template Clínica
Stack técnico: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Biome
Deploy: Vercel (região fra1 — Frankfurt para residência de dados UE)
Idioma principal: Português de Portugal (PT-PT) estrito
Instruções fundamentais ao Claude Code
Idioma e comunicação

Responde sempre em português de Portugal (PT-PT). Nunca uses brasileirismos. Exemplos de termos correctos: "ecrã" (não "tela"), "telemóvel" (não "celular"), "marcação" (não "agendamento"), "consulta" (não "atendimento"), "utilizador" (não "usuário").
Evita anglicismos desnecessários. Usa "servidor" em vez de "server" quando te referes ao conceito, mas aceita termos técnicos estabelecidos como "commit", "push", "deploy", "hook", "component" quando são parte da nomenclatura standard das ferramentas.

Planeamento e explicação

Antes de executar qualquer tarefa que envolva mais de dois ficheiros ou mais de 20 minutos estimados de trabalho, apresenta um plano estruturado e aguarda aprovação explícita. O plano deve incluir: ficheiros a criar/modificar, estrutura de componentes, dependências a instalar (se aplicável), passos de validação.
Para tarefas triviais (alterar uma palavra, corrigir um typo, ajustar um espaçamento), podes avançar directamente.

Pedidos de autorização para comandos

Antes de cada comando bash que executes no terminal, explica em linguagem humana o que o comando vai fazer, com que consequências, e quanto tempo demora.
Formato esperado: "Vou correr o comando X. Em linguagem humana, isto vai [acção concreta]. É útil porque [razão]. Demora aproximadamente [tempo]. Podes autorizar?"
Exemplos bons:

"Vou correr pnpm install zod. Isto instala a biblioteca Zod para validação de schemas TypeScript. É útil para validar formulários de forma type-safe. Demora ~15 segundos."
"Vou correr rm -rf .next. Isto apaga a pasta de build cache do Next.js. É útil quando há problemas de cache persistentes. Demora ~2 segundos e é seguro — o Next recria a pasta automaticamente no próximo build."



Ambiguidades e decisões

Quando encontrares uma ambiguidade técnica, pergunta antes de prosseguir, mas não faças perguntas abertas e vagas.
Formato esperado: "Encontrei uma decisão a tomar: [descreve a ambiguidade]. A minha recomendação é [opção X] porque [justificação]. Alternativas são [opção Y] e [opção Z]. Qual preferes?"
Excepção — autonomia criativa: Em questões de design visual (layout, espaçamentos, hierarquia visual) ou copy (tom, estrutura de frase), podes tomar decisões autonomamente e mostrá-las depois para validação, desde que sigas os princípios de design e tom de voz descritos neste documento.
Excepção — confirmação obrigatória: Em integrações críticas (configuração de base de dados, integrações com APIs externas, configuração de deploy, alterações a DNS), pergunta sempre antes de avançar, mesmo que tenhas alta confiança na solução.

Convenções técnicas
Estrutura de ficheiros e nomenclatura

Pastas: kebab-case (team-member, booking-form)
Componentes React: PascalCase (TeamMember.tsx, BookingForm.tsx)
Utilitários e helpers: camelCase (formatDate.ts, validateEmail.ts)
Ficheiros de configuração: lowercase com hífens ou pontos conforme convenção da ferramenta (next.config.js, biome.json, .env.local)

Filosofia de componentes

Ficheiros pequenos com responsabilidades claras. Prefere oito ficheiros de 30 linhas cada a um ficheiro de 240 linhas.
Server Components por defeito. Apenas usa "use client" quando absolutamente necessário para interatividade (estado, event handlers, hooks do browser). Quando usares, justifica numa linha de comentário: // "use client" necessário para useState no formulário de marcação
Reutilização explícita. Componentes de clínica (cards de equipa, cards de serviços, testemunhos) vivem em components/clinic/ para serem reutilizados em projectos futuros.

Comentários no código

Comenta o "porquê", nunca o "quê". Não escrevas // Soma dois números (redundante). Escreve // Somamos IVA separado porque a ERS obriga a mostrar breakdown de preços (contexto valioso).
Comenta sempre decisões não-óbvias, workarounds temporários, integrações com APIs externas, e cálculos de negócio.

TypeScript e tipos

TypeScript estrito. Nunca uses any excepto em casos justificados (integrações com bibliotecas mal tipadas). Quando inevitável, marca com comentário // @ts-expect-error: [razão concreta].
Usa unknown em vez de any quando não sabes o tipo à partida — força type narrowing explícito.

Formatação e linting

O projecto usa Biome para linting e formatting. Antes de considerar qualquer tarefa concluída, corre sempre pnpm check.
Configuração Biome (já aplicada em biome.json):

Indentação: 2 espaços (não tabs)
Aspas: duplas em JS/TS e JSX
Vírgulas finais: sempre (trailingCommas: "all")
Ponto-e-vírgula: sempre (semicolons: "always")
Largura de linha: 100 caracteres



Setor saúde — terminologia e conformidade
Terminologia médica PT-PT
Usa sempre os termos portugueses correctos:

"Consulta" (não "atendimento")
"Marcação de consulta" ou "marcar consulta" (não "agendamento")
"Médico dentista" ou "dentista" (ambos aceitáveis, prefer o primeiro em contextos formais)
"Medicina Dentária" (nome formal da especialidade)
"Paciente" (termo standard em clínicas privadas; "utente" é mais comum no SNS público mas também aceitável)
"Especialidades" (não "áreas de actuação" excepto em contextos específicos)
"Convénios" quando referes acordos com seguradoras ou subsistemas
"ADSE", "SAMS", "Multicare", "Médis", "AdvanceCare" — subsistemas e seguradoras comuns em Portugal
"SNS" (Serviço Nacional de Saúde)
"Receita médica" ou "prescrição"

Conformidade ERS obrigatória
Clínicas reguladas pela ERS têm obrigações legais que têm de estar presentes no site. Antes de qualquer build de produção, valida obrigatoriamente:
Checklist ERS (validação obrigatória antes de pnpm build para produção):

 Link para Livro de Reclamações Eletrónico visível em local destacado (header ou footer, não enterrado)
 Identificação do director clínico com nome completo
 Número de licença ERS da clínica (se aplicável)
 Nome completo da entidade legal (razão social)
 NIF da entidade
 Endereço completo com código postal
 Telefone de contacto
 Email institucional

Se qualquer um destes elementos faltar, recusa-te a fazer build de produção e lista os itens em falta.
O link oficial do Livro de Reclamações Eletrónico da ERS é: https://www.livroreclamacoes.pt/inicio
Tom de voz e linguagem com pacientes

Registo profissional-próximo: Tratamento por "você" (evita "tu" e evita "o Senhor/a Senhora" excepto em contextos administrativos muito formais).
Linguagem clara, acessível, mas respeitosa. Evita jargão médico sem explicação.
Nunca uses emojis em copy institucional de saúde.
Exemplos de frases correctas:

"Pode marcar a sua consulta através do formulário abaixo"
"A nossa equipa está disponível para o ajudar"
"Oferecemos tratamentos de implantologia com tecnologia de ponta"


Exemplos de frases incorrectas:

"Marca já a tua consulta!" (demasiado casual)
"O Senhor deverá preencher o formulário" (demasiado formal)
"Nós fazemos implantes top 🦷" (emoji inapropriado, linguagem casual)



Conteúdo de saúde e E-E-A-T
O Google classifica conteúdo de saúde como YMYL (Your Money Your Life), aplicando critérios rigorosos de E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
Regras obrigatórias para artigos de blog sobre saúde:

Autor identificado com nome completo, especialidade, cédula profissional (OMD no caso dentário)
Data de publicação e data de última revisão médica
Fontes citadas quando se fala de condições, tratamentos, ou estudos
Schema.org MedicalWebPage + Article com campos author, reviewedBy, lastReviewed, about
Proibição absoluta: Nunca publiques um artigo de saúde sem autor identificado, sem data de revisão, ou com afirmações médicas sem fonte.

RGPD e dados sensíveis — RED LINES (nunca cruzar)
Dados de saúde são classificados como categoria especial pelo Art. 9.º do RGPD, com protecção reforçada. As seguintes práticas são proibições absolutas que nunca deves implementar, mesmo que te peçam explicitamente:
🚫 PROIBIDO — nunca fazer:

Campo de texto livre para "sintomas" ou "motivo da consulta" em formulários públicos de contacto. Isto transforma o formulário num processador de dados especiais de saúde com implicações legais severas. Alternativa: usar dropdown com opções genéricas pré-definidas ("Consulta de rotina", "Urgência dentária", "Informações sobre tratamento").
Integrar ferramentas de session recording ou heatmaps que capturem ecrãs completos (Hotjar, FullStory, Clarity, etc.). Estas podem capturar dados de saúde se um paciente preencher formulários. Alternativa: usar apenas analytics agregados (Plausible, Vercel Analytics, Google Analytics 4 sem gravação de sessão).
Desactivar HTTPS ou permitir conteúdo misto (HTTP + HTTPS). Todos os recursos devem ser servidos over HTTPS, sem excepções.
Enviar dados de paciente por email não cifrado. Se for necessário enviar notificações de marcações, usa serviços transaccionais com TLS obrigatório (Resend, SendGrid com TLS enforced).
Commitar ficheiros com dados pessoais reais no repositório git. Bases de dados de teste, exports CSV com dados de pacientes, backups — nada disto vai para o git. Usa sempre dados fictícios em desenvolvimento.
Armazenar dados de saúde em localStorage ou sessionStorage sem cifra. Dados sensíveis devem viver server-side, nunca no browser do utilizador.

Se te pedirem para implementar qualquer uma destas práticas, recusa educadamente, explica o risco legal (coimas CNPD até €20M ou 4% da facturação anual), e propõe alternativa conforme acima.
Dependências e instalação de pacotes
Categorias pré-aprovadas (podes instalar autonomamente)
Tens autonomia para instalar dependências das seguintes categorias sem pedir confirmação:

Componentes UI do ecossistema shadcn/ui e Radix: @radix-ui/*, componentes via npx shadcn@latest add
Utilitários React standard: clsx, class-variance-authority, tailwind-merge
Validação e schemas: zod, react-hook-form, @hookform/resolvers
Date/time: date-fns
Ícones: lucide-react (já incluído via shadcn)
Next.js oficiais: next-intl, @vercel/analytics, @vercel/speed-insights, sharp (optimização de imagens)

Confirmação obrigatória (pergunta antes de instalar)
Para qualquer dependência fora das categorias acima, pede confirmação explícita antes de instalar. Inclui no pedido:

Nome e versão da biblioteca
Porquê é necessária
Tamanho do bundle aproximado (se relevante)
Alternativas consideradas (se aplicável)

Exemplo: "Quero instalar react-pdf v7 para renderizar PDFs de resultados de exames. Adiciona ~200KB ao bundle. Alternativa seria usar um iframe com PDF.js nativo do browser, mas não dá tanto controlo. Posso instalar?"
Git, commits e deploy
Commits

Nunca faças commits autonomamente. Prepara as alterações com git add se necessário, mas o commit manual é sempre responsabilidade do utilizador.
Quando uma tarefa estiver completa e pronta para commit, avisa: "Tarefa concluída e validada. Podes fazer commit quando quiseres. Sugestão de mensagem: feat: add booking form with Cal.com integration"
Usa convenção Conventional Commits nas sugestões:

feat: novas funcionalidades
fix: correcções de bugs
chore: manutenção (dependências, config)
docs: documentação
style: formatação, whitespace
refactor: refactoring sem mudança funcional
test: adicionar ou corrigir testes



Deploy e push

Nunca faças git push nem deploy no Vercel autonomamente.
Quando o código estiver pronto para produção, executa a checklist de validação (ver secção seguinte) e informa: "Código pronto para produção. Validação completa. Podes fazer push e deploy quando quiseres."

Ficheiros sensíveis

Antes de adicionar ou modificar qualquer ficheiro .env*, confirma explicitamente com o utilizador.
Se detectares padrões suspeitos de secrets em ficheiros staged para commit (ex: sk_live_, AIza, -----BEGIN PRIVATE KEY-----, tokens de 32+ caracteres alfanuméricos), bloqueia o commit e avisa imediatamente.

Checklist de validação obrigatória
Antes de considerar qualquer feature ou tarefa como "concluída", passa obrigatoriamente por esta checklist:

 pnpm build — passa sem erros nem warnings
 pnpm check (Biome) — passa sem erros
 Não há console.log esquecidos em código de produção (permitido apenas em dev com guard if (process.env.NODE_ENV === 'development'))
 Todas as imagens têm atributo alt descritivo e semântico
 Todos os links internos foram testados (não dão 404)
 Schema.org JSON-LD está presente em páginas relevantes e valida em https://validator.schema.org/
 Conformidade RGPD: nenhuma das RED LINES foi cruzada
 Conformidade ERS: checklist ERS validada (se aplicável ao tipo de página)

Reporta o resultado da checklist no fim de cada tarefa. Formato:
✅ Checklist de validação:
- pnpm build: ✅ pass
- pnpm check: ✅ pass
- console.log: ✅ nenhum em produção
- alt em imagens: ✅ todas com alt descritivo
- links internos: ✅ testados
- schema.org: ✅ MedicalClinic válido
- RGPD: ✅ sem RED LINES
- ERS: ⚠️  N/A (página não-pública)
Stack e ferramentas específicas
Next.js 16 (App Router)

Sempre usa App Router, nunca Pages Router.
params é agora Promise em Next.js 15+. Exemplo correcto:

typescript  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // ...
  }

Metadata API para SEO: sempre define metadata export em páginas, nunca uses <Head> manual.
Usa next/image para todas as imagens. Sempre especifica width e height ou fill com sizes.

Tailwind CSS v4

Usa a nova sintaxe @theme em globals.css para tokens de design.
Usa apenas classes utilitárias core do Tailwind (não temos compilador Tailwind custom, apenas o postcss plugin base).

shadcn/ui

Instala componentes via npx shadcn@latest add [component].
Componentes shadcn vivem em components/ui/ e são editáveis. Podes personalizá-los.
Usa o MCP server do shadcn quando disponível para sugestões de componentes.

Biome

Configurado em biome.json na raiz.
Corre sempre pnpm check antes de concluir tarefas.
Se o Biome reportar erros, corrige-os antes de avançar.

Internacionalização

Usa next-intl mesmo que o site seja apenas PT-PT hoje. Prepara para expansão futura.
Strings visíveis ao utilizador devem viver em messages/pt.json, não hardcoded em componentes.

Contexto do projeto actual (Clínica Quinta do Rio)
Informação da clínica
Nome: Clínica Quinta do Rio
Tipo: Clínica dentária multidisciplinar
Localização: Rua Casal do Marco 67C, Torre da Marinha, 2840-731 Seixal
Anos de actividade: 17+ anos (fundada ~2008)
Equipa
Médicos Dentistas:

Dr. Pedro Matos Silvério — Medicina Dentária, Implantologia
Dr.ª Ana Lúcia Diogo — Medicina Dentária, Ortodontia
Dr. João Diogo — Medicina Dentária
Dr.ª Ana Sofia Alves — Medicina Dentária

Assistentes Dentárias:

Sofia
Rita Tavares
Carla Gonçalves

Regras para apresentação da equipa:

Médicos dentistas têm páginas individuais com bio completa, credenciais, cédula OMD (a confirmar com cada profissional antes de publicar).
Assistentes aparecem em secção de equipa de apoio, sem páginas individuais, apenas nome e função.
Antes de publicar qualquer bio ou credencial, marca como "a confirmar" qualquer informação que não tenhas de fonte pública verificável.
Se algum profissional pedir remoção da sua informação da demo, remove imediatamente (direito RGPD).

Especialidades oferecidas

Implantologia
Dentes fixos no próprio dia
Ortodontia e Ortopedia Facial (Aparelhos Dentários)
Prótese Fixa / Removível
Branqueamento Dentário
Odontopediatria
Periodontologia
Cirurgia oral
Endodontia
Dentisteria
Facetas Dentárias
Radiologia Dentária

Convénios típicos (a confirmar com a clínica)

ADSE
SAMS
CGD (Caixa Geral de Depósitos)
INCM (Imprensa Nacional Casa da Moeda)
SNS (acordos específicos quando aplicável)

Schema.org para clínicas
Sempre injecta JSON-LD structured data em páginas relevantes:
Root layout — MedicalClinic + WebSite
typescriptconst jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://clinicaquintadorio.com/#clinic",
      "name": "Clínica Quinta do Rio",
      "image": "https://clinicaquintadorio.com/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Casal do Marco 67C, Torre da Marinha",
        "addressLocality": "Seixal",
        "postalCode": "2840-731",
        "addressCountry": "PT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "38.65",
        "longitude": "-9.08"
      },
      "telephone": "+351-XXX-XXX-XXX", // a confirmar
      "openingHoursSpecification": [], // a preencher com horários reais
      "medicalSpecialty": ["Dentistry", "Orthodontics", "Dental Implants"],
      "availableService": [], // lista de serviços
      "sameAs": [
        // Facebook, Instagram, Doctoralia quando disponíveis
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://clinicaquintadorio.com/#website",
      "url": "https://clinicaquintadorio.com",
      "name": "Clínica Quinta do Rio",
      "publisher": {
        "@id": "https://clinicaquintadorio.com/#clinic"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://clinicaquintadorio.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};
Página de dentista — Physician
typescript{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Pedro Matos Silvério",
  "jobTitle": "Médico Dentista",
  "worksFor": {
    "@type": "MedicalClinic",
    "name": "Clínica Quinta do Rio"
  },
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "Cédula OMD",
    "value": "XXXXX" // a confirmar com o profissional
  },
  "medicalSpecialty": ["Implantology", "Dentistry"]
}
Artigo de blog — MedicalWebPage + Article
typescript{
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  "headline": "Sinais de que precisa de consulta de cárie",
  "author": {
    "@type": "Physician",
    "name": "Dr.ª Ana Lúcia Diogo",
    "jobTitle": "Médica Dentista — Ortodontia"
  },
  "reviewedBy": {
    "@type": "Physician",
    "name": "Dr. Pedro Matos Silvério"
  },
  "datePublished": "2026-04-20",
  "dateModified": "2026-04-20",
  "lastReviewed": "2026-04-20",
  "about": {
    "@type": "MedicalCondition",
    "name": "Cárie dentária"
  }
}
Estrutura de pastas recomendada
/
├── app/
│   ├── (marketing)/          # Grupo de rotas públicas
│   │   ├── page.tsx          # Homepage
│   │   ├── sobre/
│   │   ├── equipa/
│   │   ├── servicos/
│   │   │   └── [slug]/
│   │   ├── marcacoes/
│   │   ├── contactos/
│   │   └── blog/
│   │       ├── page.tsx      # Listing
│   │       └── [slug]/
│   ├── layout.tsx            # Root layout com metadata, JSON-LD
│   ├── globals.css
│   └── api/                  # Server actions e API routes
├── components/
│   ├── ui/                   # shadcn components
│   └── clinic/               # Componentes reutilizáveis de clínica
│       ├── TeamMemberCard.tsx
│       ├── ServiceCard.tsx
│       ├── TestimonialCard.tsx
│       ├── ConvenioLogo.tsx
│       └── ConsultationButton.tsx
├── content/
│   └── posts/                # MDX blog posts
├── lib/
│   ├── utils.ts
│   └── validations.ts        # Zod schemas
├── messages/
│   └── pt.json               # next-intl translations
├── public/
│   ├── images/
│   └── fonts/
├── .env.local                # Nunca commitar!
├── .gitignore
├── biome.json
├── CLAUDE.md                 # Este ficheiro
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
Boas práticas finais

Performance: Target Lighthouse mobile 95+ em Performance, Accessibility, Best Practices, SEO.
Imagens: Usa sempre next/image, formatos modernos (AVIF, WebP), lazy loading por defeito.
Acessibilidade: WCAG 2.1 AA mínimo. A European Accessibility Act entrou em vigor a 28/06/2025 — clínicas são fiscalizadas prioritariamente.
SEO local: Google Business Profile, schema LocalBusiness + MedicalClinic, structured data de localização.
Core Web Vitals: LCP < 2s, INP < 150ms, CLS < 0.05.


Última actualização: 2026-04-20
Versão do CLAUDE.md: 1.0
Maintainer: VetorZ (João Gameiro)