import React from 'react';
import GlassCard from '../glass-ui/GlassCard';

const TemplateSelector = ({ selected, onSelect }) => {
  const templates = [
    { id: 'modern', name: 'Modern', icon: '📄' },
    { id: 'classic', name: 'Classic', icon: '📋' },
    { id: 'creative', name: 'Creative', icon: '🎨' }
  ];

  return (
    <GlassCard>
      <h3 style={styles.title}>Select Template</h3>
      <div style={styles.grid}>
        {templates.map(template => (
          <div
            key={template.id}
            style={{
              ...styles.template,
              ...(selected === template.id ? styles.selected : {})
            }}
            onClick={() => onSelect(template.id)}
          >
            <div style={styles.icon}>{template.icon}</div>
            <div style={styles.name}>{template.name}</div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

const styles = {
  title: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '16px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px'
  },
  template: {
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  selected: {
    borderColor: '#a855f7',
    background: 'rgba(168, 85, 247, 0.1)',
    boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
  },
  icon: {
    fontSize: '32px',
    marginBottom: '8px'
  },
  name: {
    fontSize: '14px',
    fontWeight: '600'
  }
};

export default TemplateSelector;
