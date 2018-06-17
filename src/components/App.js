import React, { Component } from 'react';
import '../style.scss';
import NavBar from './NavBar';
//import Button from './Button';

class App extends Component {
  constructor(props) {
    super();
   
  }

  render() {
   
    return (
      <div>
        <NavBar/>
        <h1 className="title">Dine in the dark</h1>
      </div>
    );
  }
}

export default App;
