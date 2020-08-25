import React from 'react';
import { shallow, mount } from '../enzyme';
import Login from '../components/Login';
import Field from '../components/Field';


describe('Testing text boxes - containerized', () => {
  // Overall: Think about a Login component that contains 2 Field components
  // The Login component passes type 'text' to the first Field component
  // The Login component passes type 'password' to the second Field component

  // Problem 1) write a test case for a Login component that contains 2 input fields
  // 1 - username
  // 2 - password
  // Note: you don't need to check their names/ids/types
  // Use 'mount' to render your children components

  it('find 2 text boxes inside the login container ', () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
  });


  // Problem 2) in the Login component test the 'text' input type
  // ensure the input field is mutable, test that it has a default value
  // change its value by simulating --> 'change' { target : { value: '<new value>' }}
  // test that the value in the input field has changed to the <new value>
  // The field component should be generic and accepts 3 props: id, type and value
  // Use 'shallow' to render the Field component

  it('should test input field of type=text', () => {
    const defaultValue = 'foo@bar.com';
    const defaultId = 'username';
    const type = 'text';

    const wrapper = shallow(<Field id={defaultId} type={type} value={defaultValue} />);
    const input = wrapper.find('input');

    expect(wrapper.state().value).toEqual('foo@bar.com');

    input.simulate('change', { target: { value: 'bar@foo.com' } });
    wrapper.update();

    expect(wrapper.state().value).toEqual('bar@foo.com');
  });


  // Problem 3) in the Login component test the 'password' input type
  // ensure the input field is mutable, test that it has a default value
  // change its value by simulating --> 'change' { target : { value: '<new value>' }}
  // test that the value in the input field has changed to the <new value>
  // The field component should be generic and accepts 3 props: id, type and value
  // Use 'shallow' to render the Field component

  it('should test input field of type=password', () => {
    const defaultValue = 'abc123';
    const defaultId = 'password';
    const type = 'password';

    const wrapper = shallow(<Field id={defaultId} type={type} value={defaultValue} />);
    const input = wrapper.find('input');

    expect(wrapper.state().value).toEqual('abc123');

    input.simulate('change', { target: { value: '123456' } });
    wrapper.update();

    expect(wrapper.state().value).toEqual('123456');
  });
});
