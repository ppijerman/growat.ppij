import { EventAgendaTimelineContent } from "@/lib/models/growat-event"

type Props = {
  timeline: EventAgendaTimelineContent
}

export default function EventAgendaTimeline({ timeline }: Props) {
  return (
    <main className="bg-ga-light px-10 lg:px-[5%]">
      <div>
        <div className="pt-10 pb-5">
          <h1 className="text-3xl leading-6 font-bold lg:text-4xl">
            <b>Program Timeline</b>
          </h1>
        </div>
        <div className="mt-5">
          <table className="w-full border-collapse text-left ">
            <thead className="bg-black text-ga-light">
              <tr className="indent-2">
                <th className="w-1/5">
                  Time{timeline.timezone && ` (${timeline.timezone})`}
                </th>
                <th className="">Agenda</th>
              </tr>
            </thead>
            <tbody>
              {timeline.agendas.map((agenda, index) => (
                <tr key={index}>
                  <td className="border-b border-gray-300 p-3">
                    {agenda.time}
                  </td>
                  <td className="border-b border-gray-300 p-3">
                    <strong>{agenda.agenda}</strong>
                    {agenda.description && (
                      <div className="text-sm text-gray-600">
                        {agenda.description}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
