import React from 'react'
import TextInput from './components/TextInput'
import Output from './components/Output'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import GenerateButton from "./components/GenerateButton"
import ImgInput from "./components/ImgInput"
const App = () => {
  // This fetches the input data from TextInput component
  const [textInputInApp, setTextInputInApp] = useState("");
  const [imgInputInApp, setImgInputInApp] = useState("")
  const [generatedQRCode, setGeneratedQRCode] = useState("/tanishqkrk.png");
  const [isLoaded, setIsLoaded] = useState(true);
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
        .then((response) => response.blob())
        .then((response) => URL.createObjectURL(response))
        .then((response) => setGeneratedQRCode(response))
      // .catch((err) => console.log(err))
    }
  }

  const data = new FormData();
  data.append("image", imgInputInApp);

  const generatedImageQR = () => {
    // fetch('https://qrcode3.p.rapidapi.com/images', options)
    // .then((response) => console.log(response))
  }

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className='app'>
        <Output generatedQRCode={generatedQRCode} />
        <div className="inputContainer">
          <Routes>
            <Route path="/" element={<TextInput setTextInputInApp={setTextInputInApp} />}></Route>
            {/* <Route path="/wifi" element={<TextInput setTextInputInApp={setTextInputInApp} />}></Route> */}
            {/* <Route path="/img" element={<ImgInput setImgInputInApp={setImgInputInApp} />}></Route> */}
          </Routes>
          <GenerateButton generateTextQR={generateTextQR} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App