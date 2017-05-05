import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Switch, Route, browserHistory, hashHistory } from 'react-router-dom';

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
    <App store={store}>
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </App>
  </Provider>,
  document.getElementById('root')
);
