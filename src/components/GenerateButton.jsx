import React from 'react'

const GenerateButton = ({ generateTextQR }) => {
    return (
        <div>
            <button className='generateButton' onClick={generateTextQR} type="submit">Generate</button>
        </div>
    )
}

export default GenerateButton