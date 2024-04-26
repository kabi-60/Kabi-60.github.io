import React from 'react'
import data from '../Works/data.png'
import setting from '../Works/settings.png'
import ui from '../Works/ui.png'
import web from '../Works/web-design.png'
import WorkCard from '../Card/Card'
import Card from '../Card/Card'


const Works = () => {
  return (
    <section id='Works'  className='container mx-auto'>
        <div className="container mx-auto lg:my-10">
            <h1 className="text-center font-ubuntu text-4xl lg:text-6xl font-bold text-[#000]">
               MY SERVICES
            </h1>
            <p className="mx-auto mt-3 lg:mt-8 text-sm w-[90%] lg:w-[50%] text-center font-ubuntu lg:text-xl font-medium text-[#646464]">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
               illum minus debitis, sed excepturi a recusandae perferendis vitae
               alias dolor aliquam voluptates aspernatur dolores ipsa odio error
               tenetur aliquid quia.
            </p>
            
            <Card/>
                     <div className='mx-auto my-auto border hidden xl:block rounded-xl shadow-lg w-[70%] md:w-[24%]' data-aos="fade-right">

                   <div className='bg-black h-[150px] w-[150px] mx-auto my-5 ' style={{borderRadius:"48% 52% 49% 51% / 81% 76% 24% 19% "}}>
                     <p className='text-center text-white  py-12 text-6xl'><i class="fa-solid fa-palette"></i></p>
                   </div>
                   <div className='my-5 mx-auto'>

                   <h1 className='text-center font-ubuntu text-xl font-bold mt-3 '>APP DESIGN & DEVELOPMENT</h1>
                   <p className='text-center font-ubuntu text-md font-medium mt-1 px-16'>In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.</p>
                   </div>
                     </div>
         </div>
    </section>
  )
}

export default Works
