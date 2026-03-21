type TechBadgeProps = {
  name: string
  icon?: React.ReactNode
}

export default function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <span className="flex items-center gap-2 bg-gray-50 text-sm px-3 py-1 rounded border border-gray-800">
        {icon}
        {name}
    </span>
  )
}