import { useEffect, useState } from "react"
import useFetchDataApi from "../../customizedhooks/useFetchDataApi"
import configData from "../../configData.json"

function ListCoinsInfo({ params }) {
    const [listCoins, setListCoins] = useState([])
    // const [status, loader, data] = useFetchDataApi(
    //     configData.COINS_PATH,
    //     params
    // )

    useEffect(() => {
        setListCoins((prevListCoins) => [...prevListCoins, ...[]])
        document
            .getElementById("listCoins")
            .addEventListener("scroll", handleListScroll)
    }, [])

    const handleListScroll = (e) => {
        console.log(e)
    }

    return (
        <div id="listCoins" className="border-2 h-32 overflow-y-scroll">
            <ul>
                <li id="firstElement">Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    )
}

export default ListCoinsInfo
