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
      className={`flex h-8 items-center gap-1.5 rounded-full px-3.5 text-[13px] tracking-wide transition-all ${
        active
          ? "bg-gradient-to-b from-[#f24b9d] to-[#c7317f] text-white shadow-[0_6px_18px_-6px_rgba(236,72,153,0.7),inset_0_1px_0_rgba(255,255,255,0.3)]"
          : "text-white/80 hover:bg-white/[0.07] hover:text-white"
      }`}
    >
      {active && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white/80" />}
      {label}
    </Link>
  );
}
