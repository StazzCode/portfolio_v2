import projectsData from '../data/projects.json'
import { ItemLink } from './ItemLink'
import { TechTag } from './TechTag'
import { SectionTitle } from './SectionTitle'

export function Projects() {
  return (
    <section className="mt-20 flex flex-col gap-6">
      <SectionTitle title="Projets" />
      <div className="flex flex-col gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 items-baseline gap-2 sm:grid-cols-[7rem_1fr] sm:gap-8"
          >
            <span className="font-['DepartureMono'] text-sm text-gray-500 sm:text-base">
              {project.year}
            </span>
            <div className="flex flex-col gap-3">
              <ItemLink title={project.name} url={project.link} />
              <p className="text-base leading-relaxed text-gray-500">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex} tech={tech} className="text-sm" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
