import PieChart from '@/app/components/PieChart'
import React from 'react'
import { passionOne } from "../../fonts";


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
    <div >
      <div className='py-[30px] px-[130px] bg-grey-600'>
        <div>
          <h1 className={`text-6xl text-orange leading-none ${passionOne.className}`}>2024 Presidential Candidates</h1>
          <h1>Donald Trump is the presumptive Republican presidential nominee who will face President Joe Biden in November. These were his GOP primary challengers.</h1>
        </div>
        </div>
      <PieChart />
      {/*<PieChart positivePosts={positivePosts} negativePosts={negativePosts}/>*/}
    </div>
  )
}

export default page
