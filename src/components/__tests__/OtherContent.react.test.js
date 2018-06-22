import React from 'react';
import { shallow, mount, render } from 'enzyme';
import OtherContent from '../OtherContent';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('OtherContent', () => {

    it('should be defined', () => {
      expect(OtherContent).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <OtherContent/>
      );
      expect(tree).toMatchSnapshot();
    });

});