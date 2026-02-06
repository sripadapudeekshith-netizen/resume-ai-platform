import React, { useState } from 'react';
import GlassButton from '../glass-ui/GlassButton';

const InterviewChat = ({ question, onAnswer }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (answer.trim()) {
      onAnswer(answer);
      setAnswer('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.questionSection}>
        <div style={styles.questionLabel}>Interview Question:</div>
        <div style={styles.questionText}>{question}</div>
      </div>

      <div style={styles.answerSection}>
        <div style={styles.answerLabel}>Your Answer:</div>
        <textarea
          className="glass-input"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          rows="8"
          style={{ resize: 'vertical' }}
        />
      </div>

      <div style={styles.actions}>
        <GlassButton onClick={handleSubmit} fullWidth>
          Submit Answer
        </GlassButton>
      </div>

      <div style={styles.tips}>
        <div style={styles.tipTitle}>💡 Tips:</div>
        <ul style={styles.tipList}>
          <li>Take your time to think before answering</li>
          <li>Use the STAR method for behavioral questions</li>
          <li>Be specific and provide examples</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  questionSection: {
    padding: '24px',
    background: 'rgba(168, 85, 247, 0.1)',
    borderRadius: '12px',
    border: '1px solid rgba(168, 85, 247, 0.3)'
  },
  questionLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#a855f7',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  questionText: {
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '1.5'
  },
  answerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  answerLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#b8b8d1'
  },
  actions: {
    display: 'flex',
    gap: '12px'
  },
  tips: {
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '8px',
    fontSize: '14px'
  },
  tipTitle: {
    fontWeight: '600',
    marginBottom: '8px'
  },
  tipList: {
    marginLeft: '20px',
    color: '#b8b8d1',
    lineHeight: '1.8'
  }
};

export default InterviewChat;
