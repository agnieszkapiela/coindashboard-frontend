import React from "react"

function TableRow({ id, name, surname, code }) {
    return (
        <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">{id}</td>
            <td class="border-b-2 p-4 dark:border-dark-5">{name}</td>
            <td class="border-b-2 p-4 dark:border-dark-5">{surname}</td>
            <td class="border-b-2 p-4 dark:border-dark-5">{code}</td>
        </tr>
    )
}

export default TableRow
