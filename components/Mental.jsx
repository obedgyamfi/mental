"use client"
import React, { Component } from 'react';


class Mental extends Component {
  constructor() {
    super();

    this.state = {
      num1: '',
      num2: '',
      operation: '+',
      userAnswer: null,
      correct: null,
      options: [],
    };
  }

  componentDidMount() {
    this.generateNumbers(this.state.userAnswer);
  }

  generateNumbers = () => {
    const { operation } = this.state;
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    const options = Array(4).fill(null).map(() => { return Math.floor(Math.random() * 250) + 1});
    let randomIndex = Math.floor(Math.random() * 4);

  
    switch (operation) {
      case '+':
        this.state.userAnswer = num1 + num2;
        break;
      case '-':
        this.state.userAnswer = num1 - num2;
        break;
      case 'x':
        this.state.userAnswer = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          alert("Division by zero is not allowed.");
          return;
        }
        this.state.userAnswer = num1 / num2;
        break;
      default:
        alert('Invalid operation selected.');
        return;
    }

    options[randomIndex] = this.state.userAnswer;
    this.setState({ num1, num2, options });
  };

  handleOperationChange = (e) => {
    this.setState({ operation: e.target.value });
    this.generateNumbers();
  };

  handleAnswerChange = (e) => {
    this.setState({ userAnswer: e.target.value });
  };

  checkAnswer = (selectedNumber) => {
    if (selectedNumber === this.state.userAnswer){
      alert('Correct!');
    }
    else {
      alert('Wrong!');
    }
    this.generateNumbers();
  };

  render() {
    const { num1, num2, operation, options } = this.state;

    return (
        <>
        <section className=" font flex w-full mt-40 mb-20 flex-center">
            <p className="operand1">{num1}</p>
            <p className="operation">{operation}</p>
            <p className="operand2">{num2}</p>
        </section>

        <section className="flex flex-center answerButtons m-5">
          {options.map((number, index) => (
            <button
              className='button'
              key={index}
              onClick={() => this.checkAnswer(number)}>
                {number}
            </button>
          ))}
        </section>
        </>
    )
  }
}

export default Mental;

