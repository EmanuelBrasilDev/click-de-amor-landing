import { Camera, MessageCircle } from 'lucide-react'
import { photographers } from '../data/landingData'

export function Photographers() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 lg:px-4">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C9866A]">
          Equipe
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#4A2E25] md:text-5xl">
          Quem registra o seu momento
        </h2>
        <p className="mt-5 text-base leading-8 text-[#8A6A5C]">
          Uma experiencia fotografica leve, humana e acolhedora, conduzida por
          profissionais que cuidam de cada detalhe.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {photographers.map((person) => (
          <article
            key={person.name}
            className="group overflow-hidden rounded-[34px] border border-[#E8CFC2] bg-[#FFFCF8] p-3 shadow-lg shadow-[#4A2E25]/5"
          >
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src={person.image}
                alt={`Foto temporaria de ${person.name}`}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-bold text-[#4A2E25] backdrop-blur">
                <Camera size={16} />
                {person.role}
              </div>
            </div>

            <div className="space-y-4 p-5">
              <div>
                <h3 className="text-2xl font-semibold text-[#4A2E25]">
                  {person.name}
                </h3>
                <p className="mt-2 leading-7 text-[#8A6A5C]">
                  {person.description}
                </p>
              </div>

              <a
                href="#links"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F8E7DC] px-5 py-4 text-sm font-bold text-[#4A2E25] transition hover:bg-[#F3D6C8]"
              >
                Falar com {person.name}
                <MessageCircle size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
