type EventLogo = {
    src: string
    alt: string
  }
  
  type EventSpeaker = {
    name: string
    role: string
    description: string
    socmed: string
    imgUrl: string
  }
  
  type EventInfo = {
    startDate: Date
    endDate?: Date
    time: string
    location: string
    note: string
  }
  
  type Event = {
    id: string
    slug: string
    logos: EventLogo[]
    title: string
    description: string
    eventInfo: EventInfo
    contents: Content[]
    speakers: EventSpeaker[]
    link: string
  }
  
  type IconPointers = {
    icon: string
    text: string
  }
  
  type Content = {
    text?:string
    imageUrl?:string
    iconPointers?:IconPointers[]
  }

//placeholder to satisfy compiler
  export const placeholderEvent: Event = {
    id: "placeholder-id",
    slug: "placeholder-slug",
    logos: [
      { src: "/placeholder-logo.png", alt: "Placeholder logo" }
    ],
    title: "Placeholder Event Title",
    description: "This is a placeholder description for the event.",
    eventInfo: {
      startDate: new Date(),
      time: "00:00 - 00:00",
      location: "Placeholder Location",
      note: "This is a placeholder note."
    },
    contents: [
      {
        text: "This is placeholder content.",
        imageUrl: "/placeholder-image.png",
        iconPointers: [
          {
            icon: "📌",
            text: "Placeholder icon pointer text"
          }
        ]
      }
    ],
    speakers: [
      {
        name: "Jane Doe",
        role: "Speaker",
        description: "Placeholder speaker description",
        socmed: "@placeholder",
        imgUrl: "/placeholder-speaker.png"
      }
    ],
    link: "https://placeholder.link"
  }
  