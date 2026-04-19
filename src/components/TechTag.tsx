interface TechTagProps {
  tech: string
}

export function TechTag({ tech }: TechTagProps) {
  return <span className="font-['DepartureMono'] text-xs text-gray-900">[{tech}]</span>
}
