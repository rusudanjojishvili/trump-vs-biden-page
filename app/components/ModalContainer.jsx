'use client'
import {useState} from 'react'
import Modal from "./Modal";
import Card from './Card';

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
      <div className='flex flex-col justify-center items-center py-6 px-7'>
        <p className='text-black text-2xl'>Pick a Candidate to View Latest News</p>
        <div className='flex flex-raw justify-center w-full'>
          <Card src='./trump1.png'/>
          <Card src='./biden1.png'/>
        </div>
      </div>
      </Modal>
    </div>
  );
}
