import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Switch, Route } from 'react-router';
import { BrowserRouter, browserHistory, hashHistory } from 'react-router-dom';

import thunk from 'redux-thunk'
import rootReducer from './reducers'
import './index.css';

import App from './App';
import Home from './components/Home'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <div>
          <Route exact path='/' component={App} store={store} />
          <Route exact path='/home' component={Home} />
        </div>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
