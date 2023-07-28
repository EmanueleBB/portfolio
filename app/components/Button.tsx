
import { forwardRef, ForwardRefRenderFunction, LegacyRef, MutableRefObject } from 'react';
import Link from 'next/link'
import styles from './button.module.css';


export enum ButtonVariants{
   pink='pink',
   black='black',
}

interface ButtonProps{
   
   variant:ButtonVariants;
   label:string;
   onClick?:()=>void;
   href:string;
}
const Button:ForwardRefRenderFunction<HTMLAnchorElement,ButtonProps> = ({variant,label,href},ref
) => {

   
   return (
      <Link
         href={href}
         ref={ref}
         className={` 
            
            ${styles.button} 
            ${variant==='pink'?styles.pinkButton: null}
            ${variant==='black'?styles.blackButton: null}
      `}>
         {label}
      </Link>
   )
}

export default forwardRef(Button);