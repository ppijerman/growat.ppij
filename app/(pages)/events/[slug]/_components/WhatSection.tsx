import Image from "next/image"
import MarkdownContent from "@/components/MarkdownContent/MarkdownContent"
import { RichTextContent } from "@/lib/models/GrowatEvent"

type Props = {
  richTextContent?: RichTextContent
}

const DEFAULT_PARAGRAPHS = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
]

export default function WhatSection({
  richTextContent
}: Props) {
  return (
    <main className="bg-ga-light px-[6%] w-full">
      <div className="py-10 gap-y-4 flex flex-col">
        <h2 className="text-3xl leading-tight font-bold lg:text-4xl text-center md:text-start">
          <b>Testing</b>
        </h2>
        <div>
          {richTextContent?.imageUrl ? (
              <div className="w-full flex flex-col md:flex-row">
                <div className="md:w-4/7 border-solid border-3 text-justify text-base">
                    {richTextContent?.text.map((block, index) => (
                    <MarkdownContent key={index} className="prose-lg" markdown={block.children.map(child => child.text).join(' ')} />
                  )) || DEFAULT_PARAGRAPHS.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
                <div className="md:w-3/7 border-solid border-3 flex justify-center items-center p-5">
                  <Image
                    src={richTextContent.imageUrl}
                    alt="What Section Image"
                    width={300}
                    height={300}
                    className="object-contain rounded-2xl"
                    />
                </div>
              </div>
            ) : (
              <div className="w-full text-justify text-base text-start">
                {richTextContent?.text.map((block, index) => (
                  <MarkdownContent key={index} className="prose-lg" markdown={block.children.map(child => child.text).join(' ')} />
                )) || DEFAULT_PARAGRAPHS.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            )}
        </div>
      </div>
    </main>
  )
}