import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import pgimage from '../img/bandpg1.jpg';
import raanan from '../img/raanan.JPG';
import nik from '../img/nik.JPG';
import idan from '../img/idan.JPG';
import eli from '../img/eli.JPG';
import yosef from '../img/yosef.JPG';
import icon from '../img/icon.jpg';

import './Band.css';
let bg = {
  backgroundColor: 'black',
  height: '100%',

}
let positionText = {
  position:'relative',
  fontSize: '6vh',
  width:'100vw',
  color:'white',
  left: '50%',
  
  transform: `translate(${-50}%, ${-50}%)` 

}
let pgimagestyle = {
  backgroundImage: `url(${pgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '73vh',
}
class Band extends Component {

  render() {
    return (

      <div style={bg}>
      <div style={pgimagestyle}>      </div>
      <br/><br/>
      <Container  fluid style={{ lineHeight: '32px' }}>
      <Row >
     
        <Col align="center" xs={12} sm={12} md={12} lg={12}>

       <div className="animated fadeInDown">
        <h2  style={positionText}>
        <br/>
        THE BAND
        </h2>
      </div>
   
   
       </Col>
        </Row> 
        <br />

        <Row align="center">
        <Col align="center"lg={4}>
        <img className="profiles" src = {idan}  alt="idan"/>
        <div className="profileAlt" style={{color: 'white'}}>Idan aharoni(guitar&drums)</div>

        </Col>
        <Col align="center"lg={4}>

        <img className="profiles" src ={nik} alt="nik"/>
        <div className="profileAlt" style={{color: 'white'}}>Nik sky stepinsky(lead vocalist)</div>

        </Col>
        <Col align="center" lg={4}>

        <img className="profiles" src = {eli} alt="eli"/>
        <div className="profileAlt" style={{color: 'white'}}>Eli leonid perman(bass&vocals)</div>

        </Col>

       
        </Row>
        <br/>
        <Row align="center">
        <Col align="center"lg={12}>
        <img style={{borderRadius:'50%',width:'200px',height:'auto'}}src = {icon} alt="icon"/>
        </Col>
        </Row>
        <br/>
        <Row align="center">
        <Col  lg={6} align="center">
        <img className="profiles" src = {raanan} alt="raanan"/>
        <div className="profileAlt" style={{color: 'white'}}>Raanan naseraldeen(lead guitar</div>

        </Col>
        <Col lg={6} align="center">

        <img className="profiles" src =  {yosef} alt="yosef"/>
        <div className="profileAlt" style={{color: 'white'}}>Yosef haco "hollow" (drums&guitar)</div>
        </Col>

        </Row>
        </Container>
         </div>

    );
  }
}

export default Band;