import React from 'react'

const Output = ({ generatedQRCode }) => {
    return (

        <div className="output">
            <img src={generatedQRCode} alt="" />
        </div>

    )
}

export default Output