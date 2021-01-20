import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Map from "./Map.js";
import Formul from "./Formul";
import Photo from "./Photo";
class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/formul">Formul</NavLink></li>
                    <li><NavLink to="/photo">Photo</NavLink></li>
               
                    <li><NavLink to="/Map">Map</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/formul" component={Formul}/>
                    <Route path="/map" component={Map}/>
                    <Route path="/photo" component={Photo}/>
                    
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default Main;