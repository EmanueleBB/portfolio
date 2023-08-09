'use client'

import React, { ChangeEvent, EventHandler, useLayoutEffect, useRef, useState } from 'react'
import styles from './contactsSection.module.css'
import { useForm, SubmitHandler } from "react-hook-form"
import ContactForm from './ContactForm'
import Image from 'next/image'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

type Inputs = {
  example: string
  exampleRequired: string
}


const ContactsSection = () => {

   const h2Ref=useRef<HTMLHeadingElement>(null);
   const mainContainerRef=useRef<HTMLDivElement>(null);

   gsap.registerPlugin(ScrollTrigger);
   

   useLayoutEffect(()=>{

      const tl = gsap.timeline({
         scrollTrigger:{
            trigger:mainContainerRef.current,
            markers:true,
            start:'top 45%',
            end:'bottom bottom'
         }
      });
   
      tl.to(mainContainerRef.current,{
         backgroundImage:'radial-gradient(100% 120% at 50% 0%, rgb(251, 190, 240) -10%, #8b1e97  7%,   rgb(42, 9, 75) 70%,rgb(0, 0, 0) 100%)',
         
         duration:2,
         ease:'power2.out'
      }).to(h2Ref.current,{
         delay:0.4,
         top:-32,
         opacity:2,
      },'<')
   },[])



   
   return (
      <div className={styles.mainContainer} id="contactsSection" ref={mainContainerRef}>
          
         <h2 ref={h2Ref}>
            Let&apos;s get in touch!!<span>📪</span>
         </h2>
         <ContactForm/>
      </div>
   )
}

export default ContactsSection