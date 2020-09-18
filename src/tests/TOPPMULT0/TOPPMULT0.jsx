import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Question from '../../components/question/question';
import Answer from '../../components/answer/answer';

class TOPPMULT0 extends React.Component {
  render() {
    const st = {
      background: 'black',
      color: 'white',
      width: '400px',
      marginBottom: '0px',
      fontSize: '1.2rem',
    };
    return (
      <div>
        <h1>TOPPMULT0</h1>
        <ButtonGroup vertical>
          <Question st={st} />
          <Answer />
          <Answer />
          <Answer />
        </ButtonGroup>
      </div>
    );
  }
}

export default TOPPMULT0;
