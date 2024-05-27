import React from 'react'
import Link from 'next/link'

const Card = ({ src, name, party, description, candidateId }) => {
  return (
    <Link href={`/candidate/${candidateId}`} className="w-full md:w-1/2 m-4">
        <div className='group flex flex-col items-center h-full w-full bg-grey-600 hover:bg-orange-500
        py-5 px-5 rounded-[20px]
        border-solid border border-grey-700 cursor-pointer'>
            <img
            alt='Img of Biden'
            src={src}
            style={{width: '100%'}}
            />
            <p className={`text-xl lg:text-2xl mt-5 font-extrabold text-orange group-hover:text-white`}>{name}</p>
            <p className={`text-xs md:text-sm  group-hover:text-white`}>{party}</p>
            <div className='w-1/2 border-solid border-t border-orange-500 my-3 group-hover:border-white'></div>
            <p className='text-xs md:text-sm text-center group-hover:text-white'>{description}</p>
        </div>
    </Link>
  )
}

export default Card
