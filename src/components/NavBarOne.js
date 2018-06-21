import React from 'react';
import Bars from '../../public/images/bars.svg';
import SocialNetworks from './SocialNetworks';

class NavBarOne extends React.Component {
  constructor(props) {
    super();
    this.burgerToggle = this.burgerToggle.bind(this);
    this.state = {
      height: 0,
    }
  }
  
  //When clic the "hamburger" we change the narrow-links's size to show or hide it 
  burgerToggle() {
    let height = document.querySelector('.narrow-links').style.height;
    height = (height == '0px' ? '170px' : '0px');
    this.setState({
      height,
    });
  }
 
  render() {
    
    const mainLinks = <div>
      <a href="#" onClick={this.burgerToggle}>Neighbourhoods</a>
      <a href="#" onClick={this.burgerToggle}>New Restaurants</a>
      <a href="#" onClick={this.burgerToggle}>Promotion</a>
      <a href="#" onClick={this.burgerToggle}>All Restaurants</a>
    </div>
    
    const logo = <img className='logo' src={'./images/logo.png'} alt="Tavalos logo"/>  

    return (
      <nav className='nav-bar-one'>
        <div className='nav-wide'>
          {logo}
          <div className="menu">   
            {mainLinks}
          </div>
          <div className='button-set'>
            <a href="#" onClick={this.burgerToggle}>My Tavolos</a>
            <SocialNetworks/>
          </div>
        </div>
        <div className="nav-narrow"> 
          {logo}
          <Bars className="bars" onClick={this.burgerToggle}/>
          <div className="narrow-links" style={{ height: this.state.height}}>
            {mainLinks}
            <div className='button-set'>
              <a href="#" onClick={this.burgerToggle}>My Tavolos</a>
              <SocialNetworks/>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBarOne;


