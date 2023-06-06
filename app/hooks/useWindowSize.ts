import { useEffect, useState } from "react"

interface WindowSize {
   windowHeight:number; 
   windowWidth:number;
   maxDimension:string;
   maxDimensionValue:number;
   minDimensionValue:number;
}

const useWindowSizeInfos = ():WindowSize => {

   const [windowSizeInfos,setWindowSizeInfos] = useState({
      windowHeight: typeof window !== 'undefined' ? window.innerWidth:0,
      windowWidth: typeof window !== 'undefined' ? window.innerHeight:0,
      maxDimension:'',
      maxDimensionValue:0,
      minDimensionValue:0,
   });
   
   useEffect(()=>{
      const handleWindowResize = () =>{
         if(window.innerWidth>=window.innerHeight){
            setWindowSizeInfos({
               windowHeight: typeof window !== 'undefined' ? window.innerWidth:0,
               windowWidth: typeof window !== 'undefined' ? window.innerHeight:0,
               maxDimension:'width',
               maxDimensionValue:window.innerWidth,
               minDimensionValue:window.innerHeight
            });
         }else if(window.innerWidth<window.innerHeight){
            setWindowSizeInfos({
               windowHeight: typeof window !== 'undefined' ? window.innerWidth:0,
               windowWidth: typeof window !== 'undefined' ? window.innerHeight:0,
               maxDimension:'height',
               maxDimensionValue:window.innerHeight,
               minDimensionValue:window.innerWidth
            });
         }
      };

      window.addEventListener('resize',handleWindowResize);
      
      return () => window.removeEventListener('resize',handleWindowResize);
   },[])

   return windowSizeInfos;

}

export default useWindowSizeInfos;