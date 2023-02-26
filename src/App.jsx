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
  const [inputInApp, setInputInApp] = useState("");
  const [generatedQRCode, setGeneratedQRCode] = useState("/tanishqkrk.png");
  const [isLoaded, setIsLoaded] = useState(true)
  const objectToPass = {
    data: inputInApp,
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
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '81ea193ad8msh7f722ef5fa9d248p1e61afjsnd7e97c253601',
      'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
    },
    body: JSON.stringify(objectToPass)
  };

  const generateQR = () => {
    if (inputInApp !== "" && inputInApp) {
      fetch('https://qrcode3.p.rapidapi.com/qrcode/text', options)
        .then((response) => response.blob())
        .then((response) => URL.createObjectURL(response))
        .then((response) => setGeneratedQRCode(response))
      // .catch((err) => console.log(err))
    }
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className='app'>
        <Output generatedQRCode={generatedQRCode} />
        <div className="inputContainer">
          <Routes>
            <Route path="/" element={<TextInput setTextInputInApp={setInputInApp} />}></Route>
            <Route path="/img" element={<ImgInput setTextInputInApp={setInputInApp} />}></Route>
          </Routes>
          <GenerateButton generateQR={generateQR} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App