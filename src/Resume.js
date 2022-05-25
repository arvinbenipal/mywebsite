import React from "react";
import ImageTwo from "../src/images/resume.pdf"

function Resume() {
  return (
    <div className="h-screen justify-center text-md font-bold">
      <div className="text-white flex justify-center pb-5">
        Resume
      </div>
        <img alt="car" className="" src={ImageTwo} />
    </div>
  );
}

export default Resume;