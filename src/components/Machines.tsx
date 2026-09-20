import { ArrowUpRight } from "lucide-react"
import { machines } from "../content"

type MachinesProps = {
  onRequest: (machineName: string) => void
}

export function Machines({ onRequest }: MachinesProps) {
  return (
    <section id="maquinas" className="bg-green-deep py-16 text-white sm:py-24">
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-5">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker text-gold-bright">Máquinas disponíveis</p>
            <h2 className="display mt-3 text-[2.15rem] leading-none sm:text-6xl">
              Frota para terraplenagem, não para catálogo de revista.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
            Escavadeira hidráulica, retroescavadeira, mini escavadeira, mini
            carregadeira, pá, rolo compactador e caminhões basculantes. Escolha a
            máquina e peça o orçamento.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine) => (
            <article
              key={machine.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#163522]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163522] to-transparent" />
              </div>
              <div className="px-5 pb-5">
                <h3 className="display text-2xl">{machine.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{machine.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {machine.uses.map((use) => (
                    <span
                      key={use}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gold-bright"
                    >
                      {use}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => onRequest(machine.name)}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-gold-bright transition hover:text-white"
                >
                  Solicitar esta máquina
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
