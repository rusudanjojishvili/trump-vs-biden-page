import InfoHeader from "./InfoHeader";
import InfoSocial from "./InfoSocial";
import InfoCampaign from "./InfoCampaign";

const CandidateInfo = ({ candidate }) => {

  return (
    <>
    <InfoHeader title={candidate.title} />
    <div className="flex flex-row mt-6 py-[30px] px-[130px]">
        <InfoSocial img={candidate?.social?.img} website={candidate?.social?.website} />
        <InfoCampaign campainList={candidate.campainList} 
        about={candidate.about}
        name={candidate.name} 
        party={candidate.party}
        />
    </div>
    
    </>
  )
}

export default CandidateInfo
