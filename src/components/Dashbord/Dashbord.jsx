import React from "react"
import CoinInfo from "../CoinInfo/CoinInfo"
import ChartCoin from "../Chart/ChartCoin"
import ListCoinsInfo from "../ListCoinsInfo/ListCoinsInfo"
import CoinMarketData from "../CoinMarketData/CoinMarketData"

import { COIN_DETAILS, COIN_MARKET_DATA, PRICES } from "../../data"

function Dashbord() {
    return (
        <main
            id="dashboard"
            className="pt-4 px-2 grid grid-cols-3 gap-2 h-full dark:bg-gray-800 dark:text-white"
        >
            <div className="col-span-2">
                <CoinMarketData
                    data={COIN_MARKET_DATA}
                    urlImage={COIN_DETAILS.image_url}
                />
                <ChartCoin data={PRICES.prices} />
            </div>
            <div>
                <CoinInfo data={COIN_DETAILS} />
                <ListCoinsInfo />
            </div>
        </main>
    )
}

export default Dashbord
