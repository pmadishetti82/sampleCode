import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  reset = () => {
    this.setState({ count: 1 });
  }

  render() {
    return (
      <div>
        <h2>Current count: {this.state.count}</h2>
        <p>Upvote now!</p>
        <button className='button-increment' onClick={this.increment}>Increment</button>
        <br />
        <p>Reset now!</p>
        <button className='button-reset' onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
