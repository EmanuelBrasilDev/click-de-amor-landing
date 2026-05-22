import { Camera, Heart, MessageCircle } from 'lucide-react'
import { photographers } from '../data/landingData'

export function Photographers() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 lg:px-4">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#C9866A]">
          Equipe
        </p>
        <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-[#4A2E25] md:text-5xl">
          Quem registra o seu momento
        </h2>
        <p className="mt-5 text-base leading-8 text-[#8A6A5C]">
          Duas fotografas conduzindo uma experiencia leve, humana e acolhedora,
          com cuidado nos detalhes e sensibilidade no olhar.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {photographers.map((person) => (
          <article
            key={person.name}
            className="group card-hover overflow-hidden rounded-[38px] border border-[#E8CFC2] bg-[#FFFCF8] p-3 shadow-lg shadow-[#4A2E25]/5"
          >
            <div className="relative overflow-hidden rounded-[32px]">
              <img
                src={person.image}
                alt={`Foto temporaria de ${person.name}`}
                className="image-zoom h-96 w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E25]/50 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/88 px-4 py-2 text-sm font-extrabold text-[#4A2E25] shadow-sm backdrop-blur">
                <Camera size={16} className="text-[#C9866A]" />
                {person.role}
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-[26px] border border-white/35 bg-white/88 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-bold text-[#4A2E25]">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-sm font-bold text-[#C9866A]">
                        Fotografia afetiva
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8E7DC] text-[#C9866A]">
                      <Heart size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 p-5">
              <p className="leading-7 text-[#8A6A5C]">
                {person.description}
              </p>

              <a
                href="#links"
                className="group/link inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F8E7DC] px-5 py-4 text-sm font-extrabold text-[#4A2E25] transition hover:bg-[#C9866A] hover:text-white"
              >
                Falar com {person.name}
                <MessageCircle size={18} className="transition group-hover/link:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
