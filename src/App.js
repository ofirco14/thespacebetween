import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Navigation from './components/Navigation';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     page: 'home',
    };
    this.updatePage = this.updatePage.bind(this)

  }

  updatePage(who) {
      this.setState({
        page: who,
      });
  
  }

  pageTitle(){
    return (
      this.state.page
    );
  };
  
  render() {
    return (
      <div>
      { this.pageTitle() }

    
      <div style={{zIndex: 99, position: 'fixed',}} >
      
      <Navigation updatePage = {this.updatePage} />
      </div>
      <div style={{zIndex: 1, position: 'fixed',}} >
      
      
        <Intro />
    
      </div>


      </div>

  
  
   
    );
  }
}

export default App;
