import React from 'react'
import Articles from './Articles'

const ArticlesContainer = ({ 
    positivePosts, 
    negativePosts,
    positiveTotal,
    negativeTotal
}) => {

  return (
    <div className='flex flex-row my-[30px] mx-[130px]'>
       <div className='mr-4'><Articles type='Positive' articles={positivePosts} total={positiveTotal}/></div>
       <div className='ml-4'><Articles type='Negative' articles={negativePosts} total={negativeTotal} /></div>
    </div>
  )
}

export default ArticlesContainer
