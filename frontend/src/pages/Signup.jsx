import React, { useState } from 'react';
import '../App.css';
import '../index.css';
import Logo from '../assets/icons/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Signup = () => {
  const [full_name, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   // FOR BLANK FIELD DETECTOR
   const [error, setError] = useState(''); // For error message
   const [success, setSuccess] = useState(''); // For success message

   // FOR PASSWORD TOGGLE
   const [showPassword, setShowPassword] = useState(false);

   const handlePasswordToggle = () => {
     setShowPassword(!showPassword);
   };
 
 
 
   const navigate = useNavigate();
 
   const validateEmail = (email) => {
     // Basic email validation regex
     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return re.test(email);
   };
   
   const validatePassword = (password) => {
     const regex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/; // Must contain at least one capital letter, one number, and be 8+ characters
     return regex.test(password);
   };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      setError('Username is required!');
      return;
    }
    if (!email) {
      setError('Email is required!');
      return;
    }
    if (!password) {
      setError('Password is required!');
      return;
    }
    if (!full_name) {
      setError('Full Name is required!');
      return;
    }
    if (!address) {
      setError('Address is required!');
      return;
    }
    if (!phone_number) {
      setError('Phone Number is required!');
      return;
    }

    if(!validateEmail(email)) {
      setError('Invalid email!');
      return;
    }
    if(!validatePassword(password)) {
      setError('Password must be at least 8 characters long and contain at least one number and one uppercase letter!');
      return;
    }
  

    setError(''); // Reset error message
    setSuccess(''); // Reset success message



    try {
      await axios.post('http://localhost:5000/signup', {
        username,
        email,
        password,
        full_name,
        address,
        phone_number
      });


      // Set the success message upon successful signup
      setSuccess('Account Created!');
    
      // Redirect after a delay to the customer page (replace '/customer' with the correct route)
      setTimeout(() => {
        navigate('/customer');
      }, 2000); // Adjust the delay as necessary


    } catch (error) {
          setError(error.response?.data?.error || 'Signup failed');

    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-pink-50">
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 space-y-6 bg-white">
        <a className="text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <img className="h-20" src={Logo} alt="Logo" />
        </a>
        <h2 className="text-3xl font-bold text-center text-pink-600">𝙵𝚛𝚎𝚜𝚑 • 𝙳𝚎𝚕𝚒𝚌𝚒𝚘𝚞𝚜 • 𝚂𝚠𝚎𝚎𝚝 • 𝚃𝚊𝚜𝚝𝚢</h2>
        <p className="text-center text-gray-600">
          Create your own IB <span className="italic text-rose-600">Bakes</span> Account
        </p>
      </div>

      {/* Right Side Form */}
      <div className="w-full mt-10 md:w-1/2 max-w-lg bg-white rounded-lg shadow-lg p-8 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              value={full_name}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Juan Dela Cruz"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 Main St, City"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="number"
              id="phone_number"
              value={phone_number}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="123-456-7890"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="123-456-7890"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

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

          <div className="relative w-full max-w-md">
            <label className="block text-left text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>

            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required           
            />

      <button
          type="button"
          onClick={handlePasswordToggle}
          className="absolute inset-y-0 right-3 pt-7 flex items-center text-gray-600 hover:text-rose-800"
        >
          <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>     



          </div>

              


            {/* Display success message */}
            {success && (
            <p style={{ color: '#ff69b4', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
                {success}
              </p>
            )}

            {/* Display error message */}
            {error && <p style={{ color: 'red', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>{error}</p>}




          <button
            type="submit"
            className="w-full py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Signup
          </button>
        </form>

        <div className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-pink-600 font-medium hover:text-pink-500">
            Login
          </a>
        </div>

      </div>
      
    </div>
  );
}

export default Signup;
