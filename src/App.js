import React from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
function App() {
  return (
    <div className='App w-full h-fill bg-fixed bg-[url("https://images.unsplash.com/photo-1637682184683-74e6d34ed72d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80")]'> 
    <Router>
      <div className="flex justify-center py-9 text-sm font-bold">
          <ul className="flex bg-red-500  rounded-full p-2">
              <li className="flex mx-3 text-white hover:text-gray-300"><Link to="/">Home</Link></li>
              <li className="flex mx-3 text-white hover:text-gray-300"><Link to="/projects">Projects</Link></li>
              <li className="flex mx-3 text-white hover:text-gray-300"><Link to="/resume">Resume</Link></li>
              <li className="flex mx-3 text-white hover:text-gray-300"><Link to="/contact">Contact</Link></li>
          </ul>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
