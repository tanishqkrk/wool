import React from 'react'
import TextInput from './TextInput'
import Output from './Output'
import { useState } from 'react'
import GenerateButton from "./GenerateButton"
import Loader from "./Loader"
import "./Qgen.css"
const App = () => {
    // This fetches the input data from TextInput component
    const [textInputInApp, setTextInputInApp] = useState("");
    const [generatedQRCode, setGeneratedQRCode] = useState("/tanishqkrk.png");
    const [isLoading, setIsLoading] = useState(false);
    const RAPID_API_KEY = "81ea193ad8msh7f722ef5fa9d248p1e61afjsnd7e97c253601";
    const RAPID_API_HOST = "qrcode3.p.rapidapi.com"
    const objectToPass = {
        data: textInputInApp,
        style: {
            module: {
                color: "white",
                shape: "default"
            },
            inner_eye: {
                shape: "default"
            },
            outer_eye: {
                shape: "default"
            },
            background: {}
        },
        size: {
            width: 500,
            quiet_zone: 4,
            error_correction: "M"
        },
        output: {
            filename: "qrcode",
            format: "png"
        }
    }


    const generateTextQR = () => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': RAPID_API_HOST
            },
            body: JSON.stringify(objectToPass)
        };
        if (textInputInApp !== "" && textInputInApp) {
            fetch('https://qrcode3.p.rapidapi.com/qrcode/text', options)
                .then(setIsLoading(true))
                .then((response) => response.blob())
                .then((response) => URL.createObjectURL(response))
                .then((response) => setGeneratedQRCode(response))
                .then(setIsLoading(false))
        }
    }

    return (
        <div className='h-full flex flex-col justify-center items-center bg-gray-100'>
            <div className='w-[400px]'>
                {isLoading ? <Loader /> : <Output generatedQRCode={generatedQRCode} />}
                <div className="inputContainer">
                    <TextInput setTextInputInApp={setTextInputInApp}></TextInput>
                    <GenerateButton generateTextQR={generateTextQR} />
                </div>
            </div>
        </div>
    )
}

export default App