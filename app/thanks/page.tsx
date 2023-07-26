import Link from 'next/link'
import React from 'react'
import styles from './thanks.module.css'

const Thanks = () => {
   return (
      <div className={styles.mainContanier}>
         <h1>
            Thank you for reaching out!! 😄
         </h1>
         <p>
            
            I&apos;ll do my best to get back to you as soon as possible. If I do not respond within 2 business days, try to contact me via some of the other contacts in the contacts section or at @manu.burratti@gmail.com  
         </p> 
         <Link href='/' className={styles.backHomeLink}>Go back home</Link>
      </div>

   )
   }

export default Thanks;