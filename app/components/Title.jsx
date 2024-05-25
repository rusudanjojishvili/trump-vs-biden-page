import React from 'react'
import { passionOne } from "../fonts";


const Title = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-7xl text-black'>Battle for the Oval</h1>
        <h2 className={`text-6xl text-orange leading-none ${passionOne.className}`}>Biden vs. Trump</h2>
        <h1 className='text-7xl text-black'>{`Deciding America's Future`}</h1>
        <h4>Webz.io transforms the web into machine-ready feeds that plug right into any platform. So machines </h4>
        <h4> get data just the way they need it — and companies easily turn web data into customer value.</h4>
    </div>
  )
}

export default Title
