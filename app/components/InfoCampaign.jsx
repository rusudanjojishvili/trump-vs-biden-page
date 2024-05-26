import bulletIcon from "../../public/bullet.svg";
import Image from 'next/image';

const InfoCampaign = ({ name, party, about, campainList }) => {
  return (
    <div className="ml-12">
    <div className='flex-none w-50'>
        <div className="pb-10 border-solid border-b border-grey-700">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p>{party}</p>
        </div>
    </div>
    <div className='flex-none w-50'>
        <div className="py-10 border-solid border-b border-grey-700">
            <h1 className="text-2xl font-bold">About the Candidate</h1>
            <p>{about}</p>
        </div>
    </div>
    <div className='flex-none w-50 '>
        <div className="py-10">
            <h1 className="text-2xl font-bold">Campaign positions</h1>
            {campainList.map((position,i) => (
                <div className="flex flex-row items-start mt-3" key={i}>
                    <Image 
                    className="mt-1"
                    src={bulletIcon}
                    alt='*'
                    width={16}
                    height={16}
                    />
                    <p className="pl-3">{position}</p>
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default InfoCampaign
