import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Form, Header, Button } from 'semantic-ui-react';

class EditForm extends React.Component {
  state = { id: this.props.note.id, name: '', description: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, } = this.props;
    const { name, description, id, } = this.state;
    const note = { name, description, id, };
    dispatch({ type: 'EDIT_NOTE', note,});
    this.props.toggle()
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Input name="name" value={name} onChange={this.handleChange} placeholder="Name" />
          <Form.Input name="description" value={description} onChange={this.handleChange} placeholder="Description" />
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}




export default connect()(EditForm);
