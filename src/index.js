import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router, Route, browserHistory, hashHistory } from 'react-router-dom';

import thunk from 'redux-thunk'
import rootReducer from './reducers'
import './index.css';

import { WrapperApp as App } from './App';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path='/' component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
