import React from 'react'

const Hero = () => {
    return (
        <div className="flex flex-col flex-wrap justify-center  h-screen">
            <h1 className="text-5xl md:text-6xl text-gray-700 font-bold title">Hi! I'm Yuri 👋🏽,<br /> a <span className="underline">Salesforce</span> developer</h1>
            <span className="mt-8 text-xl text-gray-600">I'm currently working <mark>remotely from Africa (Cape Verde)</mark> as a digital nomad<br /></span>
            <span className="text-gray-600 text-xl">Read more about me <a href="" className="underline text-black-300"> here</a> or checkout my <a href="" className="underline text-black-300">previous projects</a></span>
            <span className="mt-9" role="img">
            </span>
        </div>
    )
}

export default Hero
