import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HeadBand from '../HeadBand';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('HeadBand', () => {

    it('should be defined', () => {
      expect(HeadBand).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <HeadBand/>
      );
      expect(tree).toMatchSnapshot();
    });

});