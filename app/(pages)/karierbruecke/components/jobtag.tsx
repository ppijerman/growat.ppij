interface JobTagProps {
  keyword: string
}

export default function JobTag({ keyword }: JobTagProps) {
  return (
    <div className="bg-[#d9d9d9] text-center size-max py-1 px-3 font-bold rounded-4xl">
      {keyword}
    </div>
  )
}
