import { PATHS } from "@/lib/constants"

type NavItem = {
  href: string
  label: string
  description?: string
  submenus?: NavItem[]
}

export const navItems: NavItem[] = [
  {
    href: PATHS.HOME,
    label: "Home",
    submenus: [
      {
        href: PATHS.HOME,
        label: "AIPSE Workshop",
        description: "AI stuff",
      },
      {
        href: PATHS.HOME,
        label: "AIPSE Workshop",
        description: "AI stuff",
      },
    ],
  },
  {
    href: PATHS.HOME,
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
