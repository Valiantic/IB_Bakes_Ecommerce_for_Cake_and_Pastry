import React, { useState } from 'react';
import '../App.css';
import '../index.css';
import Logo from '../assets/icons/logo.png';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ForgotPassword logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
      <a className="block text-teal-600 " href="/">
          <span className="sr-only">Home</span>
            <img className="h-20" src={Logo} alt="Logo" />
        </a>
        <h2 className="text-2xl font-bold text-center text-pink-600">Let's Recover your Account!</h2>
       
        <p className="text-center text-gray-600">Kindly input your Email so we can reset your Password</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="IB_Bakes@gmail.com"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>


          <button
            type="submit"
            className="w-full py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Send Reset Link
          </button>
        </form>



      </div>
    </div>
  );
}

export default ForgotPassword;
