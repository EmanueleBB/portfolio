import Link from 'next/link'
import React from 'react'
import NextIcon from '../hero/icons/NextIcon'
import NextWhiteIcon from '../hero/icons/NextWhiteIcon'
import styles from './footer.module.css'

const Footer = () => {
   return (
      <div className={styles.footerContainer}>
         
         <div>
            <Link href='/about'>Who am I?</Link>
            <Link href='/pdfs/resume.pdf' target='_blank'>My resume</Link>
         </div>
         <span>
            Made with <NextWhiteIcon className={styles.footerNextIcon}/> and a lot of ☕ by <Link href=''>@me</Link>
         </span>
      </div>
   )
}

export default Footer