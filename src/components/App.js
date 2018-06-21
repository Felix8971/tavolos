import React, { Component } from 'react';
import '../style.scss';
import NavBarOne from './NavBarOne';
import NavBarTwo from './NavBarTwo';
import HeadBand from './HeadBand';
import MainContent from './MainContent';
import OtherContent from './OtherContent';
import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';

class App extends Component {
  constructor(props) {
    super();
   
  }

  render() {
   
    return (
      <div className='root-container'>
        <header>
          <NavBarOne/>
          <NavBarTwo/>
        </header>

        <HeadBand/>
        <MainContent/>

        <div className='delimiter'><div className='bar'></div></div>

        <aside>
          <OtherContent/>
        </aside>

        <footer>
          <FooterOne/> 
          <FooterTwo/> 
        </footer>
      </div>
    );
  }
}

export default App;
