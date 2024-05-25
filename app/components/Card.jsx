import React from 'react'
import { inter } from "../fonts";

const Card = ({ src }) => {
  return (
    <div className='flex flex-col items-center justify-center w-1/2 bg-grey-600 py-5 px-5 rounded-[20px] mx-4
    border-solid border border-grey-700'>
        <img
        alt='Img of Biden'
        src={src}
        style={{width: '100%'}}
        />
        <p className={`text-2xl my-5 font-extrabold text-orange ${inter.className}`}>Donald Trump</p>
    </div>
  )
}

export default Card
