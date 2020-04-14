import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { NavMenu } from './components/NavMenu';
import './containers/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 id="brand">Collectible Item Network</h1>
        <h3 id="navbar"><NavMenu /></h3>
      </div>
      <div>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/counter' component={Counter} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
