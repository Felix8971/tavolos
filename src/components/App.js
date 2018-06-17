import React, { Component } from 'react';
import '../style.scss';
import NavBarOne from './NavBarOne';
import NavBarTwo from './NavBarTwo';
import HeadBand from './HeadBand';

//import Button from './Button';

class App extends Component {
  constructor(props) {
    super();
   
  }

  render() {
   
    return (
      <div className='root-container'>
        <NavBarOne/>
        <NavBarTwo/>
        <HeadBand />
      </div>
    );
  }
}

export default App;
