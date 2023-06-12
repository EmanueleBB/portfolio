import styles from './popupIconAndText.module.css'

export enum Positions {
   left,
   right,
}

export enum Directions{
   toTop,
   toBottom
}

interface PopupIconAndTextProps{
   title:string;
   icon:JSX.Element;
   barPosition:Positions;
   label:JSX.Element;
   direction:Directions;

}


const PopupIconAndText:React.FC<PopupIconAndTextProps> = ({
   title,
   icon,
   barPosition,
   label,
   direction,
}) => {

   return (

      <div 
         className={styles.generalContainer}
         style={
            direction===Directions.toTop?{flexDirection:'column-reverse'}:
            direction===Directions.toBottom?{flexDirection:'column'}:
            undefined
         }
      >
         {icon}
         <h3>
            {title}
         </h3>
         {label}
         <div className={styles.popupBar}>

         </div>
      </div>
   )
}

export default PopupIconAndText