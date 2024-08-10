import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
    const products = [
        {
            id: 1,
            title: "Cula",
            description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#4A576B",
        },
        {
            id: 2,
            title: "BCG Platinion",
            description: "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#005337",
        },
        {
            id: 3,
            title: "Arqitel",
            description: "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#5355EE",
        },
        {
            id: 4,
            title: "Sevdesk",
            description: "We collaborated with sevdesk, Germany and Austria's leading collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#FB523B",
        },
        {
            id: 5,
            title: "Layout Land",
            description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#1626F3",
        },
        {
            id: 6,
            title: "Singularity",
            description: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#4920C9",
        },
        {
            id: 7,
            title: "Brightwave",
            description: "Brightwave, a category disruptor came to a us to build their brand from scratch and make a statement on its launch.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#686800",
        },
        {
            id: 8,
            title: "Botify",
            description: "A new website for a leading SEO solution for enterprise brands with a deep Wordpress to Webflow migration.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#51249D",
        },
        {
            id: 9,
            title: "Showcase",
            description: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#FF5F2D",
        },
        {
            id: 10,
            title: "Umault",
            description: "Bold visuals, a new typeface, iconography, and custom motion graphics were at the core of our collaboration with Umault, building a website that matches their excellence in B2B video production.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#0F6F24",
        },
        {
            id: 11,
            title: "TTR AI",
            description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#46289A",
        },
        {
            id: 12,
            title: "Maniv",
            description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#2A9C6C",
        },
        {
            id: 13,
            title: "Intenseye",
            description: "We focused on creating something beautiful while still ensuring the brand felt mature and contextual within their industry.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#FF501A",
        },
        {
            id: 14,
            title: "Silvr",
            description: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#FF7548",
        },
        {
            id: 15,
            title: "Kablamo",
            description: "To support Kablamo's expansion from Australia to Canada, we revamped their brand identity and website, maintaining their iconic bolt symbol while introducing a tech-savvy, playful aesthetic.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#3C5761",
        },
        {
            id: 16,
            title: "OS",
            description: "We partnered with OS/ to build a sleek, scalable, and user-centric website that stands out with its component-based approach.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#FF4C4C",
        },
        {
            id: 17,
            title: "Rainfall",
            description: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#1430D4",
        },
        {
            id: 18,
            title: "Jungle",
            description: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#0000FF",
        },
        {
            id: 19,
            title: "Candid Health",
            description: "A complete redesign of a health-startup website, followed by cutting edge development.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#503FF0",
        },
        {
            id: 20,
            title: "Remind",
            description: "Remind's new website was designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#3D77E9",
        },
        {
            id: 21,
            title: "Yahoo!",
            description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#7E1FFF",
        },
        {
            id: 22,
            title: "RocketChat",
            description: "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#FF4747",
        },
        {
            id: 23,
            title: "Summon",
            description: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#22636D",
        },
        {
            id: 24,
            title: "Starred",
            description: "Starred's B2B product is presented with a human touch with a brand direction that reflects their human-first mindset and a site that is as informative as it is approachable.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#15D3B4",
        },
        {
            id: 25,
            title: "Weglot Like Magic",
            description: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#030A8E",
        },
        {
            id: 26,
            title: "YIR 2021",
            description: "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#382865",
        },
        {
            id: 27,
            title: "YIR 2022",
            description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#5D4EFF",
        },
    ];

    const [position, setPosition] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const mover = (val) => {
        setPosition(val * 23);
        setHoveredProduct(val);
    }

    return (
        <div className="w-full my-40 relative">
            {products.map((elem, index) =>
                <div key={index} onMouseEnter={() => mover(index)} onMouseLeave={() => setHoveredProduct(null)}>
                    <Product data={elem} count={index} mover={mover} />
                </div>
            )}

            <div className="w-full h-full absolute top-0 pointer-events-none">
                <motion.div
                    initial={{ y: position, x: "-50%" }}
                    animate={{ y: position + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }}
                    className="window w-[33%] h-[23rem] absolute left-[44.5%] overflow-hidden"
                >
                    {hoveredProduct !== null && (
                        <motion.video
                            src={`/videos/${products[hoveredProduct].title.toLowerCase().replace(/\s+/g, "")}.webm`}
                            autoPlay loop muted
                            key={hoveredProduct}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
                            className="w-full h-full object-cover"
                        />
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default Products;