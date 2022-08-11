import React from "react"
import configData from "../../configData.json"

function Chart({ name, params }) {
    const [status, loader, data] = useFetchDataApi(
        configData.COINS_PATH + `/${name}/${configData.CHART_PATH}`,
        params
    )
    return <div>Chart</div>
}

export default Chart
