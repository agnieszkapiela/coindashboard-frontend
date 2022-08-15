import Home from "./components/Home/Home"
import Dashbord from "./components/Dashbord/Dashbord"

function App() {
    return (
        <>
            <header className="px-8 py-4 text-xl font-semibold border-b dark:border-gray-600 shadow-sm dark:bg-gray-800 dark:text-white">
                <h1>
                    C<span className="text-red-600">Dashboard</span>
                </h1>
            </header>
            <main>
                <Home />
                <Dashbord />
            </main>
        </>
    )
}

export default App
