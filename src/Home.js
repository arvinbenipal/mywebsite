import React from "react";
import ImageOne from "../src/images/portrait.jpg"
function Home() {
  return (
    <div className=" h-screen">
      <div className=" flex pl-12  pb-6">
        <img alt="car" className="h-40 md:h-48 rounded-3xl" src={ImageOne} />
        <div className="px-6">
          <div className="pt-8 text-lg text-white font-bold">Arvin Benipal</div>
          <div className="py-1 text-sm text-white font-light">Welcome to my digital portfolio</div>
          
        </div>
      </div>

    <div className='sm:flex space-y-4 px-12 pb-10 sm:space-y-0 sm:space-x-20  '>
        <div className='"flex py-6 px-5 font-bold text-sm opacity-80 bg-sky-100 transform motion-safe:hover:scale-105 hover:bg-sky-200 rounded-3xl hover:shadow-lg '>
            Education
            <text className='flex flex-col font-light pt-1'> Computer Science (BSc) at Wilfrid Laurier University </text>
        </div>
        <div className='"flex py-6 px-5 font-bold text-sm opacity-80 bg-sky-100 transform motion-safe:hover:scale-105 hover:bg-sky-200 rounded-3xl hover:shadow-lg'>
            Coding Expertise
            <text className='flex flex-col font-light pt-1'> Python and C object oriented programming </text>
        </div>
        <div className='"flex py-6 px-5 font-bold text-sm opacity-80 bg-sky-100 transform motion-safe:hover:scale-105 hover:bg-sky-200 rounded-3xl hover:shadow-lg'>
            Web Design
            <text className='flex flex-col font-light pt-1'> Experience with HTML, CSS, JS, and SEO optimization </text>
        </div>
        <div className='"flex py-6 px-5 font-bold text-sm opacity-80 bg-sky-100 transform motion-safe:hover:scale-105 hover:bg-sky-200 rounded-3xl hover:shadow-lg'>
            E-Commerce
            <text className='flex flex-col font-light pt-1'> Led and assisted in multiple online start-ups </text>
        </div>
    </div>
    </div>
  );
}

export default Home;