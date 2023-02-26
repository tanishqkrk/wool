import React from 'react'
import { useState, useEffect } from 'react'

const ImgInput = ({ setTextInputInApp }) => {
    const [input, setInput] = useState("");
    useEffect(() => {
        setTextInputInApp(input)
    }, [input])
    return (
        <div className='textInputContainer' >
            <input className='textInput' placeholder='Enter your text' onChange={(e) => setInput(e.target.value)} value={input} type="file" name="text" id="textInput" />
        </div>
    )
}

export default ImgInput