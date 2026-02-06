import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ProfileForm from '../components/onboarding/ProfileForm';
import GlassCard from '../components/glass-ui/GlassCard';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const router = useRouter();

  const handleSubmit = (data) => {
    setProfileData(data);
    setIsEditing(false);
    // Store in localStorage for demo purposes
    localStorage.setItem('userProfile', JSON.stringify(data));
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <span className="gradient-text">Profile Setup</span>
        </h1>
        <p style={styles.subtitle}>
          Complete your profile to get personalized AI recommendations
        </p>
      </div>

      {isEditing ? (
        <ProfileForm onSubmit={handleSubmit} />
      ) : (
        <ProfileSummary data={profileData} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
}

const ProfileSummary = ({ data, onEdit }) => (
  <div style={styles.summary}>
    <GlassCard>
      <div style={styles.summaryHeader}>
        <h2 style={styles.summaryTitle}>Profile Summary</h2>
        <button onClick={onEdit} style={styles.editBtn}>
          Edit Profile
        </button>
      </div>
      
      <div style={styles.summarySection}>
        <h3 style={styles.sectionLabel}>Personal Info</h3>
        <p><strong>Name:</strong> {data.fullName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        {data.phone && <p><strong>Phone:</strong> {data.phone}</p>}
      </div>

      <div style={styles.summarySection}>
        <h3 style={styles.sectionLabel}>Education</h3>
        <p><strong>Degree:</strong> {data.degree}</p>
        <p><strong>University:</strong> {data.university}</p>
        <p><strong>Graduation:</strong> {data.graduationYear}</p>
      </div>

      <div style={styles.summarySection}>
        <h3 style={styles.sectionLabel}>Skills</h3>
        <div style={styles.skillsList}>
          {data.skills.map((skill, index) => (
            <span key={index} style={styles.skillBadge}>{skill}</span>
          ))}
        </div>
      </div>

      {data.experience && (
        <div style={styles.summarySection}>
          <h3 style={styles.sectionLabel}>Experience</h3>
          <p>{data.experience}</p>
        </div>
      )}

      {data.careerGoals && (
        <div style={styles.summarySection}>
          <h3 style={styles.sectionLabel}>Career Goals</h3>
          <p>{data.careerGoals}</p>
        </div>
      )}
    </GlassCard>
  </div>
);

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
  summary: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  summaryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  summaryTitle: {
    fontSize: '28px',
    fontWeight: '700'
  },
  editBtn: {
    padding: '8px 16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600'
  },
  summarySection: {
    marginBottom: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  },
  sectionLabel: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#a855f7'
  },
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  skillBadge: {
    padding: '6px 12px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    fontSize: '14px'
  }
};
