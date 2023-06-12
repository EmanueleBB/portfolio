import React, { useEffect, useRef, useState } from 'react'
import styles from './fakeTerminal.module.css';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })

const FakeTerminal = () => {

   const popupRef=useRef<HTMLDivElement>(null);
   const firstButtonRef=useRef<HTMLDivElement>(null);
   const secondButtonRef=useRef<HTMLDivElement>(null);
   const thirdButtonRef=useRef<HTMLDivElement>(null);
   const usedRefs:React.RefObject<HTMLDivElement>[]=[];

   let [counter,setCounter] = useState(1);
   const [popupText,setPopupText] = useState('');

   const popupAction = (ref:React.RefObject<HTMLDivElement>) => {

      if (counter === 1){
         setPopupText('Sorry, this button actually does nothing ');  
      }
      
      if (counter === 2){  
         setPopupText('Yeah, this one is fake too');
      }

      if (counter === 3){ 
         setPopupText('At this point you are just wondering if they are all fake. Yes, they are, you can avoid clicking again');
      }

      if (counter === 4){ 
         setPopupText("Alright, you are one someone that doesn't get discouraged easily. I like you. Actually, I made these button do something only for enterprising people like you. Enjoy ");
      }

      setCounter(++counter);
      console.log(counter);
   }



   

   return (
      <div className={styles.mainContainer}>

         <div className={styles.navbar}>
            <div className={styles.circle} onClick={()=>popupAction(firstButtonRef)} ref={firstButtonRef}>
            </div>
            <div className={styles.circle} onClick={()=>popupAction(secondButtonRef)} ref={secondButtonRef}>
            </div>
            <div className={styles.circle} onClick={()=>popupAction(thirdButtonRef)} ref={thirdButtonRef}>
            </div>
            
         </div>

         <div ref={popupRef} className={styles.popup}>
               {popupText}
         </div>
         <p className={`${styles.terminalText} ${sourceCodePro.className}`}>
            ~$  cd desktop
         </p>

         <p className={`${styles.terminalText} ${sourceCodePro.className}`}>
            ~$  npx create-next-app@latest --typescript
         </p>
      </div>
   )
}

export default FakeTerminal;