import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Offer from '../Offer';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

const data =  {
  image:'did.png',
  alt:'Dine in the dark logo',
  title:'Dine in the Dark for 1-6 people',
  voucher:'Dine int the Dark for 1-6 people (food only)',
  price:'1,400 THB',
  id:1,
};

describe('Offer', () => {

    it('should be defined', () => {
      expect(Offer).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <Offer data={data} />
      );
      expect(tree).toMatchSnapshot();
    });

});