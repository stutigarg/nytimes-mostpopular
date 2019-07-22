import React from 'react';
import {configure, shallow} from 'enzyme';
import ArticleItem from './ArticleItem';
import Adapter from 'enzyme-adapter-react-16';
import Article from "../../../../model/Article";

configure({adapter: new Adapter()});

const mediaData = [
  {
    type: 'image',
    subtype: 'photo',
    'media-metadata': [
      { url: 'https://static01.nyt.com/images/2019/05/28/us/politics/00dc-ufo2/00dc-ufo2-square320.jpg'}
    ],
  },
];

const articleWithMedia : Article = {
  id: 1,
  title: 'A really interesting article.',
  byline: 'By LESLIE',
  published_date: '2019-05-26',
  media: mediaData,
  selected: true
};

describe('<ListItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<ArticleItem item={articleWithMedia} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Click delegates to onSelectHandler', () => {
    // Arrange
    const onSelectHandler = jest.fn();
    onSelectHandler.mockReturnValue('The article details will be rendered.');

    // Act
    const wrapper = shallow(<ArticleItem item={articleWithMedia} onSelectHandler={onSelectHandler} />);
    wrapper.find('Media').props().onClick();

    // Assert
    expect(onSelectHandler.mock.calls.length).toBe(1);
  });
});
