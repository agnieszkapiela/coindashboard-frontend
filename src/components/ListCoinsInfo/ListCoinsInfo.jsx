import { useEffect, useState } from "react"
import TableRow from "../TableRow/TableRow"
import BtcImage from "../../img/bitcoin.png"

function ListCoinsInfo({ params }) {
    return (
        <div id="listCoins" className="pt-2">
            <div className="border dark:border-gray-600 h-80 mt-2  w-full p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
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
                <div className="overflow-y-scroll h-80 px-1">
                    <TableRow
                        name="Bitcoin"
                        price={1}
                        token={false}
                        urlImage={BtcImage}
                        alt="BTC"
                    />
                    <TableRow
                        name="Ether"
                        price={123}
                        token={false}
                        urlImage={
                            "https://www.quicknode.com/assets/icons/eth-1f04b7bdefae7039326a94c5c938058c420d501266b4634ee16cd4ed6df3ffea.png"
                        }
                        alt="Ether"
                    />
                    <TableRow
                        name="Ether"
                        price={123}
                        token={false}
                        urlImage={
                            "https://www.quicknode.com/assets/icons/eth-1f04b7bdefae7039326a94c5c938058c420d501266b4634ee16cd4ed6df3ffea.png"
                        }
                        alt="Ether"
                    />{" "}
                    <TableRow
                        name="Ether"
                        price={123}
                        token={false}
                        urlImage={
                            "https://www.quicknode.com/assets/icons/eth-1f04b7bdefae7039326a94c5c938058c420d501266b4634ee16cd4ed6df3ffea.png"
                        }
                        alt="Ether"
                    />
                    <TableRow
                        name="Ether"
                        price={123}
                        token={false}
                        urlImage={
                            "https://www.quicknode.com/assets/icons/eth-1f04b7bdefae7039326a94c5c938058c420d501266b4634ee16cd4ed6df3ffea.png"
                        }
                        alt="Ether"
                    />
                    <TableRow
                        name="Ether"
                        price={123}
                        token={false}
                        urlImage={
                            "https://www.quicknode.com/assets/icons/eth-1f04b7bdefae7039326a94c5c938058c420d501266b4634ee16cd4ed6df3ffea.png"
                        }
                        alt="Ether"
                    />
                    <TableRow
                        name="Ether"
                        price={123}
                        token={false}
                        urlImage={
                            "https://www.quicknode.com/assets/icons/eth-1f04b7bdefae7039326a94c5c938058c420d501266b4634ee16cd4ed6df3ffea.png"
                        }
                        alt="Ether"
                    />
                    <TableRow
                        name="Ether"
                        price={123}
                        token={false}
                        urlImage={
                            "https://www.quicknode.com/assets/icons/eth-1f04b7bdefae7039326a94c5c938058c420d501266b4634ee16cd4ed6df3ffea.png"
                        }
                        alt="Ether"
                    />
                    <TableRow
                        name="Ether"
                        price={123}
                        token={false}
                        urlImage={
                            "https://www.quicknode.com/assets/icons/eth-1f04b7bdefae7039326a94c5c938058c420d501266b4634ee16cd4ed6df3ffea.png"
                        }
                        alt="Ether"
                    />
                    <TableRow
                        name="Ether"
                        price={123}
                        token={false}
                        urlImage={
                            "https://www.quicknode.com/assets/icons/eth-1f04b7bdefae7039326a94c5c938058c420d501266b4634ee16cd4ed6df3ffea.png"
                        }
                        alt="Ether"
                    />
                </div>
            </div>
        </div>
    )
}

export default ListCoinsInfo
