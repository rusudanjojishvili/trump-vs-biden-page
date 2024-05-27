import Image from 'next/image'
import React from 'react'

const ImagesContent = () => {
  return (
    <div className='flex justify-center flex-wrap md:flex-nowrap'>
      <Image 
        alt='Img of Biden'
        src='/Biden.png'
        className='md:w-[50%]'
        width={578}
        height={406}
      />
      <Image 
        alt='Img of Trump'
        src='/Trump.png'
        className='w-[100%] md:w-[50%]'
        width={578}
        height={406}
      />
    </div>
  )
}

export default ImagesContent
