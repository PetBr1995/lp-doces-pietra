import Link from "next/link";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import NavPill from "@/components/NavPill";

function Brand() {
  return (
    <Link href="/" className="-my-5 shrink-0 transition-transform hover:scale-105 hover:-rotate-2">
      <span className="sr-only">Doces Pietra</span>
      <Logo className="w-28 drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)] sm:w-32 lg:w-36" decorative />
    </Link>
  );
}

function Search() {
  return (
    <form
      role="search"
      action="#"
      className="ml-2 flex h-8 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] pl-3.5 pr-3 text-white/80 transition-colors focus-within:border-white/35"
    >
      <input
        type="search"
        name="q"
        aria-label="Buscar doces"
        placeholder="Buscar"
        className="w-20 bg-transparent text-[13px] placeholder:text-white/50 focus:outline-none"
      />
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>
    </form>
  );
}

export default function Header() {
  return (
    <header className="animate-reveal fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-5xl px-4 pt-6 sm:px-6">
      <NavPill logo={<Brand />} search={<Search />} mobile={<MobileMenu />} />
    </header>
  );
}
