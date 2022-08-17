import React from "react"
import CoinInfo from "../CoinInfo/CoinInfo"
import ChartCoin from "../Chart/ChartCoin"
import CoinMarketData from "../CoinMarketData/CoinMarketData"
import configData from "../../configData.json"
import ListCoinInfo from "../ListCoinInfo/ListCoinInfo"
import useFetchDataApi from "../../customizedhooks/useFetchDataApi"

function Dashbord({ coinName }) {
    console.log(coinName)
    // do the API call using ---- /api/coins/coinName
    const [statusCoinInfo, loaderCoinInfo, coinInfo] = useFetchDataApi(
        configData.COINDETAILS_PATH
    )
    // do the API call for the Chart component using ---- /api/coins/coinName/chart
    const [statusCoinChart, loaderCoinChart, coinChart] = useFetchDataApi(
        configData.CHART_PATH
    )
    // do the API call for the coin market using ---- /api/coins/coinName/marketdata
    const [statusCoinMarket, loaderCoinMarket, coinMarket] = useFetchDataApi(
        configData.MARKETDATA_PATH
    )

    return (
        <main
            id="dashboard"
            className="pt-4 px-2 grid md:grid-cols-3 gap-2 grid-cols-1 h-full dark:bg-gray-800 dark:text-white"
        >
            <div className="md:col-span-2 col-span-1">
                {!loaderCoinMarket ? (
                    statusCoinMarket !== 200 ? (
                        <h1>MESSAGE: {statusCoinMarket.message}</h1>
                    ) : (
                        <CoinMarketData
                            data={coinMarket}
                            urlImage={coinInfo.image_url}
                        />
                    )
                ) : (
                    <h1>LOADING....</h1>
                )}

                {!loaderCoinChart ? (
                    statusCoinChart !== 200 ? (
                        <h1>MESSAGE: {statusCoinChart.message}</h1>
                    ) : (
                        <ChartCoin data={coinChart} />
                    )
                ) : (
                    <h1>LOADING....</h1>
                )}
            </div>
            <div>
                {!loaderCoinInfo ? (
                    statusCoinInfo !== 200 ? (
                        <h1>MESSAGE: {statusCoinInfo.message}</h1>
                    ) : (
                        <CoinInfo data={coinInfo} />
                    )
                ) : (
                    <h1>LOADING....</h1>
                )}
                <ListCoinInfo />
            </div>
        </main>
    )
}

export default Dashbord
