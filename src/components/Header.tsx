"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";

const leftLinks = [
  { label: "Início", href: "#", active: true },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Encomendas", href: "#encomendas" },
];

const rightLinks = [
  { label: "Páginas", href: "#paginas" },
  { label: "Loja", href: "#loja" },
  { label: "Contato", href: "#contato" },
];

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-1.5 text-sm transition-colors hover:text-candy-yellow ${
        active ? "text-candy-yellow" : "text-white/90"
      }`}
    >
      {active && <span className="h-1.5 w-1.5 rounded-full bg-candy-yellow" />}
      {label}
    </Link>
  );
}

function Brand() {
  return (
    <Link href="/" aria-label="Doces Pietra - início" className="shrink-0 transition-transform hover:scale-105 hover:-rotate-2">
      <Logo className="w-24 drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] sm:w-28" />
    </Link>
  );
}

function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-white transition hover:border-candy-yellow hover:text-candy-yellow"
    >
      {children}
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="animate-reveal relative z-20 mx-auto w-full max-w-7xl px-6 py-5">
      <div className="flex items-center justify-between gap-6">
        <nav className="hidden flex-1 items-center gap-8 lg:flex">
          {leftLinks.map((l) => (
            <NavLink key={l.label} {...l} />
          ))}
        </nav>

        <Brand />

        <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
          {rightLinks.map((l) => (
            <NavLink key={l.label} {...l} />
          ))}

          <div className="flex items-center gap-2">
            <label className="flex h-9 items-center gap-2 rounded-full border border-white/40 px-3 text-white/80 focus-within:border-candy-yellow">
              <input
                type="search"
                placeholder="Buscar"
                className="w-20 bg-transparent text-sm placeholder:text-white/70 focus:outline-none"
              />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
            </label>
            <IconButton label="Carrinho">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 7h12l-1 13H7L6 7Z" strokeLinejoin="round" />
                <path d="M9 7a3 3 0 0 1 6 0" />
              </svg>
            </IconButton>
            <IconButton label="Minha conta">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0" strokeLinecap="round" />
              </svg>
            </IconButton>
          </div>
        </div>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/40 lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        className={`grid transition-all duration-500 lg:hidden ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            inert={!open}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-candy-purple/90 p-5 backdrop-blur"
          >
            {[...leftLinks, ...rightLinks].map((l) => (
              <NavLink key={l.label} {...l} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
