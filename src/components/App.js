import React, { Component } from 'react';
import '../style.scss';
import NavBarOne from './NavBarOne';
import NavBarTwo from './NavBarTwo';
import HeadBand from './HeadBand';
import Content from './Content';

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
        <HeadBand/>
        <Content/>
      </div>
    );
  }
}

export default App;
