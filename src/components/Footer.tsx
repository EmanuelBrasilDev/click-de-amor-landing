import { Heart } from 'lucide-react'
import { brand } from '../data/landingData'

export function Footer() {
  return (
    <footer className="bg-[#3B241D] px-5 py-8 text-center text-[#F8E7DC]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3">
        <div className="flex items-center gap-2 font-semibold text-white">
          <Heart size={18} className="text-[#D9A77E]" />
          {brand.name}
        </div>

        <p className="text-sm text-[#F8E7DC]/75">{brand.slogan}</p>

        <p className="text-xs text-[#F8E7DC]/50">
          Landing page em desenvolvimento. Imagens e links temporarios.
        </p>
      </div>
    </footer>
  )
}
