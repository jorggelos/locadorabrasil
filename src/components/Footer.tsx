import { company, nav, phones } from "../content"

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="hazard-bar" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img src="/images/logo.jpg" alt="Locadora Brasil" className="h-14 w-auto rounded-md bg-white p-1" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Locação de máquinas pesadas para obras que não podem parar —
            Contagem e região metropolitana de Belo Horizonte.
          </p>
        </div>
        <div>
          <p className="section-kicker text-gold">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-white/75 hover:text-gold-bright">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="section-kicker text-gold">Contato</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {phones.map((phone) => (
              <li key={phone.e164}>
                {phone.name}: {phone.display}
              </li>
            ))}
            <li>{company.email}</li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Locadora Brasil. Locação de máquinas pesadas.
      </div>
    </footer>
  )
}
