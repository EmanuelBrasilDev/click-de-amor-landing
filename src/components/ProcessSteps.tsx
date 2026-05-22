import { steps } from '../data/landingData'

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 lg:px-4">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#C9866A]">
          Como funciona
        </p>
        <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-[#4A2E25] md:text-5xl">
          Do primeiro contato ate a entrega das fotos
        </h2>
      </div>

      <div className="relative mt-14">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#E8CFC2] md:block" />

        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <article
                key={step.title}
                className="card-hover relative rounded-[30px] border border-[#E8CFC2] bg-[#FFFCF8] p-6 shadow-lg shadow-[#4A2E25]/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#F8E7DC] text-[#C9866A]">
                    <Icon size={23} />
                  </div>

                  <span className="font-display text-3xl font-bold text-[#D9A77E]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-extrabold text-[#4A2E25]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-[#8A6A5C]">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
