import React, { Component } from 'react';
import '../style.scss';
import NavBarOne from './NavBarOne';
import NavBarTwo from './NavBarTwo';
//import Button from './Button';

class App extends Component {
  constructor(props) {
    super();
   
  }

  render() {
   
    return (
      <div>
        <NavBarOne/>
        <NavBarTwo/>
        <h1 className="title">Dine in the dark</h1>
      </div>
    );
  }
}

export default App;
