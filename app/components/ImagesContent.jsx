import Image from 'next/image'
import React from 'react'

const ImagesContent = () => {
  return (
    <div className='flex justify-center'>
      <Image 
        alt='Img of Biden'
        src='/Biden.png'
        width={578}
        height={406}
      />
      <Image 
        alt='Img of Trump'
        src='/Trump.png'
        width={578}
        height={406}
      />
    </div>
  )
}

export default ImagesContent
