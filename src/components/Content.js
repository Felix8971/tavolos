import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <div className="content">   
        <div className='description'>
          <h2>Dine in the Dark for 1-6 People</h2>
          <h3>We invite you to embark on a journey of sensory awareness while serviced by visually impaired guides.</h3>
          <p>
            Upon arrival at BarSu, you are welcomed at the chic and stylish gastro lounge where your guide for the evening will provide a brief explanation of the extraordinary “Dining in the Dark” concept before introducing a choice of four delicious 4-course set menus including Asian, western, vegetarian, and a special surprise menu. The price is 1,450++ Baht per person for food only. For each diner, the hotel will make a donation to the Foundation for the Blind in Thailand.<br/><br/>
            After your memorable dinner, you will be led back into BarSu where you will be presented with dishes from your menu.<br/><br/>
            Switch off the lights and turn on your senses at “Dine in the Dark”. Available from 18.30 hours, Monday – Saturday (last orders 21.30 hours).<br/><br/>
            The Dine in the Dark experience is only recommended for children 12 years of age or older and accompanied by parents.
          </p>
        </div>
        <div className='purchase'>
          <i className="fas fa-cart-plus fa-2x"></i>
          My basket (0) / Checkout
        </div>
      </div>
    )
  }
}

export default Content;

