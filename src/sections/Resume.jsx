import React from 'react'

const Resume = () => {
  return (
    <div className='fixed right-0 top-[36%] bg-[#9bd4d7] text-white px-2 lg:px-3 py-1 lg:py-1.5 z-30'>
        <a download="NISHAD_FRONTENDDEV.pdf" href="/nishad_cv.pdf">
            <h2 className='[writing-mode:vertical-rl] [text-orientation:upright] text-[1rem] lg:text-lg font-bold lg:font-[900] tracking-[-0.15em]'>DOWNLOAD</h2>
            <h2 className='font-bold text-[1rem] lg:text-lg mt-0.5 lg:mt-1'>CV</h2>
        </a>
    </div>
  )
}

export default Resume