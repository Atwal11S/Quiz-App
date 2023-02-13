import React, { useState } from "react";
import "./Quiz.css";

export default function App() {
  const questions = [
    {
      questionText: "What is the best fruit?",
      answerOptions: [
        { answerText: "Apple", isCorrect: false },
        { answerText: "Orange", isCorrect: false },
        { answerText: "Strawberry", isCorrect: true },
        { answerText: "None", isCorrect: false },
      ],
    },
    {
      questionText: "What is the best react hook?",
      answerOptions: [
        { answerText: "useState", isCorrect: false },
        { answerText: "useEffect", isCorrect: true },
        { answerText: "Class Components", isCorrect: false },
        { answerText: "Fuctional Compnents", isCorrect: false },
      ],
    },
    {
      questionText: "Best footballer ever?",
      answerOptions: [
        { answerText: "Messi", isCorrect: true },
        { answerText: "Ronaldo", isCorrect: false },
        { answerText: "Pele", isCorrect: false },
        { answerText: "DDG", isCorrect: false },
      ],
    },
    {
      questionText: "Best team in BPL?",
      answerOptions: [
        { answerText: "Liverpool", isCorrect: false },
        { answerText: "Arsenal", isCorrect: false },
        { answerText: "Man United", isCorrect: false },
        { answerText: "Chelsea", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
