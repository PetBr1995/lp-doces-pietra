import Link from "next/link";

export type NavItem = { label: string; href: string; active?: boolean };

export const leftLinks: NavItem[] = [
  { label: "Início", href: "#", active: true },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Encomendas", href: "#encomendas" },
];

export const rightLinks: NavItem[] = [
  { label: "Páginas", href: "#paginas" },
  { label: "Loja", href: "#loja" },
  { label: "Contato", href: "#contato" },
];

export default function NavLink({ label, href, active }: NavItem) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-1.5 text-sm transition-colors hover:text-candy-yellow ${
        active ? "text-candy-yellow" : "text-white/90"
      }`}
    >
      {active && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-candy-yellow" />}
      {label}
    </Link>
  );
}
