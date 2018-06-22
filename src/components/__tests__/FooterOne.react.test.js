import React from 'react';
import { shallow, mount, render } from 'enzyme';
import FooterOne from '../FooterOne';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('FooterOne', () => {

    it('should be defined', () => {
      expect(FooterOne).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <FooterOne/>
      );
      expect(tree).toMatchSnapshot();
    });

    it('should contain 2 input', () => {
      const tree = shallow(
        <FooterOne/>
      );
      expect(tree.find('input')).toHaveLength(2);
    })

});