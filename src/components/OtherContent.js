import React from 'react';
import Offer from './Offer';

class OtherContent extends React.Component {
  constructor(props) {
    super();
  }
  
  render() {

    return (
      <div className="content">   
        <div className='description'>
          <h2>Other Dine in the Dark Vouchers Offers</h2>
          <Offer x={12}/>
          <Offer x={13}/>
          <Offer x={14}/>
       
        </div>
        <div className='right-bloc'></div>
      </div>
    )
  }
}

export default OtherContent;


