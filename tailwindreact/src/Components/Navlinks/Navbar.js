import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Model1 from "./Model1";
import Model2 from "./Model2";
import Model3 from "./Model3";
import Home from "../Home/Home";

const Navbar = () => {
  return (
    <>
      <div className="header">
        {/* logo */}
        <img
          className="size-28 mx-4"
          src={process.env.PUBLIC_URL + "/images/tesla.svg"}
          alt="tesla logo"
        ></img>
        </div>



        {/* nav links */}
        <Router>
          <nav>
            <ul className="flex ">
              <li className="navlinks">
                <Link to="/">Home</Link>
              </li>
              <li className="navlinks">
                <Link to="/model1">Model 1</Link>
              </li>
              <li className="navlinks">
                <Link to="/model2">Model 2</Link>
              </li>
              <li className="navlinks">
                <Link to="/model3">Model 3</Link>
              </li>
            </ul>
            {/* External links */}
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/model1" element={<Model1 />}></Route>
            <Route path="/model2" element={<Model2 />}></Route>
            <Route path="/model3" element={<Model3 />}></Route>
          </Routes>
        </Router>
   
    
    </>
  );
};

export default Navbar;
