import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Card = () => {
    return (
        <div className="card w-1/2 h-full rounded-xl p-5 bg-neutral-700">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-full flex justify-between items-center bg-purple-800">
                    <h3>BLOG</h3>
                    <HiOutlineArrowNarrowRight />
                </div>

                <div className="w-full h-full bg-red-900">
                    <h1>News & Insights</h1>
                </div>

                <div className="w-full h-full bg-yellow-700">
                    <p>News and Insights on Web Design, Webflow Development, and Creative Development.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;