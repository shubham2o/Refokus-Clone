const Marquee = ({ imagesURL }) => {
    return (
        <div className="w-full py-7 flex gap-16 whitespace-nowrap overflow-hidden">
            {imagesURL.map((url, index) =>
                <img
                    key={index}
                    src={url}
                    className="w-28 h-14 object-contain"
                />
            )}

            {imagesURL.map((url, index) =>
                <img
                    key={index}
                    src={url}
                    className="w-28 h-14 object-contain"
                />
            )}
        </div>
    )
}

export default Marquee;