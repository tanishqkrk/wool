import React from 'react'
import Card from "./Card"

const HomeScreen = () => {
    return (
        <div className='bg-gray-100 h-full p-3'>
            <div className='text-5xl font-semibold text-center text-gray-700'>🎉 All the tools you need, in one place!</div>
            <div className='text-gray-700 text-center'>Click on any tool to use it</div>
            <p className='text-lg font-semibold'>All tools</p>
            <div className='grid grid-cols-3 p-3 gap-x-6 w-full'>
                <Card link="/qgen" bgColor="bg-indigo-200" iconColor="text-indigo-800" title={"QR Code generator"} desc={"Generate a QR code with links and texts, more inputs coming soon!"} icon={"fa-solid fa-qrcode"} />
                <Card link="/pass" bgColor="bg-green-200" iconColor="text-green-800" title={"Password generator"} desc={"Generate passwords with various variations, and check the strength of the password you made."} icon={"fa-solid fa-hashtag"} />
            </div>
        </div>
    )
}

export default HomeScreen