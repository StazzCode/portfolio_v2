import skillsData from '../data/skills.json'
import { TechTag } from './TechTag'

export function Skills() {
  return (
    <section className="mt-16 flex flex-col gap-4">
      <h2 className="font-['DepartureMono'] text-2xl text-gray-900"># Stack</h2>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <TechTag key={index} tech={skill} />
        ))}
      </div>
    </section>
  )
}
