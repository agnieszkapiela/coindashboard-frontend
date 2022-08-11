/***************************************************************************************************/
/**
 * PATH: api/coins/{name}/marketdata
 */

const COIN_MARKET_DATA = {
    name: "Bitcoin",
    description:
        "Marketplaces called “bitcoin exchanges” allow people to buy or sell bitcoins using different currencies. Bitcoin is a new currency that was created in 2009 by an unknown person using the alias Satoshi Nakamoto",
    symbol: "btc",
    current_quote: QUOTES
}

const QUOTES = {
    price: 24549.4, // Double
    deltas: [...DELTA, DELTA], // Array of  DELTA
    market_cap: "454.96B", // Double
    h24_volume: 37_201_551_016.14, // Double
    last_update_timestamp: 1660201229763 // Integer
}

const DELTA = {
    interval: [ONE_HOUR, FOUR_HOUR, ONE_DAY, SEVEN_DAY, THIRTY_DAY], // Array of String %
    pct_change: 4.93, // Double (Percent Price)
    nominal_change: 5.0 // Double
}
/***************************************************************************************************/

/***************************************************************************************************/
/**
 * PATH: api/coins/{name}
 * request params: name
 * return: COIN_DETAILS
 */

const COIN_DETAILS = {
    name: "Bitcoin", // String
    symbol: "BTC", // String
    image_url: "https://linkToTheLogo.com...", // String
    genesis_date: 1233681305000, // Long => Date
    is_token: false, // Bool
    contract_address: "address...", // String
    links: [LINK, LINK], // Array of Strings (LINK)
    description: "description" // String
}

const LINK = {
    title: "BTC website", // String
    url: "https://bitcoin.org/en/" // String
}

/***************************************************************************************************/

/***************************************************************************************************/
/**
 * PATH: api/coins/{name}/chart
 * request params: name, dateFrom, dateTo
 * return: List<PRICE>
 */

const PRICE = {
    price: 24549.4, // Double
    timestamp: 1660201229763 // Integer
}
/***************************************************************************************************/

/***************************************************************************************************/
/**
 * PATH: api/coins
 * request params: take?, page?
 * return: List<COIN_INFO>
 */

const COIN_INFO = {
    name: "Bitcoin", // String
    symbol: "BTC", // String
    image_url: "https://linkToTheLogo.com....", // String
    current_quote: QUOTES // Quote
}
/***************************************************************************************************/
