import React from 'react';

class FooterOne extends React.Component {
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <div className='footer-one'>
        <div className='item'>
          <h4>Find out about new openings and offers.</h4>
          <p>Shh...Just don't tell anyone.</p>
        </div>
        <div className='item'>
          <form>
            <label>
              <input type="text" name="name" placeholder="email address"/>
            </label>
            <input type="submit" value="Go" />
          </form>
        </div>
      </div>
    )
  }
}

export default FooterOne;


