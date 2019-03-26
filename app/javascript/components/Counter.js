import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <p>
        Clicked: {25} times
      </p>
    );
  }
}

// Counter.propTypes = {
//   increment: PropTypes.func.isRequired,
//   incrementIfOdd: PropTypes.func.isRequired,
//   incrementAsync: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
//   counter: PropTypes.number.isRequired
// };

export default Counter;
