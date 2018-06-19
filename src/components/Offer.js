import React from 'react';

class Offer extends React.Component {
  
  render() {

    const props = this.props.data;

    return (
      <div className='offer'>
        <div className='image'>
          <img className='vignette' src={'./images/' + props.image} alt={ props.alt}/>  
        </div>
        <div className='text'>
          <h2 className='title'>{props.title}</h2>
          <p><span>Voucher: </span>{props.voucher}</p>
          <p><span>Price: </span>{props.price}</p>
          <div className="btn">
            Find out More
          </div>         
        </div>
       
      </div>
    )
  }
}

export default Offer;

