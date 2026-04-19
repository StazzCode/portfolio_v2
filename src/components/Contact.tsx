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
    <section className="mt-20 mb-10 flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        {linksData.map((link, index) => (
          <div key={index} className="flex items-center gap-2.5">
            <img
              src={iconMap[link.icon.replace('.svg', '')]}
              alt={link.name}
              className="h-5 w-5 opacity-50 grayscale"
            />
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-link-blue text-base hover:underline"
            >
              {link.handle}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
