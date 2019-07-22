import React from 'react';
import {configure, shallow} from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Header />', () => {
  test('renders', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
