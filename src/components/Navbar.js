import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
const Navbar = () => {
  return (
    <nav className="col-12 col-md-8">
      <Link to={"/"}>Todos los posts</Link>
      <Link to={"/crear"}>Nuevo post</Link>
    </nav>
  );
};

export default Navbar;
