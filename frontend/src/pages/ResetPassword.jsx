import React, { useState } from 'react';
import '../App.css';
import '../index.css';
import Logo from '../assets/icons/logo.png';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

   // Function to validate password format
 const validatePassword = (newPassword) => {
  const regex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/; // Must contain at least one capital letter, one number, and be 8+ characters
  return regex.test(newPassword);
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate password format
    if(!validatePassword(newPassword)) {
      setMessage('Password must be at least 8 characters long and contain at least one number and one uppercase letter');
      return;
    }

  try {
    const response = await axios.post(`http://localhost:5000/reset-password/${token}`, { newPassword });
    setMessage(response.data.message);
    // Optionally redirect to login page after successful reset
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  } catch (error) {
    setMessage(error.response.data.error);
  }
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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new Password"
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

        {message && <p>{message}</p>}


      </div>
    </div>
  );
}

export default ResetPassword;
