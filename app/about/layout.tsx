import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import React from "react";


export default function Layout({ children }:{children:React.ReactNode}) {
   return (
      <>
         <main>{children}</main>
      </>
   )
 }