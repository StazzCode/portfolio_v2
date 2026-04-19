import projectsData from '../data/projects.json'

export function Projects() {
  return (
    <section className="mt-16 flex flex-col gap-4">
      <h2 className="font-['DepartureMono'] text-xl text-gray-900">Projects</h2>
      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="flex flex-col gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-900 hover:underline"
            >
              {project.name}
            </a>
            <p className="text-sm text-gray-500">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
