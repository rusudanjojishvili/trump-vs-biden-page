import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className='bg-white text-white border-solid border-b border-grey-500'>
    <div className={styles.Headercontainer}>
      <div className={styles.logo}>
        <Image width={191} height={39} alt='logo' src='/logo.png'/>
      </div>
      <div className={styles.links}>
        <Link href='/home'>Home</Link>
        <Link href='/about/team'>How it Works</Link>
        <Link href='/code/repos'>Code</Link>
      </div>
    </div>
  </header>
  )
}

export default Header
