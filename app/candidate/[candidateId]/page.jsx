import ArticlesContainer from '@/app/components/ArticlesContainer'
import BidenInfo from '@/app/components/BidenInfo'
import SentimentAnalysis from '@/app/components/SentimentAnalysis'
import TrumpInfo from '@/app/components/TrumpInfo'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const page =  async ({
   params
}) => {
  const resPositive = await fetch(
    `https://api.webz.io/newsApiLite?token=61809a4e-832c-4c8e-b219-ea9bd0ff2fa8&q=${params.candidateId}&sentiment=positive&highlight=true&size=10`)
  const positivePosts = await resPositive.json()
  const resNegative = await fetch(
    `https://api.webz.io/newsApiLite?token=61809a4e-832c-4c8e-b219-ea9bd0ff2fa8&q=${params.candidateId}&sentiment=negative&size=10`)
  const negativePosts = await resNegative.json()


  return (
    <div>
      <div className='py-7 px-[20px] lg:px-[130px]'>
        <Link href='/' className='text-orange font-medium'>
          <div className='flex flex-row items-center'>
            <IoIosArrowBack className='fill-black'/>
            <p>Back to Candidate Selection</p>
          </div>
        </Link>
      </div>
      {params.candidateId=== 'Trump'? <TrumpInfo /> : <BidenInfo />}
      <SentimentAnalysis positivePosts={positivePosts} negativePosts={negativePosts}/>
      <ArticlesContainer positivePosts={positivePosts?.posts} negativePosts={negativePosts?.posts} 
      positiveTotal={positivePosts?.totalResults} negativeTotal={negativePosts?.totalResults} />
    </div>
  )
}

export default page
