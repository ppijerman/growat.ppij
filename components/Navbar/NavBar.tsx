"use client"

import GrowAtLogo from "@/public/assets/logogrowat.png"
import Image from "next/image"
import Link from "next/link"
import { PATHS } from "@/lib/constants"
import { usePathname } from "next/navigation"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { GrowatEvent } from "@/lib/models/GrowatEvent"

type NavItem = {
  id: string
  href: string
  label: string
  description?: string
  submenus?: NavItem[]
}

const NavItems: NavItem[] = [
  {
    id: "home",
    href: PATHS.HOME,
    label: "Home",
  },
  {
    id: "upcoming-events",
    href: "/",
    label: "Upcoming Events",
    description: "See all upcoming events",
  },
  {
    id: "past-events",
    href: "/",
    label: "Past Events",
    description: "Browse past events",
  },
  {
    id: "karierbruecke",
    href: "/karierbruecke",
    label: "KarierBrücke",
    description: "See Job Offers",
  },
]

function fetchEventSubmenus(events: GrowatEvent[], navItems: NavItem[]) {
  const upcomingEvents = events
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
    .filter(
      (event) =>
        (event.endDate && event.endDate > new Date()) ||
        (!event.endDate && event.startDate > new Date())
    )

  // Map upcoming events to submenus
  const upcomingEventsSubmenu = navItems?.find(
    (submenu) => submenu.id === "upcoming-events"
  )

  if (upcomingEventsSubmenu && upcomingEvents.length > 0) {
    upcomingEventsSubmenu.submenus = upcomingEvents.map((event) => ({
      id: event.slug,
      href: "/events/" + event.slug,
      label: event.title,
      description: event.description,
    }))
  } else if (upcomingEventsSubmenu) {
    // if no upcoming events, put "check back later" submenu
    upcomingEventsSubmenu.submenus = [
      {
        id: "no-upcoming-events",
        href: "/",
        label: "Check back soon!",
      },
    ]
  }

  const pastEvents = events.filter(
    (event) =>
      (event.endDate && event.endDate < new Date()) ||
      (!event.endDate && event.startDate < new Date())
  )
  const pastEventsSubmenu = navItems?.find(
    (submenu) => submenu.id === "past-events"
  )
  if (pastEventsSubmenu) {
    pastEventsSubmenu.submenus = pastEvents.map((event) => ({
      id: event.slug,
      href: "/events/" + event.slug,
      label: event.title,
      description: event.description,
    }))
  }
}

interface NavBarProps {
  events: GrowatEvent[]
}

export default function NavBar({ events }: NavBarProps) {
  const pathname = usePathname()

  // Define a function to determine if a link is active based on the pathname
  const isActive = (linkPath: string) => {
    if (linkPath === "/") return pathname === "/"
    return pathname === linkPath || pathname.includes(linkPath)
  }

  const navItems = NavItems
  fetchEventSubmenus(events, navItems)

  return (
    <div className="flex h-20 w-full px-10 items-center lg:px-[5%] z-50 bg-ga-light">
      <Link href={PATHS.HOME} className="max-h-20">
        <Image src={GrowAtLogo} alt="GrowAt Logo" className="w-32" />
      </Link>

      {/* small screen */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden ml-auto">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetTitle className="hidden">Menu</SheetTitle>
        <SheetContent side="right">
          <div className="grid gap-4 py-6">
            {navItems.map((item, index) =>
              item.submenus ? (
                <Collapsible className="grid gap-4" key={index}>
                  <CollapsibleTrigger className="flex w-full items-center text-xl [&[data-state=open]>svg]:rotate-90 py-2">
                    <Link href={item.href}>{item.label} </Link>
                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="-mx-6 grid gap-6 bg-ga-beige p-6">
                      {item.submenus.map((submenu, subIndex) => (
                        <Link
                          href={submenu.href}
                          className="group grid h-auto w-full justify-start gap-1 bg-transparent"
                          key={subIndex}
                          prefetch={false}
                        >
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            {submenu.label}
                          </div>
                          {submenu.description && (
                            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {submenu.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  href={item.href}
                  className="flex flex-col w-full items-start py-2 text-xl"
                  key={index}
                  prefetch={false}
                >
                  <div>{item.label}</div>
                  {item.description && (
                    <div className="text-sm leading-snug text-muted-foreground">
                      {item.description}
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* large screen */}
      <div className="ml-auto hidden lg:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {NavItems.map((item, index) =>
              item.submenus ? (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger
                    className={`hover:text-ga-blue bg-ga-light hover:bg-ga-light focus:bg-gray-100 text-xl font-medium ${
                      isActive(item.href) ? "text-primary2" : ""
                    }`}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid md:w-[400px] lg:w-[500px] p-2">
                      {item.submenus.map((submenu, subIndex) => (
                        <NavigationMenuLink asChild key={subIndex}>
                          <Link
                            href={submenu.href}
                            className="group  grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-ga-beige hover:text-ga-blue focus:bg-gray-100 focus:outline-hidden"
                            prefetch={false}
                          >
                            <div className="text-sm font-bold leading-none">
                              {submenu.label}
                            </div>
                            {submenu.description && (
                              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {submenu.description}
                              </div>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuLink asChild key={index}>
                  <Link
                    href={item.href}
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl font-medium transition-colors hover:text-ga-blue focus:bg-gray-100 focus:outline-hidden ${
                      isActive(item.href) ? "text-ga-blue" : ""
                    }`}
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

function ChevronRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
