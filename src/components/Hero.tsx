import { getTodayBoard, stats } from "../content"
import { publicUrl } from "../lib/asset"

export function Hero() {
  const todayBoard = getTodayBoard()

  return (
    <section id="inicio" className="relative max-w-full overflow-hidden">
      <img
        src={publicUrl("images/hero.jpg")}
        alt="Escavadeira da Locadora Brasil carregando caminhão em obra de terraplenagem"
        width={1086}
        height={1448}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a12]/92 via-[#12301c]/78 to-[#1e56c9]/25" />
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_top,rgba(232,163,23,0.28),transparent_60%)] lg:block" />

      <div className="relative mx-auto grid w-full min-w-0 max-w-6xl gap-8 px-4 pb-14 pt-28 sm:gap-10 sm:px-5 sm:pb-16 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-20 lg:pt-40">
        <div className="min-w-0">
          <p className="section-kicker text-gold-bright">Locação de máquinas pesadas</p>
          <h1 className="display mt-4 text-[2.15rem] leading-[0.95] text-white sm:text-[3.15rem] lg:text-7xl">
            Terraplenagem e locação
            <span className="block">de máquinas pesadas.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-pretty text-white/85 sm:max-w-lg sm:text-lg">
            Há 50 anos a Locadora Brasil leva máquina pesada até o canteiro: escavadeira,
            retroescavadeira, pá e basculante, com entrega e terraplenagem em Contagem
            e na região.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#maquinas"
              className="inline-flex min-h-12 items-center rounded-full bg-gold px-6 py-3 text-sm font-extrabold text-ink shadow-[0_10px_24px_rgba(232,163,23,0.35)] transition hover:bg-gold-bright"
            >
              Ver máquinas
            </a>
            <a
              href="#contato"
              className="inline-flex min-h-12 items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Fale conosco
            </a>
          </div>
        </div>

        <aside className="w-full min-w-0 max-w-full overflow-hidden rounded-3xl border border-white/15 bg-[#0f1c14]/70 p-4 shadow-2xl backdrop-blur-md sm:p-5">
          <div className="mb-4 flex items-center justify-between text-white/70">
            <p className="text-sm font-semibold">
              Painel · Hoje
              <span className="font-medium text-white/55"> · {todayBoard.weekday}</span>
            </p>
            <span className="size-2 rounded-full bg-gold" />
          </div>
          <ul className="space-y-3">
            {todayBoard.rows.map((row) => (
              <li
                key={`${todayBoard.weekday}-${row.time}-${row.machine}`}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 sm:px-4"
              >
                <p className="text-sm font-bold text-white">
                  {row.time} · {row.machine}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <p className="text-sm text-white/65">{row.detail}</p>
                  <span className="rounded-full bg-green px-2.5 py-1 text-[11px] font-bold text-white">
                    {row.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-2xl bg-gold/15 px-4 py-3 pr-16 text-sm font-semibold leading-relaxed text-gold-bright sm:pr-4">
            {todayBoard.reminder}
          </p>
        </aside>
      </div>

      <div className="relative border-t border-white/10 bg-[#0c1a12]/80">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="min-w-0 px-4 py-5 sm:px-5 sm:py-6">
              <p className="display text-2xl text-gold-bright sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-sm text-white/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hazard-bar" />
    </section>
  )
}
