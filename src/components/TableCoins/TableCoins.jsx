import { useEffect, useState } from "react"
import TableRow from "../TableRow/TableRow"
import { COIN_INFO } from "../../data"

function TableCoins({ data, setCoinName }) {
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
                    <TableRow
                        name={COIN_INFO.name}
                        price={COIN_INFO.current_quote.price}
                        token={false}
                        urlImage={COIN_INFO.image_url}
                        alt={COIN_INFO.symbol}
                        hour={COIN_INFO.current_quote.deltas[0]}
                        day={COIN_INFO.current_quote.deltas[1]}
                        week={COIN_INFO.current_quote.deltas[2]}
                        setCoinName={setCoinName}
                    />
                </div>
            </div>
        </div>
    )
}

export default TableCoins
