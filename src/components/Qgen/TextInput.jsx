import React from 'react'
import { useState, useEffect } from 'react'

const TextInput = ({ setTextInputInApp }) => {
    const [textInput, setTextInput] = useState("");
    useEffect(() => {
        setTextInputInApp(textInput)
    }, [textInput])
    return (
        <div className='textInputContainer my-3' >
            <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm' placeholder='Enter your text' onChange={(e) => setTextInput(e.target.value)} value={textInput} type="text" name="text" id="textInput" />
        </div>
    )
}

export default TextInput