import Button from "./Button";

const Product = ({ data }) => {
    const { id, title, description, liveWebsite, caseStudy, bgColor } = data;

    return (
        <div className="w-full h-72 border-b-2 border-zinc-400" style={{ backgroundColor: bgColor }}>
            <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center">
                <h1 className="text-5xl font-medium">{title}</h1>

                <div className="details w-[30rem] flex flex-col items-start gap-7">
                    <p className="text-[19px]">{description}</p>

                    <div className="w-full flex gap-7">
                        {liveWebsite && <Button btnValue="Live Website" />}
                        {caseStudy && <Button btnValue="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;