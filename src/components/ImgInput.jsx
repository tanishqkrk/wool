import React from 'react'
import { useState, useEffect } from 'react'

const ImgInput = ({ setImgInputInApp }) => {
    const [input, setInput] = useState("");
    useEffect(() => {
        setImgInputInApp(input)
    }, [input])
    // console.log(input);
    return (
        <div className='textInputContainer' >
            <input className='imgInput textInput' onChange={(e) => setInput(e.target.value)} value={input} type="file" name="img" id="textInput" />
            <img src={input} alt="" />
        </div>
    )
}

export default ImgInput