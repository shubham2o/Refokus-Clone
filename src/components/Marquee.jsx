import { motion } from "framer-motion";

const Marquee = ({ imagesURL, direction }) => {
    return (
        <div className="w-full flex overflow-hidden">
            <motion.div
                initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ ease: "linear", duration: 50, delay: 1.5, repeat: Infinity }}
                className="pr-24 py-7 flex flex-shrink-0 gap-24"
            >
                {imagesURL.map((url, index) => <img key={index} src={url} className="w-36 h-20 object-contain" />)}
            </motion.div>

            <motion.div
                initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ ease: "linear", duration: 50, delay: 1.5, repeat: Infinity }}
                className="pr-24 py-7 flex flex-shrink-0 gap-24"
            >
                {imagesURL.map((url, index) => <img key={index} src={url} className="w-36 h-20 object-contain" />)}
            </motion.div>
        </div>
    )
}

export default Marquee;