import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Button = ({ btnValue = "Start a Project" }) => {
    return (
        <div className="min-w-[9.5rem] rounded-full px-4 py-1.5 bg-white text-black text-[15.2px] cursor-pointer flex justify-between items-center">
            <h1>{btnValue}</h1>
            <MdKeyboardDoubleArrowRight />
        </div>
    )
}

export default Button;