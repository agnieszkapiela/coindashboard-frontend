import React from "react"
import CoinDetails from "../CoinDetails/CoinDetails"

function CoinMarketDetails({ data }) {
    return (
        <div className="text-gray-400 text-xs border dark:border-gray-600 p-2 flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between w-full">
                <CoinDetails field="Market Cap">{data.market_cap}</CoinDetails>
                <CoinDetails field="24H Volume">{data.h24_volume}</CoinDetails>
                <CoinDetails field="PCT">{data.deltas.pct_change}</CoinDetails>
                <CoinDetails field="Normal change">
                    {data.deltas.normal_change}
                </CoinDetails>
            </div>
            <span className="text-white pt-1 cursor-pointer">see more</span>
        </div>
    )
}

export default CoinMarketDetails
