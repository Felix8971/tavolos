import React from 'react';

class NavBarTwo extends React.Component {
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <nav className='nav-bar-two'>
        <div className='nav-wide'>
          
          <ul className="menu">   
            <li><div className='legend' href="#">Bangkok / </div></li>
            <li><a className='link' href="#">Chinese New Year</a></li>
            <li><a className='link' href="#">Date Night</a></li>
            <li><a className='link' href="#">Group Dinner</a></li>
            <li><a className='link' href="#">Buisness Meals</a></li>
          </ul>

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


