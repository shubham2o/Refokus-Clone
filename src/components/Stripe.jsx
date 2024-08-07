const Stripe = ({ value }) => {
    const { src, alt, number } = value;

    return (
        <div className="w-[16.66%] h-[74px] border-r border-[#333338] flex justify-around items-center">
            <img src={src} alt={alt} />
            <h1 className="text-xl font-medium">{number}</h1>
        </div>
    )
}

export default Stripe;