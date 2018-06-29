import React, { Component } from 'react';
import './Navigation.css';
import MenuMob from '../components/MenuMob';
import {Link} from 'react-router-dom';
class Navigation extends Component {


  render() {
    return (

      <div>
      <div id="navbarbg" className=""> 
      <MenuMob/>

				<div  className="" id="navbar">
       
        <div className="hover">
        <div>
        <Link  id="home"  className="paddnav active" to="/">Home</Link>
        <Link to="/band" id="band"   className="paddnav">Band</Link>
        <Link to="/shows" id="shows"   className="paddnav">Shows</Link>
        <Link to="/releases" id="releases"   className="paddnav">Releases</Link>
        <Link to="/contact" id="contact"   className="paddnav">Contact</Link>
        </div>

          </div>
            </div>
     
      
        </div>
        </div>

    );
  }
}

export default Navigation;