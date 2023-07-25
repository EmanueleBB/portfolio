'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'


 


const page = async() => {
   const router = useRouter();

   const getData=():Promise<string>=>{
      return new Promise ((res,rej)=>{
         setTimeout(()=>{
            return res('DATA')
         },3000)
      })
    }

   const data:string=await getData();
   

   const handleClick = () => {
      setInterval(() => {
         router.push('/')
      }, 6000);
   };

   return (
      <>
         <h1>
            This is the about page
         </h1>
         <h2 onClick={handleClick}>
            Go home
         </h2>
         
      </>
   )
}

export default page;