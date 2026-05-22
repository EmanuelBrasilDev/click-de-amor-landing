import { steps } from '../data/landingData'

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 lg:px-4">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C9866A]">
          Como funciona
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#4A2E25] md:text-5xl">
          Do primeiro contato ate a entrega das fotos
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon

          return (
            <article
              key={step.title}
              className="rounded-[28px] border border-[#E8CFC2] bg-[#FFFCF8] p-6 shadow-lg shadow-[#4A2E25]/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8E7DC] text-[#C9866A]">
                  <Icon size={22} />
                </div>

                <span className="text-sm font-bold text-[#D9A77E]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#4A2E25]">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-[#8A6A5C]">
                {step.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
