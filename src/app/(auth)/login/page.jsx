"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("Api/user/login", user);
      console.log(response.data); // Handle successful login response
    } catch (error) {
      console.error('Error during login:', error.response.data); // Handle login error
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="max-w-sm mx-auto shadow-xl p-4 bg-white rounded-lg">
        <h1 className='font-bold italic text-center text-4xl pb-3 mb-5 bg-black'>Login</h1>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="name@gmail.com" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </div>
        <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
        <p className="text-center mt-2">Don't have an account? <Link href="/register" className="text-blue-600 hover:underline">Register Here</Link></p>
      </form>
    </div>
  );
};

export default Login;
