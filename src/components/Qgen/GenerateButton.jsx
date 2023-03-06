import React from 'react'

const GenerateButton = ({ generateTextQR }) => {
    return (
        <div>
            <button className='p-2 bg-primary w-full text-white rounded-lg' onClick={generateTextQR} type="submit">Generate</button>
        </div>
    )
}

export default GenerateButton