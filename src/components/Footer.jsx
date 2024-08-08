const Footer = () => {
    return (
        <div className="max-w-screen-xl h-72 mx-auto text-[15px] flex">
            <div className="footer-left basis-1/3 h-full flex flex-col gap-14">
                <h1 className="w-full h-[50%] text-[9rem] leading-[9rem] font-bold">refokus.</h1>

                <div className="w-full text-zinc-500 tracking-wide flex justify-start items-center gap-10">
                    {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((item, index) => <a key={index}>{item}</a>)}
                </div>
            </div>

            <div className="footer-right basis-2/3 h-full flex justify-end gap-16">
                <div className="text-zinc-500 tracking-wide flex flex-col gap-10">
                    <h3>Socials</h3>

                    <div className="flex flex-col gap-2">
                        {["Instagram", "Twitter(X ?)", "LinkedIn"].map((item, index) => <a key={index}>{item}</a>)}
                    </div>
                </div>

                <div className="ml-5 text-zinc-500 tracking-wide flex flex-col gap-10">
                    <h3>Sitemap</h3>

                    <div className="flex flex-col gap-2">
                        {["Home", "Work", "About", "News", "Careers", "Contact"].map((item, index) => <a key={index}>{item}</a>)}
                    </div>
                </div>

                <div className="w-60 h-[88.5%] flex flex-col items-end justify-center gap-8">
                    <p className="text-right tracking-wide">Refokus is a pioneering digital agency driven by design and empowered by technology.</p>

                    <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6653351b3ab3236cb452f2f3_Frame%2048097733.svg" />
                </div>
            </div>
        </div>
    )
}

export default Footer;