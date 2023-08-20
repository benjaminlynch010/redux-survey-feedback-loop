import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/Feelings">Page 1 Feelings</Link>
      </li>
      <li>
        <Link to="/Understanding">Page 2 Understanding</Link>
      </li>
      <li>
        <Link to="/Support">Page 3 Support</Link>
      </li>
      <li>
        <Link to="/Comments">Comments</Link>
      </li>
      <li>
        <Link to="/Review">Review</Link>
      </li>
    </ul>
  );
}

export default Navbar;
