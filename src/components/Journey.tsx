import journeyData from '../data/journey.json'

export function Journey() {
  return (
    <section className="mt-16 flex flex-col gap-4">
      <h2 className="font-['DepartureMono'] text-2xl text-gray-900"># Journey</h2>
      <div className="flex flex-col gap-8">
        {journeyData.map((item, index) => (
          <div key={index} className="grid grid-cols-[7rem_1fr] items-baseline gap-4 sm:gap-8">
            <span className="text-sm text-gray-500">{item.year}</span>
            <div className="flex flex-col gap-1">
              <span className="text-base text-gray-900">{item.company}</span>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
