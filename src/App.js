import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Home from './components/home';
import Login from './components/login';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {
    path: '/'
  };
  render() {
    return (
      <Container fluid>
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              component={() => {
                return <Login />;
              }}
            />
            <Route
              path="/"
              component={() => {
                return <Home />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
