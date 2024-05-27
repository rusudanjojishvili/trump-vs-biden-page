import bulletIcon from "../../public/bullet.svg";
import Image from 'next/image';

const InfoCampaign = ({ name, party, about, campainList }) => {
  return (
    <div className="ml-2 md:ml-12 w-full sm:w-[50%] ">
    <div>
        <div className="pb-10 border-solid border-b border-grey-700">
            <h1 className="text-3xl font-bold text-center sm:text-left">{name}</h1>
            <p className="text-center sm:text-left">{party}</p>
        </div>
    </div>
    <div >
        <div className="py-10 border-solid border-b border-grey-700">
            <h1 className="text-2xl font-bold text-center sm:text-left">About the Candidate</h1>
            <p className="text-center sm:text-left mt-2">{about}</p>
        </div>
    </div>
    <div >
        <div className="py-10">
            <h1 className="text-2xl font-bold text-center sm:text-left">Campaign positions</h1>
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
