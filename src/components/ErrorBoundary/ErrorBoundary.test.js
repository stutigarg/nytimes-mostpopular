import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import ErrorBoundary from './ErrorBoundary';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<ErrorBoundary />', () => {
  test('renders', () => {
    const wrapper = shallow(<ErrorBoundary />);
    expect(wrapper).toMatchSnapshot();
  });
});

const BuggyComponent = ({a, b}) => {
  if (b === 0) throw new Error("Can't divide by 0");
  return <div>a/b</div>
}


describe('<ErrorBoundary>',() => {

  test('Child renders when all fine', () => {
    jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
    mount(<ErrorBoundary><BuggyComponent a={8} b={2}/></ErrorBoundary>)
    expect(ErrorBoundary.prototype.componentDidCatch).not.toHaveBeenCalled();
  })

  test('Displays error message on error generated by BuggyComponent', () => {
    const originalErrorConsole = console.error;
    console.error = jest.fn();

    jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
    mount(<ErrorBoundary><BuggyComponent a={8} b={0} /></ErrorBoundary>)
    expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled();

    console.error = originalErrorConsole;
  })
})