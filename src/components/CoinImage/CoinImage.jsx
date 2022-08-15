import React from "react"

function CoinImage({ urlImage, alt, ratioChange = true }) {
    let height = "h-16"
    let width = "h-16"
    if (ratioChange !== true) {
        height = "h-8"
        width = "h-8"
    }
    return (
        <div className="flex-shrink-0">
            <a href="#" className="block relative">
                <img
                    alt={alt}
                    src={urlImage}
                    className={
                        "mx-auto object-cover rounded-full " +
                        height +
                        " " +
                        width
                    }
                />
            </a>
        </div>
    )
}

export default CoinImage
