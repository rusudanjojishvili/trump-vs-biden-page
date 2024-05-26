/* eslint-disable react/no-danger-with-children */
import Date from './date';
import Link from 'next/link'
import React from 'react'
import { BsDot } from "react-icons/bs";
import { IoMdArrowForward } from "react-icons/io";


const ArticleItem = ({ article, type }) => {
    const {thread, url, title, published, highlightText, highlightThreadTitle } = article;
  return (
    <div className='p-4 bg-white rounded-xl mt-5'>
       <img 
       src={thread?.main_image}
       alt='main image'
       className='w-[100%] rounded-xl'
    //    width={500}
    //    height={300}
       />
       <div className='flex flex-row justify-between items-center'>
            <Link href={url} target='blank'>
                <button className={`${type === 'Positive'? 'bg-green-500' : 'bg-red-500'} rounded-[28px] text-white py-1 px-3 my-4 text-sm`}>
                    Article
                </button>
            </Link>
            <div className='flex flex-row items-center'>
                <p className='text-sm text-grey'>Posted by Admin</p>
                <BsDot />
                <p className='text-sm text-grey'><Date dateString={published} /></p>
            </div>

       </div>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-sm text-grey mt-3' dangerouslySetInnerHTML={{ __html: highlightText }} />
        <Link
        href={url} target='blank'>
            <div className='flex flex-row items-center mt-5 pb-2'> 
                <p className={`mr-2 ${type === 'Positive'? 'text-green' : 'text-red'}`}>View Original Article</p>
                <IoMdArrowForward className={`${type === 'Positive'? 'text-green' : 'text-red'}`}/>
            </div>
        </Link>
    </div>
  )
}

export default ArticleItem
