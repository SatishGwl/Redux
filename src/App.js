import React from 'react';
import User from './User';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <User data = {{name: 'satish sharma', age: '32'}}/>
    </div>
  );
}

export default App;
