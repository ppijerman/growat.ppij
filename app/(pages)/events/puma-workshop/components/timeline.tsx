type MentorshipTimeline = {
  Timeline: string
  Agenda: string
  Description?: string
}

const mentorshipTimeline: MentorshipTimeline[] = [
  {
    Timeline: "12:00-13:00",
    Agenda: "Peserta berkumpul di Erlangen Hbf jam 12.00 untuk jalan bersama ke Herzogenaurach dan registrasi di PUMA",
  },
  {
    Timeline: "13:00-13:30",
    Agenda: "Welcoming & Registration",
  },
  {
    Timeline: "13:00-14:30",
    Agenda: "Opening Company Presentation, (About PUMA, Career Opportunity, Application Process, Employee Journey Insights), Q&A Session",
  },
  {
    Timeline: "14:00-15:30",
    Agenda: "Company Tour",
  },
  {
    Timeline: "15:30-16:00",
    Agenda: "Networking & Closing",
  },
  {
    Timeline: "16:00-17:00",
    Agenda: "Visiting Outlet / Free Time",
  },
 
]
export default function Timeline() {
  return (
    <main className="bg-ga-light px-10 lg:px-[5%]">
      <div>
        <div className="p-5 pt-10">
          <h1 className="text-3xl leading-6 font-bold lg:text-5xl lg:leading-11">
            <b>Program Timeline</b>
          </h1>
        </div>
        <div className="mt-5">
          <table className="w-full border-collapse text-left ">
            <thead className="bg-black text-ga-light">
              <tr className="indent-2">
                <th className="">Time(CEST)</th>
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
