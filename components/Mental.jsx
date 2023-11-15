"use client";
import React, { Component } from "react";

class Mental extends Component {
  constructor() {
    super();

    // initialize operands, operations, userAnswer and options
    this.state = {
      num1: "",
      num2: "",
      operation: "+",
      userAnswer: null,
      correct: null,
      options: [],
    };
  }

  componentDidMount() {
    this.generateNumbers(this.state.userAnswer);
  }

  // function to generate operands, and random answers
  generateNumbers = () => {
    const { operation } = this.state;
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    let randomIndex = Math.floor(Math.random() * 4);

    let { options } = this.state;

    switch (operation) {
      case "+":
        this.state.userAnswer = num1 + num2;
        break;
      case "-":
        this.state.userAnswer = num1 - num2;
        break;
      case "x":
        this.state.userAnswer = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          alert("Division by zero is not allowed.");
          return;
        }
        this.state.userAnswer = num1 / num2;
        break;
      default:
        alert("Invalid operation selected.");
        return;
    }

    options = Array(4)
      .fill(null)
      .map(() => {
        return this.state.userAnswer - (Math.floor(Math.random() * 8) + 1);
      });

    options[randomIndex] = this.state.userAnswer;

    // Iterate through the options array and reassign duplicate values
    for (let i = 0; i < options.length; i++) {
      for (let j = 0; j < options.length; j++) {
        if (i !== j && options[i] === options[j]) {
          // Reassign the value at index i
          options[i] =
            this.state.userAnswer - (Math.floor(Math.random() * 8) + 1);
          // Restart the inner loop to check the new value against previous values
          j = 0;
        }
      }
    }

    // Randomly shuffle the options to make their order unpredictable
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at indices i and j
      const temp = options[i];
      options[i] = options[j];
      options[j] = temp;
    }
    this.setState({ num1, num2, options });
  };

  // handleOperationChange, checks anytime the operation changes, to generate
  // new numbers for the operation
  handleOperationChange = (e) => {
    this.setState({ operation: e.target.value });
    this.generateNumbers();
  };

  // handleAnswerChange
  handleAnswerChange = (e) => {
    this.setState({ userAnswer: e.target.value });
    this.generateNumbers();
  };

  // checkAnswer: checks if the selected answer is equal to the correctAnswer
  /* it alerts the user "Correct" if it is equal and "Wrong" if it isn't */
  checkAnswer = (selectedNumber) => {
    const { userAnswer } = this.state;

    // Check if the selected answer is correct
    const isCorrect = selectedNumber === userAnswer;

    // set the isCorrect state for temporary styling
    this.setState({ isCorrect });

    // Optional: You can use setTimeout to reset the isCorrect state after a delay
    setTimeout(() => {
      this.setState({ isCorrect: null });
    }, 1000); // adjust the delay as needed(in milliseconds)

    this.generateNumbers();
  };

  // render script to display the arithmetic operation and the possible answers
  // as well as all ui components
  render() {
    const { num1, num2, operation, options, isCorrect } = this.state;

    return (
      <>
        <section className=" font flex w-full mt-40 mb-20 flex-center">
          <p className="operand1">{num1}</p>
          <p className="operation">{operation}</p>
          <p className="operand2">{num2}</p>
        </section>

        <section
          className={`flex flex-center m-5 sectionParentStyle ${
            isCorrect === true
              ? "sectionButton correctAnswerButton"
              : isCorrect === false
              ? "sectionButton wrongAnswerButton"
              : ""
          }`}
        >
          {/* {options.map((number, index) => (
            <button
              className={`button`}
              key={index}
              onClick={() => this.checkAnswer(number)}>
                {number}
            </button>
          ))} */}

          {/* {Button 1} */}
          <div className="verticalButtonStyle">
            <button className="button">{options[0]}</button>
          </div>

          {/* Button 2 and 3 */}
          <div className="horizontalElementStyle">
            {/* Button 2 */}
            <div className="horizontalButtonStyle">
              <button className="button">{options[1]}</button>
            </div>
            {/* Button 3 */}
            <div className="horizontalButtonStyle">
              <button className="button">{options[2]}</button>
            </div>
          </div>

          {/* Button 4 */}
          <div className="verticalButtonStyle">
            <button className="button">{options[3]}</button>
          </div>
        </section>
      </>
    );
  }
}

export default Mental;
