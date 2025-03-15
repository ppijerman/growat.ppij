import Link from "next/link"

export function Home() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col justify-center"
    >
      <div className="min-h-screen w-screen flex flex-col justify-center items-center px-5">
        <div className="flex flex-col md:w-[90%] gap-3 justify-center rounded-xl">
          <div className="flex flex-col items-center gap-16 justify-center">
            <div className="flex items-center justify-center gap-4">
              <h1 className="flex font-semibold text-[3em] md:text-[5em] lg:text-[7em] xl:text-[10em] leading-tight tracking-tight">
                Step Up Mentorship 3.0
              </h1>
            </div>
          </div>

          {/* <SecondCall /> */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full text-secondary py-12 md:py-16">
            <div className="bg-gradient-to-r from-[#e3e3e5] to-transparent text-2xl w-full flex flex-col gap-2 font-semibold">
              <h2 className="px-4 py-2">19 April - 10 May 2025 | Online Event</h2>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-y-4 gap-x-10 py-10 px-6">
              <Link href="#" className="w-full">
                <div className="text-2xl flex flex-row gap-2 bg-secondary text-white items-center justify-center group py-5 px-16 hover:bg-primary2 hover:ring-primary2 transition duration-150 shadow-lg rounded-lg">
                  <h1 className="font-bold">Get your tickets!</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}