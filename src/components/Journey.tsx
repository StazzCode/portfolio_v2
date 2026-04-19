import journeyData from '../data/journey.json'
import { ItemLink } from './ItemLink'
import { SectionTitle } from './SectionTitle'
import { TechTag } from './TechTag'

export function Journey() {
  return (
    <section className="mt-20 flex flex-col gap-6">
      <SectionTitle title="Parcours" />
      <div className="flex flex-col gap-10">
        {journeyData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 items-baseline gap-2 sm:grid-cols-[7rem_1fr] sm:gap-8"
          >
            <span className="font-['DepartureMono'] text-sm text-gray-500 sm:text-base">
              {item.year}
            </span>
            <div className="flex flex-col gap-2">
              <ItemLink title={item.company} url={item.url} />
              <span className="text-base text-gray-600">{item.role}</span>
              <span className="text-base leading-relaxed text-gray-500">{item.description}</span>
              {item.tech && item.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex} tech={tech} className="text-sm" />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
