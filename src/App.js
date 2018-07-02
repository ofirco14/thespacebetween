import React, { Component } from 'react';
import './App.css';
import Intro from './components//Intro/Intro';
import Navigation from './components/Navigation/Navigation';
import Releases from './components/Releases/Releases';
import Contact from './components/Contact/Contact';
import Band from './components/Band/Band';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';



class App extends Component {



  render() {

    return (
     

      <Router>
      
      <div>
    
      <div style={{zIndex: 99, position: 'fixed',}} >
      
      <Navigation  />

      </div>
   

     
      <Route exact path="/" component={Intro}  />
      <Route exact path="/band" component={Band} />
      <Route exact path="/releases" component={Releases} />
      <Route exact path="/contact" component={Contact} />
      </div>
      </Router>
     

  
  
   
    );
  }
}

export default App;
