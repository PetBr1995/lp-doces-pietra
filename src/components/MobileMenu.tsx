"use client";

import { useState } from "react";
import NavLink, { leftLinks, rightLinks } from "@/components/NavLink";

// Única parte interativa do header: o resto é renderizado no servidor, sem JavaScript
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-full border border-white/40"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <div
        className={`absolute inset-x-6 top-full grid transition-all duration-500 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            id="menu-mobile"
            aria-label="Menu"
            inert={!open}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-candy-purple/95 p-5 backdrop-blur"
          >
            {[...leftLinks, ...rightLinks].map((l) => (
              <NavLink key={l.label} {...l} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
