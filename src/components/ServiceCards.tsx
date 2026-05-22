import { services } from '../data/landingData'

export function ServiceCards() {
  return (
    <section id="portfolio" className="bg-[#FFF8F1] py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C9866A]">
            Ensaios
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#4A2E25] md:text-5xl">
            Para cada fase, uma memoria especial
          </h2>
          <p className="mt-5 text-base leading-8 text-[#8A6A5C]">
            A landing destaca os principais tipos de ensaio da marca, com cards
            visuais que depois podem receber fotos reais do estudio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="overflow-hidden rounded-[32px] border border-[#E8CFC2] bg-white shadow-lg shadow-[#4A2E25]/5"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#C9866A] shadow-lg">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="space-y-3 p-6">
                  <h3 className="text-xl font-semibold text-[#4A2E25]">
                    {service.title}
                  </h3>
                  <p className="leading-7 text-[#8A6A5C]">
                    {service.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
