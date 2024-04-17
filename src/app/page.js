"use client";
import React, { useState } from 'react'

const Home = () => {
  const [Name, setName] = useState("")
   const handleSubmit = ()=>{
    console.log(Name); v 
   }
  return (
    <>
     <h1 className='text-center font-bold'>Welcome to NEXTJS</h1>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
        <button type='submit'>Submit</button>
     </form>
    </>
  )
}

export default Home