import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-white flex justify-between  p-2 gap-x-5 border-b-2 border-gray-100'>
            <div className='flex gap-x-6 items-center '>
                <Link className='text-3xl font-bold text-primary' to="/">Wool</Link>
                <Link to="/" className='flex gap-x-3 items-center text-gray-500'>
                    <i class="fa-solid fa-grip"></i>
                    All tools
                </Link>
            </div>
            <div className='text-gray-500 flex gap-x-5 items-center'>
                <a target={"blank"} className='flex items-center gap-x-3' href="https://www.github.com/tanishqkrk/qgen">
                    Support the project
                    <i className="fa-brands fa-github text-3xl"></i>
                </a>
                <a target={"blank"} className='bg-primary p-3 rounded-md text-white' href="https://tanishqkrk.netlify.app/">
                    Visit the creator
                </a>
            </div>
        </div>
    )
}

export default Navbar