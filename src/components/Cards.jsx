import Card from "./Card";

const Cards = () => {
    return (
        <div className="cards w-full h-[466px] my-40">
            <div className="max-w-screen-xl h-full mx-auto flex gap-1">
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Cards;