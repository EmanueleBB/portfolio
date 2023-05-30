import React, { forwardRef, ForwardRefRenderFunction, Ref } from 'react'
import styles from './stack.module.css'

const ProgressBar:ForwardRefRenderFunction<HTMLDivElement,{}> = (props,ref:Ref<HTMLDivElement>) => {
   return (
      <div className={styles.progressBar} ref={ref}>
         <div className={styles.progressBarIndicator}>
         </div>
      </div>
   )
}

export default forwardRef(ProgressBar);