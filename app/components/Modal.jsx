import React from 'react'
import { IoClose } from "react-icons/io5";

const Modal = ({
    isOpen,
    onClose,
    children
}) => {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center
    transition-opacity duration-300'>
      <div className='bg-white rounded-md shadow-lg mx-auto
      transition-transform duration-300 transform-gpu w-5/6 md:w-4/6'>
        <div className='flex justify-between items-center border-solid border-b border-grey-500 py-5 px-7'>
          <h3 className='text-2xl md:text-3xl font-bold'>Select Persona</h3>
          <IoClose onClick={onClose}/>
        </div>
        {children}
      </div>
      
    </div>
  )
}

export default Modal
