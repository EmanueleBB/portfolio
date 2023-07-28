import React from 'react'

interface LogoIconProps {
   className:string;
   onClick?:()=>void;
}

const LogoIcon:React.FC<LogoIconProps> = ({className}) => {
   return (
      <h1 className={className}>E</h1>
   )
}

export default LogoIcon