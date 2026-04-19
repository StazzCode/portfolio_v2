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
              {item.url ? (
                <div className="group inline-flex w-fit items-center gap-1 hover:text-blue-600">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base group-hover:underline"
                >
                  {item.company}
                </a>
                <span className="font-['DepartureMono'] text-lg">↗</span>
                </div>
              ) : (
                <span className="text-base text-gray-900">{item.company}</span>
              )}
              <span className="text-sm text-gray-500">{item.role}</span>
              <span className="text-sm text-gray-500">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
