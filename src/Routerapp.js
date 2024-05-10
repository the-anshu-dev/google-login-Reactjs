import React from "react";
import Routes from "./utility/Routes";
import Link from "./utility/Link";
import Home from "./Comopnent/Home";
import About from "./Comopnent/About";
import Contact from "./Comopnent/Contact";
import { Router } from "./utility/Router";
function Routerapp() {
  return (
    <div>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <a style={routeLink} href="#home">
          Home
        </a>
        <a style={routeLink} href="#about">
          About
        </a>
        <a style={routeLink} href="#contect">
          Contect
        </a>
      </div> 
      {Routes.getRoutes()} */}




      {/* New version  */}
      <Link to={'home'} children={Home}>Home</Link>
      <Link to={'about'} children={About}>About</Link>
      <Link to={'contact'} children={Contact}>Contact</Link>

      <Router/>
    </div>
  );
}
const routeLink = {
  fontSize: 25,
  // gap:10
  marginLeft: 25,
  textDecoration: "none",
};
export default Routerapp;
