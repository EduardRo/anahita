import React, { Component } from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Question from '../../components/question/question';
import Answer from '../../components/answer/answer';
import ProgressBar from 'react-bootstrap/ProgressBar';

class TADDNUM001 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        [2, '+', 3, 5, 4, 3],
        [7, '-', 5, 2, 3, 1],
        [8, '-', 2, 6, 7, 4],
        [9, '+', 3, 6, 12, 10],
        [5, '-', 2, 7, 3, 2],
      ],
      answers: [],
      stadiu: 0,
      now: 0,
    };

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  componentDidMount() {
    if (this.state.stadiu < 4) {
      this.interval = setInterval(() => {
        this.setState({
          now: this.state.now + 1,
        });
      }, 100);

      this.interval = setInterval(() => {
        this.setState({ stadiu: this.state.stadiu + 1, now: 0 });
      }, 11000);
    }
    console.log('stadiu: ' + this.state.stadiu);
  }

  handleAnswer(answer, question) {
    this.setState({ now: 0 });
    if (this.state.stadiu < 4) {
      this.setState({ stadiu: this.state.stadiu + 1 });

      this.setState({ answers: [...this.state.answers, question] }, () => {
        console.log(this.state.answers);
      });

      //console.log('answer: ' + answer);

      console.log(this.state.answers);
    } else {
      this.setState({ answers: [...this.state.answers, question] }, () => {
        console.log(this.state.answers);
      });
      //console.log('finish');
      //console.log(this.state.answers);
    }
  }

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
        <Container>
          <ProgressBar
            animated
            variant='danger'
            now={this.state.now}
            style={{ margin: '10px', textAlign: 'center' }}
          />
        </Container>
        {this.state.answers.length < 5 ? (
          <ButtonGroup vertical>
            <Question
              st={st}
              title={this.state.questions[this.state.stadiu].map(
                (question, index) => {
                  if (index < 3) {
                    return question;
                  } else return '';
                }
              )}
            />
            {this.state.questions[this.state.stadiu].map((question, index) => {
              if (index > 2) {
                return (
                  <Answer
                    key={index}
                    title={question}
                    noBtn={index - 2}
                    anwsernumber={index}
                    onClick={(answer) => this.handleAnswer(answer, question)}
                  />
                );
              } else return '';
            })}
          </ButtonGroup>
        ) : (
          <div> {this.state.answers}</div>
        )}
      </div>
    );
  }
}
export default TADDNUM001;
