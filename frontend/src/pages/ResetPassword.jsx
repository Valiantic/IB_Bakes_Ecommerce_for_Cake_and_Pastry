import React, { useState } from 'react';
import '../App.css';
import '../index.css';
import Logo from '../assets/icons/logo.png';

function ResetPassword() {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ResetPassword logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
      <a className="block text-teal-600 " href="/">
          <span className="sr-only">Home</span>
            <img className="h-20" src={Logo} alt="Logo" />
        </a>
        <h2 className="text-2xl font-bold text-center text-pink-600">Woot! we're almost there!</h2>
       
        <p className="text-center text-gray-600">Kindly input your new password!</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-left text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Reset Password
          </button>
        </form>



      </div>
    </div>
  );
}

export default ResetPassword;
