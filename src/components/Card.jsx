import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Card = ({ width, squareCard }) => {
    return (
        <div className={`card ${width} h-full rounded-xl p-6 cursor-pointer ${squareCard ? 'bg-[#46289A]' : 'bg-[#7542FF]'} hover:bg-white hover:text-black transition delay-75 duration-500 ease-in-out`}>
            <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full h-5 flex justify-between items-center">
                    <h3 className="text-xs font-medium tracking-wider">
                        {squareCard ? "BLOG" : "GET IN TOUCH"}
                    </h3>

                    <HiOutlineArrowNarrowRight className="text-lg" />
                </div>

                <div className="w-full h-40">
                    <h1 className="text-3xl font-medium leading-10 tracking-wide">
                        {squareCard ? "News & Insights" : <div>Let&apos;s get to it.<br />together.</div>}
                    </h1>
                </div>

                <div className="w-full h-44">
                    {squareCard
                        ?
                        <p className="w-[235px] h-full text-sm tracking-wide flex items-end">
                            News and Insights on Web Design, Webflow Development, and Creative Development.
                        </p>
                        :
                        <div className="w-full h-full flex justify-between items-end">
                            <h1 className="h-28 text-[80px] font-medium tracking-tight">Start a Project</h1>

                            <div className="border-b-2 leading-10 text-lg flex items-center gap-10">
                                <h3>Contact Us</h3>
                                <HiOutlineArrowNarrowRight />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;