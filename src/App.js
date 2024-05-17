import React from 'react';
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './home';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
