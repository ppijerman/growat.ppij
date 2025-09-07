import Dompurify from "isomorphic-dompurify"
import { marked } from "marked"

type Props = {
  markdown: string
}
export default async function MarkdownContent({ markdown }: Props) {
  return (
    <div
      className="prose-sm prose-h1:text-sm prose-h1:font-semibold prose-h2:text-sm prose-h3:text-sm prose-h4:text-sm prose-h5:text-sm prose-h6:text-sm prose-a:text-ga-blue prose-a:hover:underline prose-ul:list-disc prose-ol:list-decimal"
      dangerouslySetInnerHTML={{
        __html: Dompurify.sanitize(await marked.parse(markdown)),
      }}
    />
  )
}
