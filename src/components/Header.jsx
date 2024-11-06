import React from 'react'
import Navlinks from './elements/Navlinks'
import assets from '../assets/assets'

const Header = () => {
  return (
    <div className='absolute w-full flex px-3 lg:px-10 py-2.5 items-center justify-between'>
        <div className='w-10 h-10'>
        <img src={assets.logo} alt="" />
        </div>
        <Navlinks/>
    </div>
  )
}

export default Header