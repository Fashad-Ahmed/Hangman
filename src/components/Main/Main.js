import React, { useState } from "react";
import { images } from "../Images/index.js";
import { randomProgrammingLanguage } from "../Words/index.js";
import "./styles.css";

const Main = () => {
  const maximumNumberOfWrongGuesses = 6;
  const [mistake, setMistake] = useState(0);
  const [guessed, setGuessed] = useState(new Set([]));
  const [answer, setAnswer] = useState(randomProgrammingLanguage());

  const handleGuess = (event) => {
    let guess = event.target.value;
    setGuessed(new Set([...guessed, guess]));
    setMistake(mistake + (answer.includes(guess) ? 0 : 1));
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

  let gameStat = generateButtons();

  if (guessedWord().join("") === answer) {
    gameStat = "You Won!!!";
    return (
      <div>
        <h1>You won!</h1>
        <button onClick={handleReset}>Play Again</button>
      </div>
    );
  } else if (mistake >= maximumNumberOfWrongGuesses) {
    gameStat = "You Lost!!!";
    return (
      <div>
        <h1>You lose!</h1>
        <h3>The answer was: {answer}</h3>
        <button onClick={handleReset}>Play again</button>
      </div>
    );
  }

  return (
    <div className="main container">
      <h1 className="text-center">Hangman</h1>
      <div className="float-right">
        Wrong Guesses: {mistake} of {maximumNumberOfWrongGuesses}
      </div>
      <div className="text-center">
        <img src={images[mistake]} alt="Hangman" />
      </div>
      <div className="text-center">
        <h4>Guess the programming language!</h4>
        <h3>
          {!(mistake >= maximumNumberOfWrongGuesses) ? guessedWord() : answer}
        </h3>
        <p>{generateButtons()}</p>
        <button className="btn btn-info" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Main;
