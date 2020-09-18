import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Question = (props) => {
  return (
    <Jumbotron style={props.st}>
      <div>{props.title}</div>
    </Jumbotron>
  );
};
export default Question;
