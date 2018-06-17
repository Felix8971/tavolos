import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super();
    this.burgerToggle = this.burgerToggle.bind(this);
  }
  
  burgerToggle() {
    const links = document.querySelector('.narrow-links');
    links.style.display = links.style.display == 'block' ? 'none' : 'block';
  }

  render() {
    return (
      <nav>
        <div className='nav-wide'>
          <img className='grid-item logo' src={'./images/logo.png'} />  
          
          <div className="grid-item menu">   
            <a href="#">Neighbourhoods</a>
            <a href="#">New Restaurants</a>
            <a href="#">Promotion</a>
            <a href="#">All Restaurants</a>
          </div>

          <div className='grid-item button-set'>
            <a href="#">My Tavolos</a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="nav-narrow"> 
          <img className='logo' src={'./images/logo.png'} />  
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
          <div className="narrow-links">
            <a href="#" onClick={this.burgerToggle}>Neighbourhoods</a>
            <a href="#" onClick={this.burgerToggle}>New Restaurants</a>
            <a href="#" onClick={this.burgerToggle}>Promotion</a>
            <a href="#" onClick={this.burgerToggle}>All Restaurants</a>
            <div className='button-set'>
              <a href="#">Neighbourhoods</a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;


