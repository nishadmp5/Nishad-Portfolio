import React from 'react'
import scrollToSection from '../../libs/smoothScroll'

const Navlinks = () => {
  return (
    <div className='bg-black flex gap-4 lg:gap-7 rounded-md px-3 lg:px-5 py-2.5 text-secondary w-fit items-center'>
        <a onClick={() => scrollToSection('projects')}  className='cursor-pointer'>Projects</a>
        <a onClick={() => scrollToSection('about')} className='cursor-pointer'>About</a>
        <button className='bg-primary px-3 lg:px-5 py-1.5 rounded-md'>
        <a onClick={() => scrollToSection('contacts')} className='cursor-pointer'>Contacts</a>
        </button>
    </div>
  )
}

export default Navlinks