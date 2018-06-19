import React from 'react';
import Facebook from '../../public/images/facebook.svg';
import Twitter from '../../public/images/twitter.svg';
import Instagram from '../../public/images/instagram.svg';

class SocialNetworks extends React.Component {
  render() {
    return (
      <div className='social-network'>
        <a href="#"><Facebook className="icon"/></a>
        <a href="#"><Twitter className="icon"/></a>
        <a href="#"><Instagram className="icon"/></a>
      </div>
    )
  }
}

export default SocialNetworks;

