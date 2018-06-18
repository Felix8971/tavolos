import React from 'react';

class Offer extends React.Component {
  constructor(props) {
    super();
    
  }
  
  render() {

    return (
      <div className='offer'>
        <div className='ss'></div>
        <div className='sss'>{this.props.x}</div>
      </div>
    )
  }
}

export default Offer;

