import React, { Component } from 'react';
import './Intro.css';
import { Container, Row, Col } from 'react-grid-system';
import Background from '../../img/covers/band.JPG';
import Loading from 'react-loading-components';



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