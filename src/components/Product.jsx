import { useState } from "react";
import Button from "./Button";

const Product = ({ data, count, mover }) => {
    const { title, description, liveWebsite, caseStudy, bgColor } = data;
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnterFunction = () => {
        setIsHovered(true);
        mover(count);
    }

    const onMouseLeaveFunction = () => {
        setIsHovered(false);
    }

    return (
        <div
            className="w-full h-[23rem] border-b border-zinc-700 transition delay-75 duration-500 ease-in-out"
            style={{ backgroundColor: isHovered && bgColor }}
            onMouseEnter={() => onMouseEnterFunction()}
            onMouseLeave={() => onMouseLeaveFunction()}
        >
            <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center">
                <h1 className="w-64 leading-[4rem] text-5xl tracking-wide font-medium">{title}</h1>

                <div className="details w-[24rem] flex flex-col items-start gap-11">
                    <p className="text-[19px] tracking-wide">{description}</p>

                    <div className="w-full flex gap-10">
                        {liveWebsite && <Button btnValue="Live Website" />}

                        {caseStudy && <Button btnValue="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;