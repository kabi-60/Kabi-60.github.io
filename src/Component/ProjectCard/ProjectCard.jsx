import React from 'react'
import pass from '../Project/generator.png'
import debit from '../Project/debit.png'
import slider from '../Project/slider.png'
import agency from '../Project/agency.png'
import rock from '../Project/rock.png'
import login from '../Project/login.png'
import quiz from '../Project/quiz.png'
import todo from '../Project/todo.png'
import beta from '../Project/beta.png'
import repair from '../Project/repairfy.png'

const ProjectCard = () => {
   return (
      <div
         className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
         data-aos="zoom-in"
         data-aos-duration="4000"
      >
         <div class="relative  mb-10  w-[250px] sm:w-[400px]   md:w-[300px] lg:[200px] xl:w-[400px]   rounded border-2 border-gray-200 bg-white   shadow-lg shadow-gray-300">
            <figure>
               <img
                  src="https://m.media-amazon.com/images/I/81F3ZLBMCqL.jpg"
                  alt="Shoes"
                  className="rounded"
               />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
                  HULU CLONE
                  <span class="ml-2 rounded bg-black px-3 py-1 text-sm text-white">
                     NEW
                  </span>
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     React JS
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     TMDB
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24   transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div> 
            </div>
         </div>
         <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={beta} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
                  BETA BLISS (ECOMMERCE-WEBSITE)
                  <span class="ml-2 rounded bg-black px-3 py-1 text-sm text-white">
                     NEW
                  </span>
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     MERN
                  </button>
                  <button class="text-md mr-2 rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>{' '}
         <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={debit} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
               DEBIT CARD LIVE
                  <span class="ml-2 rounded bg-black px-3 py-1 text-sm text-white">
                     NEW
                  </span>
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     REACT
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={pass} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
               PASSWORD GENERATOR
                  <span class="ml-2 rounded bg-black px-3 py-1 text-sm text-white">
                     NEW
                  </span>
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     REACT
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={quiz} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
                  QUIZ GAME(GALAXY THEME)
                  <span class="ml-2 rounded bg-black px-3 py-1 text-sm text-white">
                     NEW
                  </span>
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     REACT
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/* <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={debit} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
                  DEBIT CARD LIVE
                  <span class="ml-2 rounded bg-black px-3 py-1 text-sm text-white">
                     NEW
                  </span>
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     JAVA SCRIPT
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div> */}
         {/* <div class="relative  mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]   rounded border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={pass} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
                  PASSWORD GENERATOR
                  <span class="ml-2 rounded bg-black px-3 py-1 text-sm text-white">
                     NEW
                  </span>
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     JAVA SCRIPT
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div> */}
         <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={slider} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
               GUARDIANS OF GOODNESS
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     REACT
                  </button>
                  <button class="text-md  rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     CSS
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={repair} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
                  REPAIRFY (CAR SERVICE)
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     REACT
                  </button>
                  <button class="text-md  rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     CSS
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={agency} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">AGENCY</h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     HTML
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={rock} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
                  ROCK PAPER SCICCORS
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     HTML
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/* <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={login} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
                  ANIME LOGIN/REGISTER
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     JAVA SCRIPT
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                     TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div> */}
          <div class="relative  mb-10  w-[250px] sm:w-[400px]   md:w-[300px] lg:[200px] xl:w-[400px]   rounded border-2 border-gray-200 bg-white   shadow-lg shadow-gray-300">
            <figure>
               <img
                  src={login}
                  alt="Shoes"
                  className="rounded"
               />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">
               ANIME LOGIN/REGISTER
                  {/* <span class="ml-2 rounded bg-black px-3 py-1 text-sm text-white">
                     NEW
                  </span> */}
               </h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
                  <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                     HTML
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                    TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24   transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div> 
            </div>
         </div>
         <div class="relative mb-10  w-[250px] sm:w-[400px] md:w-[300px]  xl:w-[400px]  rounded  border-2 border-gray-200 bg-white  shadow-lg shadow-gray-300">
            <figure>
               <img src={todo} alt="Shoes" className="rounded" />
            </figure>
            <div class="mx-auto my-auto p-5">
               <h2 class="font-ubuntu text-xl font-semibold">TODO LIST</h2>
               <p class="mt-2 font-ubuntu text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <div class="mt-2 flex justify-end">
               <button class="text-md mr-2  rounded-full border border-[#b2b2b2] px-3 py-1 font-ubuntu font-[600] text-black">
                    JS
                  </button>
                  <button class="text-md rounded-full bg-black px-3 py-1 font-ubuntu font-extralight text-white">
                    TAILWIND
                  </button>
               </div>
               <div class="card absolute left-0 top-0 flex h-full w-full py-24 transition-all duration-300 hover:bg-[#ffffff34]">
                  <div class="mx-auto  h-72  opacity-0 hover:opacity-100">
                     <button class="text-md mr-3 rounded bg-black px-6 py-1 font-mono font-medium text-white ">
                        LIVE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-tower-cell"></i>
                        </span>
                     </button>
                     <button class="text-md rounded bg-black px-6 py-1 font-mono font-medium text-white">
                        CODE{' '}
                        <span className="text-sm">
                           <i class="fa-solid fa-code"></i>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectCard
