import { useEffect, useState } from "react"
import useFetchDataApi from "../../customizedhooks/useFetchDataApi"
import configData from "../../configData.json"
import TableRow from "../TableRow/TableRow"

function ListCoinsInfo({ params }) {
    const [listCoins, setListCoins] = useState([])
    // const [status, loader, data] = useFetchDataApi(
    //     configData.COINS_PATH,
    //     params
    // )

    return (
        <div id="listCoins" className="mt-6 border-2 h-64 overflow-y-scroll">
            <table class="table p-4 bg-white shadow rounded-lg">
                <thead>
                    <tr>
                        <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            #
                        </th>
                        <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            First name
                        </th>
                        <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Last name
                        </th>
                        <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow
                        id={1}
                        name="Eric"
                        surname="Prouve"
                        code="prouveE"
                    />
                    <TableRow
                        id={1}
                        name="Eric"
                        surname="Prouve"
                        code="prouveE"
                    />
                    <TableRow
                        id={1}
                        name="Eric"
                        surname="Prouve"
                        code="prouveE"
                    />
                    <TableRow
                        id={1}
                        name="Eric"
                        surname="Prouve"
                        code="prouveE"
                    />
                    <TableRow
                        id={1}
                        name="Eric"
                        surname="Prouve"
                        code="prouveE"
                    />
                    <TableRow
                        id={1}
                        name="Eric"
                        surname="Prouve"
                        code="prouveE"
                    />
                    <TableRow
                        id={1}
                        name="Eric"
                        surname="Prouve"
                        code="prouveE"
                    />
                    <TableRow
                        id={1}
                        name="Eric"
                        surname="Prouve"
                        code="prouveE"
                    />
                    <TableRow
                        id={1}
                        name="Eric"
                        surname="Prouve"
                        code="prouveE"
                    />
                </tbody>
            </table>
        </div>
    )
}

export default ListCoinsInfo
