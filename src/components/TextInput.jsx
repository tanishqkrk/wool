import React from 'react'
import { useState, useEffect } from 'react'

const TextInput = ({ setTextInputInApp }) => {
    const [textInput, setTextInput] = useState("");
    useEffect(() => {
        setTextInputInApp(textInput)
    }, [textInput])
    return (
        <div className='textInputContainer' >
            <input className='textInput' placeholder='Enter your text' onChange={(e) => setTextInput(e.target.value)} value={textInput} type="text" name="text" id="textInput" />
        </div>
    )
}

export default TextInput