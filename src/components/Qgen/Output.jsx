import React from 'react'

const Output = ({ generatedQRCode }) => {
    return (

        <div className="output bg-primary rounded-lg ">
            <img className='w-full' src={generatedQRCode} alt="" />
        </div>

    )
}

export default Output