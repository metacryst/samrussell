import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


// We will describe a block of tests
describe('App component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<App />);
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<p className='graphic'>
    =======<br></br>=====
  </p>)).toBe(true);
  });
});