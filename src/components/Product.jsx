import Button from "./Button";

const Product = () => {
    return (
        <div className="w-full h-64">
            <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center">
                <h1 className="text-5xl font-medium">Arqitel</h1>

                <div className="w-[21.25rem] h-full mr-16 flex flex-col items-start justify-center gap-6">
                    <p className="text-[19px]">
                        With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.
                    </p>

                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Product;