import React from 'react';
import Question from '../question/question';
import Answer from '../answer/answer';

export const Test = (props) => {
  randomNumbers = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    let y = Math.random();
    let semn;
    if (y < 0.5) {
      y = Math.floor(y);
      semn = '-';
    } else {
      y = Math.ceil(y);
      semn = '+';
    }
  };
  Adunari2num = (n1, n2, semn) => {
    if (n1 > n2) {
      if (semn === '+') return n1 + n2;
      else {
        return n1 - n2;
      }
    } else {
      if (semn === '+') {
        return n1 + n2;
      } else {
        return n2 - n1;
      }
    }
  };
  AdunariString = (n1, n2, semn) => {
    if (n1 > n2) {
      if (semn === '+') {
        return n1.toString() + semn.toString() + n2.toString();
      } else {
        return n1.toString() + semn.toString() + n2.toString();
      }
    } else {
      if (semn === '+') {
        return n1.toString() + semn.toString() + n2.toString();
      } else {
        return n2.toString() + semn.toString() + n1.toString();
      }
    }
  };
  //ex = AdunariString(n1, n2, semn) + '=' + Adunari2num(n1, n2, semn);

  return (
    <div>
      <Question />
      <Answer />
    </div>
  );
};
