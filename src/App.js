import React from 'react';
import Navbar from './components/Navbar'
import VideoSearchForm from './components/VideoSearchForm'
import VideoList from './components/VideoList'
import './App.css';

const App = ({match}) => {
    return (
      <div className="App">
        <Navbar />
        <VideoSearchForm />
        <VideoList />
      </div>
    );
}

export default App;
