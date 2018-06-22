import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NavBarTwo from '../NavBarTwo';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('NavBarTwo', () => {

    it('should be defined', () => {
      expect(NavBarTwo).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <NavBarTwo/>
      );
      expect(tree).toMatchSnapshot();
    });

    it('should contain 5 link', () => {
      const tree = shallow(
        <NavBarTwo/>
      );
      expect(tree.find('a')).toHaveLength(5);
    })

});