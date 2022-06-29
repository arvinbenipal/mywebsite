import React from "react";
import ImageTwo from "../src/images/resume.pdf"

function Resume() {
  return (
    <div className="h-screen text-md font-bold pb-50">
      <div className="flex justify-center text-white pb-5">
        Resume
      </div>
      <div className="flex justify-center">
      <img alt="car" className="" src={ImageTwo} /> 
      </div>
        
    </div>
  );
}

export default Resume;