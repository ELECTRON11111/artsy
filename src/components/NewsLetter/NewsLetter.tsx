import NavItems from "../NavItems/NavItems";
import Link from "next/link";

export default function NewsLetter() {
    const year = new Date().getFullYear();

    return (
        <div className="pt-20 mt-5" id="NewsLetter">
            <div className="md:py-6 md:px-4 md:border md:border-black md:mx-4 md:flex md:flex-col md:items-center">
                <h1 className="font-baskervville text-[24px] font-semibold py-2">NEWSLETTER</h1>
                
                <span className="font-[400] font-body text-[11.64px] py-3 md:hidden md:text-[32px] md:font-body
                ">SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS</span>

                <span className="hidden md:block">Subscribe to get daily updates on new drops & exciting deals</span>
                
                <div className="md:w-[60%] md:flex md:gap-3 md:justify-center">
                    <input type="text" placeholder="ENTER YOUR EMAIL HERE" className="block w-full my-6 text-[10px] text-[#333333] border
                    border-black px-2 py-4 md:pl-6" />
                    
                    <button id="subscribe" className="bg-black text-[#FFFFFF] text-[10px] py-4 px-12 md:self-center">SUBSCRIBE</button>
                </div>
            </div>
            
            <div className="my-6 flex flex-col gap-4 md:flex-row md:px-6 md:justify-around md:py-6">
                <p className="font-poppins font-[300] text-[11px] py-2 md:hidden">REACH US</p>

                <h3 className="self-end text-[24px] font-bold font-artsy select-none hidden md:flex md:self-center">ARTSY.</h3>

                <div className="hidden md:text-[26px] md:font-normal md:flex md:flex-col md:gap-3 md:font-clash_display">
                    <Link href={"#"} className="nav-item md:text-[19px] md:font-normal">Home</Link>            
                    <Link href={"#"} className="nav-item md:text-[19px] md:font-normal">Marketplace</Link>            
                    <Link href={"#"} className="nav-item md:text-[19px] md:font-normal">Auctions</Link>            
                    <Link href={"#"} className="nav-item md:text-[19px] md:font-normal">Drops</Link>            
                </div>

                <div id="NavItems" className="flex-col gap-3 hidden md:flex">
                    <Link href={"#"} className="nav-item md:text-[19px] md:font-normal">Blog</Link>            
                    <Link href={"#"} className="nav-item md:text-[19px] md:font-normal">Wallets</Link>            
                    <Link href={"#"} className="nav-item md:text-[19px] md:font-normal">Rates</Link>            
                    <Link href={"#"} className="nav-item md:text-[19px] md:font-normal">High bids</Link>            
                </div>

                <div className="flex flex-col gap-2 md:gap-4" id="email-location">
                    <div className="flex gap-5 items-center">
                        <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.35277 0.782227H19.6207C19.8899 0.782227 20.148 0.887583 20.3383 1.07512C20.5287
                            1.26266 20.6356 1.51701 20.6356 1.78223V17.7822C20.6356 18.0474 20.5287 18.3018 20.3383 18.4893C20.148
                            18.6769 19.8899 18.7822 19.6207 18.7822H1.35277C1.08361 18.7822 0.825471 18.6769 0.635143 18.4893C0.444816
                            18.3018 0.337891 18.0474 0.337891 17.7822V1.78223C0.337891 1.51701 0.444816 1.26266 0.635143 1.07512C0.825471
                            0.887583 1.08361 0.782227 1.35277 0.782227ZM18.6058 5.02023L10.5598 12.1202L2.36766 
                            4.99823V16.7822H18.6058V5.02023ZM2.88627 2.78223L10.5486 9.44423L18.1004 2.78223H2.88627Z" fill="#333333"/>
                        </svg>
                        <span className="font-body text-[11.64px] font-normal md:text-[19px]">artsystudios@gmail.com</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_235_484)">
                            <path d="M12.4582 23.8568L5.99946 17.4928C4.72206 16.2342 3.85215 14.6305 3.49972 12.8847C3.14729 11.1389 3.32818 9.32926 4.01951 7.68473C4.71085 6.0402 5.88157 4.6346 7.38364 3.64567C8.88571 2.65674 10.6517 2.12891 12.4582 2.12891C14.2647 2.12891 16.0307 2.65674 17.5327 3.64567C19.0348 4.6346 20.2055 6.0402 20.8968 7.68473C21.5882 9.32926 21.7691 11.1389 21.4166 12.8847C21.0642 14.6305 20.1943 16.2342 18.9169 17.4928L12.4582 23.8568ZM17.4819 16.0788C18.4753 15.0998 19.1519 13.8525 19.4259 12.4947C19.7 11.1369 19.5592 9.72943 19.0215 8.45038C18.4838 7.17134 17.5732 6.07813 16.405 5.309C15.2367 4.53986 13.8632 4.12933 12.4582 4.12933C11.0531 4.12933 9.67964 4.53986 8.51138 5.309C7.34312 6.07813 6.43256 7.17134 5.89484 8.45038C5.35711 9.72943 5.21639 11.1369 5.49044 12.4947C5.7645 13.8525 6.44104 15.0998 7.4345 16.0788L12.4582 21.0288L17.4819 16.0788ZM12.4582 13.1288C11.9199 13.1288 11.4036 12.9181 11.0229 12.543C10.6423 12.168 10.4284 11.6593 10.4284 11.1288C10.4284 10.5984 10.6423 10.0897 11.0229 9.71461C11.4036 9.33954 11.9199 9.12883 12.4582 9.12883C12.9965 9.12883 13.5128 9.33954 13.8934 9.71461C14.2741 10.0897 14.488 10.5984 14.488 11.1288C14.488 11.6593 14.2741 12.168 13.8934 12.543C13.5128 12.9181 12.9965 13.1288 12.4582 13.1288Z" fill="#333333"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_235_484">
                            <rect width="24.3572" height="24" fill="white" transform="translate(0.279297 0.128906)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span className="font-body text-[11.64px] font-normal md:text-[19px]">Lagos, Nigeria.</span>
                    </div>
                </div>
            </div>    
            <span className="hidden text-[21px] font-bellefair w-full text-[#333333] font-[500] md:flex
            md:justify-center">Artsystudios © {year}. All Rights Reserved.</span>
        </div>
    )
}