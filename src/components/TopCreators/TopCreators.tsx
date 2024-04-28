import Image from "next/image";
import TopCreatorImgSrc from "../../../public/images/top-creators-1.png";
import TopCreatorImgSrc2 from "../../../public/images/top-creators.png";

export default function TopCreators() {
    return (
        <div id="top-creators" className="bg-[#E2E2E2]">
            <div id="top-section" className="flex justify-between">
                <h1 className="text-[24px] font-clash_display font-extrabold leading-relaxed px-2 py-3
                md:text-[55px] md:mt-6 md:ml-8">TOP CREATORS OF <br /> THE WEEK</h1>
                
                <div className="md:flex md:gap-6">
                    <div id="slider" className="hidden w-[10px] h-[80%] mt-8 bg-[#AEAEAE] self-center rounded-lg md:flex">
                        <div className="h-[50px] bg-black w-full rounded-lg"></div>
                    </div>
                    <ul className="list-disc flex text-[10px] gap-4 font-clash_display font-semibold py-2 md:flex-col md:text-[30px]
                    md:mt-8 md:mr-16">
                        <li className="list-none">Editorials</li>
                        <li className="md:list-none">Fashion</li>
                        <li className="md:list-none">Lifestyle</li>
                        <li className="hidden sm:inline md:list-none">Blueprint</li>
                    </ul>
                </div>
            </div>

            <p className="text-[13px] font-clash_display text-center py-4 pb-10 px-1
            md:text-[24px] md:pr-36 md:pl-12 md:text-start md:font-extralight md:pb-32">"Everything always looked better in black and white. Everything always  as if it were the first time; there is 
                always more people in a black and white photograph. It just makes it seem that there were more people at a gig, 
                more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
            </p>

            <div id="absolute-group" className="absolute z-10 bottom-[29rem] flex flex-row-reverse items-end justify-end md:hidden lg:flex lg:left-[35%] lg:bottom-[38rem]">
                <div className="md:relative md:right-[20%]">
                    <h1 className="font-extrabold text-5xl font-clash_display">CIRCA</h1>
                    <h1 className="font-extrabold text-[100px] font-clash_display right-10 relative">1985</h1>
                </div>
                <Image id="highest-z-index" alt="" className="z-20 relative top-6 left-20 md:h-[500px] md:w-[500px] md:hidden" src={TopCreatorImgSrc} height={"240"} width={"237.2"} priority unoptimized = {true}/>
                <Image id="highest-z-index" alt="" className="hidden z-20 relative lg:h-[500px] lg:w-[500px]
                md:inline" src={TopCreatorImgSrc2} height={"240"} width={"237.2"} priority unoptimized = {true}/>
            </div>
        </div>
    )
}