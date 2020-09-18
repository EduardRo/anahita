import React from 'react';
import { Button } from 'react-bootstrap';
import './answer.scss';

const Answer = (props) => {
  return <Button className='btn btn-primary'>{props.title}</Button>;
};
export default Answer;
