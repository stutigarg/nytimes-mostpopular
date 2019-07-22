import React from 'react';
import {configure, shallow} from 'enzyme';
import Loader from './Loader';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Loader />', () => {
  test('renders', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
