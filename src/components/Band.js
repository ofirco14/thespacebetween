import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
let positionText = {
  color:'blue',
  position: 'fixed',
  left: '50%',
  top:'50vh',
  transform: `translate(${-50}%, ${-50}%)` 

}
class Band extends Component {

  render() {
    return (

      <div >
      <Container>
      <Row align="center">
        <Col align="center" xs={12} sm={12} md={12} lg={12}>
         
        <h2 style={positionText}>
        this is band !
        </h2>
   
   
       </Col>
        </Row>  
        </Container>
     
         </div>

    );
  }
}

export default Band;