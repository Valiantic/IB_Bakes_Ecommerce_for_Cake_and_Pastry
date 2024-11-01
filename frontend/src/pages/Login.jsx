import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../index.css';
import Logo from '../assets/icons/logo.png';
import {useAuth} from '../authentication/AuthContext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');


  const { login } = useAuth(); // Get login function from AuthContext


  const navigate = useNavigate(); // navigate function from react-router-dom



  const handleSubmit = async (e) => {
    e.preventDefault();

  
    // blank field detector
    if(!email) {
      setMessage('Email is required!');
      return;
    }
    if(!password) {
      setMessage('Password is required!');
      return;
    }
    if(!email || !password) {
      setMessage('Please input all fields!');
      return;
    }
    


    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });

      setMessage(response.data.message); // Set success message
      login({ username: response.data.username }); // Store user data in context

      // REDIRECT AFTER A BRIEF DELAY
      setTimeout(() => {
        navigate(response.data.redirectUrl); // Redirect to admin or customer page
      }, 500);

    } catch (error) {
      // alert(error.response.data.error || 'Login failed');

      if (error.response) {
        // Check for specific error messages
        if (error.response.status === 401) {
            setMessage('Incorrect email or password'); // Generic message for invalid credentials
        } 
        else {
            setMessage('Incorrect email or password');
        }
        
    } else {
        setMessage('An error occurred. Please try again.');
    }

    // Automatically clear the message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
      <a className="block text-teal-600 " href="/">
          <span className="sr-only">Home</span>
            <img className="h-20" src={Logo} alt="Logo" />
        </a>
        <h2 className="text-2xl font-bold text-center text-pink-600">Welcome Back!</h2>
       
        <p className="text-center text-gray-600">Login to your IB <span className='font-style: italic text-rose-600'>Bakes</span> Account</p>
        
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


           {/* DISPLAY STATUS MESSAGE */}
          {message && (
                <p style={{ color: '#ff69b4', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
                    {message}

                </p>
            )}

      
          <button
            type="submit"
            className="w-full py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Login
          </button>
        </form>

        <div className="text-center text-gray-600 text-sm mt-4">
          Don’t have an account?{' '}
          <a href="/signup" className="text-pink-600 font-medium hover:text-pink-500">
            Sign up
          </a>
        </div>

        <div className="text-center text-gray-600 text-sm mt-4">
        <a href="/forgot-password" className="text-pink-600 font-medium hover:text-pink-500">
            Forgot Password?
        </a>
        </div>

      </div>
    </div>
  );
}

export default Login;
