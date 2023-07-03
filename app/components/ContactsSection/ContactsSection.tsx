'use client'

import React from 'react'
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

   return (
      <div className={styles.mainContainer}>
         <h2>
            Let's get in touch!<span>😎</span>
         </h2>

         <form onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue="test" {...register("example")} />

     
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
         
      </div>
   )
}

export default ContactsSection