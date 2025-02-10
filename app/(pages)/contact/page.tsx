import { APP_NAME } from "@/lib/constants"

export const metadata = {
  title: APP_NAME + " | Contact Us",
  description: "Contact us for more information",
}

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center grow">
      <h1 className="flex text-3xl md:text-5xl font-bold">Contact Us</h1>
    </main>
  )
}
