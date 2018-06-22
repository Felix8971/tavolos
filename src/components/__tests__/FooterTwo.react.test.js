import React from 'react';
import { shallow, mount, render } from 'enzyme';
import FooterTwo from '../FooterTwo';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('FooterTwo', () => {

    it('should be defined', () => {
      expect(FooterTwo).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <FooterTwo/>
      );
      expect(tree).toMatchSnapshot();
    });

    it('should contain 11 links', () => {
      const tree = shallow(
        <FooterTwo/>
      );
      expect(tree.find('a')).toHaveLength(11);
    })

});