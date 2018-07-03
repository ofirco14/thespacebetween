import React, { Component } from 'react';
import './Intro.css';
import Background from '../../img/covers/band.JPG';
import Loading from 'react-loading-components';



var introStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
height: '100vh',
}
let links = {
gone: 'https://www.youtube.com/watch?v=lwupD4LW99Q'
};

class Intro extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 1000))
  }

componentDidMount(){
  this.authenticate().then(() => {
    this.setState({ isLoading: false });
 })
}
  render() {
    if (this.state.isLoading) {
      return(
      <div className="loading"><center>
      <Loading
      
      type='puff'
       width={100}
        height={100}
         fill='#f44242' />
      </center></div>
    );
  }
      return (

        <div style={introStyle}>
        <div className="add-height valign-wrapper">
        <div className="container" >
        <div className="row center-align">
        <div className="col s12 m12 l12">
    
          <div className="animated fadeInDown">
        
          <h4 style={{color:'white',fontWeight:'lighter',}}>
          NEW SINGLE
        </h4>
        </div>
          <div className="animated fadeInDown">
          <span style={{color:'#b8ad82',fontWeight:'bold',fontSize:'4vh',}}>
          G O N E
        </span> 
      </div>
       <br/>
          <div>
          <div className="animated fadeInDown">

          <a className="button"  href={links.gone} target="_blank" >WATCH IT NOW</a>
         </div>
         

        </div>
    
        </div>
        </div>
        </div>
        </div>
        </div>

    );
   

}

}
export default Intro;