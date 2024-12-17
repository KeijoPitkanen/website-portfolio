import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/website-portfolio">About</Link>
        </li>
        <li>
          <Link to="/website-portfolio/projects">Projects</Link>
        </li>
        <li>
          <Link to="/website-portfolio/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
