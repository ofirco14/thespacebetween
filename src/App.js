import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Releases from './components/Releases';
import Shows from './components/Shows';
import Contact from './components/Contact';
import Band from './components/Band';

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
      <div style={{zIndex: 1, position: 'fixed',}} >
      
    
      </div>


     
      <Route exact path="/" component={Intro} />
      <Route exact path="/band" component={Band} />
      <Route exact path="/shows" component={Shows} />
      <Route exact path="/releases" component={Releases} />
      <Route exact path="/contact" component={Contact} />
      </div>
      </Router>
     

  
  
   
    );
  }
}

export default App;
