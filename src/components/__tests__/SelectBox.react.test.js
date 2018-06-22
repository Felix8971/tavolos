import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SelectBox from '../SelectBox';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('SelectBox', () => {

    it('should be defined', () => {
      expect(SelectBox).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <SelectBox/>
      );
      expect(tree).toMatchSnapshot();
    });

});