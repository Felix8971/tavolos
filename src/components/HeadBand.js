import React from 'react';

class HeadBand extends React.Component {
  constructor(props) {
    super();    
  }
  

  render() {
    return (
      <div className='head-band-group'>
        <img className='head-band' src={'./images/nox_fish.jpg'} alt="a fish dish"/>
        <div className='title-group'>
          <h1>Dine in the dark</h1>
          <h2>For the adventurous, looking to challenge your senses.</h2>
        </div>
      </div>
    )
  }
}

export default HeadBand;


