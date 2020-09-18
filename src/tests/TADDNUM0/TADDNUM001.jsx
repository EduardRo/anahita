import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Question from '../../components/question/question';
import Answer from '../../components/answer/answer';

const TADDNUM001 = () => {
  const st = {
    background: 'black',
    color: 'white',
    width: '400px',
    marginBottom: '0px',
    fontSize: '1.2rem',
    boxShadow: '3px 3px 6px cornflowerblue',
  };
  let title;
  const question = randomNumbers();
  console.log(question);
  if (question[0] > question[2]) {
    console.log(question[0] + ' mai mare decat ' + question[2]);
    title = question[0] + question[1] + question[2] + '=?';
  } else {
    console.log(question[2] + ' mai mare decat ' + question[0]);
    title = question[2] + question[1] + question[0] + '=?';
  }

  return (
    <div>
      <h1>TADDNUM001</h1>
      <ButtonGroup vertical>
        <Question st={st} title={title} />
        <Answer title={question[4]} />
        <Answer title={question[3]} />
        <Answer title={question[5]} />
      </ButtonGroup>
    </div>
  );
};

function randomNumbers() {
  const n1 = Math.floor(Math.random() * 9) + 1;
  const n2 = Math.floor(Math.random() * 9) + 1;

  let y = Math.random();
  let semn;
  let resultat;
  let falseResult1 = 0;
  let falseResult2 = 0;
  if (y < 0.5) {
    y = Math.floor(y);
    semn = '-';
    resultat = Number(n1) - Number(n2);
    falseResult1 = Number(resultat) - 1;
    falseResult2 = Number(resultat) + 1;
  } else {
    y = Math.ceil(y);
    semn = '+';
    resultat = Number(n1) + Number(n2);
  }
  console.log(resultat);
  return [n1, semn, n2, resultat, falseResult1, falseResult2];
}

export default TADDNUM001;
