import Image from "next/image";
import Link from "next/link";
import homepageImgSrc from "../../../public/images/home-mobile.png";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import UpcomingAuctions from "../UpcomingAuctions/UpcomingAuctions";
import MarketplaceAuctions from "../MarketplaceAuctions/MarketplaceAuctions";
import TopCreators from "../TopCreators/TopCreators";
import NewsLetter from "../NewsLetter/NewsLetter";

const HomeContent = () => {
    return (
        <div className="py-4 px-4 flex flex-col">
            <h1 className="text-[30px] font-extrabold font-clash_display text-center select-none px-2">
                Photography is poetry and beautiful untold stories
            </h1>

            <p className="text-[16px] text-center px-7 py-8 font-[500]">
                Flip through more than 10,000 vintage shots, old photograghs, 
                historic images and captures seamlessly in one place. Register to get top access.
            </p>

            <Image 
                className="self-center"
                src={homepageImgSrc}   
                width={"394"} height={"355"} alt="stacket art piece pictures"
                priority unoptimized = {true}
            />

            <div id="featured-products" className="py-20 flex flex-col gap-3">
                <h2 className="font-[700] text-[28px] font-body py-8 pb-4">Featured products</h2>

                <FeaturedProduct 
                    name={"Oloibiri 1997"}
                    imgUrl={'/images/featured-product-1.png'}
                    noOfCreators={64}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur "}
                />

                <FeaturedProduct 
                    name={"Oloibiri 1997"}
                    imgUrl={'/images/featured-product-1.png'}
                    noOfCreators={64}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur "}
                />

                <FeaturedProduct 
                    name={"Oloibiri 1997"}
                    imgUrl={'/images/featured-product-1.png'}
                    noOfCreators={64}
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