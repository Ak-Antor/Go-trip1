import React from 'react'
import Navbar from '../components/Navbar'
import Popular from '../components/Popular'
import Recommended from '../components/Recommended'
import BestPrice from '../components/BestPrice'
import Customars from '../components/Customars'
import Inspiration from '../components/Inspiration'
import Destinations from '../Destinations'


const Home = () => {
  return (
    <>
    
    <Navbar />
    <Popular />
    <Recommended />
    <BestPrice />
    <Customars />
    <Inspiration />
    <Destinations />
    </>
  )
}

export default Home