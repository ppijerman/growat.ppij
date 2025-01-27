import Image from "next/image";
import PPIJLogo from "@/assets/logoppij.png";
import GrowAtLogo from "@/assets/logogrowat.png";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { BiLogoYoutube } from "react-icons/bi";
import Link from "next/link";
import { PATHS } from "@/lib/constants";

export function GrowatFooter() {
  return (
    <footer className="bg-white text-gray-600 min-h-[200px] flex flex-col items-center justify-center w-full py-8">
      <div className="flex flex-col md:flex-row gap-[4vw] justify-center items-center w-[90%] p-5">
        <div className="flex items-center space-x-2 justify-center w-full">
          <Link href="https://growat.ppijerman.org" target="_blank" rel="noopener noreferrer">
            <Image src={GrowAtLogo} alt="GrowAt Logo" width={150} height={60} />
          </Link>
          <Link href="https://ppijerman.org" target="_blank" rel="noopener noreferrer">
            <Image src={PPIJLogo} alt="PPI Jerman Logo" width={80} height={60} />
          </Link>
        </div>

        <div className="flex flex-col w-full gap-4 border-b-2 md:border-none pb-3">
          <ul>
            <li>
              <h2 className="text-lg">Contact Us</h2>
            </li>
            <li>
              <p className="">
                <a
                  href="mailto:career.development@ppij.org"
                  className="font-semibold hover:text-accent transition"
                >
                  career.development@ppij.org
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-row gap-2 pb-5">
          <Link href="https://instagram.com/growat.ppij">
            <InstagramLogoIcon className="w-10 h-10  hover:text-accent transition" />
          </Link>
          <Link href="#">
            <BiLogoYoutube className="w-10 h-10  hover:text-accent transition" />
          </Link>
        </div>
      </div>
      <div className="flex w-[85%] flex-col items-center py-3 border-t-2 border-t-gray-500">
        Copyright &copy; {new Date().getFullYear()} GrowAt PPI Jerman
      </div>
        </footer>
      );
    }