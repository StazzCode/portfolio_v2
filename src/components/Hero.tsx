import locationIcon from '../assets/svg/location.svg'
import heroData from '../data/hero.json'

export function Hero() {
  return (
    <section className="flex flex-col gap-4 pt-10 sm:pt-16">
      <h1 className="font-['DepartureMono'] text-4xl text-gray-900 sm:text-5xl">{heroData.name}</h1>
      <p className="text-lg text-gray-500 sm:text-xl">{heroData.tagline}</p>
      <div className="flex items-center gap-1.5 text-base text-gray-500">
        <img src={locationIcon} alt="" className="h-4 w-4" />
        <span>{heroData.location}</span>
      </div>
      <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">{heroData.intro}</p>
    </section>
  )
}
