import Image, { StaticImageData } from "next/image";
import avatar1 from "../../../public/images/people/Ellipse 19.png";
import avatar2 from "../../../public/images/people/Ellipse 20.png";
import avatar3 from "../../../public/images/people/Ellipse 21.png";
import avatar4 from "../../../public/images/people/Ellipse 22.png";
import avatar5 from "../../../public/images/people/Ellipse 23.png";
import { useEffect } from "react";

interface propType {
    imgUrl: string,
    name: String,
    description: String,
    noOfCreators: Number,
    reverse:boolean
}

export default function FeaturedProduct(props: propType) {
    let reverse:any = "flex-row";

    useEffect(() => {
        const reverse = props.reverse? "flex-row": "flex-row-reverse";
        console.log(reverse);
    }, [])

    return (
        <div id="item" className={`my-4 flex flex-col gap-2 md:flex-row-reverse md:${reverse} md:gap-4 md:border-t 
        md:border-black md:pt-8 md:pb-5 md:my-0 md:mx-10 lg:mx-16`}>
            <div id="img-card" className={`bg-[url('/images/featured-product-1.png')] bg-cover w-[90vw] h-[255px] md:w-[50vw] md:h-[305px]`}>
                <div className="bg-black bg-opacity-50 h-full flex flex-col justify-evenly items-center md:hidden">
                    <h2 className="text-[32px] font-[900] font-clash_display text-white md:text-[36px]">{props.name}</h2>

                    <div id="btn" className="border p-2 rounded-full flex items-center justify-center w-[56px] h-[57px]
                    scale-animation cursor-pointer ml-auto mr-20">
                        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" 
                            d="M0.796875 9.59C0.796875 9.3092 0.906161 9.03991 1.10069 
                            8.84136C1.29522 8.6428 1.55906 8.53126 1.83417 8.53126H26.2998L19.7711 
                            1.86966C19.5763 1.67086 19.4669 1.40123 19.4669 1.12008C19.4669 0.838925 
                            19.5763 0.56929 19.7711 0.370487C19.9659 0.171684 20.2301 0.0599976 
                            20.5055 0.0599976C20.781 0.0599976 21.0451 0.171684 21.2399 0.370487L29.5383
                            8.84041C29.6349 8.93876 29.7115 9.05559 29.7638 9.18422C29.8161 9.31285 29.843 
                            9.45074 29.843 9.59C29.843 9.72926 29.8161 9.86715 29.7638 9.99578C29.7115 10.1244 
                            29.6349 10.2412 29.5383 10.3396L21.2399 18.8095C21.0451 19.0083 20.781 19.12 20.5055
                            19.12C20.2301 19.12 19.9659 19.0083 19.7711 18.8095C19.5763 18.6107 19.4669 18.3411 
                            19.4669 18.0599C19.4669 17.7788 19.5763 17.5091 19.7711 17.3103L26.2998 10.6487H1.83417C1.55906 
                            10.6487 1.29522 10.5372 1.10069 10.3386C0.906161 10.1401 0.796875 9.87079 0.796875 9.59Z" 
                            fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 md:flex md:flex-col md:gap-4">
                <h2 className="hidden font-[500] font-clash_display text-black md:block md:text-[36px]">{props.name}</h2>

                <p className="font-body text-[15px] font-normal py-4 md:text-[21px]">{props.description}</p>

                <div className="flex py-3 items-center w-[70vw] border-b border-black md:w-full md:border-none">
                    <div className="flex md:mr-auto md:items-center">
                        <div id="img-collection" className="flex items-center">
                            <Image width={"42"} height={"42"} src={avatar1} alt="" />
                            <Image width={"42"} height={"42"} src={avatar2} alt="" className="relative right-4" />
                            <Image width={"42"} height={"42"} src={avatar3} alt="" className="relative right-8" />
                            <Image width={"42"} height={"42"} src={avatar4} alt="" className="relative right-12" />
                            <Image width={"42"} height={"42"} src={avatar5} alt="" className="relative right-16" />
                        </div>

                        <h3 className="text-[16px] font-body font-semibold relative right-4 md:text-nowrap">{`${props.noOfCreators} major creators`}</h3>
                    </div>
                        
                    <div id="btn" className="hidden border p-2 rounded-full items-center justify-center w-[56px] h-[57px]
                    scale-animation cursor-pointer md:ml-5 mr-20 md:flex md:self-end">
                        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" 
                            d="M0.796875 9.59C0.796875 9.3092 0.906161 9.03991 1.10069 
                            8.84136C1.29522 8.6428 1.55906 8.53126 1.83417 8.53126H26.2998L19.7711 
                            1.86966C19.5763 1.67086 19.4669 1.40123 19.4669 1.12008C19.4669 0.838925 
                            19.5763 0.56929 19.7711 0.370487C19.9659 0.171684 20.2301 0.0599976 
                            20.5055 0.0599976C20.781 0.0599976 21.0451 0.171684 21.2399 0.370487L29.5383
                            8.84041C29.6349 8.93876 29.7115 9.05559 29.7638 9.18422C29.8161 9.31285 29.843 
                            9.45074 29.843 9.59C29.843 9.72926 29.8161 9.86715 29.7638 9.99578C29.7115 10.1244 
                            29.6349 10.2412 29.5383 10.3396L21.2399 18.8095C21.0451 19.0083 20.781 19.12 20.5055
                            19.12C20.2301 19.12 19.9659 19.0083 19.7711 18.8095C19.5763 18.6107 19.4669 18.3411 
                            19.4669 18.0599C19.4669 17.7788 19.5763 17.5091 19.7711 17.3103L26.2998 10.6487H1.83417C1.55906 
                            10.6487 1.29522 10.5372 1.10069 10.3386C0.906161 10.1401 0.796875 9.87079 0.796875 9.59Z" 
                            fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}