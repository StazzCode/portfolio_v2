import mailIcon from '../assets/svg/mail.svg'
import linkedinIcon from '../assets/svg/linkedin.svg'
import githubIcon from '../assets/svg/github.svg'
import linksData from '../data/links.json'

const iconMap: Record<string, string> = {
  mail: mailIcon,
  linkedin: linkedinIcon,
  github: githubIcon,
}

export function Contact() {
  return (
    <section className="mt-16 mb-8 flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        {linksData.map((link, index) => (
          <div key={index} className="grid grid-cols-[2rem_1fr] items-center gap-2">
            <img
              src={iconMap[link.icon.replace('.svg', '')]}
              alt={link.name}
              className="h-5 w-5 opacity-50 grayscale"
            />
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-900 hover:text-blue-600 hover:underline"
            >
              {link.handle}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
