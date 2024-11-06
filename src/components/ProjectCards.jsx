import React from 'react'
import Cards from './elements/Cards'
import { projects } from '../constants/constants'

const ProjectCards = ({className}) => {


  return (
    <div className={`${className ? className : ""} `}>
        <div className='flex flex-col items-center  lg:px-10'>
            
          {projects.map((project,index)=>(
            <Cards project={project} key={index}/>
          ))}
        </div>
    </div>
  )
}

export default ProjectCards