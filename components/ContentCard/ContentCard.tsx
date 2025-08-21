import clsx from "clsx"

export type CardColor = "ga-dark" | "ga-blue" | "ga-green"

interface ContentCardProps {
  hoverable?: boolean
  color?: CardColor
  children?: React.ReactNode
  className?: string
}

export default function ContentCard({
  hoverable = false,
  color = "ga-green",
  children,
  className,
}: ContentCardProps) {
  const outlineColorClass = {
    "ga-dark": "outline-ga-dark",
    "ga-blue": "outline-ga-blue",
    "ga-green": "outline-ga-green",
  }[color]

  const borderClass = {
    "ga-dark": "border-l-ga-dark",
    "ga-blue": "border-l-ga-blue",
    "ga-green": "border-l-ga-green",
  }[color]
  return (
    <div
      className={clsx(
        "flex flex-col outline-2 border-l-18 bg-white p-4 rounded-[18px]",
        outlineColorClass,
        hoverable
          ? `${borderClass} md:border-transparent md:hover:${borderClass}`
          : borderClass,
        className
      )}
    >
      {children}
    </div>
  )
}
