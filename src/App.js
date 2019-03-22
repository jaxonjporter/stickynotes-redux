import React from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from './components/Home';
import NoteForm from './components/NoteForm'
import { Container, } from 'semantic-ui-react'

const App = () => ( 
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/newnote" component={NoteForm} />
    </Switch>
  </Container>
);


export default App;

