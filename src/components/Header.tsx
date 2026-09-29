import Link from "next/link";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import NavLink, { leftLinks, rightLinks } from "@/components/NavLink";

function Brand() {
  return (
    <Link href="/" className="shrink-0 transition-transform hover:scale-105 hover:-rotate-2">
      <span className="sr-only">Doces Pietra</span>
      <Logo className="w-24 drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] sm:w-28" decorative />
    </Link>
  );
}

export default function Header() {
  return (
    <header className="animate-reveal relative z-20 mx-auto w-full max-w-7xl px-6 py-5">
      <div className="flex items-center justify-between gap-6">
        <nav aria-label="Principal" className="hidden flex-1 items-center gap-8 lg:flex">
          {leftLinks.map((l) => (
            <NavLink key={l.label} {...l} />
          ))}
        </nav>

        <Brand />

        <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
          <nav aria-label="Secundário" className="flex items-center gap-8">
            {rightLinks.map((l) => (
              <NavLink key={l.label} {...l} />
            ))}
          </nav>

          <form role="search" action="#" className="flex h-9 items-center gap-2 rounded-full border border-white/40 px-3 text-white/80 focus-within:border-candy-yellow">
            <input
              type="search"
              name="q"
              aria-label="Buscar doces"
              placeholder="Buscar"
              className="w-20 bg-transparent text-sm placeholder:text-white/70 focus:outline-none"
            />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </form>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
