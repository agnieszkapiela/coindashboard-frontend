import React from "react"
import CoinInfo from "../CoinInfo/CoinInfo"
import ChartCoin from "../Chart/ChartCoin"
import CoinMarketData from "../CoinMarketData/CoinMarketData"

import { COIN_DETAILS, COIN_MARKET_DATA, PRICES } from "../../data"
import ListCoinInfo from "../ListCoinInfo/ListCoinInfo"

function Dashbord({ coinName }) {
    console.log(coinName)
    // do the API call using ---- /api/coins/coinName
    // do the API call for the Chart component using ---- /api/coins/coinName/chart
    // do the API call for the coin market using ---- /api/coins/coinName/marketdata
    return (
        <main
            id="dashboard"
            className="pt-4 px-2 grid md:grid-cols-3 gap-2 grid-cols-1 h-full dark:bg-gray-800 dark:text-white"
        >
            <div className="md:col-span-2 col-span-1">
                <CoinMarketData
                    data={COIN_MARKET_DATA}
                    urlImage={COIN_DETAILS.image_url}
                />
                <ChartCoin data={PRICES.prices} />
            </div>
            <div>
                <CoinInfo data={COIN_DETAILS} />
                <ListCoinInfo />
            </div>
        </main>
    )
}

export default Dashbord
