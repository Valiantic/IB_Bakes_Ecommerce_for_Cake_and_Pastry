import React from 'react'

import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import HightlightProduct from '../components/HighlightProduct'
import About from '../components/About'
import Contacts from '../components/Contacts'


const Home = () => {
  return (
    <>
     <Navbar />
    <Carousel />
    <HightlightProduct />
    <About/>
    <Contacts/>
    </>
  )
}

export default Home
