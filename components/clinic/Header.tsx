import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/equipa", label: "Equipa" },
  { href: "/blog", label: "Blog" },
  { href: "/convenios", label: "Convénios" },
  { href: "/contactos", label: "Contactos" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/clinica-do-rio-logo.png"
            alt="Clínica Médica e Dentária Quinta do Rio"
            width={160}
            height={52}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 transition-colors duration-200 hover:text-teal-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/marcacoes"
          className="hidden rounded-full bg-teal-600 px-5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-teal-700 sm:inline-flex"
        >
          Marcar Consulta
        </Link>
      </div>
    </header>
  );
}
