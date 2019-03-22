import React from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from './components/Home';
import { Container, } from 'semantic-ui-react'

const App = () => ( 
  <Container>
    <Route exact path="/" component={Home} />
  </Container>
);


export default App;

