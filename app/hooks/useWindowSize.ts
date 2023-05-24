import { useEffect, useState } from "react"

interface WindowSize {
   windowHeight:number; 
   windowWidth:number;
}

const useWindowSize = ():WindowSize => {
   const [windowSize,setWindowSize] = useState({
      windowHeight: typeof window !== 'undefined' ? window.innerWidth:0,
      windowWidth: typeof window !== 'undefined' ? window.innerHeight:0,
   });

   useEffect(()=>{
      const handleWindowResize = () =>{
         setWindowSize({
            windowHeight:window.innerWidth,
            windowWidth:window.innerHeight,
         });
      };

      window.addEventListener('resize',handleWindowResize);
      console.log(windowSize.windowWidth);
      
      return () => window.removeEventListener('resize',handleWindowResize);
   },[])

   return windowSize;

}

export default useWindowSize;