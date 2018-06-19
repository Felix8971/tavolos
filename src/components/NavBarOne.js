import React from 'react';
import Bars from '../../public/images/bars.svg';
import Facebook from '../../public/images/facebook.svg';
import Twitter from '../../public/images/twitter.svg';
import Instagram from '../../public/images/instagram.svg';

class NavBarOne extends React.Component {
  constructor(props) {
    super();
    this.burgerToggle = this.burgerToggle.bind(this);
  }
  
  burgerToggle() {
    const links = document.querySelector('.narrow-links');
    links.style.display = links.style.display == 'block' ? 'none' : 'block';
  }
 
  render() {

    const socialNetworks = <div className='social-network'>
      <a href="#"><Facebook className="icon"/></a>
      <a href="#"><Twitter className="icon"/></a>
      <a href="#"><Instagram className="icon"/></a>
    </div>
    
    const mainLinks = <div>
      <a href="#" onClick={this.burgerToggle}>Neighbourhoods</a>
      <a href="#" onClick={this.burgerToggle}>New Restaurants</a>
      <a href="#" onClick={this.burgerToggle}>Promotion</a>
      <a href="#" onClick={this.burgerToggle}>All Restaurants</a>
    </div>

    return (
      <nav className='nav-bar-one'>
        <div className='nav-wide'>
          <img className='logo' src={'./images/logo.png'} />  
          <div className="menu">   
            {mainLinks}
          </div>
          <div className='button-set'>
            <a href="#" onClick={this.burgerToggle}>My Tavolos</a>
            {socialNetworks}
          </div>
        </div>
        <div className="nav-narrow"> 
          <img className='logo' src={'./images/logo.png'} />  
          <Bars className="bars" onClick={this.burgerToggle}/>
          <div className="narrow-links">
            {mainLinks}
            <div className='button-set'>
              <a href="#" onClick={this.burgerToggle}>My Tavolos</a>
              {socialNetworks}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


export default NavBarOne;


