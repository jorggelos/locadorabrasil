import { company, nav, phones } from "../content"
import { publicUrl } from "../lib/asset"

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="hazard-bar" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 pb-24 sm:px-5 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img
            src={publicUrl("images/logo.jpg")}
            alt="Logo da Locadora Brasil, locação de máquinas pesadas"
            width={1600}
            height={395}
            className="h-12 w-auto max-w-full rounded-md bg-white p-1 sm:h-14"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Locação de máquinas pesadas para obras que não podem parar —
            Contagem e região metropolitana de Belo Horizonte.
          </p>
        </div>
        <div>
          <p className="section-kicker text-gold">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm" aria-label="Navegação do rodapé">
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
          <ul className="mt-4 space-y-2 text-sm text-white/75 [overflow-wrap:anywhere]">
            {phones.map((phone) => (
              <li key={phone.e164}>
                <a href={`tel:+${phone.e164}`} className="text-white/75 hover:text-gold-bright">
                  {phone.name}: {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="text-white/75 hover:text-gold-bright">
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={company.mapsUrl}
                className="text-white/75 hover:text-gold-bright"
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.address}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 pb-20 text-center text-xs text-white/50 sm:pb-5">
        © {new Date().getFullYear()} Locadora Brasil. Locação de máquinas pesadas.
      </div>
    </footer>
  )
}
