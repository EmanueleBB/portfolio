import useNavbarStore from '@/app/stores/NavbarStore';
import useStackStore from '@/app/stores/StackStore'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import styles from './stack.module.css'

interface XButtonProps{
   onClick:()=>void;
}


const XButton:React.FC<XButtonProps> = ({
   onClick
}) => {

   return ( 
      <IoIosCloseCircleOutline className={styles.closeIcon} onClick={onClick}/>
   )
}

export default XButton;