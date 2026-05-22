import { ArrowRight, Camera, Heart, Sparkles } from 'lucide-react'
import { brand } from '../data/landingData'

export function Hero() {
  return (
    <header className="soft-pattern relative overflow-hidden bg-[#FFF8F1]">
      <div className="absolute inset-0">
        <div className="absolute -left-28 top-8 h-80 w-80 rounded-full bg-[#F3D6C8] blur-3xl" />
        <div className="absolute right-[-120px] top-32 h-96 w-96 rounded-full bg-[#D9A77E]/35 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/3 h-96 w-96 rounded-full bg-[#F8E7DC]/80 blur-3xl" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8 lg:px-4">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4A2E25] text-white shadow-lg shadow-[#4A2E25]/20">
            <Heart size={19} fill="currentColor" />
          </div>

          <div>
            <p className="font-display text-xl font-bold leading-none text-[#4A2E25]">
              {brand.name}
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C9866A]">
              {brand.subtitle}
            </p>
          </div>
        </a>

        <a
          href="#links"
          className="hidden rounded-full border border-[#E8CFC2] bg-white/70 px-5 py-3 text-sm font-bold text-[#4A2E25] shadow-sm backdrop-blur transition hover:border-[#C9866A] hover:bg-white sm:inline-flex"
        >
          Agendar agora
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-84px)] max-w-6xl items-center gap-10 px-5 pb-14 pt-6 md:grid-cols-[1fr_0.92fr] md:px-8 lg:px-4">
        <section className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8CFC2] bg-white/75 px-4 py-2 text-sm font-semibold text-[#8A6A5C] shadow-sm backdrop-blur">
            <Sparkles size={16} className="text-[#C9866A]" />
            Ensaios afetivos para guardar para sempre
          </div>

          <div className="space-y-5">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C9866A]">
              Bebes, gestantes e familias
            </p>

            <h1 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight text-[#4A2E25] md:text-7xl">
              Fotografando o amor em cada fase da vida.
            </h1>

            <p className="max-w-xl text-base leading-8 text-[#8A6A5C] md:text-lg">
              Uma experiencia delicada, acolhedora e pensada para transformar
              momentos especiais em memorias cheias de carinho.
            </p>
          </div>

          <div className="grid gap-3 sm:max-w-xl sm:grid-cols-2">
            <a
              href="#links"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C9866A] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-[#C9866A]/25 transition hover:-translate-y-0.5 hover:bg-[#B8735A]"
            >
              Agendar meu ensaio
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8CFC2] bg-white/75 px-7 py-4 text-sm font-extrabold text-[#4A2E25] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#C9866A] hover:bg-white"
            >
              Ver ensaios
              <Camera size={18} />
            </a>
          </div>

          <div className="grid max-w-xl grid-cols-3 gap-3 pt-2">
            <div className="rounded-[24px] border border-[#E8CFC2] bg-white/60 p-4 backdrop-blur">
              <p className="font-display text-2xl font-bold text-[#4A2E25]">01</p>
              <p className="mt-1 text-xs font-semibold text-[#8A6A5C]">Contato simples</p>
            </div>
            <div className="rounded-[24px] border border-[#E8CFC2] bg-white/60 p-4 backdrop-blur">
              <p className="font-display text-2xl font-bold text-[#4A2E25]">02</p>
              <p className="mt-1 text-xs font-semibold text-[#8A6A5C]">Ensaio leve</p>
            </div>
            <div className="rounded-[24px] border border-[#E8CFC2] bg-white/60 p-4 backdrop-blur">
              <p className="font-display text-2xl font-bold text-[#4A2E25]">03</p>
              <p className="mt-1 text-xs font-semibold text-[#8A6A5C]">Memorias</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-[34px] bg-[#D9A77E]/45" />
          <div className="absolute -right-5 bottom-10 h-28 w-28 rounded-full bg-[#F3D6C8]" />

          <div className="group card-hover relative overflow-hidden rounded-[42px] border border-white/90 bg-white p-3 shadow-2xl shadow-[#4A2E25]/10">
            <img
              src={brand.heroImage}
              alt="Ensaio fotografico delicado"
              className="image-zoom h-[460px] w-full rounded-[34px] object-cover md:h-[620px]"
            />

            <div className="absolute inset-x-6 bottom-6 rounded-[30px] border border-white/70 bg-white/82 p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C9866A] text-white">
                  <Heart size={21} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#C9866A]">
                    Memorias com carinho
                  </p>
                  <p className="mt-1 text-lg font-bold leading-snug text-[#4A2E25]">
                    Registros sensiveis para momentos que merecem ficar para sempre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}
