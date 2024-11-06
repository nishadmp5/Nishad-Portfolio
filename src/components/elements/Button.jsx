import React from 'react'

const Button = ({className}) => {
  return (
    <a href='https://github.com/nishadmp5' target='_blank' className={`${className ? className : ""} border border-primary text-primary font-primaryfont px-5 py-1 rounded-md`}>See all project</a>
  )
}

export default Button