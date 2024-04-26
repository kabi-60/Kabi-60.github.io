import React, { useEffect } from 'react'
import bg from '../About/bg4.jpg'
import instagram from '../About/instagram.png'
import whatsapp from '../About/whatsapp.png'
import linkedin from '../About/linkedin.png'
import project from '../About/project.png'
import working from '../About/24-hours.png'
import exp from '../About/working-time.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 })
   }, [])
   return (
      <section className="container mx-auto py-3 w-[100%]" id="About">
         
         <div className="mx-auto my-5  xl:flex items-center justify-center">
            <div className="mx-auto  flex justify-center items-center">
               <img src={bg} alt="" className="h-[320px] sm:h-[500px] md:[550px] lg:h-[600px]  text-center  rounded-2xl" />
            </div>
            <div className="mx-auto mt-9 lg:mt-16 lg:w-[50%]" data-aos="fade-right">
               <h1 className="font-ubuntu text-center text-4xl lg:text-6xl font-bold text-[#000]">
                  ABOUT ME
               </h1>
               <p className="lg:mt-2  font-ubuntu text-center   lg:text-lg lg:font-medium">
                  I M MERN-STACK DEVELOPER / UI/UX DESIGNER
               </p>
               <div className="my-10 ml-10 md:ml-16 lg:ml-0 mx-auto  grid  md:grid-cols-2 gap-2 md:gap-5">
                  <h1 className="font-ubuntu font-bold">
                     Name:
                     <span className="font-ubuntu font-medium">
                        {' '}
                        KABILASH M
                     </span>
                  </h1>
                  <h1 className="font-ubuntu font-bold">
                     DATE OF BIRTH:
                     <span className="font-ubuntu font-medium">
                        {' '}
                        08/03/2005
                     </span>
                  </h1>
                  <h1 className="font-ubuntu font-bold">
                     AGE:<span className="font-ubuntu font-medium"> 19</span>
                  </h1>
                  <h1 className="font-ubuntu font-bold">
                     COLLEGE:
                     <span className="font-ubuntu font-medium"> SKCET,CBE</span>
                  </h1>
                  <h1 className="font-ubuntu font-bold">
                     MOBILE:
                     <span className="font-ubuntu font-medium text-blue-500">
                        {' '}
                        +91 6369734767
                     </span>
                  </h1>
                  <h1 className="font-ubuntu font-bold">
                     EMAIL:
                     <span className="font-ubuntu font-medium">
                        {' '}
                        KABILASHI29@GMAIL.COM
                     </span>
                  </h1>
                  <h1 className="font-ubuntu font-bold">
                     ADDRESS:
                     <span className="font-ubuntu font-medium">
                        {' '}
                        COIMBATORE,TAMILNADU
                     </span>
                  </h1>
                  <h1 className="font-ubuntu font-bold">
                     GITHUB:
                     <span className="font-ubuntu font-medium text-blue-500">
                        <a href="https://github.com/kabi-60">
                           {' '}
                           https://github.com/kabi-60
                        </a>
                     </span>
                  </h1>
                  <h1 className="font-ubuntu font-bold">
                     COMMUNITY:
                     <span className="font-ubuntu font-medium text-blue-500">
                        <a href="https://github.com/kabi-60"> NXTGEN</a>
                     </span>
                  </h1>
                  <h1 className="font-ubuntu font-bold">
                     <span className="font-ubuntu font-medium text-blue-500">
                        <a href="https://github.com/kabi-60"> </a>
                     </span>
                  </h1>
                  <div className="flex ">
                     <p className="mr-5 mt-4 font-ubuntu font-bold">FLOW ME:</p>
                     <div className="flex">
                        {/* <li className="mr-5 px-3 py-3  rounded-full hover:bg-black text-white bg-[#3e3e3e]"><MessageCircleMore /></li>
                <li className="mr-5 px-3 py-3  rounded-full hover:bg-black text-white bg-[#3e3e3e]"><Instagram /></li>
              <li className="mr-5 px-3 py-3  rounded-full hover:bg-black text-white bg-[#3e3e3e]"><Linkedin /></li> */}
                        <a href="">
                           <img
                              src={instagram}
                              alt=""
                              className="mr-5 h-[40px]"
                           />
                        </a>
                        <a href="">
                           <img
                              src={whatsapp}
                              alt=""
                              className="mr-5 h-[40px]"
                           />
                        </a>
                        <a href="">
                           <img
                              src={linkedin}
                              alt=""
                              className="mr-5 h-[40px]"
                           />
                        </a>
                     </div>
                  </div>
                  <h1 className="font-ubuntu font-bold">
                     <span className="font-ubuntu font-medium text-blue-500">
                        <a href="https://github.com/kabi-60"> </a>
                     </span>
                  </h1>
               </div>
               <div className="mx-auto px-5 ml-8 sm:ml-0 lg:px-0 grid md:grid-cols-2 gap-5">
                  <div className="flex ">
                     <img src={working} alt="" className="h-[50px] lg:h-[80px]" />
                     <h1 className="my-auto ml-5 font-ubuntu lg:text-xl font-bold text-[#000]">
                        CUSTOMER SUPPORT
                     </h1>
                  </div>
                  <div className="flex">
                     <img src={exp} alt="" className="h-[50px] lg:h-[80px]" />
                     <h1 className="my-auto ml-5 font-ubuntu lg:text-xl font-bold text-[#000]">
                        1+ MONTH EXPERIENCE
                     </h1>
                  </div>
                  <div className="flex">
                     <img src={project} alt="" className="h-[50px] lg:h-[80px]" />
                     <h1 className="my-auto ml-5 font-ubuntu lg:text-xl font-bold text-[#000]">
                        30+ PROJECTS
                     </h1>
                  </div>
               </div>
               <div className=" mx-auto flex  justify-center">
                  <button className="my-5 rounded bg-black px-4 md:px-5  lg:px-9 py-2  font-ubuntu text-lg text-white hover:text-black hover:font-bold hover:bg-white hover:border-black hover:border-2">
                     Dowload CV
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
