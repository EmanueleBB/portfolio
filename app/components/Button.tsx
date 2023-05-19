
import { forwardRef, ForwardRefRenderFunction, LegacyRef, MutableRefObject } from 'react';
import styles from './button.module.css';


export enum ButtonVariants{
   pink='pink',
   black='black',
}

interface ButtonProps{
   
   variant:ButtonVariants;
   label:string;
}
const Button:ForwardRefRenderFunction<HTMLElement,ButtonProps> = ({variant,label},ref
) => {

   
   return (
      <button 
         ref={ref as LegacyRef<HTMLButtonElement>}
         className={` 
            
            ${styles.button} 
            ${variant==='pink'?styles.pinkButton: null}
            ${variant==='black'?styles.blackButton: null}
      `}>
         {label}
      </button>
   )
}

export default forwardRef(Button);