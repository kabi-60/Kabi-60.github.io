import React from 'react'
import kabi from '../Home/kab3.png'
import { Mail } from 'lucide-react'
import { Phone } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Instagram } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Sun } from 'lucide-react'
import { Github } from 'lucide-react'
const Home = () => {
   return (
      <section id="Home" className="">
         <div className="container mx-auto  sm:flex">
            <nav className="container  absolute top-8 my-auto flex lg:left-0  px-5 sm:px-3  lg:top-5 lg:px-3 ">
               <a
                  href="#Home"
                  className=" flex  font-bold text-2xl  "
               >
                  Kabi<span className=" mt-2 text-[10px]">🟠</span>
               </a>

               <div className="my-auto  flex ml-auto">
                  <a
                     href="https://www.instagram.com/_.mr_bear_boii.exe._/"
                     className=" mr-5"
                  >
                     <Instagram className=" h-[28px] lg:w-[28px]" />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/kabilash-m-9587082bb/"
                     className=" mr-5"
                  >
                     <Linkedin className=" h-[28px] lg:w-[28px]" />
                  </a>
                  <a
                     href="https://github.com/kabi-60"
                     className=" mr-5"
                  >
                     <Github className=" h-[28px] lg:w-[28px]" />
                  </a>
                  <a href="" className="">
                     <Sun className=" h-[28px] lg:w-[28px]" />
                  </a>
               </div>
            </nav>
            {/* </div> */}
            {/* <div className="mx-auto  "> */}
               <div
                  className=" my-1 mt-44  lg:mt-60  lg:w-[60%] text-center mx-auto  "
                  data-aos="fade-right"
                  data-aos-duration="3000"
               >
                  <p className="md:text-xl  font-ubuntu font-[700] text-[#646464] lg:text-2xl ">
                     HEY,I'M KABILASH 🎯
                  </p>
                  <h1 className="mx-auto font-ubuntu  text-4xl md:text-5xl font-[900] text-black lg:mr-6 lg:text-6xl xl:text-7xl lg:font-extrabold">
                     MERN-STACK DEVELOPER
                  </h1>
                  {/* <h1 className="text-6xl font-[900] mr-6  font-ubuntu">
              UI & UX DESIGNER
            </h1> */}
                  <p className="mx-auto mt-2 md:mt-5 w-[90%] md:w-2/3 text-center font-ubuntu text-sm font-[600]   xl:text-xl text-[#646464]">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Mollitia, eligendi earum alias commodi sapiente rem nisi
                     blanditii
                  </p>
                  <div className="mt-5 ">
                     <button className="rounded border-2 border-black bg-[black]  px-3  lg:px-10 py-2 lg:py-3 font-[600] text-white hover:border-2 hover:border-black hover:bg-[#fff] hover:text-black">
                        Learn More
                     </button>
                     {/* <br/> */}
                     <button className="ml-10 rounded border border-2 border-black bg-white px-3  lg:px-10 py-2 lg:py-3 font-[600] text-black hover:bg-black hover:text-white ">
                        Hire Me
                     </button>
                  </div>
                  <div className="mx-auto mt-14 lg:flex justify-center">
                     <h1 className=" mt-2 flex justify-start ml-14 lg:ml-0  md:text-xl font-bold text-black">
                        <Phone className="mt-1" />
                        <span className="ml-1  font-ubuntu">
                           +91 6369734767
                        </span>
                     </h1>
                     <h1 className="md:text-xl text-black ml-14 lg:ml-0 flex justify-start mt-3 lg:mt-0">
                        <span className="ml-5 text-3xl font-extrabold hidden md:block">|</span>
                        <Mail className="lg:ml-5 mr-3  mt-1" />
                        <span className="font-ubuntu font-bold">
                           KABILASHI29@GMAIL.COM
                        </span>
                     </h1>
                  </div>
               </div>
            {/* </div> */}
            <div className="mx-auto mt-5" id="">
               <img src={kabi} alt="" className="ml-auto hidden lg:block l lg:h-[640px] xl:h-[780px]" />
            </div>
         </div>
      </section>
   )
}

export default Home
