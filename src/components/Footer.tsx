import { Leaf } from "lucide-react";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-verde-floresta text-white">
      {/* CTA strip */}
      <div className="bg-dourado py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3
              className="text-2xl font-bold text-verde-floresta"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pronto para visitar o Mercado?
            </h3>
            <p className="text-verde-floresta/70 text-sm mt-1">
              Aberto todos os dias. Entrada gratuita.
            </p>
          </div>
          <a
            href="https://wa.me/5531984212848?text=Olá! Quero planejar minha visita ao Mercado de Origem — Olhos D'Água."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3 rounded-full bg-verde-floresta text-white font-semibold hover:bg-verde-musgo transition-colors duration-200 shadow-md"
          >
            Planejar minha visita →
          </a>
        </div>
      </div>

      {/* Footer main */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-dourado flex items-center justify-center">
              <Leaf className="w-4 h-4 text-verde-floresta" />
            </div>
            <span
              className="text-lg font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Mercado de Origem
            </span>
          </div>
          <p className="text-white/55 text-sm leading-relaxed max-w-xs">
            Centro cultural gastronômico que conecta produtores artesanais ao consumidor final, celebrando a cultura e a gastronomia de Minas Gerais.
          </p>
          <div className="flex items-center gap-4 mt-6">
            {[
              { label: "Instagram", href: "https://www.instagram.com/mercadodeorigem/", icon: <IconInstagram /> },
              { label: "Facebook", href: "#", icon: <IconFacebook /> },
              { label: "YouTube", href: "#", icon: <IconYoutube /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-dourado hover:text-verde-floresta transition-all duration-200"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-dourado mb-4 tracking-wide text-sm uppercase">
            Explore
          </h4>
          <ul className="space-y-2.5">
            {[
              { href: "#sobre", label: "O Mercado" },
              { href: "#espacos", label: "Espaços & Lojas" },
              { href: "#eventos", label: "Agenda de Eventos" },
              { href: "#lojistas", label: "Seja um Lojista" },
              { href: "#filiais", label: "Onde Estamos" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-semibold text-dourado mb-4 tracking-wide text-sm uppercase">
            Contato
          </h4>
          <ul className="space-y-2.5 text-sm text-white/55">
            <li>
              <a
                href="https://wa.me/5531984212848"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp: (31) 98421-2848
              </a>
            </li>
            <li>contato@mercadodeorigem.com.br</li>
            <li className="pt-2 text-white/35 text-xs leading-relaxed">
              R. Adriano Chaves e Matos, 447
              <br />
              Olhos D'Água · Belo Horizonte, MG
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Mercado de Origem. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a
              href="/politica-de-privacidade"
              className="hover:text-white/70 transition-colors underline underline-offset-2"
            >
              Política de Privacidade
            </a>
            <span>·</span>
            <a
              href="/termos-de-uso"
              className="hover:text-white/70 transition-colors underline underline-offset-2"
            >
              Termos de Uso
            </a>
            <span>·</span>
            <span>LGPD — Lei nº 13.709/2018</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
