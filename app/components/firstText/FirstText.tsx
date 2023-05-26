'use client'


import styles from './firstText.module.css'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react';


const FirstText = () => {

   const paragraphRef = useRef<HTMLParagraphElement>(null)
   const firstSpan = useRef<HTMLSpanElement>(null);
   const secondSpan = useRef<HTMLSpanElement>(null);
   const thirdSpan = useRef<HTMLSpanElement>(null);
   const fourthSpan = useRef<HTMLSpanElement>(null);
   const fifthSpan = useRef<HTMLSpanElement>(null);
   const sixthSpan = useRef<HTMLSpanElement>(null);

   useLayoutEffect(()=>{

      const tl = gsap.timeline();

      gsap.registerPlugin(ScrollTrigger);
      
      ScrollTrigger.create({
         trigger:paragraphRef.current,
         scrub:true,
         markers:true,
         start:'top 80%',
         end:'bottom 50%',
         toggleActions: "play pause resume reset",
         animation:tl,
         id:'soss'
      })

      tl.fromTo(firstSpan.current,{
         display:'none',
         opacity:0,
      },{
         display:'inline',
         opacity:1,
      }).to(firstSpan.current,{
         opacity:0,
         display:'none',
      }).fromTo(secondSpan.current,{
         display:'none',
         opacity:0,
      },{
         display:'inline',
         opacity:1,
      }).to(secondSpan.current,{
         opacity:0,
         display:'none',
      })

   },[])



   return (
      <div className={styles.blackToPinkDiv}>
         <p className={styles.wonderText} ref={paragraphRef}>
            <span ref={firstSpan}>
               Think to the last time you thought <i>"Wow, that was wonderful"</i>
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
      </div>   
   )
}

export default FirstText