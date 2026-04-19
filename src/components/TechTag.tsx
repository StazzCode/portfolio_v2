interface TechTagProps {
  tech: string
  url?: string
  icon?: string
  className?: string
}

export function TechTag({ tech, url, icon, className = '' }: TechTagProps) {
  const baseClass = `flex items-center gap-1 font-['DepartureMono'] ${className}`
  const withUrlClass = `text-blue-600`
  const withoutUrlClass = `text-gray-900 transition-colors`

  const content = (
    <span className={`${baseClass} ${url ? withUrlClass : withoutUrlClass}`}>
      {icon && <img src={icon} alt="" className="h-5 w-5" />}[{tech}]
    </span>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return content
}
