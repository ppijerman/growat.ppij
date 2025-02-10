import { PATHS } from "@/lib/constants"

type NavItem = {
  href: string
  label: string
  description?: string
  submenus?: NavItem[]
}

export const NavItems: NavItem[] = [
  {
    href: PATHS.HOME,
    label: "Home",
  },
  {
    href: "#event-timeline",
    label: "Events",
    submenus: [
      {
        href: PATHS.HOME,
        label: "AIPSE Workshop",
        description: "AI stuff",
      },
    ],
  },
]
