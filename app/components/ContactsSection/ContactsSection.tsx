'use client'

import React, { ChangeEvent, EventHandler, useState } from 'react'
import styles from './contactsSection.module.css'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}


const ContactsSection = () => {

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<Inputs>()

   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
   console.log(watch("example")) // watch input value by passing the name of it

   const [hasValue, setHasValue] = useState(false);

   const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setHasValue(inputValue !== '');
      console.log(inputValue);
   };


   return (
      <div className={styles.mainContainer}>
         <h2>
            Let's get in touch!<span>😎</span>
         </h2>

         <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>

            <div className={`${styles.formGroup} ${hasValue ? styles.hasValue : ''}`}>
               <input defaultValue="test" {...register("example")} id='ciao' onChange={handleInputChange}/>
               <label htmlFor="ciao">Bellazio</label>
            </div>

     
            <input {...register("exampleRequired", { required: true })} />
               {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <button type="submit">Invia</button>
         </form>
         
      </div>
   )
}

export default ContactsSection