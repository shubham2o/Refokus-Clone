import { useState } from "react";
import { useScroll } from "framer-motion";

const Work = () => {
    const [images, setImages] = useState([
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
            top: "0%",
            left: "40%",
            isActive: false,
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
            top: "4%",
            left: "37%",
            isActive: false,
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
            top: "-6.5%",
            left: "42.8%",
            isActive: false,
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
            top: "6.4%",
            left: "40%",
            isActive: false,
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
            top: "0%",
            left: "44.8%",
            isActive: false,
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
            top: "-3%",
            left: "38.5%",
            isActive: false,
        },
    ]);

    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (data) => {
        const scrollValue = data * 100;

        const showImages = (arr) => {
            setImages(prev => prev.map((item, index) =>
                arr.indexOf(index) === -1
                    ?
                    { ...item, isActive: false }
                    :
                    { ...item, isActive: true }
            ))
        }

        if (scrollValue < 0.4) {
            showImages([]);
        }
        else if (scrollValue < 0.8) {
            showImages([0]);
        }
        else if (scrollValue < 1.2) {
            showImages([0, 1]);
        }
        else if (scrollValue < 1.6) {
            showImages([0, 1, 2]);
        }
        else if (scrollValue < 2) {
            showImages([0, 1, 2, 3]);
        }
        else if (scrollValue < 2.4) {
            showImages([0, 1, 2, 3, 4]);
        }
        else if (scrollValue < 2.8) {
            showImages([0, 1, 2, 3, 4, 5]);
        }
    });

    return (
        <div className="w-full h-[82vh] text-center">
            <div className="max-w-screen-xl h-full mx-auto flex flex-col items-center">
                <div className="w-full font-medium flex justify-center items-center overflow-hidden">
                    <h1 className="w-full text-[36.3em] relative">work</h1>

                    <div className="w-full h-full absolute top-[39.5%]">
                        {images.map((elem, index) => (
                            elem.isActive
                            &&
                            <img
                                key={index}
                                src={elem.url}
                                alt="card-images"
                                className="w-72 mt-3 rounded-2xl absolute"
                                style={{ top: elem.top, left: elem.left }}
                            />
                        ))}
                    </div>
                </div>

                <p className="w-full text-[1.16em] text-[#919191]">Web Design, Webflow Development, Creative Development</p>
            </div>
        </div>
    )
}

export default Work;