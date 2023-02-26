import React from 'react'

const GenerateButton = ({ generateQR }) => {
    return (
        <div>
            <button className='generateButton' onClick={generateQR} type="submit">Generate</button>
        </div>
    )
}

export default GenerateButton