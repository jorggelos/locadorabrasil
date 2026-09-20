import { steps } from "../content"

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="section-kicker text-green">Fluxo enxuto</p>
          <h2 className="display mt-3 text-4xl leading-none text-ink sm:text-6xl">
            Como funciona
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Três movimentos. Depois disso, a máquina está no canteiro.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-3xl border border-line bg-white p-7 shadow-[0_12px_40px_rgba(18,24,38,0.04)]"
            >
              <p className="display text-5xl text-blue">{step.n}</p>
              <h3 className="mt-4 text-xl font-extrabold text-ink">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
