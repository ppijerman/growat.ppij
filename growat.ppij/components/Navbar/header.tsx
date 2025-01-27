"use client";

import GrowAtLogo from "@/assets/logogrowat.png";
import PPIJLogo from "@/assets/logoppij.png";
import Image from "next/image";
import Link from "next/link";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PATHS } from "@/lib/constants";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

type NavItem = {
  href: string;
  label: string;
  description?: string;
  submenus?: NavItem[];
};

const navItems: NavItem[] = [
  { href: PATHS.HOME, label: "Home" },
  {
    href: PATHS.ABOUT,
    label: "About",
    submenus: [
      {
        href: PATHS.ABOUT,
        label: "About",
        description: "Learn more about ICONIC's objectives and goals",
      },
    ],
  },
  { href: PATHS.PARTNERSHIP, label: "Partnership" },
  { href: PATHS.EVENTS, label: "Events" },

];

export function GrowatHeader() {
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // show/hide header on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Define a function to determine if a link is active based on the pathname
  const isActive = (linkPath: string) => {
    if (linkPath === "/") return pathname === "/";
    return pathname === linkPath || pathname.includes(linkPath);
  };

  return (
    <motion.header
      className="sticky top-0 flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white z-50"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Link href={PATHS.HOME}>
      <div className="flex items-center space-x-2">
        <Image src={GrowAtLogo} alt="GrowAt Logo" className="w-12" />
        <Image src={PPIJLogo} alt="PPIJ Logo" className="w-12" />
      </div>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden ml-auto">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image
              src={PPIJLogo}
              alt="PPIJ Logo"
              className="w-[48px] md:w-[60px] p-2 transition"
            />
            <span className="text-lg font-bold">Growat.ppij</span>
          </Link>
          <div className="grid gap-4 py-6">
            {navItems.map((item, index) =>
              item.submenus ? (
                <Collapsible className="grid gap-4" key={index}>
                  <Link href={item.href}>
                    <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90 py-2">
                      {item.label}{" "}
                      <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                    </CollapsibleTrigger>
                  </Link>
                  <CollapsibleContent>
                    <div className="-mx-6 grid gap-6 bg-muted p-6">
                      {item.submenus.map((submenu, subIndex) => (
                        <Link
                          href={submenu.href}
                          className="group grid h-auto w-full justify-start gap-1"
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
                  className="flex flex-col w-full items-start py-2 text-lg font-semibold"
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

      {/* mobile */}
      <div className="ml-auto hidden lg:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item, index) =>
              item.submenus ? (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger
                    className={`hover:text-accent bg-white hover:bg-white focus:bg-gray-100 ${
                      isActive(item.href) ? "text-primary2" : ""
                    }`}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] p-2">
                      {item.submenus.map((submenu, subIndex) => (
                        <NavigationMenuLink asChild key={subIndex}>
                          <Link
                            href={submenu.href}
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-accent focus:bg-gray-100 focus:outline-none"
                            prefetch={false}
                          >
                            <div className="text-sm font-medium leading-none">
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
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:bg-gray-100 focus:outline-none ${
                      isActive(item.href) ? "text-primary2" : ""
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
    </motion.header>
  );
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
  );
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
  );
}

function XIcon(props: React.ComponentProps<"svg">) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}