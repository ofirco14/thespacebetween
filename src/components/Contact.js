
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import pgimage from '../img/contactbg1.jpg';
import './Contact.css';

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
class Contact extends Component {

  render() {
    return (
      
      <div style={bg}>
    

      <div style={pgimagestyle}>      </div>
      <br/><br/>
      <Container>
      <Row align="center">
        <Col align="center" xs={12} sm={12} md={12} lg={12}>
        <div className="animated fadeInDown">
        <h2   style={positionText}>
       CONTACT US 
        </h2>
      </div>
   
       </Col>
       
        </Row>  
        </Container>

        
         </div>

    );
  }
}

export default Contact;