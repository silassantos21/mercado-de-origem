"use client";

import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "O Mercado" },
  { href: "#espacos", label: "Espaços" },
  { href: "#eventos", label: "Eventos" },
  { href: "#lojistas", label: "Seja Lojista" },
  { href: "#filiais", label: "Filiais" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#1A3A0F]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#D4A84B] flex items-center justify-center">
            <Leaf className="w-5 h-5 text-[#1A3A0F]" />
          </div>
          <span
            className="font-display text-lg font-bold tracking-wide text-white drop-shadow"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mercado de Origem
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-[#D4A84B] transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#lojistas"
            className="ml-2 px-5 py-2 rounded-full bg-[#D4A84B] text-[#1A3A0F] text-sm font-semibold hover:bg-[#C4783A] transition-colors duration-200"
          >
            Visite Agora
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1A3A0F]/98 backdrop-blur-md px-6 pt-4 pb-8 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-white/80 hover:text-[#D4A84B] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#lojistas"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 rounded-full bg-[#D4A84B] text-[#1A3A0F] font-semibold text-center"
          >
            Visite Agora
          </a>
        </div>
      )}
    </header>
  );
}
