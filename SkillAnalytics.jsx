import React from 'react';
import GlassCard from '../glass-ui/GlassCard';

const SkillAnalytics = () => {
  const skills = [
    { name: 'JavaScript', level: 85, color: '#f7df1e' },
    { name: 'React', level: 78, color: '#61dafb' },
    { name: 'Python', level: 72, color: '#3776ab' },
    { name: 'SQL', level: 68, color: '#00758f' },
    { name: 'Communication', level: 82, color: '#a855f7' }
  ];

  return (
    <GlassCard>
      <h3 style={styles.title}>Skill Performance</h3>
      <div style={styles.skillsList}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skillItem}>
            <div style={styles.skillHeader}>
              <span style={styles.skillName}>{skill.name}</span>
              <span style={styles.skillLevel}>{skill.level}%</span>
            </div>
            <div style={styles.skillBar}>
              <div
                style={{
                  ...styles.skillFill,
                  width: `${skill.level}%`,
                  background: skill.color
                }}
              ></div>
            </div>
          </div>
        ))}
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
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  skillItem: {
    width: '100%'
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  },
  skillName: {
    fontSize: '15px',
    fontWeight: '600'
  },
  skillLevel: {
    fontSize: '14px',
    color: '#b8b8d1'
  },
  skillBar: {
    width: '100%',
    height: '12px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '6px',
    overflow: 'hidden'
  },
  skillFill: {
    height: '100%',
    borderRadius: '6px',
    transition: 'width 0.5s ease',
    boxShadow: '0 0 10px currentColor'
  }
};

export default SkillAnalytics;
