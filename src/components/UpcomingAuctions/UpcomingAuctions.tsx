import Link from "next/link";

export default function UpcomingAuctions() {
    return (
        <div className="w-full h-[336px] px-6 pt-auto bg-pink-200 flex items-center
        sm:p-8 sm:justify-center text-white md:flex-col md:h-full md:px-16" id="upcoming-auctions">
            <h1 className="text-white hidden md:block md:justify-start md:self-start md:text-3xl
            md:font-body md:font-semibold">See Upcoming Auctions and Exhibitions</h1>

            <svg width="668" height="6" viewBox="0 0 668 6" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow" className="hidden md:flex
            self-start md:my-4 md:ml-6">
                <path d="M667.283 3.28284C667.439 3.12663 667.439 2.87337 667.283 2.71716L664.737 0.171573C664.581 0.0153632 
                664.328 0.0153632 664.172 0.171573C664.015 0.327783 664.015 0.581048 664.172 0.737258L666.434 3L664.172 5.26274C664.015 5.41895
                664.015 5.67222 664.172 5.82843C664.328 5.98464 664.581 5.98464 664.737 5.82843L667.283 3.28284ZM0 3.4H667V2.6H0V3.4Z" fill="white"/>
            </svg>


            <div className="bg-red-200 py-6 px-1 flex flex-col gap-8 bg-[url(/images/upcoming.png)] md:pt-56 md:px-6 md:w-full
            md:py-10">
                <div className="flex gap-10 items-start justify-start">
                    <svg width="16" height="17" viewBox="0 0 16 17" className="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.9846" cy="8.21263" r="7.9846" fill="#F5F5F5"/>
                    </svg>

                    <h3 className="text-[20px] font-bellefair font-[400] pr-6 md:text-[30px]">MONALISA REDEFINED <br className="hidden md:block" /> IN STYLE.</h3>
                </div>

                <div className="flex flex-col gap-2  md:justify-between">
                    <div className="flex gap-4 items-start justify-start">
                        <span className="text-[40px] font-bellefair text-white self-start justify-start mb-8">01</span>

                        <div className="flex flex-col gap-4 pr-2">
                            <span className="font-poppins text-[12px] font-[400] capitalize md:text-[16px]">START ON: 08:00 GTS . MONDAY </span>
                            <span className="font-poppins text-[10px] font-semibold md:text-wrap md:text-[16px]">
                                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH <br className="hidden md:block" /> INVESTORS AND 
                                AUCTIONEERS ACROSS THE WORLD BRINGING THEIR <br className="hidden md:block"/> HIGHEST AND LOWEST BIDS.
                            </span>
                        </div>
                    </div>

                    <div className="self-end justify-end text-end gap-2">
                        <Link href="#" className="text-[14px] font-body border-b-2 p-2 m-4 scale-animation">See more</Link>
                        <Link href="#" className="text-[14px] font-body py-3 px-1 border rounded-md border-white m-4">Set a reminder</Link>
                    </div>
                </div>
                
            </div>

            <div id="slider-controls" className="hidden mt-4 gap-5 w-full justify-between md:flex">
                <div id="slider" className="w-[300px] h-[10px] bg-[#AEAEAE] self-center rounded-lg">
                    <div className="w-[100px] bg-white h-full rounded-lg"></div>
                </div>

                <div id="controls" className="flex gap-4 my-4">
                    <div className="border p-4 rounded-full shadow-2xl border-transparent shadow-black cursor-pointer scale-animation">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="<">
                            <g clip-path="url(#clip0_433_225)">
                            <path d="M8.94469 9.85521L12.791 6.00888L11.6923 4.91016L6.74724 9.85521L11.6923 14.8003L12.791 13.7015L8.94469 9.85521Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_433_225">
                            <rect width="18.6488" height="18.6488" fill="white" transform="matrix(-1 0 0 1 19.1798 0.530762)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <div className="border p-4 rounded-full  shadow-2xl border-transparent shadow-black cursor-pointer scale-animation">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_433_222)">
                            <path d="M10.915 9.85521L7.06873 6.00888L8.16745 4.91016L13.1125 9.85521L8.16745 14.8003L7.06873 13.7015L10.915 9.85521Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_433_222">
                            <rect width="18.6488" height="18.6488" fill="white" transform="translate(0.679932 0.530762)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}