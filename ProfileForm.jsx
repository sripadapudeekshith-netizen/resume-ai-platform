import React, { useState } from 'react';
import GlassCard from '../glass-ui/GlassCard';
import GlassButton from '../glass-ui/GlassButton';
import SkillsInput from './SkillsInput';

const ProfileForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    degree: '',
    university: '',
    graduationYear: '',
    skills: [],
    experience: '',
    careerGoals: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSkillsChange = (skills) => {
    setFormData({
      ...formData,
      skills
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <GlassCard>
        <h3 style={styles.sectionTitle}>Personal Information</h3>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name *</label>
          <input
            className="glass-input"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email *</label>
            <input
              className="glass-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone</label>
            <input
              className="glass-input"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 234 567 8900"
            />
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h3 style={styles.sectionTitle}>Education</h3>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Degree *</label>
          <input
            className="glass-input"
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="B.Tech in Computer Science"
            required
          />
        </div>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>University *</label>
            <input
              className="glass-input"
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="MIT"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Graduation Year *</label>
            <input
              className="glass-input"
              type="text"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              placeholder="2024"
              required
            />
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h3 style={styles.sectionTitle}>Skills</h3>
        <SkillsInput skills={formData.skills} onChange={handleSkillsChange} />
      </GlassCard>

      <GlassCard>
        <h3 style={styles.sectionTitle}>Experience & Goals</h3>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Work Experience</label>
          <textarea
            className="glass-input"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Describe your internships, projects, or work experience..."
            rows="4"
            style={{ resize: 'vertical' }}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Career Goals</label>
          <textarea
            className="glass-input"
            name="careerGoals"
            value={formData.careerGoals}
            onChange={handleChange}
            placeholder="What are your career aspirations?"
            rows="3"
            style={{ resize: 'vertical' }}
          />
        </div>
      </GlassCard>

      <GlassButton type="submit" fullWidth>
        Save Profile
      </GlassButton>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#ffffff'
  },
  inputGroup: {
    marginBottom: '16px',
    flex: 1
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#b8b8d1'
  },
  row: {
    display: 'flex',
    gap: '16px'
  }
};

export default ProfileForm;
