import { gallery } from "../content"

export function Gallery() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="section-kicker text-gold">Na obra</p>
          <h2 className="display mt-3 text-4xl leading-none text-ink sm:text-6xl">
            Máquina no chão, não só no anúncio.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((shot, index) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              className={`h-44 w-full rounded-3xl object-cover sm:h-56 ${
                index === 0 ? "md:col-span-2 md:h-72" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
