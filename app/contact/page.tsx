import { APP_NAME } from "@/lib/constants"

export const metadata = {
  title: APP_NAME + " | Contact Us",
  description: "Contact us for more information",
}

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
    </main>
  )
}
