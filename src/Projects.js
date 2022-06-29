import React from "react";
function Projects() {
  return (
    <div className="h-screen pb-5">
      <div className="flex justify-center font-bold text-white">
        Projects
      </div>
      <div id="Content" className=" flex flex-col justify-center items-center pb-5">
                  <div classname= "lg:grid lg:grid-cols-2">
                      <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-6 gap-y-10 text-xs pt-10 mx-8 md:mx-48 lg:mx-96 ">
                          <div className="p-6 bg-sky-100 rounded-3xl shadow-lg opacity-80 font-bold transform hover:scale-105"> Classic Snake Game
                              <li className="pt-2 font-normal">Programmed and designed classic snake game using python language</li>
                              <li className="pt-2 pb-4 font-normal">Used data structure frameworks and implemented custom graphics into code</li>
                              <form action="https://github.com/arvinbenipal/Snake-Game">
                                <button className="p-2 bg-sky-300 hover:bg-red-200 rounded-xl">View</button>
                              </form>
                          </div>
                          <div className="p-6 bg-sky-100 rounded-3xl shadow-lg opacity-80 font-bold transform hover:scale-105"> Study Space
                              <li className="pt-2 font-normal">Used ReactJS and Tailwind CSS to develop front end while connecting backend database with MongoDB</li>
                              <li className="pt-2 pb-4 font-normal">Used UML diagrams to represent backend, Adobe XD to design front end</li>
                              <form action="https://github.com/arvinbenipal/StudySpace">
                                <button className="p-2 bg-sky-300 hover:bg-red-200 rounded-xl">View</button>
                              </form>                          </div>

                          <div className="p-6 bg-sky-100 rounded-3xl shadow-lg opacity-80 font-bold transform hover:scale-105"> Hitech Concrete
                              <li className="pt-2 font-normal">Translated concepts into user flows, wireframes, mockups and prototypes to promote intuitive designs, site interactions and user experiences</li>
                              <li className="pt-2 pb-4 font-normal">Completed designs to meet budget, SEO, and performance requirements</li>
                              <form action="https://hitechconcrete.ca">
                                <button className="p-2 bg-sky-300 hover:bg-red-200 rounded-xl">View</button>
                              </form>                          </div>

                          <div className="p-6 bg-sky-100 rounded-3xl shadow-lg opacity-80 font-bold transform hover:scale-105"> Ancor Fitness
                              <li className="pt-2 font-normal">E-commerce business for home gym equipment, marketed throughout the pandemic using Instagram and Facebook targeted ads</li>
                              <li className="pt-2 pb-4 font-normal">Assessed market trends, researched multiple products before shortlisting for best sellers</li>
                              <form action="https://ancorfitness.square.site">
                                <button className="p-2 bg-sky-300 hover:bg-red-200 rounded-xl">View</button>
                              </form>                          </div>
                      </div>
                      </div>
                  </div>
       </div>
 
  );
}

export default Projects;