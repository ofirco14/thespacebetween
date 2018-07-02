
import React, { Component } from 'react';
import pgimage from '../../img/covers/contactbg1.jpg';
import './Contact.css';
import Loading from 'react-loading-components';

let bg = {
  backgroundColor: 'black',
  height: '100%',
}
let positionText = {
  color:'white',
  position:'relative',
  fontSize: '6vh',
  width:'100vw',
  left: '50%',
  
  transform: `translate(${-50}%, ${-50}%)` 
}
let pgimagestyle = {
  backgroundImage: `url(${pgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '73vh',
}

var templateParams = {
  name: 'James',
  notes: 'Check this out!'
};


class Contact extends Component {
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
      <div className="col s6 m6 l6 push-l3 push-m3 push-s3">
      <div className="animated fadeInDown">
       <h2  style={positionText}>
      

        CONTACT US
       <hr style={{width:'20%'}} />
       </h2>
      
     </div>
     </div>
     </div>
     </div>

        
         </div>

    );
  }
}

export default Contact;