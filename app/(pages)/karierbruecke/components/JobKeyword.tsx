interface JobTagProps {
  children: string
}

export default function JobKeyword({ children }: JobTagProps) {
  return (
    <div className="bg-ga-beige text-center size-max py-1 px-3 font-bold rounded-4xl">
      {children}
    </div>
  )
}
