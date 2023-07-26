'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


const Custom404 = () => {
   
 
   return (
      <div className='notFoundContainer'>
        <h2>404</h2>
        <p>You looked for something that doesn&apos;t exist</p>
        <Link href='http://localhost:3000'>
          Go back to a safe place
        </Link>
      </div>
   );
 };

 export default Custom404;


