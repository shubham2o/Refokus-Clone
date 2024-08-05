import Button from "./Button";

const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-6 flex justify-between items-center">
            <div className="nleft flex gap-20 items-center">
                <img
                    src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                    alt="refokus-img"
                />

                <div className="links w-[35%] flex gap-10 justify-between items-center">
                    {["", "Home", "Work", "About", "News", "Careers"]
                        .map((elem, index) =>
                            elem.length === 0
                                ?
                                <span key={index} className="mr-6 text-xl">|</span>
                                :
                                <a key={index} href="#" className="font-regular text-sm flex items-center gap-1">
                                    {index === 2
                                        &&
                                        <span className="w-[5px] h-[5px] rounded-full inline-block bg-green-400" />
                                    }
                                    {elem}
                                </a>
                        )
                    }
                </div>
            </div>

            <Button />
        </div>
    )
}

export default Navbar;