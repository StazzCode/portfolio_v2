import projectsData from '../data/projects.json'
import { TechTag } from './TechTag'

export function Projects() {
  return (
    <section className="mt-16 flex flex-col gap-4">
      <h2 className="font-['DepartureMono'] text-2xl text-gray-900"># Projects</h2>
      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="grid grid-cols-[7rem_1fr] items-baseline gap-4 sm:gap-8">
            <span className="text-sm text-gray-500">{project.year}</span>
            <div className="flex flex-col gap-2">
              <div className="group inline-flex w-fit items-center gap-1 hover:text-blue-600">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base group-hover:underline"
                >
                  {project.name}
                </a>
                <span className="font-['DepartureMono'] text-lg">↗</span>
              </div>
              <p className="text-sm text-gray-500">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex} tech={tech} className="text-xs" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
