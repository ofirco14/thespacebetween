import React, { Component } from 'react';
import './Intro.css';
import { Container, Row, Col } from 'react-grid-system';
import Background from '../img/band.JPG';
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
  render() {
    return (
        <div style={introStyle}>

      
        <div className="middle">
        <Container>
        <Row align="center">
          <Col xs={12} sm={12} md={12} lg={12}>
          <div className="spacing">
          <div className="animated fadeInDown">
          <h1 style={{color:'white',fontWeight:'lighter',fontSize:'7vh',}}>
          NEW SINGLE
        </h1>
        </div>
          </div>
     
         </Col>
          </Row>
         
          <Row align="center">
          <Col xs={12} sm={12} md={12} lg={12}>
          <div className="spacing">
          <div className="animated fadeInDown">

          <h3 style={{color:'#b8ad82',fontWeight:'bold',fontSize:'4vh',}}>
          GONE
        </h3> 
        </div>
        </div>
          </Col>
          </Row>
          <br /> <br />

          <Row align="center">
          <Col xs={12} sm={12} md={12} lg={12}>
          <div className="buttonStyle">
          <div className="animated fadeInDown">

          <a className="button" href={links.gone} target="_blank"  >WATCH IT NOW</a>
        </div>
          </div>
          </Col>
          </Row>
      </Container>
    
        </div>
        </div>



  

    );
  
}
}
export default Intro;