import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Button = ({ btnValue = "Start a Project" }) => {
    return (
        <div className="min-w-[9.5rem] rounded-full px-3.5 py-1.5 bg-white text-black text-[15.2px] font-medium cursor-pointer flex justify-between items-center">
            <h1>{btnValue}</h1>
            <MdKeyboardDoubleArrowRight />
        </div>
    )
}

export default Button;