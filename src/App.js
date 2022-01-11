import React from 'react';
// import User from './User';
import HomeContainer from './components/containers/HomeContainer'
import HeaderContainer from './components/containers/HeaderContainer'

import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
