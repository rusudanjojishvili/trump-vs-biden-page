import Image from 'next/image';
import { ImFacebook } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import Link from 'next/link'

const InfoSocial = ({ img, website }) => {
  return (
    <div className='flex-none w-50'>
    <Image
    className='rounded-lg'
    src={img}
    alt={img}
    width={400}
    height={400}
    />
   <div className="flex flex-col items-center justify-center py-5 mt-3 rounded-lg bg-grey-800 [&>*]:p-1">
     <p>Campaign Website</p>      
     <Link target="_blank" href={website} rel="noopener noreferrer">
        <p className="text-orange">{website}</p>
     </Link>
     <p>Social Media</p>
     <div className='flex flex-row items-center [&>*]:ml-1 [&>*]:fill-orange-500'>
      <ImFacebook size={16}/>
      <FaXTwitter size={16}/>
      <IoLogoInstagram  size={18}/>
      <TbBrandYoutubeFilled size={18}/>
     </div>
   </div>
</div>
  )
}

export default InfoSocial
