'use client'
import {useState} from 'react'
import Modal from "./Modal";
import Card from './Card';
import Link from 'next/link'

export default function ModalContainer() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='flex justify-center'>
      <button onClick={() => setIsModalOpen(true)} 
      className='px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full mt-7'>
        Select persona
      </button>
      <Modal isOpen={isModalOpen} onClose={() => {
        setIsModalOpen(false)
      }}>
      <div className='flex flex-col items-center py-6 px-7 max-h-[80vh] overflow-auto'>
        <p className='text-black text-2xl mb-4'>Pick a Candidate to View Latest News</p>
        <div className='flex flex-raw justify-center w-full'>
          <Card src='./trump1.png' name='Donald Trump' party='The Republicans'
          candidateId='Trump'
          description='Donald John Trump was born on June 14, 1946, in Queens, New York City, to Fred and Mary Anne Trump. 
          He grew up in Queens and attended the Kew-Forest School before transferring to the New York Military Academy at the age of 13.'/>
          <Card src='./biden1.png' name='Joe Biden' party='The Democrats' 
          candidateId='Biden'
          description='Joe Biden was born on June 14, 1946, in Queens, New York City, to Fred and Mary Anne Trump. He grew up in Queens and attended the Kew-Forest School before transferring to the New York Military Academy at the age of 17'/>
        </div>
      </div>
      </Modal>
    </div>
  );
}
