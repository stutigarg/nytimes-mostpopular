import React from 'react';
import {configure, shallow} from 'enzyme';
import ArticleList from './ArticleList';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const articleOne = {
    id: 1,
    title: 'A really interesting article.'
};

const articleTwo = {
    id: 2,
    title: 'Another interesting article.'
};

const articles = [articleOne, articleTwo];

describe('<ArticleList />', () => {
  test('renders', () => {
    const wrapper = shallow(<ArticleList articles={articles} />);
    expect(wrapper).toMatchSnapshot();
  });
});
