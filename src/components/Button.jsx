import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Button = () => {
    return (
        <div className="min-w-[9.5rem] rounded-full px-4 py-1.5 bg-white text-black text-[15.2px] flex justify-between items-center">
            <h1>Start a Project</h1>

            <MdKeyboardDoubleArrowRight />
        </div>
    )
}

export default Button;