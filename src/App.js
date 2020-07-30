import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function Foo() {
  return (
    <div>
      <p>Foo component</p>
    </div>
  )
}

function Bar() {
  return (
    <div>
      <p>Bar component</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Foo} />
        <Route path="/bar" component={Bar} />
      </Router>
    </div>
  );
}

export default App;
