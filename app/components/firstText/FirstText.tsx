'use client'


import styles from './firstText.module.css'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { isWhiteSpaceLike } from 'typescript';



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
   const designDesktopRef=useRef<HTMLDivElement>(null);
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
         ease:'power4.out',
         onReverseComplete:()=>{designHeading.current&&(designHeading.current.style.display='none')}
      })
      
//Design heading animation
      .fromTo(designHeading.current,{
         opacity:0,
      },{
         onStart:()=>{
            designHeading.current&&(designHeading.current.style.display='inline-block');
         },
         y:'-30vh',
         opacity:1,
         duration:3,
         ease:'power2.out',
         
         

//Ipad appears
      }).to(designDesktopRef.current,{
         onStart:()=>{
            designDesktopRef.current&&(designDesktopRef.current.style.display='flex')
         },
         top:'70vh',
         duration:3
      },'<')
      
      .to(designDesktopRef.current,{
         top:'45vh',
         duration:3,
         opacity:1,
         ease:'power2.Out',
         
      })
      .to(designDescriptionSpanRef.current,{
         onStart:()=>{
            designDescriptionSpanRef.current&&(designDescriptionSpanRef.current.style.display='inline-block')
         },
         bottom:'65vh',
         opacity:1,
         duration:2,
         ease:'power1.out',
      }).to(designDescriptionSpanRef.current,{
         bottom:'70vh',
         opacity:0,
         duration:2,
         ease:'power2.in',
         
      
      }).to(secondDesignDescriptionSpanRef.current,{
         onStart:()=>{
            secondDesignDescriptionSpanRef.current&&(secondDesignDescriptionSpanRef.current.style.display='inline-block')
         },
         bottom:'65vh',
         opacity:1,
         duration:2,
         ease:'power1.out'
      }).to(secondDesignDescriptionSpanRef.current,{
         bottom:'70vh',
         opacity:0,
         duration:2,
         ease:'power2.in',

      }).to(designDesktopRef.current,{
         position:'sticky',
         bottom:'10vh',
         duration:0,
      }).to(designHeading.current,{
         position:'absolute',
         bottom:'80',
         duration:0,
      },'<')
      
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
               The design process
            </span>
            <span className={styles.designDescriptionSpan} ref={designDescriptionSpanRef}>
               My design process usually starts with a sketch on an iPad. If I have an idea 
               I try to get it down as fast as possible.
            </span>
            <span className={styles.designDescriptionSpan} ref={secondDesignDescriptionSpanRef}>
            I use Figma for my prototypes, alongside with Photoshop, Illustrator, After Effects, Premiere Pro, After Effects, Midjourney for image and video editing
            </span>
         <div className={styles.desktopContainer} ref={designDesktopRef}>
            <Image
               src='/mockups/reactAndNextJs.png' 
               fill={true}
               alt='image of an ipad'
               priority
               
            />
         </div>
      </div>   
   )
}

export default FirstText