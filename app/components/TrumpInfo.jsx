import React from 'react'
import CandidateInfo from './CandidateInfo'

const TrumpInfo = () => {
    const trumpDetails = {
        title: "2024 Presidential Candidates Donald Trump is the presumptive Republican presidential nominee who will face President Joe Biden in November. These were his GOP primary challengers.",
        name: 'Donald Trump',
        party: 'The republicans',
        about: 'Former President Trump was the first candidate to declare his intent to run for the GOP nomination in 2024. He also became the first former president to face any kind of criminal charges after being indicted by a Manhattan grand jury in a case related to a payoff to a porn star. He now faces federal criminal charges, too, related to his alleged mishandling of classified documents that were discovered at his Mar-a-Lago resort. (Trump has denied wrongdoing in both cases.)',
        social: {
            img: '/Trump-lg.svg',
            website: 'https://www.donaldjtrump.com/'
        },
        campainList: [
            'Support legislation that represents a “record investment” in police',
            'Pardon "a large portion” of the people convicted of federal offenses for their participation in the Jan. 6, 2021, attack on the U.S. Capitol.',
            'Sign an executive order instructing federal agencies to “cease all programs that promote the concept of sex and gender transition at any age"; punish doctors who provide gender-affirming care to minors.',
            '“Get something done” on abortion; has declined to specify how many weeks into a pregnancy he would support a ban; has said a federal ban would need to include exceptions for rape, incest and life of the mother.'
        ]
    
    }
  return (
     <CandidateInfo candidate={trumpDetails} />
  )
}

export default TrumpInfo
