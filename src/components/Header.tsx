import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { nav } from "../content"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? "bg-paper/95 shadow-[0_10px_40px_rgba(18,24,38,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.jpg"
            alt="Locadora Brasil"
            className="h-10 w-auto max-w-[210px] object-contain sm:h-12 sm:max-w-[260px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-gold-bright ${
                scrolled ? "text-ink/75 hover:text-blue" : "text-white/85"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-extrabold text-ink shadow-[0_8px_20px_rgba(232,163,23,0.35)] transition hover:bg-gold-bright lg:inline-flex"
        >
          Pedir orçamento
        </a>

        <button
          type="button"
          className={`inline-flex size-11 items-center justify-center rounded-full lg:hidden ${
            scrolled || open
              ? "border border-line bg-white text-ink"
              : "border border-white/25 bg-white/10 text-white"
          }`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="display text-2xl text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-extrabold text-ink"
            >
              Pedir orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
