import React from "react"

function Home() {
    return (
        <div>
            <div className="bg-white dark:bg-gray-800 h-screen pt-4">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block">Want to be millionaire ?</span>
                        <span className="block text-indigo-500">
                            It&#x27;s today or never.
                        </span>
                    </h2>
                    <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
                        I had noticed that both in the very poor and very rich
                        extremes of society the mad were often allowed to mingle
                        freely
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <a
                                type="button"
                                href="#dashboard"
                                className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <section className="bg-gray-900 w-full h-screen py-8">
                <div className="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Trusted by eCommerce Businesses
                        </h2>

                        <p className="mt-4 text-gray-500 sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione dolores laborum labore provident
                            impedit esse recusandae facere libero harum sequi.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Total Sales
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                    $4.8m
                                </dd>
                            </div>

                            <div className="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Offical Addons
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                    24
                                </dd>
                            </div>

                            <div className="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Total Addons
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                    86
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Home
