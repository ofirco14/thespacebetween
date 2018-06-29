import React from 'react';
import { slide as ReactMenu } from 'react-burger-menu';

import {Link} from 'react-router-dom';
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

      <Link  id="home"  className="paddnav active menu-item active1" to="/"><i class="fas fa-home "></i>Home</Link>
      <Link to="/band" id="band"   className="paddnav menu-item"><i class="fas fa-users"></i> Band</Link>
      <Link to="/shows" id="shows"   className="paddnav menu-item"><i class="fas fa-globe-asia"></i> Shows</Link>
      <Link to="/releases" id="releases"   className="paddnav menu-item"><i class="fas fa-music"></i> Releases</Link>
      <Link to="/contact" id="contact"   className="paddnav menu-item"><i class="fas fa-headphones"></i> Contact</Link>
      </ReactMenu>




    )
  }
}