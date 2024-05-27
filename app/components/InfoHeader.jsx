import usMapIcon from "../../public/usMap.png";
import Image from 'next/image';
import { passionOne } from "../fonts";

const InfoHeader = ({ title }) => {
  return (
    <div className='py-[30px] px-[20px] lg:px-[130px] bg-grey-600 flex justify-center sm:justify-between items-center flex-wrap'>
        <div className="w-[100%] sm:w-[50%]">
            <h1 className={`text-2xl md:text-3xl lg:text-5xl text-orange leading-none ${passionOne.className}`}>2024 Presidential Candidates</h1>
            <h1 className="text-xs lg:text-base">{title}</h1>
        </div>
        <div className='ml-5 flex justify-items-end'>
            <Image
            src={usMapIcon}
            className="w-[100%] sm:w-[272px]"
            alt='us map'
            width={0}
            height={0}
            />
        </div>   
    </div>
  )
}

export default InfoHeader
