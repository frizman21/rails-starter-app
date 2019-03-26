import React, { Component } from 'react';
import configureStore from '../store/index';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import {setCounter} from '../actions/counter'

const store = configureStore();

export default class App extends Component {
  componentWillMount() {
    store.dispatch(setCounter(this.props.counter));
  }

  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
