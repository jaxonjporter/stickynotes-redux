import React from 'react';
import { connect, } from 'react-redux';
import { Button, Card, } from "semantic-ui-react"

const Note = ({ id, name, description, dispatch }) => (
  <Card>
    <Card.Content>
      {name}
    <Card.Meta>
      {description}
    </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Button onClick={() => dispatch({ type: 'DELETE_NOTE', id })}>Delete</Button>
      <Button onClick={() => dispatch({ type: 'EDIT_NOTE', id })}>Edit</Button>
    </Card.Content>
  </Card>

)

export default connect()(Note);