import {
  Activity,
  Baby,
  type LucideIcon,
  Microscope,
  Pen,
  Scissors,
  Shield,
  Smile,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

export type Servico = {
  slug: string;
  titulo: string;
  descricaoCurta: string;
  Icon: LucideIcon;
  // Arrays de parágrafos para renderização directa sem split
  oQueE: string[];
  emQueConsiste: string[];
  beneficios: string[];
  quandoProcurar: string[];
  medicoResponsavel?: string;
  procedureType: "Therapeutic" | "Diagnostic" | "Preventive" | "Rehabilitative";
};

export const servicos: Servico[] = [
  {
    slug: "implantologia",
    titulo: "Implantologia",
    descricaoCurta:
      "Substituição permanente de dentes perdidos com implantes de titânio que se integram ao osso.",
    Icon: Wrench,
    medicoResponsavel: "Dr. Pedro Matos Silvério",
    procedureType: "Rehabilitative",
    oQueE: [
      "A implantologia é a área da medicina dentária dedicada à colocação de implantes dentários — pequenas peças de titânio que funcionam como raízes artificiais e são inseridas cirurgicamente no osso maxilar ou mandibular. Sobre estas raízes artificiais, o médico dentista fixa posteriormente uma coroa, uma ponte ou uma prótese, devolvendo ao paciente a capacidade de mastigar, sorrir e falar com naturalidade.",
      "Os implantes dentários são hoje a solução mais próxima do dente natural. O titânio é um material biocompatível que, ao longo de algumas semanas, se integra progressivamente ao osso num processo chamado osseointegração — criando uma base sólida e duradoura que pode durar décadas com os cuidados adequados.",
      "Na Clínica Quinta do Rio, em Seixal, os procedimentos de implantologia são realizados com planeamento digital prévio, o que permite maior precisão na colocação e melhores resultados estéticos e funcionais. A consulta inicial inclui avaliação radiológica e um plano de tratamento personalizado.",
    ],
    emQueConsiste: [
      "O processo de implantologia divide-se tipicamente em três fases. Na primeira fase, o implante de titânio é colocado cirurgicamente no osso, sob anestesia local. O procedimento é geralmente indolor durante a cirurgia e o desconforto pós-operatório é gerido com medicação adequada.",
      "Segue-se um período de osseointegração — tipicamente entre dois a seis meses — durante o qual o implante se funde ao osso. Nesta fase, o paciente pode usar uma prótese provisória para manter a função e a estética.",
      "Na fase final, é colocado o componente protético definitivo (coroa, bridge ou prótese) sobre o implante. O resultado é um dente de aspecto e função naturais, fixo e estável, sem necessidade de remover ou colar.",
    ],
    beneficios: [
      "Aparência e sensação idêntica aos dentes naturais",
      "Solução permanente e duradoura com os devidos cuidados",
      "Preserva o osso — evita a reabsorção óssea que ocorre após perda de dente",
      "Não danifica os dentes adjacentes (ao contrário das pontes tradicionais)",
      "Permite mastigar, falar e sorrir com total conforto e confiança",
      "Fácil higienização — escova-se como um dente natural",
    ],
    quandoProcurar: [
      "Perdeu um ou mais dentes por extracção, traumatismo ou doença periodontal e quer uma solução fixa e permanente.",
      "Usa prótese removível e sente desconforto, instabilidade ou dificuldade ao mastigar.",
      "Tem dentes com danos irreversíveis que necessitam de extracção.",
      "Quer evitar o desgaste dos dentes adjacentes que seria necessário para uma ponte fixa tradicional.",
    ],
  },
  {
    slug: "dentes-fixos-no-proprio-dia",
    titulo: "Dentes Fixos no Próprio Dia",
    descricaoCurta:
      "Reabilitação completa da boca com implantes e prótese fixa provisória colocada no mesmo dia da cirurgia.",
    Icon: Zap,
    medicoResponsavel: "Dr. Pedro Matos Silvério",
    procedureType: "Rehabilitative",
    oQueE: [
      "Os dentes fixos no próprio dia — também conhecidos por protocolos All-on-4 ou All-on-6 — são uma solução de reabilitação oral completa destinada a pacientes que perderam todos ou a grande maioria dos dentes, ou cujos dentes já não têm condições de ser preservados.",
      "Através da colocação estratégica de quatro a seis implantes por arcada, é possível suportar uma prótese fixa completa, que é aparafusada aos implantes ainda no próprio dia da cirurgia. O paciente entra sem dentes ou com dentes em mau estado e sai da clínica com uma prótese fixa provisória, capaz de comer e sorrir no mesmo dia.",
      "Esta abordagem representa um avanço significativo relativamente às próteses removíveis convencionais — oferecendo estabilidade, conforto e estética muito superiores — e é especialmente indicada para pacientes com perda óssea moderada que não necessitariam de enxertos extensos.",
    ],
    emQueConsiste: [
      "Antes da cirurgia, é feito um planeamento detalhado com recurso a radiologia 3D (CBCT) para mapear o osso disponível e definir a posição ideal de cada implante. Este planeamento digital é o que torna possível executar tudo em segurança e precisão num único dia.",
      "No dia da intervenção, são realizadas as extracções dos dentes remanescentes (quando necessário), a colocação dos implantes e, ainda na mesma sessão, a instalação de uma prótese provisória fixa. A cirurgia é realizada sob anestesia local, podendo ser complementada com sedação consciente a pedido do paciente.",
      "Após um período de cicatrização de três a seis meses, a prótese provisória é substituída pela prótese definitiva — em zircónia ou acrílico de alta qualidade — que confere o resultado estético e funcional final.",
    ],
    beneficios: [
      "Resultado imediato: sai da clínica com dentes fixos no próprio dia",
      "Menos cirurgias do que a colocação de implantes individuais",
      "Elimina o desconforto das próteses removíveis para sempre",
      "Permite mastigar e sorrir com confiança desde o primeiro dia",
      "Solução durável com manutenção simples",
      "Muitas vezes evita a necessidade de enxertos ósseos",
    ],
    quandoProcurar: [
      "Perdeu todos ou a maioria dos dentes e quer uma solução fixa e definitiva.",
      "Usa prótese total removível e sente instabilidade, dificuldade ao mastigar ou constrangimento social.",
      "Tem vários dentes comprometidos que os médicos recomendam extrair e quer reabilitar a arcada completa.",
      "Quer reduzir o número de cirurgias e recuperar a função oral num único procedimento.",
    ],
  },
  {
    slug: "ortodontia-e-ortopedia-facial",
    titulo: "Ortodontia e Ortopedia Facial",
    descricaoCurta:
      "Correcção do alinhamento dentário e das relações entre maxilar e mandíbula em crianças, jovens e adultos.",
    Icon: Smile,
    medicoResponsavel: "Dr.ª Ana Lúcia Diogo",
    procedureType: "Therapeutic",
    oQueE: [
      "A Ortodontia é a especialidade da medicina dentária que se dedica ao diagnóstico, prevenção e correcção das má oclusões — situações em que os dentes não estão alinhados entre si ou em que as arcadas superior e inferior não se articulam correctamente. A Ortopedia Facial, por sua vez, actua ao nível do crescimento ósseo maxilar e mandibular, sendo especialmente eficaz em crianças e adolescentes cujos ossos ainda se encontram em desenvolvimento.",
      "O tratamento ortodôntico pode ser realizado com aparelhos fixos (os tradicionais brackets colados aos dentes) ou com alinhadores transparentes removíveis, uma alternativa cada vez mais escolhida por adultos que valorizam a discrição durante o tratamento. Ambas as opções são eficazes — a escolha depende do caso clínico, da preferência do paciente e de uma avaliação cuidada pela médica especialista.",
      "Na Clínica Quinta do Rio, a Ortodontia é da responsabilidade da Dr.ª Ana Lúcia Diogo, que acompanha pacientes de todas as idades — desde a primeira consulta de avaliação até ao final do período de contenção.",
    ],
    emQueConsiste: [
      "O processo começa com uma consulta de diagnóstico que inclui análise clínica, radiografias e, em muitos casos, modelos digitais da dentição. Com base nestes dados, é elaborado um plano de tratamento personalizado com a duração estimada e as opções disponíveis.",
      "Após a colocação do aparelho, são marcadas consultas de controlo regulares — tipicamente de quatro a oito semanas — durante as quais a médica ajusta as forças aplicadas para guiar os dentes para a posição correcta. A duração média do tratamento varia entre doze meses e dois anos e meio, dependendo da complexidade do caso.",
      "No final do tratamento activo, inicia-se a fase de contenção — essencial para manter os resultados alcançados. Nesta fase usam-se contentores fixos (fio colado atrás dos dentes) ou removíveis (goteiras), que o paciente usa conforme indicação da médica.",
    ],
    beneficios: [
      "Sorriso alinhado e harmonioso com impacto directo na autoestima",
      "Melhoria da função mastigatória e da articulação dentária",
      "Redução do risco de desgaste dentário por má oclusão",
      "Facilita a higiene oral — dentes alinhados são mais fáceis de escovar",
      "Opções discretas com alinhadores transparentes para adultos",
      "Tratamento precoce em crianças pode evitar casos mais complexos no futuro",
    ],
    quandoProcurar: [
      "Tem dentes apinhados, com espaços excessivos, rotacionados ou em posição irregular.",
      "A mordida não fecha correctamente — mordida aberta, cruzada ou trespasse excessivo.",
      "O seu filho está a perder os dentes de leite e quer uma avaliação ortodôntica preventiva.",
      "É adulto e quer corrigir o alinhamento dentário de forma discreta, com alinhadores.",
      "Sente dificuldade ao mastigar, dores de cabeça frequentes ou desgaste dentário que pode ter origem na oclusão.",
    ],
  },
  {
    slug: "protese-fixa-removivel",
    titulo: "Prótese Fixa / Removível",
    descricaoCurta:
      "Reabilitação estética e funcional de dentes ausentes ou danificados com coroas, pontes e próteses.",
    Icon: Shield,
    procedureType: "Rehabilitative",
    oQueE: [
      "A prótese dentária é o conjunto de soluções utilizadas para substituir dentes que foram perdidos ou que apresentam danos extensos que comprometem a sua função ou aparência. Distingue-se entre prótese fixa — que é cimentada ou aparafusada e não pode ser removida pelo paciente — e prótese removível — que o paciente coloca e retira diariamente.",
      "As próteses fixas incluem coroas unitárias (que cobrem um dente danificado), pontes fixas (que substituem um ou mais dentes faltosos usando os dentes adjacentes como suporte) e coroas sobre implantes. As próteses removíveis incluem as próteses parciais (quando existem ainda alguns dentes naturais) e as próteses totais (quando faltam todos os dentes de uma arcada).",
      "A escolha entre prótese fixa ou removível depende de vários factores: número de dentes ausentes, estado do osso e dos dentes remanescentes, preferência do paciente e considerações económicas. Na Clínica Quinta do Rio, cada caso é avaliado individualmente para encontrar a solução mais adequada.",
    ],
    emQueConsiste: [
      "O processo começa com uma consulta de avaliação clínica e radiológica. Para as próteses fixas, os dentes de suporte (pilares) são preparados, é tirada uma impressão digital ou convencional e é fabricada a prótese em laboratório — em porcelana, zircónia ou metal-cerâmica, conforme o caso. Numa segunda consulta, a prótese é cimentada ou aparafusada definitivamente.",
      "Para as próteses removíveis, são tiradas impressões das arcadas, é avaliada a relação entre maxilar e mandíbula, e a prótese é fabricada em acrílico ou metal (esqueleto metálico, no caso das próteses parciais). São realizadas consultas de ajuste para garantir conforto e estabilidade.",
      "Em ambos os casos, são dadas instruções detalhadas sobre higienização e manutenção, fundamentais para a longevidade da prótese e para a saúde dos tecidos remanescentes.",
    ],
    beneficios: [
      "Recuperação da capacidade mastigatória e da função oral",
      "Melhoria da estética do sorriso e da harmonia facial",
      "Prevenção da migração dos dentes adjacentes ao espaço vazio",
      "Manutenção do suporte dos lábios e da musculatura facial",
      "Materiais modernos com aspecto natural e resistência elevada",
      "Soluções adaptadas a diferentes necessidades e orçamentos",
    ],
    quandoProcurar: [
      "Perdeu um ou mais dentes e quer recuperar a função e a estética.",
      "Tem dentes com fracturas, cáries extensas ou tratamentos de endodontia que necessitam de coroa protectora.",
      "Usa prótese removível antiga que já não se adapta bem, causa desconforto ou comprometeu a sua qualidade de vida.",
      "Quer saber quais as opções disponíveis para repor os dentes que faltam.",
    ],
  },
  {
    slug: "branqueamento-dentario",
    titulo: "Branqueamento Dentário",
    descricaoCurta:
      "Clareamento profissional supervisionado por médico dentista para um sorriso mais luminoso e uniforme.",
    Icon: Sparkles,
    procedureType: "Therapeutic",
    oQueE: [
      "O branqueamento dentário profissional é um procedimento estético que utiliza agentes oxidantes — habitualmente à base de peróxido de hidrogénio ou peróxido de carbamida — para clarear o esmalte dos dentes e eliminar manchas acumuladas ao longo do tempo.",
      "Ao contrário dos produtos de venda livre, o branqueamento realizado ou supervisionado por um médico dentista usa concentrações mais eficazes, é precedido de uma avaliação clínica para garantir que os dentes e gengivas estão em condições de receber o tratamento, e é acompanhado de forma a minimizar a sensibilidade e maximizar o resultado.",
      "Existem duas modalidades principais: o branqueamento em consultório, realizado numa única sessão com gel de alta concentração e activação por luz; e o branqueamento domiciliário, com goteiras personalizadas e gel de concentração mais baixa, usado pelo paciente em casa durante duas a três semanas. Muitas vezes combinam-se as duas abordagens para resultados mais expressivos e duradouros.",
    ],
    emQueConsiste: [
      "Antes de iniciar qualquer tratamento de branqueamento, é feita uma consulta de avaliação para verificar o estado das gengivas, dentes e restaurações existentes. Cáries ou problemas periodontais activos são tratados previamente — o branqueamento nunca é o primeiro passo quando há patologia.",
      "No branqueamento em consultório, é aplicado gel de peróxido de hidrogénio directamente nos dentes, protegendo as gengivas com uma barreira de isolamento. O gel actua durante sessões de quinze a vinte minutos, podendo ser activado com luz LED. O procedimento demora cerca de uma hora.",
      "Para o branqueamento domiciliário, são tiradas impressões para fabricar goteiras personalizadas que se adaptam exactamente à dentição de cada paciente. O paciente aplica o gel nas goteiras e usa-as conforme a indicação do médico — normalmente uma a duas horas por dia, ou durante a noite, ao longo de duas a três semanas.",
    ],
    beneficios: [
      "Sorriso mais claro e luminoso com resultados visíveis logo nas primeiras sessões",
      "Procedimento seguro quando supervisionado por médico dentista",
      "Autoestima reforçada e mais confiança ao sorrir",
      "Goteiras personalizadas garantem distribuição uniforme do gel",
      "Resultado natural — o objectivo é clarear, não branquear artificialmente",
      "Resultados que podem durar um a dois anos com os cuidados adequados",
    ],
    quandoProcurar: [
      "Os seus dentes estão amarelados ou escurecidos pelo tempo, café, chá, vinho ou tabaco.",
      "Tem manchas dentárias que não melhoram com a higiene habitual.",
      "Quer melhorar a estética do sorriso antes de um acontecimento especial.",
      "Acabou de fazer um tratamento ortodôntico e quer aproveitar para clarear os dentes.",
      "Tem restaurações antigas cujo tom já não combina com a cor dos dentes naturais e quer igualar.",
    ],
  },
  {
    slug: "odontopediatria",
    titulo: "Odontopediatria",
    descricaoCurta:
      "Cuidados de saúde oral especializados para bebés, crianças e adolescentes, com foco na prevenção.",
    Icon: Baby,
    procedureType: "Preventive",
    oQueE: [
      "A Odontopediatria é a especialidade da medicina dentária dedicada à saúde oral dos mais novos, desde o aparecimento do primeiro dente de leite até ao final da adolescência. Vai muito além do tratamento de cáries: o seu foco principal é a prevenção, a monitorização do desenvolvimento dentário e a criação de uma relação positiva da criança com a consulta dentária.",
      "As consultas de Odontopediatria na Clínica Quinta do Rio são conduzidas num ambiente acolhedor e adaptado a pacientes mais jovens. A equipa tem especial atenção às crianças com ansiedade dentária, utilizando técnicas de comunicação e de condicionamento comportamental que transformam a consulta numa experiência positiva.",
      "O acompanhamento regular desde cedo é fundamental: permite detectar problemas em fase precoce, aplicar medidas preventivas como selantes de fissuras e fluoretos, e orientar os pais sobre hábitos de higiene oral adequados a cada faixa etária.",
    ],
    emQueConsiste: [
      "A primeira consulta é geralmente de observação e adaptação — especialmente em crianças pequenas. O médico examina os dentes e gengivas, avalia o desenvolvimento da dentição e o estado geral da saúde oral, e dá instruções detalhadas aos pais sobre escovagem, alimentação e hábitos de sucção.",
      "Nas consultas seguintes são aplicadas medidas preventivas como verniz de flúor (que reforça o esmalte e protege contra cáries) e selantes de fissuras (que selam os sulcos dos molares, onde as cáries surgem mais facilmente). O controlo radiológico é feito de forma criteriosa, apenas quando clinicamente necessário.",
      "Quando existe necessidade de tratamento — como obturação de cárie num dente de leite — é explicado à criança e aos pais o procedimento, utilizando linguagem adaptada à idade e técnicas que minimizam o desconforto e o medo.",
    ],
    beneficios: [
      "Prevenção de cáries desde cedo com selantes e aplicações de flúor",
      "Detecção precoce de problemas de desenvolvimento e oclusão",
      "Criação de hábitos de higiene oral saudáveis para a vida toda",
      "Relação positiva com as consultas dentárias que dura até à idade adulta",
      "Orientação especializada para os pais em cada fase do crescimento",
      "Redução significativa da necessidade de tratamentos mais invasivos no futuro",
    ],
    quandoProcurar: [
      "O seu filho está a nascer o primeiro dente de leite — a primeira consulta é recomendada nesta fase.",
      "O bebé já tem um ano de idade e ainda não foi ao dentista.",
      "O seu filho tem medo ou ansiedade face às consultas dentárias.",
      "Quer aplicar selantes de fissuras nos molares definitivos assim que irromperem.",
      "Tem dúvidas sobre a chupeta, a mamadeira ou hábitos de higiene oral na infância.",
      "Suspeita que o desenvolvimento dentário do seu filho não está a decorrer normalmente.",
    ],
  },
  {
    slug: "periodontologia",
    titulo: "Periodontologia",
    descricaoCurta:
      "Diagnóstico e tratamento das doenças da gengiva e dos tecidos de suporte dos dentes.",
    Icon: Activity,
    procedureType: "Therapeutic",
    oQueE: [
      "A Periodontologia é a especialidade da medicina dentária que se ocupa da saúde dos tecidos que suportam os dentes: a gengiva, o osso alveolar, o cemento radicular e o ligamento periodontal. Quando estes tecidos são afectados por infecção bacteriana, desenvolve-se a doença periodontal — que pode manifestar-se como gengivite (inflamação reversível da gengiva) ou como periodontite (destruição progressiva do osso e dos tecidos de suporte, com risco de perda de dentes).",
      "A doença periodontal é muito mais prevalente do que se pensa: estima-se que afecte uma grande parte da população adulta, muitas vezes de forma silenciosa, sem dor perceptível nas fases iniciais. Por isso, a saúde das gengivas deve ser avaliada em todas as consultas de rotina.",
      "Além da relação directa com a saúde oral, a periodontite tem sido associada a condições sistémicas como diabetes, doenças cardiovasculares e complicações na gravidez — o que reforça a importância do seu diagnóstico e tratamento atempados.",
    ],
    emQueConsiste: [
      "O tratamento periodontal começa com uma avaliação completa que inclui sondagem periodontal (medição das bolsas entre gengiva e dente) e análise radiológica do osso. Com base nestes dados, é classificado o grau de doença e definido o plano de tratamento.",
      "A primeira linha de tratamento é a destartarização e alisamento radicular (também chamado de raspagem e alisamento) — uma limpeza profunda feita sob anestesia local que remove o tártaro e as bactérias das superfícies das raízes, tanto acima como abaixo da linha da gengiva. Na maioria dos casos de gengivite e periodontite moderada, este procedimento é suficiente para estabilizar a doença.",
      "Em casos mais avançados, pode ser necessária cirurgia periodontal para aceder a zonas que não são acessíveis com instrumentos convencionais, ou para regenerar osso perdido. Após o tratamento activo, o paciente entra numa fase de manutenção periodontal com consultas regulares — fundamentais para prevenir a recorrência.",
    ],
    beneficios: [
      "Travar a progressão da doença e preservar os dentes naturais",
      "Eliminação do mau hálito associado à infecção gengival",
      "Redução do sangramento das gengivas ao escovar",
      "Melhoria da estética gengival e da linha do sorriso",
      "Impacto positivo na saúde geral do organismo",
      "Criação de uma base saudável para futuros implantes ou próteses",
    ],
    quandoProcurar: [
      "As suas gengivas sangram ao escovar os dentes ou ao usar fio dentário.",
      "Tem mau hálito persistente que não melhora com a higiene habitual.",
      "As gengivas estão retraídas e os dentes parecem mais longos do que antes.",
      "Sente os dentes mais mobilos ou nota que se afastaram entre si.",
      "Tem diabetes, doenças cardiovasculares ou está grávida — populações com maior risco periodontal.",
      "Não faz uma limpeza profissional (destartarização) há mais de seis meses.",
    ],
  },
  {
    slug: "cirurgia-oral",
    titulo: "Cirurgia Oral",
    descricaoCurta:
      "Extracções dentárias, dentes do siso e outras intervenções cirúrgicas na cavidade oral.",
    Icon: Scissors,
    procedureType: "Therapeutic",
    oQueE: [
      "A Cirurgia Oral é a área da medicina dentária que engloba os procedimentos cirúrgicos realizados na boca, maxilares e estruturas adjacentes. Inclui desde extracções simples de dentes comprometidos até procedimentos mais complexos como a remoção de dentes do siso inclusos, a colocação de implantes, cirurgias periodontais e biopsias de lesões da mucosa oral.",
      "Embora o nome possa parecer intimidante, a grande maioria das intervenções de cirurgia oral é realizada em ambulatório, sob anestesia local, sem necessidade de internamento. Os avanços nas técnicas e nos materiais utilizados tornaram estes procedimentos muito mais confortáveis e com períodos de recuperação mais curtos do que no passado.",
      "Na Clínica Quinta do Rio, as cirurgias orais são planeadas com base em radiologia actualizada e com toda a informação prévia ao paciente sobre o procedimento, os cuidados pós-operatórios e o que esperar no período de recuperação.",
    ],
    emQueConsiste: [
      "Cada procedimento tem as suas especificidades, mas de forma geral, uma cirurgia oral começa pela administração de anestesia local para garantir que a zona é tratada sem dor. O médico procede então à intervenção — que pode ser uma extracção simples (com fórceps), uma extracção cirúrgica (com incisão e retalho quando o dente está incluso ou fragmentado), ou outro procedimento indicado.",
      "Para a remoção de dentes do siso inclusos — um dos procedimentos mais frequentes — é feita uma incisão na gengiva para aceder ao dente, que pode ser seccionado em fragmentos para facilitar a remoção. A ferida é depois suturada e o paciente recebe instruções detalhadas para o pós-operatório.",
      "No pós-operatório, é normal algum desconforto, edema localizado e dificuldade para abrir a boca durante os primeiros dias. A medicação prescrita (analgésicos e, quando indicado, antibióticos) controla estes sintomas na grande maioria dos casos.",
    ],
    beneficios: [
      "Resolução definitiva de dentes comprometidos que causam dor ou infecção",
      "Eliminação de focos infecciosos com potencial impacto na saúde geral",
      "Prevenção de danos aos dentes adjacentes causados por dentes do siso mal posicionados",
      "Preparação do terreno para colocação de implantes ou próteses",
      "Procedimento realizado sob anestesia local — sem dor durante a cirurgia",
      "Recuperação relativamente rápida com os cuidados adequados",
    ],
    quandoProcurar: [
      "Tem dor ou infecção associada a um dente que não pode ser recuperado.",
      "Os seus dentes do siso estão a erupcionar em posição incorrecta ou a causar dores.",
      "Tem um dente incluso (que não irrompeu) e o médico recomendou remoção cirúrgica.",
      "Precisa de extracções para preparar a boca para implantes ou aparelho ortodôntico.",
      "Detectou uma lesão na mucosa oral que necessita de biopsia para diagnóstico.",
    ],
  },
  {
    slug: "endodontia",
    titulo: "Endodontia",
    descricaoCurta:
      "Tratamento do canal radicular para eliminar a infecção e salvar o dente natural.",
    Icon: Microscope,
    procedureType: "Therapeutic",
    oQueE: [
      "A Endodontia é a especialidade da medicina dentária dedicada ao diagnóstico e tratamento das patologias que afectam a polpa dentária — o tecido conjuntivo, os vasos sanguíneos e os nervos que se encontram no interior do dente, dentro dos canais radiculares. Quando a polpa é afectada por cárie profunda, fractura ou traumatismo, pode inflamar ou necrosar, causando dor intensa e risco de disseminação da infecção.",
      "O tratamento endodôntico — vulgarmente chamado de 'tratamento do nervo' ou 'desvitalização' — permite remover o tecido pulpar afectado, desinfeitar os canais radiculares e selá-los hermeticamente, eliminando a infecção e preservando o dente na sua posição. É uma alternativa à extracção que, sempre que possível, deve ser preservada — um dente natural é sempre a melhor prótese.",
      "Com as técnicas modernas e a anestesia adequada, o tratamento endodôntico é muito mais confortável do que a reputação que lhe precede. A maioria dos pacientes descreve a consulta como semelhante a qualquer outra tratamento dentário.",
    ],
    emQueConsiste: [
      "Após o diagnóstico — que inclui exame clínico, teste de vitalidade pulpar e avaliação radiológica — o dente é isolado com dique de borracha para garantir assepsia durante o procedimento. É administrada anestesia local para garantir total conforto.",
      "O médico acede à câmara pulpar através de uma abertura no dente e, com instrumentos rotativos e soluções irrigantes, limpa e molda os canais radiculares, removendo todo o tecido pulpar e as bactérias presentes. O comprimento dos canais é determinado electronicamente para garantir precisão.",
      "Por fim, os canais são selados com um material biocompatível (guta-percha) e o dente é restaurado — habitualmente com uma coroa protectora que garante resistência à fractura no longo prazo. O número de sessões necessárias varia entre uma e três, dependendo da complexidade do caso e da presença de infecção activa.",
    ],
    beneficios: [
      "Salva o dente natural — evita a extracção e a necessidade de implante ou prótese",
      "Elimina a dor causada pela inflamação ou infecção pulpar",
      "Erradica o foco infeccioso e previne a sua disseminação",
      "Procedimento confortável com anestesia local adequada",
      "Permite restaurar o dente à sua função e aparência normais",
      "Dente tratado endodonticamente pode durar décadas com os cuidados adequados",
    ],
    quandoProcurar: [
      "Tem dor dentária intensa, espontânea ou provocada pelo quente ou frio que não cede.",
      "Sente dor à mastigação ou pressão num dente específico.",
      "Nota inchaço, fístula (pequeno 'borbulha' na gengiva) ou mau sabor persistente.",
      "O seu médico dentista detectou, numa radiografia, uma lesão escura na raiz do dente.",
      "Sofreu um traumatismo dentário e o dente mudou de cor ou tem sintomas.",
      "Tem uma cárie profunda que atingiu ou está próxima da polpa do dente.",
    ],
  },
  {
    slug: "dentisteria",
    titulo: "Dentisteria",
    descricaoCurta:
      "Prevenção, diagnóstico e tratamento restaurador de cáries e lesões dentárias com materiais estéticos.",
    Icon: Pen,
    procedureType: "Therapeutic",
    oQueE: [
      "A Dentisteria Operatória — ou simplesmente Dentisteria — é o pilar da medicina dentária geral. Engloba o conjunto de procedimentos destinados a prevenir, diagnosticar e tratar as lesões que afectam os dentes, com destaque para as cáries dentárias, as fracturas e o desgaste do esmalte.",
      "O tratamento restaurador consiste em remover o tecido dentário comprometido e substituí-lo por materiais de restauração — hoje predominantemente resinas compostas de cor semelhante à do dente, que permitem resultados estéticos muito naturais. Ao contrário das antigas obturações de amálgama (prata), as resinas compostas modernas são esteticamente invisíveis, aderem directamente ao dente e preservam maior quantidade de estrutura dentária sã.",
      "A Dentisteria inclui também procedimentos como o encerramento de diastemas (espaços entre dentes), a correcção de pequenas irregularidades de forma ou cor, e as restaurações cervicais em casos de erosão ou abrasão. É, a par com a prevenção, o serviço mais frequentemente utilizado pelos pacientes ao longo da vida.",
    ],
    emQueConsiste: [
      "A consulta de Dentisteria começa sempre por uma avaliação clínica e, quando necessário, radiológica, para identificar todas as lesões presentes — incluindo cáries incipientes não visíveis a olho nu. O plano de tratamento é explicado ao paciente antes de qualquer intervenção.",
      "Para o tratamento de uma cárie, o dente é anestesiado localmente e a lesão é removida com instrumentos rotativos. A cavidade é então preparada, condicionada quimicamente e preenchida com resina composta, que é polimerizada camada a camada com luz LED. O acabamento e o polimento são feitos para garantir uma textura lisa e uma oclusão correcta.",
      "O procedimento é geralmente rápido — entre vinte minutos a uma hora, dependendo do número e da dimensão das restaurações. Com anestesia adequada, é indolor durante a intervenção.",
    ],
    beneficios: [
      "Elimina a dor e o desconforto causados pelas cáries",
      "Restaurações estéticas invisíveis com cor semelhante à do dente natural",
      "Preserva a maior quantidade possível de estrutura dentária sã",
      "Intervenção precoce evita progressão para tratamentos mais complexos",
      "Procedimento rápido e confortável com anestesia local",
      "Melhoria da estética do sorriso mesmo em procedimentos funcionais",
    ],
    quandoProcurar: [
      "Sente sensibilidade ao frio, quente, doce ou ácido em um ou mais dentes.",
      "Tem dor ao mastigar ou nota uma cavidade visível num dente.",
      "Nota que uma restauração antiga está partida, desgastada ou com cor alterada.",
      "Quer substituir obturações de amálgama antigas por restaurações estéticas de resina composta.",
      "Tem pequenos espaços entre dentes ou irregularidades que gostaria de corrigir.",
      "Não vai ao dentista há mais de seis meses — a consulta de rotina inclui sempre avaliação dentária.",
    ],
  },
  {
    slug: "facetas-dentarias",
    titulo: "Facetas Dentárias",
    descricaoCurta:
      "Transformação estética do sorriso com facetas de porcelana ou compósito sobre os dentes anteriores.",
    Icon: Star,
    procedureType: "Therapeutic",
    oQueE: [
      "As facetas dentárias são finas lâminas de material estético — porcelana ou resina composta — que são coladas na face frontal dos dentes para modificar a sua cor, forma, tamanho ou textura. São uma das soluções de estética dentária mais versáteis e transformadoras, capazes de corrigir uma grande variedade de imperfeições e criar sorrisos harmoniosos e naturais.",
      "As facetas de porcelana são fabricadas em laboratório e distinguem-se pela longevidade, pela resistência às manchas e pelo aspecto extremamente natural — a porcelana tem propriedades ópticas semelhantes ao esmalte dentário. As facetas de compósito são esculpidas directamente em consultório, numa única visita, sendo uma alternativa mais económica e reversível, embora com menor durabilidade.",
      "O tratamento com facetas é uma decisão que deve ser tomada com informação completa: implica geralmente um desgaste mínimo do esmalte dos dentes (nalguns casos pode ser mínimo ou mesmo dispensável, nas chamadas facetas sem desgaste), e é considerado um procedimento irreversível na maioria dos casos. Por isso, a consulta de avaliação e o planeamento digital do sorriso são passos fundamentais antes de iniciar.",
    ],
    emQueConsiste: [
      "O processo começa com uma consulta de avaliação estética onde são analisados os objectivos do paciente, as proporções dentárias e a harmonia facial. Recorre-se frequentemente ao design digital do sorriso — uma simulação prévia que permite ao paciente visualizar o resultado esperado antes de qualquer intervenção.",
      "Para as facetas de porcelana, os dentes são preparados com um desgaste mínimo do esmalte (geralmente entre 0,3 e 0,7 mm), são tiradas impressões digitais de precisão e é fabricada a prótese em laboratório. Durante o período de fabrico — tipicamente uma a duas semanas — o paciente pode usar facetas provisórias. Na consulta seguinte, as facetas definitivas são coladas com cimento adesivo de alta resistência.",
      "Para as facetas de compósito directo, o procedimento é realizado numa única sessão: o médico esculpe a resina directamente sobre o dente, camada a camada, polimerizando cada camada com luz LED e refinando a forma e a textura até obter o resultado pretendido.",
    ],
    beneficios: [
      "Transformação estética expressiva com impacto imediato na aparência do sorriso",
      "Correcção de cor, forma, tamanho e textura em simultâneo",
      "Porcelana altamente resistente às manchas e com aspecto muito natural",
      "Desgaste mínimo de estrutura dentária comparativamente às coroas",
      "Resultado duradouro — facetas de porcelana podem durar dez a quinze anos ou mais",
      "Autoestima e confiança significativamente melhoradas",
    ],
    quandoProcurar: [
      "Tem dentes com manchas profundas que não respondem ao branqueamento.",
      "Quer corrigir a forma de dentes lascados, desgastados ou com proporções irregulares.",
      "Os seus dentes anteriores têm espaços (diastemas) que gostaria de eliminar.",
      "Quer um sorriso mais simétrico e harmonioso sem recorrer a aparelho ortodôntico.",
      "Tem pequenas irregularidades de posição que podem ser camufladas com facetas.",
    ],
  },
];

export function getServico(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug);
}
