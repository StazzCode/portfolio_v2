import reactIcon from '../assets/svg/react.svg'
import angularIcon from '../assets/svg/angular.svg'
import javaIcon from '../assets/svg/java.svg'
import springIcon from '../assets/svg/spring.svg'
import postgresqlIcon from '../assets/svg/postgresql.svg'
import mongodbIcon from '../assets/svg/mongodb.svg'
import redisIcon from '../assets/svg/redis.svg'
import dockerIcon from '../assets/svg/docker.svg'
import { TechTag } from './TechTag'
import { SectionTitle } from './SectionTitle'

const skillsData = [
  { name: 'React', url: 'https://react.dev/', icon: reactIcon },
  { name: 'Angular', url: 'https://angular.dev/', icon: angularIcon },
  { name: 'Java', url: 'https://www.java.com/', icon: javaIcon },
  { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot', icon: springIcon },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: postgresqlIcon },
  { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: mongodbIcon },
  { name: 'Redis', url: 'https://redis.io/', icon: redisIcon },
  { name: 'Docker', url: 'https://www.docker.com/', icon: dockerIcon },
]

export function Stack() {
  return (
    <section className="mt-20 flex flex-col gap-6">
      <SectionTitle title="Compétences" />
      <div className="flex flex-wrap gap-3">
        {skillsData.map((skill, index) => (
          <TechTag
            key={index}
            tech={skill.name}
            url={skill.url}
            icon={skill.icon}
            className="text-base sm:text-lg"
          />
        ))}
      </div>
    </section>
  )
}
