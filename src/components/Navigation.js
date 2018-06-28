import React, { Component } from 'react';
import './Navigation.css';
import MenuMob from '../components/MenuMob';

class Navigation extends Component {


  render() {
    return (
      <div>
      <div id="navbarbg" className=""> 
      <MenuMob/>

				<div  className="" id="navbar">
       
        <div className="hover">
					<a style={{cursor: 'pointer'}} id="home" onClick={() => this.props.updatePage('home')}  className="paddnav active">Home</a>
					 <a style={{cursor: 'pointer'}} id="band" onClick={() => this.props.updatePage('band')}   className="paddnav">Band</a>
					 <a style={{cursor: 'pointer'}} id="shows" onClick={() => this.props.updatePage('shows')}     className="paddnav">Shows</a>

					 <a style={{cursor: 'pointer'}} id="releases" onClick={() => this.props.updatePage('releases')}    className="paddnav">Releases</a>
						
					<a style={{cursor: 'pointer'}} id="contact" onClick={() => this.props.updatePage('contact')}    className="paddnav">Contact</a>
          </div>
            </div>
     
      
        </div>
        </div>

    );
  }
}

export default Navigation;