import React, { useCallback } from "react"
import CoinImage from "../CoinImage/CoinImage"

function TableRow({
    name,
    price,
    urlImage,
    alt,
    hour,
    day,
    week,
    setCoinName
}) {
    const handleClick = useCallback(() => {
        setCoinName(name)
    }, [])

    return (
        <div className="flex items-center mb-2 pb-2 dark:border-gray-600 justify-between border-b">
            <div className="flex items-center w-full justify-around">
                <div className="flex text-sm flex-col ml-2 items-start justify-between">
                    <a
                        href="#dashboard"
                        onClick={handleClick}
                        className="flex items-center"
                    >
                        <CoinImage
                            urlImage={urlImage}
                            alt={alt}
                            ratioChange={true}
                        />
                        <p className="dark:text-white ml-1 text-lg">
                            {name ? name : "Name"}
                        </p>
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                        {hour
                            ? new Intl.NumberFormat().format(
                                  hour.nominal_change
                              ) + " $"
                            : "1 Hour"}
                    </dd>
                    <dd className="text-gray-500 font-semibold text-md">
                        {hour && hour.pct_change.toPrecision(2) + " %"}
                    </dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                        {day
                            ? new Intl.NumberFormat().format(
                                  day.nominal_change
                              ) + " $"
                            : "1 Day"}
                    </dd>
                    <dd className="text-gray-500 font-semibold text-md">
                        {day && day.pct_change.toPrecision(2) + " %"}
                    </dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                        {week
                            ? new Intl.NumberFormat().format(
                                  week.nominal_change
                              ) + " $"
                            : "1 Week"}
                    </dd>
                    <dd className="text-gray-500 font-semibold text-md">
                        {week && week.pct_change.toPrecision(2) + " %"}
                    </dd>
                </div>
                <div className="text-green-400">
                    {price
                        ? new Intl.NumberFormat().format(price) + " $"
                        : "Price"}
                </div>
            </div>
        </div>
    )
}

export default TableRow
