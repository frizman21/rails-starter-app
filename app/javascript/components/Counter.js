import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
      </p>
    );
  }
}

export default Counter;
