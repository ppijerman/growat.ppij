import clsx from "clsx"
import Dompurify from "isomorphic-dompurify"
import { marked } from "marked"

type Props = {
  markdown: string
  className?: string
}
export default async function MarkdownContent({ markdown, className }: Props) {
  return (
    <div
      className={clsx(
        className ||
          "prose prose-headings:font-bold prose-ol:list-decimal prose-ul:list-disc"
      )}
      dangerouslySetInnerHTML={{
        __html: Dompurify.sanitize(await marked.parse(markdown)),
      }}
    />
  )
}
