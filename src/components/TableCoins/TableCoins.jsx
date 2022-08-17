import TableRow from "../TableRow/TableRow"
import configData from "../../configData.json"
import useFetchDataApi from "../../customizedhooks/useFetchDataApi"

function TableCoins({ setCoinName }) {
    // Do our API call using ----- /api/coins
    const [statusCoins, loaderCoins, coins] = useFetchDataApi(
        configData.COINS_PATH
    )

    return (
        <div id="listCoins" className="mt-2 pt-2 h-screen">
            <div className="border dark:border-gray-600 h-4/5 w-full p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div className="w-full flex items-center justify-between mb-2 border-b pb-1 dark:border-gray-600">
                    <p className="text-gray-800 dark:text-white text-xl">
                        Coins
                    </p>

                    <div className=" relative ">
                        <input
                            type="text"
                            id="simple-email"
                            className=" flex-1 appearance-none border-b border-gray-700s dark:border-gray-300 w-full px-4 bg-white dark:bg-gray-800 dark:text-white text-gray-700 placeholder-gray-400 text-base focus:outline-none "
                            placeholder="Search"
                        />
                    </div>
                </div>
                <TableRow type="header" />
                <div className="overflow-y-scroll h-96 px-1">
                    {!loaderCoins ? (
                        statusCoins !== 200 ? (
                            <h1>MESSAGE: {statusCoins}</h1>
                        ) : (
                            coins.map((coin, index) => {
                                return (
                                    <TableRow
                                        key={index}
                                        name={coin.name}
                                        price={coin.current_quote.price}
                                        urlImage={coin.image_url}
                                        alt={coin.symbol}
                                        hour={coin.current_quote.deltas[0]}
                                        day={coin.current_quote.deltas[1]}
                                        week={coin.current_quote.deltas[2]}
                                        setCoinName={setCoinName}
                                    />
                                )
                            })
                        )
                    ) : (
                        <h1>LOADING.....</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TableCoins
