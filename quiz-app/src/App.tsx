import React, { useState } from 'react';
//components

import QuestionCards from './components/QuestionCards';

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameover] = useState(0);

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className='App'>
      <h1> React Quiz</h1>
      <button type='button' className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score: </p>
      <p>Loading questions...</p>
      <QuestionCards
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
      />
      <button className='next' onClick={nextQuestion}>
        Next question
      </button>
    </div>
  );
};

export default App;
