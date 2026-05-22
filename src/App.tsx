import { ConversionLinks } from './components/ConversionLinks'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Photographers } from './components/Photographers'
import { ProcessSteps } from './components/ProcessSteps'
import { ServiceCards } from './components/ServiceCards'

export default function App() {
  return (
    <main className="min-h-screen bg-[#FFFCF8] font-sans">
      <Hero />
      <Photographers />
      <ServiceCards />
      <ProcessSteps />
      <ConversionLinks />
      <Footer />
    </main>
  )
}
