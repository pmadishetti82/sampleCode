import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id || '',
      value: props.value || '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  }

  render() {
    const { id } = this.props;
    const { type } = this.props;
    const { value } = this.state;
    return (<div className="password-field" >
      <input
        id={id}
        type={type}
        value={value}
        onChange={this.onChange}
      />
    </div>);
  }
}

Password.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Password;
