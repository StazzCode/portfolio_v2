interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className="font-['DepartureMono'] text-2xl text-gray-900 sm:text-3xl">{title}</h2>
}
