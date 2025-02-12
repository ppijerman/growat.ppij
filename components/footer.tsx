import Image from "next/image"
import PPIJLogo from "@/public/assets/logoppij.png"
import GrowAtLogo from "@/public/assets/logogrowat.png"
import { InstagramLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-auto mb-0 bg-white text-gray-600 flex flex-col items-center justify-center py-8 px-[5%]">
      <div className="flex flex-col md:flex-row gap-[4vw] justify-center items-center w-[90%] p-5 space-y-5">
        <div className="px-5 grid grid-cols-2 space-x-2 justify-start max-h-10 w-80">
          <Link
            href="https://growat.ppijerman.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={GrowAtLogo}
              alt="GrowAt Logo"
              className="object-contain"
            />
          </Link>
          <Link
            href="https://ppijerman.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={PPIJLogo}
              alt="PPI Jerman Logo"
              className="object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-col grow w-full md:border-none pb-3 text-center md:text-left">
          <ul>
            <li>
              <h2 className="text-lg">Contact us</h2>
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
        </div>
      </div>
      <div className="flex w-full flex-col items-center py-3 border-t-2 border-t-gray-500">
        Copyright &copy; {new Date().getFullYear()} GrowAt PPI Jerman
      </div>
    </footer>
  )
}
