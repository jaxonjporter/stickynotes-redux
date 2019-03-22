import React from "react";
import { Link, } from "react-router-dom";
import { Button, Card, Segment,} from "semantic-ui-react";
import { connect, } from 'react-redux';

const Home = ({ notes }) => (
  <div style={{marginTop: "15px"}}>
    <Segment>
      <h1>Home</h1>
    </Segment>
    <Card.Group>

    { notes.map( (t) => {
      return (
         <Card key={t.id}>
          <Card.Content>
            {t.name}
          <Card.Meta>
            {t.description}
          </Card.Meta>
          </Card.Content>
         </Card>
      )
    })
  }
  </Card.Group>
    <Button as={Link} to="/newnote" style={{marginTop: "20px"}}>New Note</Button>
  </div>
)

const mapStateToProps = (state) => {
  return { notes: state.notes, };
}

export default connect(mapStateToProps)(Home);
