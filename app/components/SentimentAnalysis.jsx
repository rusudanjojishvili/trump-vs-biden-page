import React from 'react'
import PieChart from './PieChart'
import Image from 'next/image'

const SentimentAnalysis = ({    
  positivePosts, 
  negativePosts
}) => {
  return (
    <div className='flex flex-row items-start my-[30px] mx-[130px] bg-grey-600 rounded-3xl
    py-12 px-12'>
       <div className='pr-36'>
            <div className='flex flex-row items-center pb-8'>
                <Image 
                    src='/ph_smiley.svg'
                    alt='smiley'
                    width={48}
                    height={48}
                />
                <h1 className='text-5xl text-orange font-bold ml-3'>Sentiment Analysis</h1>
            </div>
            <h1 >Webz.io sources and collects data from across the web and transforms it into machine-ready feeds that plug right into any platform. It deploys a wide array of crawlers that run in near real-time, drawing from millions of sources — covering everything from the biggest news sites, to obscure blogs and forums, all the way to the furthest reaches of the dark web.
            All stored in repositories, so machines consume live and historical data on demand. Webz.io gives machines data exactly the way they need it, so companies easily turn web data into customer value.</h1>
       </div>
        <PieChart positivePosts={positivePosts} negativePosts={negativePosts}/>
    </div>
  )
}

export default SentimentAnalysis
