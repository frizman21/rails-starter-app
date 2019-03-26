import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';
import configureStore from '../store/index';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';

const store = configureStore();

export default class App extends Component {
  componentWillMount() {
    // store.dispatch(setCounter(this.props.counter));
  }

  render() {
    return (
      <Provider store={store}>
        <CounterApp />
        <div>
          <p>This is A Boilerplate React and Redux App :)</p>
        </div>
      </Provider>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     state
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
