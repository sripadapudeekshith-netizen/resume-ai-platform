import React, { useState } from 'react';

const SkillsInput = ({ skills, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (!skills.includes(inputValue.trim())) {
        onChange([...skills, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const removeSkill = (skillToRemove) => {
    onChange(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div style={styles.container}>
      <input
        className="glass-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a skill and press Enter (e.g., React, Python, SQL)"
      />
      <div style={styles.skillTags}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skillTag}>
            <span>{skill}</span>
            <button
              type="button"
              onClick={() => removeSkill(skill)}
              style={styles.removeBtn}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%'
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '12px'
  },
  skillTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500'
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '0',
    lineHeight: '1',
    opacity: 0.8,
    transition: 'opacity 0.2s'
  }
};

export default SkillsInput;
