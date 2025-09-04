type WhatSectionProps = {
  title?: string
  paragraphs?: string[]
  accentColorClass?: string
}

const DEFAULT_PARAGRAPHS = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
]

export default function WhatSection1({
  title = "What Section - Alternative 1",
  paragraphs = DEFAULT_PARAGRAPHS,
  accentColorClass = "bg-violet-500"
}: WhatSectionProps) {
  return (
    <main className="bg-ga-light px-10 items-center lg:px-[5%]">
      <div className="pt-10 pb-10">  

        <h2 className="text-3xl leading-tight font-bold lg:text-4xl">
          <b>{title}</b>
        </h2>

        <div className="mt-8 md:ml-5 space-y-6 text-left ">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-[1.05rem] leading-7">
              {p}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}