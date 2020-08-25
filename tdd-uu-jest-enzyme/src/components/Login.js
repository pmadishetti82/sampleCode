import React, { Component } from 'react';
import Field from './Field';

class Login extends Component {
  render() {
    return (<div>
      <p>User name: </p>
      <Field id={'username'} type='text' value={''} />
      <br />
      <p>Password:</p>
      <Field id={'password'} type='password' value={''} />
    </div>);
  }
}

export default Login;
