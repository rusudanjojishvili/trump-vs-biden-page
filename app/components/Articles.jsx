import React from 'react'
import ArticleItem from './ArticleItem'

const Articles = ({ articles, type, total }) => {
  return (
    <div 
    className={`flex flex-col p-8 rounded-3xl border-solid border 
    ${type === 'Positive'? 'border-green-500' : 'border-red-500'} ${type === 'Positive'? 'bg-green-600' : 'bg-red-600'}`}>
      <div className='pb-1 flex flex-row items-center'>
        <p className={`${type === 'Positive'? 'text-green' : 'text-red'} font-semibold`}>{total}</p>
        <p className='text-xl ml-2'>{`${type} articles`}</p>
      </div>
      <div className='flex flex-col'>
        {articles?.map(article => (
            <ArticleItem key={article.uuid} type={type} article={article} />
        ))}
      </div>
    </div>
  )
}

export default Articles
