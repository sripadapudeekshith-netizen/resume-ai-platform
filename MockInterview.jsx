import React, { useState } from 'react';
import InterviewChat from './InterviewChat';
import FeedbackPanel from './FeedbackPanel';
import GlassCard from '../glass-ui/GlassCard';
import GlassButton from '../glass-ui/GlassButton';

// Mock interview questions
const MOCK_QUESTIONS = {
  technical: [
    "Explain the difference between var, let, and const in JavaScript.",
    "What is the time complexity of binary search?",
    "Describe how React hooks work.",
    "What is the difference between SQL and NoSQL databases?"
  ],
  behavioral: [
    "Tell me about a time you faced a challenging problem and how you solved it.",
    "Describe a situation where you had to work with a difficult team member.",
    "What motivates you in your career?",
    "Where do you see yourself in 5 years?"
  ],
  hr: [
    "Why do you want to work for our company?",
    "What are your greatest strengths and weaknesses?",
    "Tell me about yourself.",
    "Why should we hire you?"
  ]
};

const MockInterview = ({ type, onEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = MOCK_QUESTIONS[type] || MOCK_QUESTIONS.technical;

  const handleAnswer = (answer) => {
    setAnswers([...answers, { question: questions[currentQuestion], answer }]);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFeedback(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div style={styles.container}>
      <div style={styles.main}>
        <GlassCard>
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: `${progress}%`}}></div>
          </div>
          <div style={styles.questionCounter}>
            Question {currentQuestion + 1} of {questions.length}
          </div>
          
          {!showFeedback ? (
            <InterviewChat
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          ) : (
            <FeedbackPanel answers={answers} onEnd={onEnd} />
          )}
        </GlassCard>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  main: {
    marginBottom: '24px'
  },
  progressBar: {
    width: '100%',
    height: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '16px'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    transition: 'width 0.3s ease'
  },
  questionCounter: {
    fontSize: '14px',
    color: '#b8b8d1',
    marginBottom: '24px',
    textAlign: 'center'
  }
};

export default MockInterview;
