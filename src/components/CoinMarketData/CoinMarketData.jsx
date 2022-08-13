import React from "react"
import BtcImg from "../../img/bitcoin.png"

function CoinMarketData() {
    return (
        <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 p-4">
            <div className="flex-row gap-4 flex justify-center items-center">
                <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                        <img
                            alt="profil"
                            src={BtcImg}
                            className="mx-auto object-cover rounded-full h-16 w-16 "
                        />
                    </a>
                </div>
                <div className=" flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                        Bitcoin (BTC)
                    </span>
                    <div className="text-gray-400 text-xs">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatibus, tenetur nesciunt? Similique illum
                        qui autem ipsum earum, hic, nemo maxime reprehenderit
                        neque ducimus cupiditate possimus quas nihil facere
                        dolores quae!
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinMarketData
