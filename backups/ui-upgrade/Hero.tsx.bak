import { ArrowRight, Camera, Heart } from 'lucide-react'
import { brand } from '../data/landingData'

export function Hero() {
  return (
    <header className="relative overflow-hidden rounded-b-[42px] bg-[#FFF8F1]">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#F3D6C8] blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#D9A77E]/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[92vh] max-w-6xl items-center gap-10 px-5 py-10 md:grid-cols-[1fr_0.9fr] md:px-8 lg:px-4">
        <section className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8CFC2] bg-white/70 px-4 py-2 text-sm font-medium text-[#8A6A5C] shadow-sm backdrop-blur">
            <Heart size={16} />
            Ensaios afetivos e delicados
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C9866A]">
              {brand.subtitle}
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#4A2E25] md:text-7xl">
              {brand.name}
            </h1>

            <p className="max-w-xl text-2xl font-medium text-[#4A2E25]">
              {brand.slogan}
            </p>

            <p className="max-w-xl text-base leading-8 text-[#8A6A5C] md:text-lg">
              {brand.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#links"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9866A] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#C9866A]/25 transition hover:bg-[#B8735A]"
            >
              Agendar meu ensaio
              <ArrowRight size={18} />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8CFC2] bg-white/70 px-7 py-4 text-sm font-bold text-[#4A2E25] transition hover:bg-white"
            >
              Ver tipos de ensaio
              <Camera size={18} />
            </a>
          </div>
        </section>

        <section className="relative">
          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-[32px] bg-[#D9A77E]/40" />

          <div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-white p-3 shadow-2xl shadow-[#4A2E25]/10">
            <img
              src={brand.heroImage}
              alt="Ensaio fotografico delicado"
              className="h-[460px] w-full rounded-[30px] object-cover md:h-[620px]"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur-md">
              <p className="text-sm font-semibold text-[#C9866A]">
                Memorias com carinho
              </p>
              <p className="mt-1 text-lg font-semibold text-[#4A2E25]">
                Bebes, gestantes e familias registrados com sensibilidade.
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}
