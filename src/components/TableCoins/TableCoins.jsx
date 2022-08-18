import TableRow from "../TableRow/TableRow"
import configData from "../../configData.json"
import InfiniteScroll from "react-infinite-scroll-component"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import LoaderCoinItems from "../LoaderCoinItems/LoaderCoinItems"

const axiosClient = axios.create({
    baseURL: configData.BASE_SERVER_URL
})

function TableCoins({ setCoinName }) {
    // Do our API call using ----- /api/coins
    const [items, setItems] = useState([])
    const [page, setPage] = useState(2)
    const [hasMore, setHasMore] = useState(true)
    const [loaderCoins, setLoaderCoins] = useState(true)
    const [statusCoins, setStatusCoins] = useState(102)

    useEffect(() => {
        ;(async () => {
            try {
                const data = await axiosClient.get(configData.COINS_PATH, {
                    params: {
                        _page: 1,
                        _limit: 10
                    }
                })
                setItems(data.data)
                setStatusCoins(data.status)
            } catch (error) {
                setStatusCoins(error)
            } finally {
                setLoaderCoins(false)
            }
        })()
    }, [])

    const fetchData = async () => {
        try {
            const data = await axiosClient.get(configData.COINS_PATH, {
                params: {
                    _page: page,
                    _limit: 10
                }
            })
            setItems([...items, ...data.data])
            if (data.data.length < 10 || data.data.length === 0) {
                setHasMore(false)
            } else {
                setPage(page + 1)
            }
            setStatusCoins(data.status)
        } catch (error) {
            setStatusCoins(error)
        } finally {
            setLoaderCoins(false)
        }
    }

    return (
        <div id="listCoins" className="pt-2 h-screen">
            <div className="border dark:border-gray-600 h-5/6 w-full p-4 pb-6 bg-white dark:bg-gray-800 relative overflow-hidden">
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
                <div
                    id="scrollableDiv"
                    className="overflow-y-scroll h-5/6 px-1"
                >
                    {!loaderCoins ? (
                        statusCoins !== 200 ? (
                            <h1>MESSAGE: {statusCoins.message}</h1>
                        ) : (
                            <InfiniteScroll
                                dataLength={items.length} //This is important field to render the next data
                                next={fetchData}
                                hasMore={hasMore}
                                scrollableTarget={"scrollableDiv"}
                                loader={<LoaderCoinItems />}
                            >
                                {items.map((coin, index) => {
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
                                })}
                            </InfiniteScroll>
                        )
                    ) : (
                        <div className = "w-full h-5/6 flex justify-center intem center">
                        <h1><ThreeDots color="#00BFFF" height={150} width={150} /></h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TableCoins
