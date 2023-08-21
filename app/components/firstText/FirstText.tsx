'use client'


import styles from './firstText.module.css'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { isWhiteSpaceLike } from 'typescript';
import { Positions } from '../stack/smallerComponents/PopupIconAndText';



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
   const [bottomDesktop, setBottomDesktop] = useState(0);
   const [bottomSpan, setBottomSpan] = useState(0);

   const handleDesktopResize = () => {

      

      if (window.innerWidth <= 320) {
         setBottomDesktop(200);
         document.documentElement.style.setProperty('--bottom-span', `420px`);
         setBottomSpan(420);
         
        
      } else if (window.innerWidth > 320 && window.innerWidth <= 471) {
         setBottomDesktop(160);
         document.documentElement.style.setProperty('--bottom-span', `400px`);
         setBottomSpan(400);
         
      } else if (window.innerWidth > 471) {
         setBottomDesktop(120);
         document.documentElement.style.setProperty('--bottom-span', `560px`);
         setBottomSpan(560);
         
      }
   };

   useLayoutEffect(() => {
      handleDesktopResize();
      window.addEventListener('resize',handleDesktopResize);
      return () => {
         window.removeEventListener('resize',handleDesktopResize);
      }
   }, []);
   
   
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

      //Spans animations
      tl.fromTo(firstSpan.current,{
         opacity:0,
         y:'-25%'
      },{
         opacity:1,
         y:'-50%',
         duration:1,
         onStart:()=>{
            firstSpan.current&&(firstSpan.current.style.display='inline-block');
         },
      }).to(firstSpan.current,{
         opacity:0,
         y:'-75%',
         duration:1,
         onComplete:()=>{
            firstSpan.current&&(firstSpan.current.style.display='none');
         }
      }).fromTo(secondSpan.current,{
         y:'-25%',
         opacity:0,
      },{
         opacity:1,
         y:'-50%',
         duration:1,
         onStart:()=>{
            secondSpan.current&&(secondSpan.current.style.display='inline-block');
         },
         onReverseComplete:()=>{
            firstSpan.current&&(firstSpan.current.style.display='inline-block');
         }
      }).to(secondSpan.current,{
         opacity:0,
         y:'-75%',
         duration:1,
         onComplete:()=>{
            secondSpan.current&&(secondSpan.current.style.display='none');
         }
      }).fromTo(thirdSpan.current,{
         y:'-25%',
         display:'none',
         opacity:0,
      },{
         y:'-50%',
         display:'inline-block',
         opacity:1,
         duration:1,
         onReverseComplete:()=>{
            secondSpan.current&&(secondSpan.current.style.display='inline-block');
         }
      }).to(thirdSpan.current,{
         y:'-75%',
         opacity:0,
         display:'none',
         duration:1,
      }).fromTo(fourthSpan.current,{
         y:'-25%',
         display:'none',
         opacity:0,
      },{
         y:'-50%',
         display:'inline-block',
         opacity:1,
         duration:1,
      }).to(fourthSpan.current,{
         y:'-75%',
         opacity:0,
         display:'none',
         duration:1,
      }).fromTo(fifthSpan.current,{
         display:'none',
         opacity:0,
         y:'-50%',
      },{
         display:'inline-block',
         opacity:1,
         duration:1,
      }).to(fifthSpan.current,{
         opacity:0,
         display:'none',
         duration:1,
      }).fromTo(sixthSpan.current,{
         y:'50%',
         display:'none',
         opacity:0,
      },{
         y:'-50%',
         display:'inline-block',
         opacity:1,
         duration:1,
      }).to(sixthSpan.current,{
         y:'-150%',
         opacity:0,
         display:'none',
         duration:1,
         
         onReverseComplete:()=>{designHeading.current&&(designHeading.current.style.display='none')}
      })
      
