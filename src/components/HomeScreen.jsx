import React from 'react'
import Card from "./Card"

const HomeScreen = () => {
    return (
        <div className='bg-gray-50 h-full p-3'>
            <div className='text-5xl font-semibold text-center text-gray-700'>🎉 All the tools you need, in one place!</div>
            <div className='text-gray-700 text-center'>Click on any tool to use it</div>
            <p className='text-lg font-semibold'>All tools</p>
            <div className='grid grid-cols-3 items-stretch p-3 gap-6 w-full max-lg:grid-cols-2 max-md:grid-cols-1'>
                <Card link="/qgen" bgColor="bg-indigo-200" iconColor="text-indigo-800" title={"QR Code generator"} desc={"Generate a QR code with links and texts, more inputs coming soon!"} icon={"fa-solid fa-qrcode"} />
                <Card link="/urls" bgColor="bg-pink-200" iconColor="text-pink-800" title={"URL Shortner"} desc={"Get rid of lengthy ugly URLs and use shortned minimal URLs for extensive use."} icon={"fa-solid fa-link"} />
                {/* <Card link="/pass" bgColor="bg-green-200" iconColor="text-green-800" title={"Password generator"} desc={"Generate passwords with various variations, and check the strength of the password you made."} icon={"fa-solid fa-hashtag"} /> */}
            </div>
            <p className='text-lg font-semibold'>More tools coming soon ~ App under construction 👷‍♂️</p>
        </div>
    )
}

export default HomeScreen