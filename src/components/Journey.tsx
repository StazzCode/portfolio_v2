import journeyData from '../data/journey.json'

export function Journey() {
  return (
    <section className="mt-16 flex flex-col gap-4">
      <h2 className="font-['DepartureMono'] text-xl text-gray-900">Journey</h2>
      <div className="flex flex-col gap-6">
        {journeyData.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <span className="text-sm text-gray-500">{item.year}</span>
            <span className="text-base text-gray-900">{item.company}</span>
            <span className="text-sm text-gray-500">{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
