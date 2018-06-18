import React, { Component } from 'react';
import '../style.scss';
import NavBarOne from './NavBarOne';
import NavBarTwo from './NavBarTwo';
import HeadBand from './HeadBand';
import MainContent from './MainContent';
import OtherContent from './OtherContent';
import FooterOne from './FooterOne';

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
        <MainContent/>
        <OtherContent/>
        <FooterOne/>
       
      </div>
    );
  }
}

export default App;
