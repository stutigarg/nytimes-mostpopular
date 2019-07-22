import React from 'react';
import {configure, shallow} from 'enzyme';
import Article from './Article';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";

configure({adapter: new Adapter()});

describe('<Article/>', () => {

  test('renders', async () => {
    const wrapper = await shallow(<Article />);
    expect(wrapper).toMatchSnapshot();
  });

});

describe('<Article/> with default valid period', () => {

  let articleComponent;

  beforeAll(async () => {
    articleComponent = await renderer.create(<Article/>).getInstance();
  });

  test('renders with articles', async () => {
    // Shouldn't be any error.
    expect(articleComponent.state.error).toBeNull();

    // Should render some articles
    expect(articleComponent.state.articles.length).not.toBe(0);

    // Should select 1st article by default
    expect(articleComponent.state.selectedArticle).toBe(articleComponent.state.articles[0]);
  });

  test('renders article details', async () => {
    // Should select 1st article by default
    const articles = articleComponent.state.articles;
    expect(articleComponent.state.selectedArticle).toBe(articles[0]);
    expect(articles.length).toBe(2);
    expect(articles[0].selected).toBe(true);
    expect(articles[1].selected).toBe(false);

    articleComponent.renderArticleDetails(articles[1]);
    expect(articles[0].selected).toBe(false);
    expect(articles[1].selected).toBe(true);
  });

});

describe('<Article/> with invalid period', () => {

  let articleComponent;

  beforeAll(async () => {
    articleComponent = await renderer.create(<Article period={0} />).getInstance();
  });

  test('renders with articles', async () => {
    // Should report an error.
    expect(articleComponent.state.error).not.toBeNull();

    // Shouldn't render any articles
    expect(articleComponent.state.articles.length).toBe(0);

    // And hence no selected article
    expect(articleComponent.state.selectedArticle).toBeNull();
  });

});