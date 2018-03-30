import React, { Component } from 'react';

import { combineReducers, createStore } from 'redux';
import example from './leason/store/reducers/example';

import { Provider } from 'react-redux';

import Lesson from './leason/index';

import './App.css';

const rootReducer = combineReducers({
  example
});

const store = createStore(
  rootReducer
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Lesson />
      </Provider>
    );
  }
}

export default App;
