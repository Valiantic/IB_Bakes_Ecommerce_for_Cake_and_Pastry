import React, { useState } from 'react';
import '../App.css';
import '../index.css';
import Logo from '../assets/icons/logo.png';

function Signup() {
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Signup logic here
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
              id="fullname"
              value={fullname}
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
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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