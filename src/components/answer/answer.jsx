import React from 'react';
import { Button } from 'react-bootstrap';
import './answer.scss';

const Answer = (props) => {
  //console.log(props);
  return (
    <Button
      className='btn btn-primary btn-block"'
      onClick={() => props.onClick(props.noBtn)}
      id={props.noBtn}
    >
      {props.title}
    </Button>
  );
};
export default Answer;
