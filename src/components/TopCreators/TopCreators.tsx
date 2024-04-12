import Image from "next/image";
import TopCreatorImgSrc from "../../../public/images/top-creators-1.png";

export default function TopCreators() {
    return (
        <div id="top-creators" className="bg-[#E2E2E2]">
            <div id="top-section" className="flex justify-between">
                <h1 className="text-[24px] font-clash_display font-extrabold leading-relaxed px-2 py-3">TOP CREATORS OF <br /> THE WEEK</h1>
                <ul className="list-disc flex text-[10px] gap-4 font-clash_display font-semibold py-2">
                    <li className="list-none">Editorials</li>
                    <li>Fashion</li>
                    <li>Lifestyle</li>
                    <li className="hidden sm:inline">Blueprint</li>
                </ul>
            </div>

            <p className="text-[13px] font-clash_display text-center py-4 pb-10 px-1">"Everything always looked better in black and white. Everything always  as if it were the first time; there is 
                always more people in a black and white photograph. It just makes it seem that there were more people at a gig, 
                more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
            </p>

            <div id="absolute-group" className="absolute z-10 bottom-[29rem] flex flex-row-reverse items-end justify-end">
                <div>
                    <h1 className="font-extrabold text-5xl font-clash_display">CIRCA</h1>
                    <h1 className="font-extrabold text-[100px] font-clash_display right-10 relative">1985</h1>
                </div>
                <Image id="highest-z-index" alt="" className="z-20 relative top-6 left-20" src={TopCreatorImgSrc} height={"240"} width={"237.2"} priority unoptimized = {true}/>
            </div>
        </div>
    )
}