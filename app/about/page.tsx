import Link from 'next/link'
import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'


const page = () => {
   return (
      <div style={{color:'white'}}>
         <Navbar/>

         This is the about page

         <Footer/>
      </div>
   )
}

export default page