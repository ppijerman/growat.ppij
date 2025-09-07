import clsx from "clsx"

export type CardColor = "ga-dark" | "ga-blue" | "ga-green"

interface ContentCardProps {
  borderEffect: boolean
  hoverable: boolean
  color: CardColor
  children?: React.ReactNode
  className?: string
}

export default function ContentCard({
  borderEffect,
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
    "ga-dark": "border-l-transparent hover:border-l-ga-dark",
    "ga-blue": "border-l-transparent hover:border-l-ga-blue",
    "ga-green": "border-l-transparent hover:border-l-ga-green",
  }[color]

  return (
    <div
      className={clsx(
        "cursor-pointer flex flex-col outline-2 md:border-l-25 bg-white px-6 md:pl-6 md:pr-10 py-5 rounded-3xl",
        outlineColorClass,
        borderEffect && borderClass,
        hoverable && hoverableClass,
        className
      )}
    >
      {children}
    </div>
  )
}
