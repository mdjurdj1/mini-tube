import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, browserHistory, Route } from 'react-router-dom';

import thunk from 'redux-thunk'
import rootReducer from './reducers'
import './index.css';

import App from './App';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Playlists from './components/Playlists'

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
          <Navbar />
            <Route exact path='/' component={App} store={store} />
            <Route path='/home' component={Home} />
            <Route path='/playlists' component={Playlists} />
        </div>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
