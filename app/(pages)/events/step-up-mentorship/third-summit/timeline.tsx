type SummitTimeline = {
    Timeline: string
    Agenda: string
    Description?: string
  }
  
  const mentorshipTimeline: SummitTimeline[] = [
    {
      Timeline: "13:00 - 13:10",
      Agenda: "Event start and opening",
    },
    {
        Timeline: "13:10 - 14:00",
        Agenda: "Topic discussion",
    },
    {
        Timeline: "14:00 - 14:30",
        Agenda: "Q&A and Closing",
    },
    {
      Timeline: "14:30 - 15:00",
      Agenda: "Breakout Room Session",
    },
  ]
  export default function Timeline() {
    return (
      <main className="bg-ga-light px-5">
        <div>
          <div className="p-5 pt-10">
            <h1 className="text-3xl leading-6 font-bold lg:text-5xl lg:leading-11">
              Event Timeline
            </h1>
          </div>
          <div className="mt-5">
            <table className="w-full border-collapse text-left ">
              <thead className="bg-gradient-to-r from-ga-blue to-[#a2d3bc] text-ga-light">
                <tr className="indent-2">
                  <th className="">Time</th>
                  <th className="">Agenda</th>
                </tr>
              </thead>
              <tbody>
                {mentorshipTimeline.map((item, index) => (
                  <tr key={index}>
                    <td className="border-b border-gray-300 p-3">
                      {item.Timeline}
                    </td>
                    <td className="border-b border-gray-300 p-3">
                      <strong>{item.Agenda}</strong>
                      {item.Description && (
                        <div className="text-sm text-gray-600">
                          {item.Description}
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
  