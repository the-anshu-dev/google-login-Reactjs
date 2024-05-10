import React from "react";
import { Router } from "./Router";
import Home from "../Comopnent/Home";
import About from "../Comopnent/About";
import Contact from "../Comopnent/Contact";
const Routes = {
    home : <Home/>,
    about : <About/>,
    contect : <Contact/>,
    getRoutes : function(){
        return Routes[Router]
    }
}
export default Routes;