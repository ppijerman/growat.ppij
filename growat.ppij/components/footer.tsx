import Image from "next/image";
import PPIJLogo from "@/assets/logo.png";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { PATHS } from "@/lib/constants";

export function IconicFooter() {
  return (
    <footer className="bg-white text-gray-600 min-h-[200px] flex flex-col items-center justify-center w-full py-8">
      <div className="flex flex-col md:flex-row gap-[4vw] justify-center items-center w-[80%] p-5">
        <div className="flex flex-col justify-center items-center w-full">
          <a
            href="https://ppijerman.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={PPIJLogo} alt="PPIJ Logo" width={500} height={200} />
          </a>
        </div>

        <div className="flex flex-col w-full gap-4 border-b-2 md:border-none pb-3">
          <ul>
            <li>
              <h2 className="text-lg">Contact Us</h2>
            </li>
            <li>
              <p className="">
                <a
                  href="mailto:info@iconic.ppijerman.org"
                  className="font-semibold hover:text-accent transition"
                >
                  info@iconic.ppijerman.org
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 w-full border-b-2 border-l-0 md:border-l-2 md:border-b-0 pb-3 md:pl-3">
          <ul className="flex flex-col gap-3 text-sm md:text-base">
            <Link href={PATHS.ABOUT} className="hover:text-accent transition">
              <li>About Us</li>
            </Link>
            <Link href={PATHS.SUBJECT}>
              <li>Subject</li>
            </Link>
            <Link
              href={PATHS.OUR_TEAM}
              className="hover:text-accent transition"
            >
              <li>Our Team</li>
            </Link>
            <Link
              href={PATHS.PARTNERSHIP}
              className="hover:text-accent transition"
            >
              <li>Partnership</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col gap-3 w-full items border-b-2 border-l-0 md:border-l-2 md:border-b-0 pb-3 md:pl-3">
          <ul className="flex flex-col gap-3 text-sm md:text-base">
            <Link
              href={PATHS.DURING_THE_STAY}
              className="hover:text-accent transition"
            >
              <li>During the Stay</li>
            </Link>
            <Link
              href={PATHS.SUBMISSION}
              className="hover:text-accent transition"
            >
              <li>Submission</li>
            </Link>
            <Link
              href={PATHS.REVIEWERS}
              className="hover:text-accent transition"
            >
              <li>Reviewers</li>
            </Link>
            <Link href={PATHS.FAQ}>
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex flex-row gap-2 pb-5">
        <Link href="https://instagram.com/iconic.ppij">
          <InstagramLogoIcon className="w-10 h-10  hover:text-accent transition" />
        </Link>
        <Link href="https://www.linkedin.com/company/iconicppij/">
          <LinkedInLogoIcon className="w-10 h-10  hover:text-accent transition" />
        </Link>
      </div>
      <div className="flex w-[70%] flex-col items-center py-3 border-t-2 border-t-gray-300">
        Copyright &copy; {new Date().getFullYear()} GrowAt PPI Jerman
      </div>
    </footer>
  );
}