import { services } from '../data/landingData'

export function ServiceCards() {
  return (
    <section id="portfolio" className="soft-pattern bg-[#FFF8F1] py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#C9866A]">
              Ensaios
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-[#4A2E25] md:text-5xl">
              Para cada fase, uma memoria especial
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#8A6A5C]">
            Cards visuais para apresentar os principais caminhos de conversao:
            gestante, bebe e familia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group card-hover overflow-hidden rounded-[36px] border border-[#E8CFC2] bg-white p-3 shadow-lg shadow-[#4A2E25]/5"
              >
                <div className="relative overflow-hidden rounded-[30px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="image-zoom h-72 w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E25]/55 via-[#4A2E25]/5 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-[#C9866A] shadow-lg backdrop-blur">
                    <Icon size={22} />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 p-5">
                  <p className="leading-7 text-[#8A6A5C]">
                    {service.description}
                  </p>

                  <a
                    href="#links"
                    className="inline-flex w-full items-center justify-center rounded-full border border-[#E8CFC2] bg-[#FFFCF8] px-5 py-3 text-sm font-extrabold text-[#4A2E25] transition hover:border-[#C9866A] hover:bg-[#F8E7DC]"
                  >
                    Quero esse ensaio
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
