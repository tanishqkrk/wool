import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    // const [currentInput, setCurrentInput] = useState("TEXT")
    // console.log(currentInput);
    return (
        <div className="navbar">
            <div className="navbarButtons">
                <Link to={'/'}><i className=" navbarIcon fa-solid fa-link"></i></Link>
                <Link to={'/img'}><i className=" navbarIcon fa-solid fa-image"></i></Link>
                <Link to={'/wifi'}><i className=" navbarIcon fa-solid fa-wifi"></i></Link>
                <Link to={'/contact'}><i className=" navbarIcon fa-solid fa-address-book"></i></Link>
            </div>
        </div>
    )
}

export default Navbar