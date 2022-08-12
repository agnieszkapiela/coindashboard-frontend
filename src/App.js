import CoinInfo from "./components/CoinInfo/CoinInfo"
import useFetchDataApi from "./customizedhooks/useFetchDataApi"
import configData from "./configData.json"
import ListCoinsInfo from "./components/ListCoinsInfo/ListCoinsInfo"

function App() {
    return (
        <>
            <header className="px-8 py-4 text-xl font-semibold shadow-sm">
                <h1>Coindashboard</h1>
            </header>
            <main>
                <CoinInfo />
                <ListCoinsInfo />
            </main>
        </>
    )
}

export default App
