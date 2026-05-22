import { ArrowRight } from 'lucide-react'
import { conversionLinks } from '../data/landingData'

export function ConversionLinks() {
  return (
    <section id="links" className="bg-[#4A2E25] py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8 lg:px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D9A77E]">
            Links de conversao
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Pronta para registrar seu momento?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#F8E7DC]">
            Escolha uma opcao abaixo para falar com a equipe, ver o portfolio ou
            conhecer melhor os ensaios.
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
                    ? 'group flex items-center justify-between gap-4 rounded-[28px] bg-[#C9866A] p-5 text-white shadow-xl shadow-black/10 transition hover:bg-[#B8735A]'
                    : 'group flex items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-white/8 p-5 text-white transition hover:bg-white/12'
                }
              >
                <div className="flex items-center gap-4">
                  <div
                    className={
                      link.primary
                        ? 'flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20'
                        : 'flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#D9A77E]'
                    }
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{link.label}</h3>
                    <p className="mt-1 text-sm text-white/75">
                      {link.description}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
