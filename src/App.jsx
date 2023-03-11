import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Qgen from "./components/Qgen/Qgen"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeScreen from './components/HomeScreen'
import Urls from './components/Urls/Urls'
const App = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen />}></Route>
                <Route path="/qgen" element={<Qgen />}></Route>
                <Route path="/urls" element={<Urls />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App