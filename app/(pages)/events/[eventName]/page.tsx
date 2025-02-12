import { events } from "@/lib/events"
import { redirect } from "next/navigation"

export default async function Page({
  params,
}: {
  params: Promise<{ eventName: string }>
}) {
  const eventName = (await params).eventName
  const event = events.find((event) => event.slug === eventName)

  if (!event) {
    redirect("/404")
  }

  return <div>My Event: {event.title}</div>
}
