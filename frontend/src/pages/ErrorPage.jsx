import React from 'react'
import butterfly_cake from '../assets/images/butterfly_cake.jpg'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate();


  return (
    <div className="flex h-screen flex-col bg-white">
    <img
      src={butterfly_cake}
      alt=""
      className="h-64 w-full object-cover"
    />
  
    <div className="flex flex-1 items-center justify-center">
      <div className="mx-auto max-w-xl px-4 py-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-rose-900 sm:text-4xl">
          We can't find that page.
        </h1>
  
        <p className="mt-4 text-gray-500">
          Try searching again, or return home to start from the beginning.
        </p>
  
        <a
          onClick={() => navigate('/')}
          className="mt-6 inline-block rounded bg-rose-600 px-5 py-3 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  </div>
  )
}

export default ErrorPage
