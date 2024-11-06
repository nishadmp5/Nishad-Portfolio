import React from 'react'
import ProjectCards from '../components/ProjectCards'
import ProjectHeading from '../components/ProjectHeading'

const Projects = () => {
  return (
    <div id='projects' className='bg-black flex w-screen pt-16 pb-52'>
        <ProjectCards className={"w-screen lg:basis-[35%]"}/>
        <ProjectHeading className={"hidden lg:block lg:basis-[65%]"}/>
    </div>
  )
}

export default Projects