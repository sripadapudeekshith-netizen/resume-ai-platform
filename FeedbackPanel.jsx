import React from 'react';
import GlassButton from '../glass-ui/GlassButton';

const FeedbackPanel = ({ answers, onEnd }) => {
  // Mock feedback scores
  const overallScore = 78;
  const metrics = [
    { label: 'Clarity', score: 82 },
    { label: 'Relevance', score: 75 },
    { label: 'Confidence', score: 80 },
    { label: 'Structure', score: 76 }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Interview Complete! 🎉</h3>
        <div style={styles.scoreCircle}>
          <div style={styles.scoreValue}>{overallScore}</div>
          <div style={styles.scoreLabel}>Overall Score</div>
        </div>
      </div>

      <div style={styles.metrics}>
        <h4 style={styles.metricsTitle}>Performance Breakdown</h4>
        {metrics.map((metric, index) => (
          <div key={index} style={styles.metric}>
            <div style={styles.metricLabel}>{metric.label}</div>
            <div style={styles.metricBar}>
              <div 
                style={{...styles.metricFill, width: `${metric.score}%`}}
              ></div>
            </div>
            <div style={styles.metricScore}>{metric.score}%</div>
          </div>
        ))}
      </div>

      <div style={styles.feedback}>
        <h4 style={styles.feedbackTitle}>AI Feedback</h4>
        <div style={styles.feedbackItem}>
          <div style={styles.feedbackIcon}>✅</div>
          <div>
            <strong>Strengths:</strong> Your answers showed good technical knowledge 
            and clear communication skills.
          </div>
        </div>
        <div style={styles.feedbackItem}>
          <div style={styles.feedbackIcon}>💡</div>
          <div>
            <strong>Improvement Areas:</strong> Try to provide more specific examples 
            and quantify your achievements when possible.
          </div>
        </div>
      </div>

      <GlassButton onClick={onEnd} fullWidth>
        Back to Interview Setup
      </GlassButton>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  header: {
    textAlign: 'center'
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '24px'
  },
  scoreCircle: {
    width: '150px',
    height: '150px',
    margin: '0 auto',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)'
  },
  scoreValue: {
    fontSize: '48px',
    fontWeight: '900'
  },
  scoreLabel: {
    fontSize: '14px',
    opacity: 0.9
  },
  metrics: {
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px'
  },
  metricsTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px'
  },
  metric: {
    display: 'grid',
    gridTemplateColumns: '120px 1fr 60px',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px'
  },
  metricLabel: {
    fontSize: '14px',
    fontWeight: '600'
  },
  metricBar: {
    height: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  metricFill: {
    height: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    transition: 'width 0.5s ease'
  },
  metricScore: {
    fontSize: '14px',
    fontWeight: '600',
    textAlign: 'right'
  },
  feedback: {
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px'
  },
  feedbackTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px'
  },
  feedbackItem: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',
    fontSize: '14px',
    lineHeight: '1.6'
  },
  feedbackIcon: {
    fontSize: '20px'
  }
};

export default FeedbackPanel;
