import React from 'react'
import CandidateInfo from './CandidateInfo'

const BidenInfo = () => {
    const bidenDetails = {
        title: "Joe Biden is the presumptive Democratic presidential nominee who will face Donald Trump in November.",
        name: 'Joe Biden',
        party: 'The Democrats',
        about: "Incumbent President Joe Biden announced his bid for re-election in 2024, seeking a second term. Biden's presidency has been marked by significant legislative achievements and challenges, including navigating the COVID-19 pandemic, advancing infrastructure projects, and addressing inflation. He previously served as Vice President under Barack Obama and has a long career in the Senate.",
        social: {
            img: '/Joe_Biden.jpg',
            website: 'https://joebiden.com/'
        },
        campainList: [
            'Expand the Affordable Care Act to provide more Americans with access to affordable healthcare, including lowering prescription drug costs.',
            'Invest in renewable energy and infrastructure to combat climate change, aiming for the U.S. to achieve net-zero emissions by 2050.',
            'Protect and strengthen Social Security and Medicare, ensuring these programs remain solvent and continue to provide benefits for seniors.',
            'Support comprehensive immigration reform, including a pathway to citizenship for undocumented immigrants who meet certain criteria and increased border security measures.'
        ]
    
    }
  return (
    <CandidateInfo candidate={bidenDetails} />
  )
}

export default BidenInfo
