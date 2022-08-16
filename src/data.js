/***************************************************************************************************/
/**
 * PATH: api/coins/{name}/marketdata
 */

const DELTA_1H = {
    interval: "1H", // Array of String % 1H
    pct_change: 0.086318, // Double (Percent Price)
    nominal_change: 24_131.6 // Double
}

const DELTA_24H = {
    interval: "24H", // Array of String % 24H
    pct_change: 0.036318, // Double (Percent Price)
    nominal_change: 24_144.6 // Double
}

const DELTA_7D = {
    interval: "7D", // Array of String % 24H
    pct_change: 0.036318, // Double (Percent Price)
    nominal_change: 24_144.6 // Double
}

const QUOTES = {
    price: 24073.4, // Double
    deltas: [DELTA_1H, DELTA_24H, DELTA_7D], // Array of  DELTA
    market_cap: 460513164207, // Double
    h24_volume: 27508459604, // Double
    last_update_timestamp: 1660598250101 // Integer
}

export const COIN_MARKET_DATA = {
    name: "Bitcoin",
    symbol: "btc",
    current_quote: QUOTES
}

/***************************************************************************************************/

/***************************************************************************************************/
/**
 * PATH: api/coins/{name}
 * request params: name
 * return: COIN_DETAILS
 */
const LINK = {
    title: "Official Website", // String
    url: "https://bitcoin.org/en/" // String
}
const LINK1 = {
    title: "Github project", // String
    url: "https://github.com/bitcoin/bitcoin.git" // String
}

export const COIN_DETAILS = {
    name: "Bitcoin", // String
    symbol: "BTC", // String
    image_url: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", // String
    genesis_date: 1233681305000, // Long => Date
    is_token: false, // Bool
    contract_address: "address...", // String
    links: [LINK, LINK1], // Array of Strings (LINK)
    description:
        "Bitcoin, often described as a cryptocurrency, a virtual currency or a digital currency - is a type of money that is completely virtual. It's like an online version of cash. You can use it to buy products and services, but not many shops accept Bitcoin yet and some countries have banned it altogether." // String
}
/***************************************************************************************************/

/***************************************************************************************************/
/**
 * PATH: api/coins/{name}/chart
 * request params: name, dateFrom, dateTo
 * return: List<PRICE>
 */

export const PRICES = {
    prices: [
        {
            timestamp: 1659398400000,
            price: 23333.749243312184
        },
        {
            timestamp: 1659484800000,
            price: 23053.846847482677
        },
        {
            timestamp: 1659571200000,
            price: 22860.42098438317
        },
        {
            timestamp: 1659657600000,
            price: 22678.363633874185
        },
        {
            timestamp: 1659744000000,
            price: 23225.036201942938
        },
        {
            timestamp: 1659830400000,
            price: 22984.57953144855
        },
        {
            timestamp: 1659916800000,
            price: 23197.603469525384
        },
        {
            timestamp: 1660003200000,
            price: 23823.679442453606
        },
        {
            timestamp: 1660089600000,
            price: 23203.680696781623
        },
        {
            timestamp: 1660176000000,
            price: 23948.829553271633
        },
        {
            timestamp: 1660262400000,
            price: 23948.75170368143
        },
        {
            timestamp: 1660348800000,
            price: 24411.379871522615
        },
        {
            timestamp: 1660435200000,
            price: 24433.653747243658
        },
        {
            timestamp: 1660521600000,
            price: 24312.541424891562
        },
        {
            timestamp: 1660593695000,
            price: 24040.452576597032
        }
    ]
}

/***************************************************************************************************/

/***************************************************************************************************/
/**
 * PATH: api/coins
 * request params: take?, page?
 * return: List<COIN_INFO>
 */

export const COIN_INFO = {
    name: "Bitcoin", // String
    symbol: "BTC", // String
    image_url: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", // String
    current_quote: QUOTES // Quote
}
/***************************************************************************************************/
