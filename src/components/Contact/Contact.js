
import React, { Component } from 'react';
import pgimage from '../../img/covers/contactbg1.jpg';
import './Contact.css';
import Loading from 'react-loading-components';
import Form from '../Form/Form';

let positionText = {

  fontSize: '6vh',

  color:'white',
  

}
let pgimagestyle = {
  backgroundImage: `url(${pgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '70vh',
}


class Contact extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 1200))
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

      CONTACT US 
      <hr style={{width:'20%'}} />
       </h4>
      
     </div>
     </div>
     </div>
     <div className="row center-align">
     <div className="col s6 m6 l6 push-l3 push-m3 push-s3">
     <Form/><br/><br/>
     <div className="copyrights">
     Developed by <a href="https://ofirco14.github.io/"  rel="noopener noreferrer" target="_blank" style={{color:'#b8ad82'}}>Ofir Cohen</a>
     </div>

     </div>
     </div>

     </div>

        
         </div>

    );
  }
}

export default Contact;
