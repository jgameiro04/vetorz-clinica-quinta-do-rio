import { BookOpen } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/equipa", label: "Equipa" },
  { href: "/convenios", label: "Convénios" },
  { href: "/marcacoes", label: "Marcar Consulta" },
  { href: "/contactos", label: "Contactos" },
];

const legalLinks = [
  { href: "/politica-privacidade", label: "Política de Privacidade" },
  { href: "/termos-uso", label: "Termos de Utilização" },
];

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Livro de Reclamações — obrigatório ERS, visível em destaque */}
      <div className="bg-teal-700">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-4 py-3 sm:px-6 lg:px-8">
          <BookOpen className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
          <p className="text-sm text-white">
            Tem uma reclamação?{" "}
            <a
              href="https://www.livroreclamacoes.pt/inicio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 transition-colors duration-200 hover:text-teal-200"
            >
              Livro de Reclamações Eletrónico
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Morada e contactos */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Clínica Quinta do Rio</h3>
            <address className="not-italic text-sm leading-relaxed">
              <p>Rua Casal do Marco 67C</p>
              <p>Torre da Marinha</p>
              <p>2840-731 Seixal</p>
            </address>
            <div className="mt-3 space-y-1 text-sm">
              <p>
                Tel: <span className="text-stone-400">[a confirmar]</span>
              </p>
              <p>
                Email: <span className="text-stone-400">[a confirmar]</span>
              </p>
            </div>
          </div>

          {/* Informação legal — conformidade ERS */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Informação Legal</h3>
            <dl className="space-y-2.5 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-stone-500">Razão Social</dt>
                <dd className="text-stone-400">[a confirmar]</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-stone-500">NIF</dt>
                <dd className="text-stone-400">[a confirmar]</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-stone-500">Licença ERS</dt>
                <dd className="text-stone-400">[a confirmar]</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-stone-500">Director Clínico</dt>
                <dd>Dr. Pedro Matos Silvério</dd>
              </div>
            </dl>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Navegação</h3>
            <nav aria-label="Navegação do rodapé">
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 hover:text-teal-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 space-y-2 text-sm text-stone-500">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 hover:text-teal-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 text-xs text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Clínica Quinta do Rio. Todos os direitos reservados.</p>
          <p>
            Website por{" "}
            <a
              href="https://vetorz.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-teal-400"
            >
              VetorZ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
