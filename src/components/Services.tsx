import { services } from "../content"

export function Services() {
  return (
    <section id="servicos" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-5">
        <div className="max-w-2xl">
          <p className="section-kicker text-blue">Por que Locadora Brasil</p>
          <h2 className="display mt-3 text-[2.15rem] leading-none text-ink sm:text-6xl">
            Locação de máquinas, terraplenagem e demolição.
          </h2>
          <p className="mt-5 text-base text-muted sm:text-lg">
            Simplicidade para quem contrata, máquina certa para quem executa — locação,
            terraplenagem e demolição no mesmo lugar.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-line bg-white p-5 shadow-[0_12px_40px_rgba(18,24,38,0.04)] sm:p-7"
            >
              <p className="display text-3xl text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl font-extrabold text-ink">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
