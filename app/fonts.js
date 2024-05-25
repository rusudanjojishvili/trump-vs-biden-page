import { Poppins, Passion_One, Inter } from "next/font/google";
 
export const poppins = Poppins({ weight: ['400'], subsets: ["latin"], variable: "--font-poppins", });

export const passionOne = Passion_One({
    weight: ['400'],
    subsets: ['latin'],
    variable: "--font-passion-one",
  })
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  })