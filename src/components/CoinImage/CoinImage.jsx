import React from "react"

function CoinImage({ urlImage, alt, ratioChange = false }) {
    let height = "h-16"
    let width = "h-16"
    if (ratioChange !== false) {
        height = "h-8"
        width = "h-8"
    }
    return (
        <div className="flex-shrink-0">
            <span className="block relative">
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
            </span>
        </div>
    )
}

export default CoinImage
