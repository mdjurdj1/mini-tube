import React from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import Test from './components/Test'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

const App = ({match}) => {
    return (
      <div className="App">
        <Navbar />
        <Route exact path='/hello' component={Test} />
      </div>
    );
}

function mapStateToProps(state){
  return { videos: state.videos }
}

export const WrapperApp = connect(mapStateToProps)(App);
