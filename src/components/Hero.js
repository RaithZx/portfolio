import React from 'react'

const Hero = () => {
    return (
        <div className="flex flex-col flex-wrap justify-center content-center w-2/3 h-screen">
            <h1 className="text-6xl text-indigo-900">Hi! I'm Yuri 👋🏽<br/> a Salesforce developer</h1>
            <span className="mt-8 text-xl text-gray-600">Currently working remotely from Africa.<br/></span>
<span className="text-gray-600 text-xl">Read more <a href="" className="text-black-300">about me here</a> or checkout my <a>previous projects</a></span>
            <span className="mt-9" role="img">
                Arrow
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="50px" height="50px" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg> */}
            </span>
        </div>
    )
}

export default Hero
