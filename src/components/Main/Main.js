import React, { useState } from "react";
import randomProgrammingLanguage from "./Words/index.js";
import { images } from "./Images/index.js";

import "./style.css";

const Main = () => {
  const maximumNumberOfWrongGuesses = 6;
  const [mistake, setMistake] = useState(0);
  const [guessed, setGuessed] = useState(new Set([]));
  const [answer, setAnswer] = useState(randomProgrammingLanguage());

  const handleGuess = (event) => {
    let guess = event.target.value;
    setGuessed((prevGuessed) => new Set([...prevGuessed, guess]));
    setMistake((prevMistake) => prevMistake + 1);
  };

  const guessedWord = () => {
    return answer
      .split("")
      .map((letter) => (guessed.has(letter) ? letter : " _ "));
  };

  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={handleGuess}
        className="letter"
        disabled={guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  };

  const handleReset = () => {
    setMistake(0);
    setGuessed(new Set([]));
    setAnswer(randomProgrammingLanguage());
  };

  if (guessedWord().join("") === answer) {
    return (
      <div className="win">
        <h1>You win!</h1>
        <button onClick={handleReset}>Play again</button>
      </div>
    );
  }

  if (mistake >= maximumNumberOfWrongGuesses) {
    return (
      <div className="lose">
        <h1>You lose!</h1>
        <h3>The answer was: {answer}</h3>
        <button onClick={handleReset}>Play again</button>
      </div>
    );
  }

  return <div className="main"></div>;
};

export default Main;
