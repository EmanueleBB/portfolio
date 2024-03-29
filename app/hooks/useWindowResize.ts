import { useEffect, useState } from "react"

interface WindowSize{
   width:number;
   height:number;
}

const useWindowResize = ():WindowSize => {
   const [windowSize, setWindowSize] = useState<WindowSize>({ 
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0, 
   });

   const handleResize = () => {
      setWindowSize({ 
         width: window.innerWidth, 
         height: window.innerHeight 
      });
   };

   useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return windowSize;
};

export default useWindowResize;