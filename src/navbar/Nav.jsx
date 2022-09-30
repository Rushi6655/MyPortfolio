import React from "react";
import "./nav.css";
export const Nav = () => {
  return (
    <div className="main">

      <div id="nav" className="navbar">

        <div className="logo">
          <h2 className="logo">Hrushikesh</h2>
          <span>Shelke</span>
        </div>
        
        <div className="list">
          <ul className="listitem">
            <li className="item">
              <a href="#home">Home</a>
            </li>
            <li className="item">
              <a href="#projects">Projects</a>
            </li>
            <li className="item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="item">
              <a href="#contact">Contact</a>
            </li>
           
          </ul>
        </div>

      </div>
    </div>
  );
};
