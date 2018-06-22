import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

require.extensions['.svg'] = () => {};
enzyme.configure({ adapter: new Adapter() });