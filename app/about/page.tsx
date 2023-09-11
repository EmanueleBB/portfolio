'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styles from './about.module.css'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'


 


const Page = async() => {


   return (
      <div className={styles.mainContainer}>
         <h1>
            Coming soon ...
         </h1>
         <Link href='/'>
            Go home
         </Link>
         
      </div>
   )
}

export default Page;