import Stripe from "./Stripe";

const Stripes = () => {
    const data = [
        {
            id: 1,
            src: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            alt: "awwwards.",
            number: "15",
        },
        {
            id: 2,
            src: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            alt: "CSSDesignAwards",
            number: "52",
        },
        {
            id: 3,
            src: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            alt: "No-CodeConf2021",
            number: "2",
        },
        {
            id: 1,
            src: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            alt: "awwwards.",
            number: "15",
        },
        {
            id: 2,
            src: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            alt: "CSSDesignAwards",
            number: "52",
        },
        {
            id: 3,
            src: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            alt: "No-CodeConf2021",
            number: "2",
        },
    ];

    return (
        <div className="mt-24 border-l border-y border-[#333338] flex items-center">
            {data.map((elem, index) => <Stripe key={index} value={elem} />)}
        </div>
    )
}

export default Stripes;