import BidenInfo from '@/app/components/BidenInfo'
import CandidateInfo from '@/app/components/CandidateInfo'
import PieChart from '@/app/components/PieChart'
import SentimentAnalysis from '@/app/components/SentimentAnalysis'
import TrumpInfo from '@/app/components/TrumpInfo'
import React from 'react'



const page =  async ({
   params
}) => {
  // const resPositive = await fetch(
  //   `https://api.webz.io/newsApiLite?token=61809a4e-832c-4c8e-b219-ea9bd0ff2fa8&q=${params.candidateId}&sentiment=positive&highlight=true&size=20`)
  // const positivePosts = await resPositive.json()
  // const resNegative = await fetch(
  //   `https://api.webz.io/newsApiLite?token=61809a4e-832c-4c8e-b219-ea9bd0ff2fa8&q=${params.candidateId}&sentiment=negative&size=20`)
  // const negativePosts = await resNegative.json()


  return (
    <div>
      {params.candidateId=== 'Trump'? <TrumpInfo /> : <BidenInfo />}
      <SentimentAnalysis />
      {/*<PieChart positivePosts={positivePosts} negativePosts={negativePosts}/>*/}
    </div>
  )
}

export default page
