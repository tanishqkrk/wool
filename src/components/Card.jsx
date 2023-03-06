import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ link, iconColor, bgColor, title, desc, icon }) => {

    return (
        <Link to={link} className=''>
            <div className={`flex p-5 items-center gap-x-6 w-fit ${bgColor} rounded-md hover:-translate-x-1 hover:-translate-y-1 transition transition-delay-150 hover:shadow-2xl`}>
                <i className={`${icon} text-3xl ${iconColor}`}></i>
                <div className=''>
                    <p className='font-semibold'>{title}</p>
                    <p className='text-sm'>{desc}</p>
                </div>
                <div><i className="fa-solid fa-chevron-right"></i></div>
            </div>
        </Link>
    )
}

export default Card