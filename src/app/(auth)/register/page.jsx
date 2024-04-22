"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  let url = "Api/user/register"

  const handleSubmit = (e) => {
    e.preventDefault();
    const {id, value}= e.target

    setUser((prevUser)=>({
      ...prevUser,
      [id]:value,
    }))
    console.log(user);
  };
  
 const submit=()=>{
  console.log(user);
  axios.post(url, user)
 }
  return (
    <>
    <div className="bg-green-100 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto shadow-xl p-12 bg-white rounded-lg">
        <h1 className='font-bold italic text-center mb-5 text-4xl pb-3 bg-black'>Register</h1>
        <div className="mb-5">
          <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
          <input type="text" value={user.fullname} id="fullname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="John Smith" required onChange={(handleSubmit)} />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="name@gmail.com" required onChange={(handleSubmit)} />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required onChange={(handleSubmit)} />
        </div>
  
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div>
        <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
        <p className="text-center mt-2">Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login Here</Link></p>
      </form>
    </div>
  </>
  
  );
};

export default Register;
