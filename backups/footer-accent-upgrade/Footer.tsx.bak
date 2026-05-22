import { Camera, Heart } from 'lucide-react'
import { brand } from '../data/landingData'

export function Footer() {
  return (
    <footer className="bg-[#3B241D] px-5 py-10 text-center text-[#F8E7DC]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#D9A77E]">
          <Camera size={22} />
        </div>

        <div>
          <div className="flex items-center justify-center gap-2 font-display text-2xl font-bold text-white">
            <Heart size={18} className="text-[#D9A77E]" fill="currentColor" />
            {brand.name}
          </div>

          <p className="mt-2 text-sm text-[#F8E7DC]/75">{brand.slogan}</p>
        </div>

        <p className="text-xs text-[#F8E7DC]/45">
          Landing page em desenvolvimento. Imagens e links temporarios.
        </p>
      </div>
    </footer>
  )
}
