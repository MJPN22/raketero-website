import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Nav from './components/templates/navigation'
import Home from './components/views/home/index'
import Footer from './components/templates/footer'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Nav/>
        <Home/> 
        <Footer/>
      </React.Fragment>
    );
  }
}
 
export default App;