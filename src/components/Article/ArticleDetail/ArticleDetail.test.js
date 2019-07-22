import React from 'react';
import {configure, shallow} from 'enzyme';
import ArticleDetail from './ArticleDetail';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const article = {
  url:'http://google.com/search-there',
  title: 'A really interesting article.',
};

describe('<ArticleDetail />', () => {
  test('renders article details', () => {
    const wrapper = shallow(<ArticleDetail article={article}/>);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('iframe').length).toBe(1);
    expect(wrapper.find('Loader').length).toBe(0);
  });
});

describe('<ArticleDetail />', () => {
  test('spins loader without article', () => {
    const wrapper = shallow(<ArticleDetail />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('Loader').length).toBe(1);
    expect(wrapper.find('iframe').length).toBe(0);
  });
});
