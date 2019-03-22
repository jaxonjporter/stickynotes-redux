import React from "react";
import { Link, } from "react-router-dom";
import { Button, } from "semantic-ui-react";
import { connect, } from 'react-redux';

const Home = ({ notes }) => (
  <div>
    <h1>Home</h1>
    <ul>
    { notes.map( (t,i) => {
      return (
        <li key={i}>
          <h4>
          {t.name}
          </h4>
          <p> 
          {t.description}
          </p>
        </li>
      )
     })
    }
  </ul>
    <Button as={Link} to="/newnote">New Note</Button>
  </div>
)

const mapStateToProps = (state) => {
  return { notes: state.notes, };
}

export default connect(mapStateToProps)(Home);
