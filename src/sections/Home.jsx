import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div id='home' className='h-screen w-screen bg-hero-gradient overflow-hidden'>
        <Header/>
        <Hero/>
    </div>
  )
}

export default Home