import { Poppins, Passion_One, Roboto } from "next/font/google";
 
export const poppins = Poppins({ weight: ['400', '500','600','700'], subsets: ["latin"] });

export const passionOne = Passion_One({
    weight: ['400'],
    subsets: ['latin']
  })
export const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
  })