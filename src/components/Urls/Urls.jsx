import { useEffect, useState } from "react"
import React from 'react'

const Urls = () => {

    const [input, setInput] = useState("");
    const [short, setShort] = useState("");
    const [urlHistory, setUrlHistory] = useState([
        {
            url: "https://tanishqkrk.netlify.app/",
            short: "http://linkjaye.ga/vx4i84SZY",
            time: 0
        },
    ])
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '834f9f0f0dmsh7855af479e4d60bp1d97f4jsne51872208059',
            'X-RapidAPI-Host': 'url-shortner6.p.rapidapi.com'
        },
        body: JSON.stringify({
            fullUrl: input
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://url-shortner6.p.rapidapi.com/shorten", options);
            let returnedURL = await response.json()
            setShort(returnedURL);
            if (input && returnedURL) {
                // console.log(short);
                setUrlHistory((prevHistory) => [...prevHistory, {
                    url: input,
                    short: returnedURL.shortUrl,
                    time: Date.now()
                }])
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    const copyLink = (e) => {
        window.navigator.clipboard.writeText(e);
        alert("Copied!")
    }

    // console.log(urlHistory);

    return (
        <div className='flex justify-center items-center w-full h-full overflow-y-hidden max-md:flex-col-reverse max-md:p-4 bg-gray-50'>
            <div className='w-2/3 flex flex-col justify-center items-center gap-y-5 max-lg:w-1/2 px-2 max-md:w-full'>
                <input value={input} onChange={(e) => setInput(e.target.value)} className='placeholder:italic  placeholder:text-slate-400 block bg-white w-2/3 border border-slate-300 rounded-md py-4 pl-1 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm max-lg:w-full' placeholder='Enter URL' type="text" name="text" id="textInput" />
                <button type="submit" onClick={handleSubmit} className='p-2 bg-primary w-2/3 text-white rounded-lg max-lg:w-full'>Generate</button>
                <div onClick={() => copyLink(short.shortUrl)} role={"button"} className='w-2/3 p-3 text-center border-dotted border-2 border-gray-200 shadow-sm max-lg:w-full'>{short.shortUrl}</div>
            </div>
            <div className='w-1/3 flex flex-col justify-center items-center gap-y-4 border-l-2 border-gray-100  px-3 h-full overflow-y-scroll max-lg:w-1/2 max-md:w-full max-md:border-0'>
                {
                    urlHistory
                        .sort((a, b) => b.time - a.time)
                        .map((value) => {
                            return <div role={"button"} onClick={() => copyLink(value.short)} className=" p-3 text-center border-dotted border-2 border-gray-200 w-full h-fit break-words hover:bg-white transition transition-delay-300">
                                <div className="text-sm text-green-600">{value.url}</div>
                                <div className="font-bold text-lg">{value.short}</div>
                            </div>
                        })
                }
            </div>
        </div>
    )
}

export default Urls