import React, { useState } from 'react';
import MockInterview from '../components/interview/MockInterview';
import GlassCard from '../components/glass-ui/GlassCard';
import GlassButton from '../glass-ui/GlassButton';

export default function InterviewPage() {
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [interviewType, setInterviewType] = useState('technical');

  const startInterview = () => {
    setInterviewStarted(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <span className="gradient-text">Mock Interview Simulator</span>
        </h1>
        <p style={styles.subtitle}>
          Practice with AI-powered interview questions and get instant feedback
        </p>
      </div>

      {!interviewStarted ? (
        <div style={styles.setup}>
          <GlassCard>
            <h3 style={styles.setupTitle}>Select Interview Type</h3>
            <div style={styles.typeGrid}>
              {['Technical', 'Behavioral', 'HR'].map(type => (
                <div
                  key={type}
                  style={{
                    ...styles.typeCard,
                    ...(interviewType === type.toLowerCase() ? styles.typeSelected : {})
                  }}
                  onClick={() => setInterviewType(type.toLowerCase())}
                >
                  <div style={styles.typeIcon}>
                    {type === 'Technical' ? '💻' : type === 'Behavioral' ? '🧠' : '👔'}
                  </div>
                  <div style={styles.typeName}>{type}</div>
                </div>
              ))}
            </div>
            <GlassButton onClick={startInterview} fullWidth>
              Start Interview
            </GlassButton>
          </GlassCard>
        </div>
      ) : (
        <MockInterview
          type={interviewType}
          onEnd={() => setInterviewStarted(false)}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '48px 24px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px'
  },
  title: {
    fontSize: '48px',
    fontWeight: '900',
    marginBottom: '16px'
  },
  subtitle: {
    fontSize: '18px',
    color: '#b8b8d1'
  },
  setup: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  setupTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '24px',
    textAlign: 'center'
  },
  typeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '32px'
  },
  typeCard: {
    padding: '24px 16px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  typeSelected: {
    borderColor: '#a855f7',
    background: 'rgba(168, 85, 247, 0.1)',
    boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
  },
  typeIcon: {
    fontSize: '40px',
    marginBottom: '8px'
  },
  typeName: {
    fontSize: '16px',
    fontWeight: '600'
  }
};
