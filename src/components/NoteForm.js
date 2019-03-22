import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Form, Header, Button } from 'semantic-ui-react';

class NoteForm extends React.Component {
  state = { name: '', description: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, } = this.props;
    const { name, description, } = this.state;
    dispatch({ type: 'ADD_NOTE', note: {name, description, }});
    this.setState({ name: '', description: '', });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, description } = this.state;

    return (
      <div>
        <Header as="h1" style={{ marginTop: "10px"}}>Add A Note</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input name="name" value={name} onChange={this.handleChange} placeholder="Name" />
          <Form.Input name="description" value={description} onChange={this.handleChange} placeholder="Description" />
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
        <br />
        <br />
        <Button as={Link} to="/">Home</Button>
      </div>
    )
  }
}



export default connect()(NoteForm);
