import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

const Project = () => {
   return (
      <section className='container  mx-auto'>
         <div className=" lg:my-10 py-9" id='Project'>
            
            <h1 className="text-center font-ubuntu text-4xl lg:text-6xl font-bold text-[#000]">
               MY Projects
            </h1>
            <p className="mx-auto mt-2 w-[90%] text-sm  md:mt-8 lg:w-[50%]  text-center font-ubuntu md:text-xl font-semibold text-[#646464]">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
               illum minus debitis, sed excepturi a recusandae perferendis vitae
               alias dolor aliquam voluptates aspernatur dolores ipsa odio error
               tenetur aliquid quia.
            </p>
            <div className='ml-10  sm:ml-20 lg:ml-10'>

              <ProjectCard />
            </div>
               {/* new design */}
            </div>
         
      </section>
   )
}

export default Project
