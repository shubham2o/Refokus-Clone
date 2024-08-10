import Card from "./Card";

const Cards = () => {
    return (
        <div className="cards w-full h-[466px] mt-36 mb-44">
            <div className="max-w-screen-xl h-full mx-auto flex gap-1">
                <Card width={"basis-1/3"} squareCard="true" />
                <Card width={"basis-2/3"} />
            </div>
        </div>
    )
}

export default Cards;