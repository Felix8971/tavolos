import React from 'react';
import Offer from './Offer';

class OtherContent extends React.Component {
  constructor(props) {
    super();
  }
  
  render() {

    const data = [
      {
        image:'did.png',
        alt:'Dine in the dark logo',
        title:'Dine in the Dark for 1-6 people',
        voucher:'Dine int the Dark for 1-6 people (food only)',
        price:'1,400 THB',
        id:1,
      },
      {
        image:'wineGlasses.png',
        alt:'3 glasses of wine',
        title:'Dine in the Dark Wine Pairings',
        voucher:'Wine pairings (per person)',
        price:'2,505 THB',
        id:2,
      },
      {
        image:'veuveClicquot.png',
        alt:'Veuve clicquot wine bottle',
        title:'Veuve Clicquot',
        voucher:'Wine pairings (per person)',
        price:'4,900 THB',
        id:3,
      },
    ]

    const offers = data.map((offer) => {
      return  <Offer key={offer.id} data={offer}/>
    });

    return (
      <div className="content">   
        <div className='description'>
          <h2>Other Dine in the Dark & Vouchers Offers</h2>
          {offers}
        </div>
        <div className='right-bloc'></div>
      </div>
    )
  }
}

export default OtherContent;


