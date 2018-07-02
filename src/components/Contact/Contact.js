
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
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