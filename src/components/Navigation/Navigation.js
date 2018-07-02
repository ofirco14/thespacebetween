import React, { Component } from 'react';
import './Navigation.css';
import MenuMob from '../../components/MenuMob/MenuMob';
import {NavLink} from 'react-router-dom';
class Navigation extends Component {


  render() {
    return (

      <div>
      <div id="navbarbg" className=""> 
      <MenuMob/>

				<div  className="" id="navbar">
       
        <div className="hover">
        <div>
        <NavLink  id="home"  className="paddnav" exact to="/"   activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>Home</NavLink>
        <NavLink exact to="/band" id="band"   className="paddnav" activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>Band</NavLink>
        <NavLink exact to="/releases" id="releases"   className="paddnav" activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>Releases</NavLink>
        <NavLink exact to="/contact" id="contact"   className="paddnav" activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>Contact</NavLink>
        </div>

          </div>
            </div>
     
      
        </div>
        </div>

    );
  }
}

export default Navigation;