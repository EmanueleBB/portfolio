import React, { forwardRef, ForwardRefRenderFunction, Ref, useEffect, useState } from 'react'
import styles from './stack.module.css'

interface ProgressBarProps{
   percentageScrolled:number;
}

const ProgressBar: ForwardRefRenderFunction<HTMLDivElement, ProgressBarProps> = ({ percentageScrolled }, ref: Ref<HTMLDivElement>) => {
   const [currentPercentage, setCurrentPercentage] = useState(0);
 
   useEffect(() => {
      setCurrentPercentage(percentageScrolled);
   }, [percentageScrolled]);
 
   const progressBarIndicatorWidth = currentPercentage * 100;
 
   return (
      <div className={styles.progressBar} ref={ref}>
         <div className={styles.progressBarIndicator} style={{ width: `${progressBarIndicatorWidth}%` }}>
         </div>
      </div>
   )
 }
 
 export default forwardRef(ProgressBar);