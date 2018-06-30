import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import pgimage from '../img/releasespg1.jpg';
let bg = {
  backgroundColor: 'black',
  height: '100vh',

}
let positionText = {
  color:'blue',
  position: 'fixed',
  left: '50%',
  top:'50vh',
  transform: `translate(${-50}%, ${-50}%)` 

}
let pgimagestyle = {
  backgroundImage: `url(${pgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '73vh',
}
class Releases extends Component {

  render() {
    return (

      <div style={bg}>
      <div style={pgimagestyle}>
      <Container>
      <Row align="center">
        <Col align="center" xs={12} sm={12} md={12} lg={12}>
         
        <h2 style={positionText}>
        this is releases !
        </h2>
   
   
       </Col>
        </Row>  
        </Container>
        </div>
         </div>

    );
  }
}

export default Releases;