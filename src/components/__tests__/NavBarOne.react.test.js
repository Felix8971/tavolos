import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NavBar from '../NavBarOne';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('NavBarOne', () => {

    it('should be defined', () => {
      expect(NavBarOne).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <NavBarOne/>
      );
      expect(tree).toMatchSnapshot();
    });

    it('should contain 6 link', () => {
      const tree = shallow(
        <NavBarOne/>
      );
      expect(tree.find('a')).toHaveLength(6);
    })

});