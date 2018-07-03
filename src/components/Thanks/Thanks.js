
import React, { Component } from 'react';
import pgimage from '../../img/covers/contactbg1.jpg';
import './Thanks.css';
import Loading from 'react-loading-components';
let bg = {
  backgroundColor: 'black',
  height: '100%',
}
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
      
      <div style={bg}>


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
     Visit us at:
     <br/>
     <div className="social">

<a href="https://www.facebook.com/thespacebetween2017/" target="_blank">
     <span class=" align-self-center justify-content-center" id="icon2">
             <i class="fab fa-facebook fa-2x"></i>
     </span>
</a>
<a href="https://www.instagram.com/thespacebetween_band/" target="_blank">
     <span class="align-self-center justify-content-center" id="icon3">
             <i class="fab fa-instagram fa-2x"></i>
     </span>
</a>
<a href="https://www.youtube.com/channel/UCzXVb6JEfkBns6SBVoKlH4g" target="_blank">
     <span class=" align-self-center justify-content-center" id="icon4">
             <i class="fab fa-youtube fa-2x"></i>
     </span>
</a>
</div>
     </div>  
     </div>
     </div>


     </div>

        
         </div>

    );
  }
}

export default Thanks;