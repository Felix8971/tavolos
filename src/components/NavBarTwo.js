import React from 'react';

class NavBarTwo extends React.Component {
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <nav className='nav-bar-two'>
        <div className='nav-wide'>
          
          <div className="menu">   
            <div className='legend' href="#">Bangkok / </div>
            <a className='link' href="#">Chinese New Year</a>
            <a className='link' href="#">Date Night</a>
            <a className='link' href="#">Group Dinner</a>
            <a className='link' href="#">Buisness Meals</a>
          </div>

          <div className='search'>
            <span className='legend'>Search:</span>
            <a className='link' href="#">Restaurant/Cuisine/Area</a>
          </div>
        </div>

      </nav>
    )
  }
}

export default NavBarTwo;


