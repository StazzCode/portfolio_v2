import wavingHand from '../Waving Hand.svg'
import heroData from '../data/hero.json'

export function Hero() {
  return (
    <section className="flex flex-col gap-4 pt-16">
      <span className="flex flex-row items-center gap-4">
        <h1 className="font-['DepartureMono'] text-3xl sm:text-4xl">{heroData.name}</h1>
      </span>
      <p className="text-sm text-gray-500">
        {heroData.tagline}
      </p>
      <div className="flex items-center gap-2 text-gray-500">
        <span className="text-sm">{heroData.location}</span>
      </div>
      <p className="mt-8 max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
        {heroData.intro}
      </p>
    </section>
  )
}
