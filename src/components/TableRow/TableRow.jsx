import React, { useCallback } from "react"
import CoinImage from "../CoinImage/CoinImage"

function TableRow({
    type,
    name,
    price,
    urlImage,
    alt,
    hour,
    day,
    week,
    month,
    setCoinName
}) {
    const handleClick = useCallback(() => {
        setCoinName(name)
    }, [])

    return (
        <div className="flex items-center mb-2 pb-2 dark:border-gray-600 justify-between border-b">
            <div className="flex items-center w-full justify-around">
                <div className="flex text-sm w-1/5 flex-col ml-2 items-start justify-between">
                    {type !== "header" ? (
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
                            <p className="dark:text-white ml-1 text-md md:text-lg overflow-hidden break-words">
                                {name ? name : "Name"}
                            </p>
                        </a>
                    ) : (
                        <span className="flex items-center">
                            <CoinImage
                                urlImage={urlImage}
                                alt={alt}
                                ratioChange={true}
                            />
                            <p className="dark:text-white ml-1 text-sm md:text-lg">
                                {name ? name : "Name"}
                            </p>
                        </span>
                    )}
                </div>
                <div className="flex flex-col justify-center w-1/5 items-center">
                    <dd className="text-xs md:text-lg font-semibold text-gray-900 dark:text-white">
                        {hour
                            ? "$" +
                              new Intl.NumberFormat().format(
                                  hour.nominal_change
                              )
                            : "1 Hour"}
                    </dd>
                    <dd className="text-gray-500 font-semibold text-xs sm:text-md md:text-lg">
                        {hour && hour.pct_change.toPrecision(2) + " %"}
                    </dd>
                </div>
                <div className="flex flex-col justify-center items-center w-1/5">
                    <dd className="text-xs md:text-lg font-semibold text-gray-900 dark:text-white">
                        {day
                            ? "$" +
                              new Intl.NumberFormat().format(day.nominal_change)
                            : "1 Day"}
                    </dd>
                    <dd className="text-gray-500 font-semibold text-xs sm:text-md md:text-lg">
                        {day && day.pct_change.toPrecision(2) + "%"}
                    </dd>
                </div>
                <div className="flex flex-col justify-center items-center w-1/5">
                    <dd className="text-xs md:text-lg font-semibold text-gray-900 dark:text-white">
                        {week
                            ? "$" +
                              new Intl.NumberFormat().format(
                                  week.nominal_change
                              )
                            : "1 Week"}
                    </dd>
                    <dd className="text-gray-500 font-semibold text-xs sm:text-md md:text-lg">
                        {week && week.pct_change.toPrecision(2) + "%"}
                    </dd>
                </div>
                {/* <div className="flex flex-col justify-center items-center">
                    <dd className="text-xs md:text-lg font-semibold text-gray-900 dark:text-white">
                        {month
                            ? "$" +
                              new Intl.NumberFormat().format(
                                  month.nominal_change
                              )
                            : "1 Month"}
                    </dd>
                    <dd className="text-gray-500 font-semibold text-xs sm:text-md md:text-lg">
                        {month && month.pct_change.toPrecision(2) + "%"}
                    </dd>
                </div> */}
                <div className="text-green-400 text-sm md:text-md font-semibold w-1/5">
                    {price
                        ? "$" + new Intl.NumberFormat().format(price)
                        : "Price"}
                </div>
            </div>
        </div>
    )
}

export default TableRow
