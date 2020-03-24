import React from 'react';
import {shallow} from 'enzyme';
import Home from '../../components/Home';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
});

it('renders correctly', () => {
  expect(wrapper).toExist();
});

it('matches the snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should change greeting by pressing the button', () => {
  const button = wrapper.findWhere(node => node.prop('testID') === 'sayHi');
  button.simulate('press');
  wrapper.update();

  const greeting = wrapper.findWhere(node => node.prop('testID') === 'greeting');

  expect(greeting.props().children).toBe('Welcome to SoftServe');
});
