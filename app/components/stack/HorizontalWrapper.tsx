import React, { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react'
import styles from './stack.module.css'

interface HorizontalWrapperProps{
   children:ReactNode;
   
}  

const HorizontalWrapper: ForwardRefRenderFunction<HTMLDivElement,HorizontalWrapperProps> = ({ children },ref) => {
   return (
      <div className={styles.horizontalWrapper} ref={ref}>
         {children}
      </div>
   )
}

export default forwardRef(HorizontalWrapper);