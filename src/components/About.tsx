import { publicUrl } from "../lib/asset"

export function About() {
  return (
    <section id="empresa" className="bg-sand py-16 sm:py-24">
      <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-4 sm:px-5 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12">
        <div className="min-w-0">
          <p className="section-kicker text-green">A empresa</p>
          <h2 className="display mt-3 text-[2.15rem] leading-none text-blue-ink sm:text-6xl">
            Meio século no pó da obra.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            A Locadora Brasil nasceu para tirar peso das costas de quem constrói: locação
            de máquinas pesadas, demolição e terraplenagem com o mesmo time, a mesma
            base e a mesma pressa de quem já viu o canteiro de todos os lados.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Em Contagem, no Jardim Industrial, a operação segue simples — você pede a
            máquina, a gente coloca no chão da obra. Qualidade, rapidez e economia não
            são slogan de folder: são o jeito de manter a frente andando.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Frota para terraplenagem",
              "Entrega no canteiro",
              "Orçamento direto no WhatsApp",
              "Base em Contagem-MG",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm"
              >
                <span className="size-2.5 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <img
            src={publicUrl("images/terraplenagem.jpg")}
            alt="Frente de terraplenagem com máquinas da Locadora Brasil em Contagem"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            className="h-40 w-full rounded-3xl object-cover sm:h-72"
          />
          <img
            src={publicUrl("images/transporte.jpg")}
            alt="Retroescavadeira JCB da Locadora Brasil pronta para entrega na obra"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            className="h-40 w-full rounded-3xl object-cover md:mt-8 sm:h-72"
          />
          <img
            src={publicUrl("images/entrega.jpg")}
            alt="Escavadeira Komatsu da Locadora Brasil sendo transportada em prancha"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            className="h-36 w-full rounded-3xl object-cover sm:h-56"
          />
          <img
            src={publicUrl("images/retro-obra.jpg")}
            alt="Retroescavadeira da Locadora Brasil em serviço interno de demolição"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            className="h-36 w-full rounded-3xl object-cover sm:h-56"
          />
        </div>
      </div>
    </section>
  )
}
