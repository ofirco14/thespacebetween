import React from 'react';
import { slide as ReactMenu } from 'react-burger-menu';


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
            <a id="Home" className="menu-item active1" href="/"><i class="fas fa-home "></i> Home</a>
            <a id="Band" className="menu-item" href="/"><i class="fas fa-users"></i> Band</a>
            <a id="Shows" className="menu-item" href="/"><i class="fas fa-globe-asia"></i>  Shows</a>
            <a id="Releases" className="menu-item" href="/"><i class="fas fa-music"></i> Releases</a>
            <a id="Contact" className="menu-item" href="/"><i class="fas fa-headphones"></i> Contact</a>
             
            </ReactMenu>

    )
  }
}