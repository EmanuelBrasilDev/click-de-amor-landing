import { ArrowRight, Camera, Heart, MapPin, MessageCircle } from 'lucide-react'
import { brand } from '../data/landingData'

const footerLinks = [
  {
    label: 'Agendar ensaio',
    href: '#links',
    icon: MessageCircle,
  },
  {
    label: 'Ver ensaios',
    href: '#portfolio',
    icon: Camera,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/clickdeamor2',
    icon: Camera,
  },
  {
    label: 'Localização',
    href: '#links',
    icon: MapPin,
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#3B241D] px-5 py-12 text-[#F8E7DC]">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#C9866A]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#D9A77E]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 rounded-[36px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/10 backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <section className="space-y-5">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9866A] text-white shadow-xl shadow-black/15">
              <Heart size={24} fill="currentColor" />
            </div>

            <div>
              <p className="font-display text-3xl font-bold text-white md:text-4xl">
                {brand.name}
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.28em] text-[#D9A77E]">
                {brand.subtitle}
              </p>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#F8E7DC]/78">
              {brand.slogan} Ensaios delicados para bebês, gestantes e famílias,
              com uma experiência leve, acolhedora e cheia de cuidado.
            </p>

            <a
              href="#links"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C9866A] px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#B8735A]"
            >
              Quero agendar meu ensaio
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
          </section>

          <section className="grid gap-3 sm:grid-cols-2 md:self-center">
            {footerLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.07] p-4 transition hover:-translate-y-1 hover:border-[#D9A77E]/40 hover:bg-white/[0.11]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#D9A77E]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-white">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs text-[#F8E7DC]/55">
                      Acesso rápido
                    </p>
                  </div>
                </a>
              )
            })}
          </section>
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-[#F8E7DC]/55">
            © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
          </p>

          <p className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-[#F8E7DC]/45">
            Versão inicial com imagens e links temporários.
          </p>
        </div>
      </div>
    </footer>
  )
}
