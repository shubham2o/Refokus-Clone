import Product from "./Product";

const Products = () => {
    const products = [
        {
            id: 1,
            title: "Cula",
            description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#4a576b",
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
            bgColor: "#5355ee",
        },
        {
            id: 4,
            title: "Sevdesk",
            description: "We collaborated with sevdesk, Germany and Austria's leading collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#fb523b",
        },
        {
            id: 5,
            title: "Layout Land",
            description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#134B70",
        },
        {
            id: 6,
            title: "Singularity",
            description: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#40534C",
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
            bgColor: "#51249d",
        },
        {
            id: 9,
            title: "Showcase",
            description: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#ff5f2d",
        },
        {
            id: 10,
            title: "Umault",
            description: "Bold visuals, a new typeface, iconography, and custom motion graphics were at the core of our collaboration with Umault, building a website that matches their excellence in B2B video production.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#246E0F",
        },
        {
            id: 11,
            title: "TTR AI",
            description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#74512D",
        },
        {
            id: 12,
            title: "Maniv",
            description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#704264",
        },
        {
            id: 13,
            title: "Intenseye",
            description: "We focused on creating something beautiful while still ensuring the brand felt mature and contextual within their industry.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#C73659",
        },
        {
            id: 14,
            title: "Silvr",
            description: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#694F8E",
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
            bgColor: "#ff4c4c",
        },
        {
            id: 17,
            title: "Rainfall",
            description: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#7C3AED",
        },
        {
            id: 18,
            title: "Jungle",
            description: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#508D4E",
        },
        {
            id: 19,
            title: "Candid Health",
            description: "A complete redesign of a health-startup website, followed by cutting edge development.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#C5705D",
        },
        {
            id: 20,
            title: "Remind",
            description: "Remind's new website was designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#85586F",
        },
        {
            id: 21,
            title: "Yahoo!",
            description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            liveWebsite: true,
            caseStudy: true,
            bgColor: "#9336B4",
        },
        {
            id: 22,
            title: "RocketChat",
            description: "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#ff4747",
        },
        {
            id: 23,
            title: "Summon",
            description: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#2B5C65",
        },
        {
            id: 24,
            title: "Starred",
            description: "Starred's B2B product is presented with a human touch with a brand direction that reflects their human-first mindset and a site that is as informative as it is approachable.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#D63484",
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
            bgColor: "#BA704F",
        },
        {
            id: 27,
            title: "YIR 2022",
            description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            liveWebsite: true,
            caseStudy: false,
            bgColor: "#4F4557",
        },
    ];

    return (
        <div className="w-full my-40">
            {products.map((elem, index) => <Product key={index} data={elem} />)}
        </div>
    )
}

export default Products;