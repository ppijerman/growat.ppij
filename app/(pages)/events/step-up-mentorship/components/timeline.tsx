type MentorshipTimeline = {
  Timeline: string
  Agenda: string
  Description?: string
}

const mentorshipTimeline: MentorshipTimeline[] = [
  {
    Timeline: "11 Maret - 31 Maret 2025",
    Agenda: "Mentor's Registration",
  },
  {
    Timeline: "23 Maret - 13 April 2025",
    Agenda: "Mentee's Registration",
  },
  {
    Timeline: "14 April - 17 April 2025",
    Agenda: "Mentee Screening & Announcement",
  },
  {
    Timeline: "19 April 2025",
    Agenda: "Summit #1",
    Description: "Optimizing your job application using AI",
  },
  {
    Timeline: "19 April - 25 April 2025",
    Agenda: "Mentoring Topic 1",
    Description: "Group Mentoring and 1-on-1 Session",
  },
  {
    Timeline: "26 April 2025",
    Agenda: "Summit #2",
    Description: "Boosting Confidence and Negotiation Skills in Interviews",
  },
  {
    Timeline: "26 April - 2 Mei 2025",
    Agenda: "Mentoring Topic 2",
    Description: "Group Mentoring and 1-on-1 Session",
  },
  {
    Timeline: "3 Mei 2025",
    Agenda: "Summit #3",
    Description:
      "Networking Strategies and Personal Branding as Indonesians in Germany",
  },
  {
    Timeline: "3 Mei - 9 Mei 2025",
    Agenda: "Mentoring Topic 3",
    Description: "Group Mentoring and 1-on-1 Session",
  },
  {
    Timeline: "10 Mei 2025",
    Agenda: "Closing Ceremony",
    Description: "Focus Group Discussion",
  },
]
export default function Timeline() {
  return (
    <main className="bg-ga-light px-5">
      <div>
        <div className="p-5 pt-10">
          <h1 className="text-3xl leading-6 font-bold lg:text-5xl lg:leading-11">
            <i>Program Timeline</i>
          </h1>
        </div>
        <div className="mt-5">
          <table className="w-full border-collapse text-left ">
            <thead className="bg-gradient-to-r from-ga-blue to-[#a2d3bc] text-ga-light">
              <tr className="indent-2">
                <th className="">Timeline</th>
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
