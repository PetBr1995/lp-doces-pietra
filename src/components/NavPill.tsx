"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { leftLinks, rightLinks, type NavItem } from "@/components/NavLink";

const allLinks = [...leftLinks, ...rightLinks];
const initialActive = allLinks.find((l) => l.active)?.href ?? allLinks[0].href;

// Destaque rosa único que "caminha" até o item ativo, passando por baixo da logo
const pillClass =
  "bg-gradient-to-b from-[#f24b9d] to-[#c7317f] shadow-[0_6px_18px_-6px_rgba(236,72,153,0.7),inset_0_1px_0_rgba(255,255,255,0.3)]";

export default function NavPill({
  logo,
  search,
  mobile,
}: {
  logo: React.ReactNode;
  search: React.ReactNode;
  mobile: React.ReactNode;
}) {
  const [active, setActive] = useState(initialActive);
  const boxRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const placed = useRef(false);

  // Posiciona o destaque direto no DOM (sem re-render) e anima via CSS
  const place = useCallback(() => {
    const box = boxRef.current;
    const indicator = indicatorRef.current;
    const link = linkRefs.current[active];
    if (!box || !indicator) return;
    if (!link || !link.offsetWidth) {
      indicator.style.opacity = "0";
      return;
    }
    const x = link.getBoundingClientRect().left - box.getBoundingClientRect().left;
    if (!placed.current) indicator.style.transition = "none";
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.transform = `translateX(${x}px)`;
    indicator.style.opacity = "1";
    if (!placed.current) {
      placed.current = true;
      box.dataset.ready = "true";
      requestAnimationFrame(() => (indicator.style.transition = ""));
    }
  }, [active]);

  useLayoutEffect(place, [place]);

  useEffect(() => {
    const ro = new ResizeObserver(place);
    if (boxRef.current) ro.observe(boxRef.current);
    document.fonts?.ready.then(place);
    return () => ro.disconnect();
  }, [place]);

  // Acompanha a rolagem: o destaque vai até a seção visível
  useEffect(() => {
    const sections = allLinks
      .map((l) => l.href)
      .filter((h) => h.length > 1 && document.getElementById(h.slice(1)));
    if (!sections.length) return;

    const onScroll = () => {
      const line = window.innerHeight * 0.4;
      let current = "#";
      for (const href of sections) {
        if (document.getElementById(href.slice(1))!.getBoundingClientRect().top <= line) current = href;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (l: NavItem) => {
    const isActive = l.href === active;
    return (
      <Link
        key={l.label}
        href={l.href}
        ref={(el) => {
          linkRefs.current[l.href] = el;
        }}
        onClick={() => setActive(l.href)}
        aria-current={isActive ? "page" : undefined}
        className={`relative z-10 flex h-8 items-center rounded-full pl-6 pr-3.5 text-[13px] tracking-wide transition-colors duration-500 ${
          isActive ? "text-white" : "text-white/75 hover:text-white"
        } ${isActive ? `${pillClass} group-data-[ready=true]/pill:bg-none group-data-[ready=true]/pill:shadow-none` : ""}`}
      >
        {/* antes do JS carregar, o próprio link ativo mostra o destaque */}
        {isActive && (
          <span aria-hidden className="absolute left-[11px] h-1.5 w-1.5 rounded-full bg-white/80 group-data-[ready=true]/pill:hidden" />
        )}
        {l.label}
      </Link>
    );
  };

  return (
    <div
      ref={boxRef}
      className="group/pill relative flex items-center justify-between gap-4 rounded-full py-1.5 pl-4 pr-1.5 lg:px-1.5"
    >
      <span
        ref={indicatorRef}
        aria-hidden
        className={`pointer-events-none absolute left-0 top-1/2 -mt-4 hidden h-8 rounded-full opacity-0 transition-[transform,width,opacity] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] lg:block ${pillClass}`}
      >
        <span className="absolute left-[11px] top-1/2 -mt-[3px] h-1.5 w-1.5 rounded-full bg-white/80" />
      </span>

      <nav aria-label="Principal" className="hidden flex-1 items-center lg:flex">
        {leftLinks.map(renderLink)}
      </nav>

      <div className="relative z-20">{logo}</div>

      <div className="hidden flex-1 items-center justify-end lg:flex">
        <nav aria-label="Secundário" className="flex items-center">
          {rightLinks.map(renderLink)}
        </nav>
        {search}
      </div>

      {mobile}
    </div>
  );
}
