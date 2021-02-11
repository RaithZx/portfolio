import React from 'react'

const Hero = () => {
    return (
        <div className="flex flex-col flex-wrap justify-center h-screen content-center max-w-7xl">
            <h1 className="text-6xl">Hi! I'm Yuri 👋🏽<br/> a Salesforce developer</h1>
            <p className="mt-8 text-2lg text-gray-600">Currently working remotely from Africa.<br/>
Read more about me here or checkout my previous projects</p>
            <span className="" role="img">
                Arrow
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="50px" height="50px" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg> */}
            </span>
        </div>
    )
}

export default Hero
