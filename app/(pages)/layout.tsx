import NavBar from "@/components/Navbar/NavBar"
import { GrowatEventRepository } from "@/lib/repositories/growat-event-repository"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const eventsRepository = new GrowatEventRepository()

  const events = await eventsRepository.getAllEvents()
  return (
    <>
      <NavBar events={events} />
      {children}
    </>
  )
}
