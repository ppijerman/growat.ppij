import clsx from "clsx"

export type CardColor = "ga-dark" | "ga-blue" | "ga-green"

interface ContentCardProps {
  hoverable: boolean
  color: CardColor
  children?: React.ReactNode
  className?: string
}

export default function ContentCard({
  hoverable,
  color,
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

  const hoverableClass = {
    "ga-dark": "md:border-l-transparent md:hover:border-l-ga-dark",
    "ga-blue": "md:border-l-transparent md:hover:border-l-ga-blue",
    "ga-green": "md:border-l-transparent md:hover:border-l-ga-green",
  }[color]

  return (
    <div
      className={clsx(
        "cursor-pointer flex flex-col outline-2 border-l-25 bg-white px-10 py-5 rounded-[18px]",
        outlineColorClass,
        borderClass,
        hoverable && hoverableClass,
        className
      )}
    >
      {children}
    </div>
  )
}
