import React, { useState, useEffect } from 'react';
import GlassCard from '../glass-ui/GlassCard';
import GlassButton from '../glass-ui/GlassButton';

const ResumeBuilder = ({ template, onUpdate, onPreview }) => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: ''
    },
    summary: '',
    experience: [],
    education: [],
    skills: []
  });

  // Load profile data if available
  useEffect(() => {
    const profile = localStorage.getItem('userProfile');
    if (profile) {
      const data = JSON.parse(profile);
      setResumeData(prev => ({
        ...prev,
        personalInfo: {
          name: data.fullName || '',
          email: data.email || '',
          phone: data.phone || '',
          location: '',
          linkedin: ''
        },
        skills: data.skills || []
      }));
    }
  }, []);

  const handleChange = (section, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handlePreview = () => {
    onUpdate(resumeData);
    onPreview();
  };

  return (
    <GlassCard>
      <h3 style={styles.sectionTitle}>Resume Content</h3>
      
      <div style={styles.section}>
        <h4 style={styles.subTitle}>Personal Information</h4>
        <input
          className="glass-input"
          placeholder="Full Name"
          value={resumeData.personalInfo.name}
          onChange={(e) => handleChange('personalInfo', 'name', e.target.value)}
          style={styles.input}
        />
        <div style={styles.row}>
          <input
            className="glass-input"
            placeholder="Email"
            value={resumeData.personalInfo.email}
            onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
          />
          <input
            className="glass-input"
            placeholder="Phone"
            value={resumeData.personalInfo.phone}
            onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)}
          />
        </div>
      </div>

      <div style={styles.section}>
        <h4 style={styles.subTitle}>Professional Summary</h4>
        <textarea
          className="glass-input"
          placeholder="Write a brief professional summary..."
          value={resumeData.summary}
          onChange={(e) => setResumeData({...resumeData, summary: e.target.value})}
          rows="4"
          style={{ resize: 'vertical' }}
        />
      </div>

      <div style={styles.buttonGroup}>
        <GlassButton onClick={handlePreview} fullWidth>
          Generate Preview
        </GlassButton>
        <GlassButton variant="secondary" fullWidth>
          Export PDF (Coming Soon)
        </GlassButton>
      </div>
    </GlassCard>
  );
};

const styles = {
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '24px'
  },
  section: {
    marginBottom: '24px'
  },
  subTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#a855f7'
  },
  input: {
    marginBottom: '12px'
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px'
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '24px'
  }
};

export default ResumeBuilder;
