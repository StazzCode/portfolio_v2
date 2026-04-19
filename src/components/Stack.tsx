import reactIcon from '../assets/svg/react.svg'
import angularIcon from '../assets/svg/angular.svg'
import javaIcon from '../assets/svg/java.svg'
import springIcon from '../assets/svg/spring.svg'
import postgresqlIcon from '../assets/svg/postgresql.svg'
import { TechTag } from './TechTag'

const skillsData = [
  { name: 'React', url: 'https://react.dev/', icon: reactIcon },
  { name: 'Angular', url: 'https://angular.dev/', icon: angularIcon },
  { name: 'Java', url: 'https://www.java.com/', icon: javaIcon },
  { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot', icon: springIcon },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: postgresqlIcon },
]

export function Stack() {
  return (
    <section className="mt-16 flex flex-col gap-4">
      <h2 className="font-['DepartureMono'] text-2xl text-gray-900"># Stack</h2>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <TechTag key={index} tech={skill.name} url={skill.url} icon={skill.icon} className='text-lg'/>
        ))}
      </div>
    </section>
  )
}
