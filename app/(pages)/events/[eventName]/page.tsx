export default async function Page({
  params,
}: {
  params: Promise<{ eventName: string }>
}) {
  const eventName = (await params).eventName
  return <div>My Post: {eventName}</div>
}
