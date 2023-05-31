'use client'


import styles from './firstText.module.css'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';



const FirstText = () => {

   const blackToPinkDiv = useRef<HTMLDivElement>(null)
   const paragraphRef = useRef<HTMLParagraphElement>(null)
   const firstSpan = useRef<HTMLSpanElement>(null);
   const secondSpan = useRef<HTMLSpanElement>(null);
   const thirdSpan = useRef<HTMLSpanElement>(null);
   const fourthSpan = useRef<HTMLSpanElement>(null);
   const fifthSpan = useRef<HTMLSpanElement>(null);
   const sixthSpan = useRef<HTMLSpanElement>(null);
   const designHeading = useRef<HTMLHeadElement>(null);
   const designDescriptionSpanRef=useRef<HTMLSpanElement>(null);
   const ipadRef=useRef<HTMLDivElement>(null);

   useLayoutEffect(()=>{

      gsap.registerPlugin(ScrollTrigger);

      
      const tl = gsap.timeline();
      
      ScrollTrigger.create({
         trigger:blackToPinkDiv.current,
         scrub:true,
         markers:true,
         start:'top 25%',
         end:'bottom bottom',
         animation:tl,
         id:'div',
      })
      

      tl.fromTo(firstSpan.current,{
         display:'none',
         opacity:0,
         y:'25px'
      },{
         display:'inline-block',
         opacity:1,
         y:'0',
         duration:1,
         
      }).to(firstSpan.current,{
         opacity:0,
         display:'none',
         y:'-25px',
         duration:1,
         
      }).fromTo(secondSpan.current,{
         display:'none',
         opacity:0,
      },{
         display:'inline-block',
         opacity:1,
         duration:1,
      }).to(secondSpan.current,{
         opacity:0,
         display:'none',
         duration:1,
      }).fromTo(thirdSpan.current,{
         display:'none',
         opacity:0,
      },{
         display:'inline-block',
         opacity:1,
         duration:1,
      }).to(thirdSpan.current,{
         opacity:0,
         display:'none',
         duration:1,
      }).fromTo(fourthSpan.current,{
         display:'none',
         opacity:0,
      },{
         display:'inline-block',
         opacity:1,
         duration:1,
      }).to(fourthSpan.current,{
         opacity:0,
         display:'none',
         duration:1,
      }).fromTo(fifthSpan.current,{
         display:'none',
         opacity:0,
      },{
         display:'inline-block',
         opacity:1,
         duration:1,
      }).to(fifthSpan.current,{
         opacity:0,
         display:'none',
         duration:1,
      }).fromTo(sixthSpan.current,{
         display:'none',
         opacity:0,
      },{
         display:'inline-block',
         opacity:1,
         duration:1,
      }).to(sixthSpan.current,{
         opacity:0,
         display:'none',
         duration:1,
         ease:'power4.out'
      }).fromTo(designHeading.current,{
         display:'none',
         opacity:0,
         position:'fixed',
         top:'75vh'
      },{
         display:'inline-block',
         top:'-10%',
         opacity:1,
         duration:1.5,
      }).to(ipadRef.current,{
         display:'flex',
         duration:0
      }).to(ipadRef.current,{
         top:'70vh',
         duration:1.5
      }).to(designDescriptionSpanRef.current,{
         bottom:'40vh',
         opacity:1,
         duration:1,
         ease:'power3.out'
      })
      
   },[])



   return (
      <div className={styles.blackToPinkDiv} ref={blackToPinkDiv}>
         <p className={styles.wonderText} ref={paragraphRef}>
            <span ref={firstSpan}>
               Just take a moment to recall the last time you thought <i>"Wow, that was wonderful"</i>
            </span>
            <span ref={secondSpan}>
               Maybe it happened while admiring a painting, or while listening to a song.
            </span>
            <span ref={thirdSpan}>
               Maybe you were reading the best crafted poem you ever read, or maybe you breath was taken away by the sunset.
            </span>
            <span ref={fourthSpan}>
               I’ve always admired those who, with their craft, are able to cause that reaction in the people.
            </span>
            <span ref={fifthSpan}>
               Those are the individuals I look up to and praise, those who I get inspiration from. 
            </span>
            <span ref={sixthSpan}>
               With the hope to be, one day,  one of them.
            </span>
         </p>
            <span ref={designHeading} id={styles.design}>
               DESIGN
            </span>
            <span className={styles.designDescriptionSpan} ref={designDescriptionSpanRef}>
               My design process usually starts with a sketch on an iPad. If I have an idea 
               I try to get it down as fast as possible.
            </span>
         <div className={styles.ipadContainer} ref={ipadRef}>
            <Image
               src='/mockups/spaceGreyIpad.png' 
               fill={true}
               alt='image of an ipad'
            />
         </div>
      </div>   
   )
}

export default FirstText