import React from 'react';
import { shallow } from '../enzyme';
import Counter from '../components/Counter';

describe('Testing traversion and simulating events', () => {
  // Overall: You are thinking about a container with 2 buttons
  // button 1 --> increments a counter to an <h2> tag
  // button 2 --> resets the counter between the <h2> tag back to 1
  // assumption: default counter in <h2> tag is 1


  // Problem 1) write a test case to check that there are 2 buttons on the page
  // button 1 -> Increment
  // button 2 -> Reset
  // use 'shallow' as a wrapper to your Counter component

  it('should find 2 buttons named Increment and Reset', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('.button-increment').text()).toEqual('Increment');
    expect(wrapper.find('.button-reset').text()).toEqual('Reset');
  });


  // Problem 2) write a test case to simulate the clicking of a button
  // that will increment a counter
  // Assume the counter starts at 1
  // you should expect counter # to be updated between an 'h2' tag
  // use 'shallow' as a wrapper to your Counter component

  it('should update the counter after a single click', () => {
    const wrapper = shallow(<Counter />);

    wrapper.find('.button-increment').simulate('click');
    wrapper.update();

    expect(wrapper.find('h2').text()).toEqual('Current count: 2');
  });


  // Problem 3) write a test case to simulate multiple clicking of a button
  // that will increment a counter
  // Assume the counter starts at 1
  // you should expect counter # to be updated between an 'h2' tag
  // use 'shallow' as a wrapper to your Counter component

  it('should update the counter after multiple clicks', () => {
    const wrapper = shallow(<Counter />);

    wrapper.find('.button-increment').simulate('click');
    wrapper.find('.button-increment').simulate('click');
    wrapper.find('.button-increment').simulate('click');

    wrapper.update();

    expect(wrapper.find('h2').text()).toEqual('Current count: 4');
  });


  // Problem 4) write a test case to simulate a reset button
  // that will bring the counter back to 1
  // Re-use the code from the previous test to bring the counter to 4
  // use 'shallow' as a wrapper to your Counter component

  it('should reset the counter back to 1 after click on the rest button', () => {
    const wrapper = shallow(<Counter />);

    wrapper.find('.button-increment').simulate('click');
    wrapper.find('.button-increment').simulate('click');
    wrapper.find('.button-increment').simulate('click');

    wrapper.update();
    expect(wrapper.find('h2').text()).toEqual('Current count: 4');

    wrapper.find('.button-reset').simulate('click');
    wrapper.update();

    expect(wrapper.find('h2').text()).toEqual('Current count: 1');
  });
});
