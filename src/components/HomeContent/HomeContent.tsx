import Image from "next/image";
import Link from "next/link";
import homepageImgSrc from "../../../public/images/home-mobile.png";
import homeImg1Src from "../../../public/images/home-1.png";
import homeImg2Src from "../../../public/images/home-2.png";
import homeImg3Src from "../../../public/images/home-3.png";
import homeImg4Src from "../../../public/images/home-4.png";
import homeImg5Src from "../../../public/images/home-5.png";

import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import UpcomingAuctions from "../UpcomingAuctions/UpcomingAuctions";
import MarketplaceAuctions from "../MarketplaceAuctions/MarketplaceAuctions";
import TopCreators from "../TopCreators/TopCreators";
import NewsLetter from "../NewsLetter/NewsLetter";

const HomeContent = () => {
    return (
        <div className="py-4 px-4 flex flex-col sm:overflow-hidden">
            <h1 className="text-[30px] font-extrabold font-clash_display text-center 
            select-none px-2 sm:text-[64px] sm:px-4 sm:pt-6">
                Photography is poetry and beautiful untold stories
            </h1>

            <p className="text-[16px] text-center px-7 py-8 font-[500] sm:font-[500] sm:text-[28px] sm:font-body
            sm:text-center sm:px-24">
                Flip through more than 10,000 vintage shots, old photograghs, 
                historic images and captures seamlessly in one place. Register to get top access.
            </p>

            <Image 
                className="self-center sm:hidden"
                src={homepageImgSrc}   
                width={"394"} height={"355"} alt="stacket art piece pictures"
                priority unoptimized = {true}
            />

            <div className="hidden sm:flex sm:gap-1 relative right-6" id="DesktopHomeImages">
                <Image 
                    src={homeImg1Src}
                    width={"380"} height={"505"}
                    alt=""
                    className="relaive left-6"
                    priority unoptimized = {true}
                />
                <Image 
                    src={homeImg2Src}
                    width={"380"} height={"505"}
                    alt=""
                    priority unoptimized = {true}
                />
                <Image 
                    src={homeImg3Src}
                    width={"380"} height={"505"}
                    alt=""
                    priority unoptimized = {true}
                />
                <Image 
                    src={homeImg4Src}
                    width={"380"} height={"505"}
                    alt=""
                    className="relative bottom-6"
                    priority unoptimized = {true}
                />
                <Image 
                    src={homeImg5Src}
                    width={"357"} height={"505"}
                    alt=""
                    className="lg:relative lg:right-4"
                    priority unoptimized = {true}
                />
            </div>

            <div id="featured-products" className="py-20 flex flex-col gap-3">
                <h2 className="font-[700] text-[28px] font-body py-8 pb-4 md:ml-16">Featured products</h2>

                <FeaturedProduct 
                    name={"Oloibiri 1997"}
                    imgUrl={'/images/featured-product-1.png'}
                    noOfCreators={64}
                    reverse={false}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur "}
                />

                <FeaturedProduct 
                    name={"Oloibiri 1997"}
                    imgUrl={'/images/featured-product-1.png'}
                    noOfCreators={64}
                    reverse={true}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur "}
                />

                <FeaturedProduct 
                    name={"Oloibiri 1997"}
                    imgUrl={'/images/featured-product-1.png'}
                    noOfCreators={64}
                    reverse={false}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur "}
                />
            </div>

            <UpcomingAuctions />

            <MarketplaceAuctions />
            
            <TopCreators />

            <NewsLetter />
        </div>
    )
}

export default HomeContent;