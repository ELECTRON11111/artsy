import Link from "next/link";

export default function UpcomingAuctions() {
    return (
        <div className="w-full h-[336px] px-6 pt-auto bg-pink-200 flex items-center text-white" id="upcoming-auctions">
            <div className="bg-red-200 py-6 px-1 flex flex-col gap-8 bg-[url(/images/upcoming.png)]">
                <div className="flex gap-10 items-start justify-start">
                    <svg width="16" height="17" viewBox="0 0 16 17" className="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.9846" cy="8.21263" r="7.9846" fill="#F5F5F5"/>
                    </svg>

                    <h3 className="text-[20px] font-bellefair font-[400] pr-6">MONALISA REDEFINED IN STYLE.</h3>
                </div>

                <div className="flex gap-4 items-start justify-start">
                    <span className="text-[40px] font-bellefair text-white self-start justify-start mb-8">01</span>

                    <div className="flex flex-col gap-4 pr-2">
                        <span className="font-poppins text-[12px] font-[400] capitalize">START ON: 08:00 GTS . MONDAY </span>
                        <span className="font-poppins text-[10px] font-semibold">
                            GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND 
                            AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
                        </span>
                    </div>
                </div>

                <div className="self-end justify-end gap-2">
                    <Link href="#" className="text-[14px] font-body border-b-2 p-2 m-4 scale-animation">See more</Link>
                    <Link href="#" className="text-[14px] font-body py-3 px-1 border rounded-md border-white m-4">Set a reminder</Link>
                </div>
            </div>
        </div>
    )
}