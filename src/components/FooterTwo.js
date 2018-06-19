import React from 'react';

class FooterTwo extends React.Component {
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <div className='footer-two'>
        <div className='item'>
          <a href="#" onClick={this.burgerToggle}><img className='logo' src={'./images/logo.png'} alt="Tavalos logo"/></a>
          <h3>Tavolos</h3>
          <a href="#" onClick={this.burgerToggle}>About us</a>
          <a href="#" onClick={this.burgerToggle}>Blog</a>
          <a href="#" onClick={this.burgerToggle}>Press</a>
          <a href="#" onClick={this.burgerToggle}>Privacy Policy</a>
          <a href="#" onClick={this.burgerToggle}>Terms & Conditions</a>
        </div>
        <div className='item'>
          <h3>More</h3>
          <a href="#" onClick={this.burgerToggle}>Partners</a>
          <a href="#" onClick={this.burgerToggle}>Help & Support</a>
          <a href="#" onClick={this.burgerToggle}>Contact Us</a>
        </div>
        <div className='item'>
          <h3>Restaurants</h3>
          <a href="#" onClick={this.burgerToggle}>Find out more</a>
          <a href="#" onClick={this.burgerToggle}>Restaurants FAQs</a>
          <button>Register now</button>
        </div>
      </div>
    )
  }
}

export default FooterTwo;


