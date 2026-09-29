import Link from "next/link";

export default function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <section className="scallop-bottom relative isolate z-10 flex min-h-screen flex-col overflow-hidden bg-candy-purple">
      {/* Fundo: gradientes radiais + vinheta */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 50% 38%, rgba(160, 60, 200, 0.55), transparent 70%)",
            "radial-gradient(ellipse 45% 35% at 15% 85%, rgba(224, 69, 123, 0.28), transparent 70%)",
            "radial-gradient(ellipse 45% 35% at 85% 85%, rgba(110, 40, 200, 0.35), transparent 70%)",
            "linear-gradient(180deg, #3a0f55 0%, #2a0b3d 55%, #1e0630 100%)",
          ].join(","),
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(10, 0, 20, 0.6) 100%)" }}
      />
      {/* brilhos flutuantes */}
      <div aria-hidden className="absolute left-[12%] top-[30%] -z-10 h-40 w-40 animate-float will-change-transform rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div aria-hidden className="absolute right-[10%] top-[45%] -z-10 h-52 w-52 animate-float will-change-transform rounded-full bg-violet-500/20 blur-3xl [animation-delay:-4s]" />


      {children}

      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 pb-32 pt-10 text-center">
        <span className="animate-reveal [animation-delay:100ms] inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-candy-yellow" />
          Escolha seu doce favorito
        </span>

        <h1 className="animate-rise mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          Ganhe 20% OFF na nossa
          <br className="hidden sm:block" /> Doceria de Festas
        </h1>

        <p className="animate-reveal [animation-delay:250ms] mt-6 max-w-xl text-sm text-white/75 sm:text-base">
          Só os ingredientes mais frescos, para você ter uma experiência
          doce e inesquecível.
        </p>

        <Link href="#encomendas" className="animate-reveal [animation-delay:400ms] group relative mt-10 inline-flex text-sm font-medium text-white">
          {/* filtro "gooey": funde a pílula e o círculo com uma cintura suave */}
          <svg className="absolute h-0 w-0" aria-hidden>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" />
            </filter>
          </svg>
          <span aria-hidden className="absolute inset-0 flex [filter:url(#goo)]">
            <span className="flex-1 rounded-full bg-[#c7317f] transition-colors group-hover:bg-[#d63a8e]" />
            <span className="ml-0.5 w-11 rounded-full bg-[#c7317f] transition-colors group-hover:bg-[#d63a8e]" />
          </span>
          <span className="relative flex h-11 items-center px-7">Encomendar</span>
          <span className="relative ml-0.5 grid h-11 w-11 place-items-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-45">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
