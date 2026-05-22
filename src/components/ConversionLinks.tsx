import { ArrowRight, Heart } from 'lucide-react'
import { conversionLinks } from '../data/landingData'

export function ConversionLinks() {
  return (
    <section id="links" className="soft-pattern bg-[#FFF8F1] py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8 lg:px-4">
        <div className="mx-auto text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9866A] text-white shadow-xl shadow-[#C9866A]/20">
            <Heart size={23} fill="currentColor" />
          </div>

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-[#C9866A]">
            Links de conversão
          </p>

          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-[#4A2E25] md:text-5xl">
            Pronta para registrar seu momento?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#8A6A5C]">
            Escolha uma opção abaixo para falar com a equipe, ver o portfólio,
            conhecer os pacotes ou encontrar o estúdio.
          </p>
        </div>

        <div className="mt-12 grid gap-4">
          {conversionLinks.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className={
                  link.primary
                    ? 'group card-hover flex items-center justify-between gap-4 rounded-[30px] border border-[#C9866A] bg-[#C9866A] p-5 text-white shadow-xl shadow-[#C9866A]/20'
                    : 'group card-hover flex items-center justify-between gap-4 rounded-[30px] border border-[#E8CFC2] bg-[#FFFCF8] p-5 text-[#4A2E25] shadow-lg shadow-[#4A2E25]/5'
                }
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div
                    className={
                      link.primary
                        ? 'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white'
                        : 'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F8E7DC] text-[#C9866A]'
                    }
                  >
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className={
                        link.primary
                          ? 'text-base font-extrabold leading-snug text-white'
                          : 'text-base font-extrabold leading-snug text-[#4A2E25]'
                      }
                    >
                      {link.label}
                    </h3>

                    <p
                      className={
                        link.primary
                          ? 'mt-1 text-sm leading-6 text-white/80'
                          : 'mt-1 text-sm leading-6 text-[#8A6A5C]'
                      }
                    >
                      {link.description}
                    </p>
                  </div>
                </div>

                <div
                  className={
                    link.primary
                      ? 'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15'
                      : 'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8E7DC] text-[#C9866A]'
                  }
                >
                  <ArrowRight
                    size={19}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
