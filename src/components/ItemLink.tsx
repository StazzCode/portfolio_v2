interface ItemLinkProps {
  title: string
  url?: string
}

export function ItemLink({ title, url }: ItemLinkProps) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:text-link-blue inline-flex w-fit items-center gap-2 text-lg text-gray-900 sm:text-xl"
      >
        <span className="group-hover:underline">{title}</span>
        <span className="font-['DepartureMono'] text-xl leading-none">↗</span>
      </a>
    )
  }

  return <span className="text-lg text-gray-900 sm:text-xl">{title}</span>
}
