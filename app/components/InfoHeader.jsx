import usMapIcon from "../../public/usMap.png";
import Image from 'next/image';
import { passionOne } from "../fonts";

const InfoHeader = ({ title }) => {
  return (
    <div className='py-[30px] px-[130px] bg-grey-600 flex justify-between items-center'>
        <div>
            <h1 className={`text-6xl text-orange leading-none ${passionOne.className}`}>2024 Presidential Candidates</h1>
            <h1>{title}</h1>
        </div>
        <div className='ml-5 flex justify-items-end'>
            <Image
            src={usMapIcon}
            alt='us map'
            width={400}
            height={400}
            />
        </div>   
    </div>
  )
}

export default InfoHeader
