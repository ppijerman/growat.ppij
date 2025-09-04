type WhatSectionAlt2Props = {
  title?: string
  paragraphs?: string[]
  imageSrc?: string
  imageAlt?: string
  borderColorClass?: string
}

const DEFAULT_PARAGRAPHS = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
]

export default function WhatSection2({
  title = "What Section - Alternative 2",
  paragraphs = DEFAULT_PARAGRAPHS,
  imageSrc,
  imageAlt = "Illustration",
  borderColorClass = "border-gray-400"
}: WhatSectionAlt2Props) {
  return (
    <main className="bg-ga-light px-10 items-center lg:px-[5%]">
      <div className="pt-10 pb-10">
        <h2 className="text-3xl leading-tight font-bold lg:text-4xl">
          <b>{title}</b>
        </h2>

        <div className="mt-8 md:ml-8 grid gap-8 md:grid-cols-4">
          {/* Left: text */}
          <div className="pt-3 pb-3 col-span-4 md:col-span-3 space-y-6 text-justify pr-0 md:pr-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-[1.05rem] leading-7 md:pl-8 md:pr-8">
                {p}
              </p>
            ))}
          </div>

          {/* Right: image */}
          <div className={`col-span-4 md:col-span-1 p-4 md:p-6`}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-contain rounded-md"
              />
            ) : (
              <div className="bg-gray-200 relative rounded-3xl border-4 border-dotted border-black 
                              w-full h-full flex items-center justify-center px-2">
                <span
                  className="text-center text-3xl font-semibold text-gray-600 leading-snug break-words"
                >
                  Insert <br /> Image / Illustration <br /> here
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}