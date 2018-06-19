import React from 'react';

class Offer extends React.Component {
  
  render() {

    return (
      <div className='offer'>
        <div className='image'>
          <img className='vignette' src={'./images/' + this.props.data.image} />  
        </div>
        <div className='text'>
          <h2 className='title'>{this.props.data.title}</h2>
          <p><span>Voucher: </span>{this.props.data.voucher}</p>
          <p><span>Price: </span>{this.props.data.price}</p>
          <div className="btn">
            Find out More
          </div>         
        </div>
       
      </div>
    )
  }
}

export default Offer;

