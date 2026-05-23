import { Camera, Heart } from 'lucide-react'
import { brand } from '../data/landingData'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#4A2E25] px-5 py-12 text-white">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#C9866A]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#D9A77E]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9866A] text-white shadow-xl shadow-black/15">
            <Heart size={24} fill="currentColor" />
          </div>

          <p className="font-display text-3xl font-bold text-white md:text-4xl">
            {brand.name}
          </p>

          <p className="mt-2 text-sm font-bold uppercase tracking-[0.28em] text-[#F3C7AE]">
            {brand.subtitle}
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#F8E7DC]">
            {brand.slogan}
          </p>

          <div className="mt-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm text-[#F8E7DC]/80">
            <Camera size={16} className="text-[#F3C7AE]" />
            Ensaios delicados para bebês, gestantes e famílias.
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-[#F8E7DC]/75">
            © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
          </p>

          <p className="text-xs text-[#F8E7DC]/55">
            Versão inicial com imagens e links temporários.
          </p>
        </div>
      </div>
    </footer>
  )
}
