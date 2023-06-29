'use client'


import styles from './firstText.module.css'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
   const secondDesignDescriptionSpanRef=useRef<HTMLSpanElement>(null);


   useLayoutEffect(()=>{

      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();
      
      ScrollTrigger.create({
         trigger:blackToPinkDiv.current,
         scrub:true,
         markers:false,
         start:'top 25%',
         end:'bottom bottom',
         animation:tl,
         id:'div',
      })
      
//Spans animation
      tl.fromTo(firstSpan.current,{
         opacity:0,
         y:'25px'
      },{
         opacity:1,
         y:'0',
         duration:1,
         onStart:()=>{
            firstSpan.current&&(firstSpan.current.style.display='inline-block');
         },
      }).to(firstSpan.current,{
         opacity:0,
         y:'-25px',
         duration:1,
         onComplete:()=>{
            firstSpan.current&&(firstSpan.current.style.display='none');
         }
      }).fromTo(secondSpan.current,{
         y:'25px',
         opacity:0,
      },{
         opacity:1,
         y:'0',
         duration:1,
         onStart:()=>{
            secondSpan.current&&(secondSpan.current.style.display='inline-block');
         }
      }).to(secondSpan.current,{
         opacity:0,
         y:'-25px',
         duration:1,
         onComplete:()=>{
            secondSpan.current&&(secondSpan.current.style.display='none');
         }
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
      })
      
//Design heading animation
      .fromTo(designHeading.current,{
         opacity:1,
      },{
         onStart:()=>{
            designHeading.current&&(designHeading.current.style.display='inline-block');
         },
         top:'0',
         opacity:1,
         duration:3,
         ease:'power2.out',
         onReverseComplete:()=>{designHeading.current&&(designHeading.current.style.display='none')}

//Ipad appears
      }).to(ipadRef.current,{
         onStart:()=>{
            ipadRef.current&&(ipadRef.current.style.display='flex')
         },
         top:'70vh',
         duration:3
      },'<').to(designDescriptionSpanRef.current,{
         onStart:()=>{
            designDescriptionSpanRef.current&&(designDescriptionSpanRef.current.style.display='inline-block')
         },
         bottom:'40vh',
         opacity:1,
         duration:1,
         ease:'power1.out'
      }).to(designDescriptionSpanRef.current,{
         bottom:'44vh',
         opacity:0,
         duration:1,
         ease:'power2.in',
      
      }).to(secondDesignDescriptionSpanRef.current,{
         onStart:()=>{
            secondDesignDescriptionSpanRef.current&&(secondDesignDescriptionSpanRef.current.style.display='inline-block')
         },
         bottom:'40vh',
         opacity:1,
         duration:1,
         ease:'power1.out'
      }).to(secondDesignDescriptionSpanRef.current,{
         bottom:'44vh',
         opacity:0,
         duration:1,
         ease:'power2.in',
         
      }).to(ipadRef.current,{
         top:'10vh',
         duration:3,
         height:'80vh',
         width:'103.9411vh',
         ease:'power2.Out'
      }).to(ipadRef.current,{
         top:'-5vw',
         duration:2,
         height:'84.63333333vw',
         width:'110vw',
         ease:'power2.in'
      }).to(ipadRef.current,{
         top:'10vh',
         duration:3,
         height:'80vh',
         width:'103.9411vh',
         ease:'power2.Out',
         onComplete:()=>{
            if (ipadRef.current !== null) {
               ipadRef.current.style.position = 'sticky';
               ipadRef.current.style.bottom='10vh';
               
             }

         }
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
            <span className={styles.designDescriptionSpan} ref={secondDesignDescriptionSpanRef}>
               Lalala usususususu
            </span>
         <div className={styles.ipadContainer} ref={ipadRef}>
            <Image
               src='/mockups/spaceGreyIpad.png' 
               fill={true}
               alt='image of an ipad'
               priority
               
            />
         </div>
      </div>   
   )
}

export default FirstText