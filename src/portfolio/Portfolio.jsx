import React from "react";
import "./portfolio.css";
import gilogo from "./github-logo.png";
import ticon from "./ticon.png";
import ficon from "./ficon.png";
export const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio Links</h1>
      <div className="links">
        <ul>
          <li className="git">
            <a href="https://github.com/Rushi6655/MyWork">
            <img src={gilogo} alt=""/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/rushi.shelke6655/">
            <img src={ficon} alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/RushiShelke1">
            <img src={ticon} alt="" />
            </a>
            
          </li>
        </ul>
      </div>
    </div>
  );
};
