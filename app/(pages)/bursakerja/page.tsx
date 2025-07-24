import Card from "./components/card"
import { Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger } from "@/components/ui/sheet"

import JobDetail from "./components/jobdetail"

export default function Page() {
  const screensize = "";
  
  return (
    <main className="bg-[#f7f7f7] lg:px-10">
        <div className="flex flex-col lg:flex-row p-4">
                <div className="w-full lg:w-1/5 p-4 rounded-lg border-2 border-[#737373] border-solid bg-white">Ini filter</div>
                {/*Smaller screen*/}
                <div className="w-full lg:w-4/5 lg:p-4 rounded-lg block lg:hidden">   
                    <Sheet>
                      <SheetTrigger asChild>
                        <Card/>
                      </SheetTrigger>
                      <SheetContent side={"bottom"} className="h-[70vh] overflow-y-scroll py-10 px-3 gap-1">
                        <SheetTitle/>
                        <JobDetail/>
                      </SheetContent>
                    </Sheet>
                </div>
                {/*Bigger screen*/}
                <div className="w-full lg:p-4 rounded-lg hidden lg:block border-dash border-1">   
                    <Sheet>
                      <SheetTrigger asChild>
                        <Card/>
                      </SheetTrigger>
                      <SheetContent side={"right"} className="w-1/2 overflow-y-scroll py-10 px-3 gap-1">
                        <SheetTitle/>
                        <JobDetail/>
                      </SheetContent>
                    </Sheet>
                </div>
            </div>
        
    </main>
  )
}