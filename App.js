import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Home from './src/screens/home';
import reducer from './src/redux/reducer';

/**
 * @param reducer app reducer 
 * @param applyMiddleware middleware as Redux Thunk
 */
const store = createStore(reducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>

    )
  }
}


export default App;
