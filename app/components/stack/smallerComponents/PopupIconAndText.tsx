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
   primaryColor:string;


}


const PopupIconAndText:React.FC<PopupIconAndTextProps> = ({
   title,
   icon,
   barPosition,
   label,
   direction,
   primaryColor,

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


         <h3 style={{color:`${primaryColor}`}}>
            {title}
         </h3>


         <div className={`${styles.barAndTextContainer} ${barPosition===Positions.right ? styles.rightPopup : ''}`}>
            
            {label}
            <div className={styles.popupBar}></div>
            
         </div>
         
      </div>
   )
}

export default PopupIconAndText;