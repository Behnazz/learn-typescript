import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from './API';
//components
import QuestionCards from './components/QuestionCards';

import { GlobalStyle, Wrapper } from './App.styles';
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameover] = useState(true);

  console.log(questions);
  const startTrivia = async () => {
    try {
      setLoading(true);
      setGameover(false);
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    } catch (error) {
      throw Error('Something went wrong');
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //users answer
      const answer = e.currentTarget.value;
      //check the answer
      const correct = questions[number].correct_answer === answer;
      //addscore
      if (correct) setScore((prev) => prev + 1);
      //save answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameover(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  // console.log(questions.length > 0);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1> React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button type='button' className='start' onClick={startTrivia}>
            Start
          </button>
        ) : null}

        <p className='score'>Score: {score}</p>
        {loading && <p>Loading questions...</p>}
        {questions.length > 0 && (
          <QuestionCards
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
