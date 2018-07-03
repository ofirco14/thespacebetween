
import React, { Component } from 'react';
import pgimage from '../../img/covers/thanksbg1.jpg';
import './Thanks.css';
import Loading from 'react-loading-components';

let positionText = {
  fontSize: '6vh',
  color:'white',
}
let delivered = {
    fontSize: '3vh',
    color:'white',
  }
let pgimagestyle = {
  backgroundImage: `url(${pgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh',
}


class Thanks extends Component {
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
      
      <div >


      <div style={pgimagestyle}>      </div>
      <br/>
      <div className="container" >
      <div className="row center-align">
      <div className="col s12 m12 l12">
      <div className="animated fadeInDown">
      <h4 class="center-align"  style={positionText}>

        Thank you!
      <hr style={{width:'20%'}} />
       </h4>
      
     </div>
     <div style={delivered}>
     Your message has been delivered,<br/>
     We'll contact you as soon as possible. <br/>
     <br/>
     </div>
     <div className="social">

     <a href="https://www.facebook.com/thespacebetween2017/" rel="noopener noreferrer"  target="_blank">
          <span className="" >
                  <i className="fab fa-facebook fa-3x"></i>
          </span>
     </a>
     
     <a href="https://www.instagram.com/thespacebetween_band/" rel="noopener noreferrer"  target="_blank">
          <span className="" id="icon3">
                  <i className="fab fa-instagram fa-3x"></i>
          </span>
     </a>
     <a href="https://www.youtube.com/channel/UCzXVb6JEfkBns6SBVoKlH4g" rel="noopener noreferrer"  target="_blank">
          <span className="" id="icon4">
                  <i className="fab fa-youtube fa-3x"></i>
          </span>
     </a>
     <br/>
     </div> 
     <br/><br/>
     <div className="copyrights">
     Developed by <a href="https://ofirthedev.github.io/"  rel="noopener noreferrer" target="_blank" style={{color:'#b8ad82'}}>Ofir Cohen</a>
     </div>
     </div>
     </div>
     </div> 



     </div>




    );
  }
}

export default Thanks;