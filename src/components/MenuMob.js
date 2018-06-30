import React from 'react';
import { slide as ReactMenu } from 'react-burger-menu';

import {NavLink} from 'react-router-dom';
import './MenuMob.css';

export default class MenuMob extends React.Component {

  showAbout(event) {
    event.preventDefault()
    console.log("Version 0.0.1")
  }

  render() {
    return(




      <ReactMenu  className="menu" width={'40%'}>
      <h2>Menu</h2>

      <NavLink activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}  exact to="/" id="home"  className="paddnav menu-item"><i class="fas fa-home "  ></i>Home</NavLink>
      <NavLink activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }} exact to="/band" id="band"   className="paddnav menu-item"><i class="fas fa-users"></i> Band</NavLink>
      <NavLink activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }} exact to="/releases" id="releases"   className="paddnav menu-item"><i class="fas fa-music"></i> Releases</NavLink>
      <NavLink activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }} exact to="/contact" id="contact"   className="paddnav menu-item"><i class="fas fa-headphones"></i> Contact</NavLink>
      </ReactMenu>




    )
  }
}