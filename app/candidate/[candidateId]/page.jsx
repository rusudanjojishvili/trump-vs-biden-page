import ArticleItem from '@/app/components/ArticleItem'
import ArticlesContainer from '@/app/components/ArticlesContainer'
import BidenInfo from '@/app/components/BidenInfo'
import CandidateInfo from '@/app/components/CandidateInfo'
import PieChart from '@/app/components/PieChart'
import SentimentAnalysis from '@/app/components/SentimentAnalysis'
import TrumpInfo from '@/app/components/TrumpInfo'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";



const page =  async ({
   params
}) => {
  const resPositive = await fetch(
    `https://api.webz.io/newsApiLite?token=61809a4e-832c-4c8e-b219-ea9bd0ff2fa8&q=${params.candidateId}&sentiment=positive&highlight=true&size=20`)
  const positivePosts = await resPositive.json()
  const resNegative = await fetch(
    `https://api.webz.io/newsApiLite?token=61809a4e-832c-4c8e-b219-ea9bd0ff2fa8&q=${params.candidateId}&sentiment=negative&size=20`)
  const negativePosts = await resNegative.json()


  return (
    <div>
      <div className='py-7 px-[130px]'>
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
      {/*<PieChart positivePosts={positivePosts} negativePosts={negativePosts}/>*/}
    </div>
  )
}

export default page
