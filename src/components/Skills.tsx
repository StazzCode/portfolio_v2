import skillsData from '../data/skills.json'

export function Skills() {
  return (
    <section className="mt-16 flex flex-col gap-4">
      <h2 className="font-['DepartureMono'] text-xl text-gray-900">Stack</h2>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <span key={index} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
