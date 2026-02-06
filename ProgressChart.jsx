import React from 'react';
import GlassCard from '../glass-ui/GlassCard';

const ProgressChart = () => {
  const weeklyProgress = [
    { week: 'Week 1', score: 45 },
    { week: 'Week 2', score: 58 },
    { week: 'Week 3', score: 65 },
    { week: 'Week 4', score: 78 }
  ];

  const maxScore = 100;

  return (
    <GlassCard>
      <h3 style={styles.title}>Weekly Progress</h3>
      <div style={styles.chart}>
        {weeklyProgress.map((data, index) => (
          <div key={index} style={styles.bar}>
            <div style={styles.barContainer}>
              <div
                style={{
                  ...styles.barFill,
                  height: `${(data.score / maxScore) * 100}%`
                }}
              >
                <span style={styles.barValue}>{data.score}</span>
              </div>
            </div>
            <div style={styles.barLabel}>{data.week}</div>
          </div>
        ))}
      </div>
      <div style={styles.insight}>
        <div style={styles.insightIcon}>📈</div>
        <div style={styles.insightText}>
          Great progress! You've improved by 33 points in the last 4 weeks.
        </div>
      </div>
    </GlassCard>
  );
};

const styles = {
  title: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '24px'
  },
  chart: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '250px',
    padding: '20px 0',
    marginBottom: '24px'
  },
  bar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    maxWidth: '80px'
  },
  barContainer: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  barFill: {
    width: '60px',
    background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '8px 8px 0 0',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '8px 0',
    transition: 'height 0.5s ease',
    boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
  },
  barValue: {
    fontSize: '14px',
    fontWeight: '700',
    color: 'white'
  },
  barLabel: {
    marginTop: '12px',
    fontSize: '13px',
    color: '#b8b8d1',
    fontWeight: '600'
  },
  insight: {
    display: 'flex',
    gap: '12px',
    padding: '16px',
    background: 'rgba(168, 85, 247, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(168, 85, 247, 0.2)'
  },
  insightIcon: {
    fontSize: '24px'
  },
  insightText: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#b8b8d1'
  }
};

export default ProgressChart;
