import styles from './button.module.css';


export enum ButtonVariants{
   pink='pink',
   black='black',
}

interface ButtonProps{
   className?:string;
   variant:ButtonVariants;
   label:string;
}
const Button:React.FC<ButtonProps> = ({
   className:string,
   variant,
   label
}) => {
   

   return (
      <button className={`
         ${styles.button} 
         ${variant==='pink'?styles.pinkButton: null}
         ${variant==='black'?styles.blackButton: null}
      `}>
         {label}
      </button>
   )
}

export default Button;