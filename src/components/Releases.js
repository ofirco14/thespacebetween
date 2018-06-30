import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import pgimage from '../img/releasespg1.jpg';
let bg = {
  backgroundColor: 'black',
  height: '100%',
}
let positionText = {
  fontSize: '6vh',
  width:'100vw',
  color:'white',
  position: 'fixed',
  left: '50%',
  
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
      <div style={pgimagestyle}>        </div>
      <br/><br/>

      <Container>
      <Row align="center">
        <Col align="center" xs={12} sm={12} md={12} lg={12}>
         
        <h2 className="spacing"  style={positionText}>
        NEW RELEASES
         </h2>
   
   
       </Col>
        </Row>  
        </Container>
         </div>

    );
  }
}

export default Releases;