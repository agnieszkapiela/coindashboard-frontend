import React from "react"
import CoinImage from "../CoinImage/CoinImage"

function TableRow({ name, token, price, urlImage, alt }) {
    return (
        <div className="flex items-center mb-2 pb-2 dark:border-gray-600 justify-between border-b">
            <CoinImage urlImage={urlImage} alt={alt} ratioChange={false} />
            <div className="flex items-center w-full justify-between">
                <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                    <p className="dark:text-white">{name}</p>
                    <p className="text-gray-300">
                        {token ? "Contract Address" : "Not Token"}
                    </p>
                </div>
                <span className="text-green-400">{price}$</span>
            </div>
        </div>
    )
}

export default TableRow