//Design heading animation
      .fromTo(designHeading.current,{
         opacity:0,
      },{
         onStart:()=>{
            designHeading.current&&(designHeading.current.style.display='inline-block');
         },
         y:'-40vh',
         opacity:1,
         duration:3,
         ease:'power2.out',
         
//Desktop appears
      }).to(designDesktopRef.current,{
         onStart:()=>{
            designDesktopRef.current&&(designDesktopRef.current.style.display='flex')
         },
         top:'101vh',
         duration:3
      },'<')
      
      .to(designDesktopRef.current,{
         top:`45vh`,
         duration:3,
         opacity:1,
         ease:'power1.Out',
      
      })
      .to(designDescriptionSpanRef.current,{
         onStart:()=>{
            designDescriptionSpanRef.current&&(designDescriptionSpanRef.current.style.visibility='visible')
         },
         bottom:`65vh`,
         opacity:1,
         duration:2,
         ease:'power1.out',
      }).to(designDescriptionSpanRef.current,{
         bottom:`70vh`,
         opacity:0,
         duration:2,
         ease:'power2.in',
         
      
      }).to(secondDesignDescriptionSpanRef.current,{
         onStart:()=>{
            
            secondDesignDescriptionSpanRef.current&&(secondDesignDescriptionSpanRef.current.style.visibility='visible')
         },
         bottom:`65vh`,
         opacity:1,
         duration:2,
         ease:'power1.out'
      }).to(secondDesignDescriptionSpanRef.current,{
         bottom:`70vh`,
         opacity:0,
         duration:2,
         ease:'power2.in',
         onComplete:()=>{
            if(blackToPinkDiv.current && designDesktopRef.current){

               blackToPinkDiv.current.style.paddingBottom=`${window.innerHeight*0.55 - designDesktopRef.current.getBoundingClientRect().height}px`;
            }
         }
      })
      .to(designDesktopRef.current,{
         position:'sticky',
         duration:0,
         })
           
      .to(designHeading.current,{
   
         position:'absolute',
         bottom:'80',
         duration:0.0001,
         
      },'<')
      
   },[bottomDesktop,bottomSpan])

   return (
      <div className={styles.blackToPinkDiv} ref={blackToPinkDiv} id='designSection'>
         <p className={styles.wonderText} ref={paragraphRef}>
            <span ref={firstSpan}>
            Just take a moment to recall the last time you thought <i>&quot;Wow, that was wonderful&quot;</i>
            </span>
            <span ref={secondSpan}>
               Maybe it happened while admiring a painting, or while listening to a song.
            </span>
            <span ref={thirdSpan}>
               Maybe you breath was taken away by the sunset, or maybe you were watching &quot;Bear and goose at the end of everything&quot; by Exurb1a <strong style={{color:'white',opacity:0.4, fontSize:'14px', fontWeight:300}}> Seriously, I mean, that video is brilliant, go watch it! </strong>
            </span>
            <span ref={fourthSpan}>
               I’ve always admired those who, with their craft, are able to cause that reaction in the people.
            </span>
            <span ref={fifthSpan}>
               These are my favourite kind of people, those who I try to get inspiration from. 
            </span>
            <span ref={sixthSpan}>
               With the hope to be, one day, one of them.
            </span>
         </p>
            <span ref={designHeading}  className={styles.uniqueDesignClass} >
               The design process
            </span>
            <span className={styles.designDescriptionSpan} ref={designDescriptionSpanRef} >
               My design process usually starts with a sketch on an iPad. If I have an idea 
               I try to get it down as fast as possible.
            </span>
            <span className={styles.designDescriptionSpan} ref={secondDesignDescriptionSpanRef}>
            I use Figma for my prototypes, alongside with Photoshop, Illustrator, After Effects, Premiere Pro, After Effects, Midjourney for image and video editing
            </span>
         <div className={styles.desktopContainer} ref={designDesktopRef}>
            <Image
               id='design'
               src='/mockups/designDesktop.png' 
               fill={true}
               alt='image of an ipad'
               priority   
            />
         </div>
      </div>   
   )
}

export default FirstText