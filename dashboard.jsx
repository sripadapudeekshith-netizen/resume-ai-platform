import React from 'react';
import SkillAnalytics from '../components/dashboard/SkillAnalytics';
import ProgressChart from '../components/dashboard/ProgressChart';
import GlassCard from '../components/glass-ui/GlassCard';

export default function DashboardPage() {
  // Mock data
  const stats = {
    resumeScore: 85,
    interviewsCompleted: 12,
    skillsAssessed: 24,
    readinessScore: 78
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <span className="gradient-text">Analytics Dashboard</span>
        </h1>
        <p style={styles.subtitle}>
          Track your progress and identify areas for improvement
        </p>
      </div>

      <div style={styles.statsGrid}>
        <StatCard
          icon="📝"
          label="Resume Score"
          value={stats.resumeScore}
          suffix="/100"
          color="#667eea"
        />
        <StatCard
          icon="🎤"
          label="Interviews Completed"
          value={stats.interviewsCompleted}
          color="#f5576c"
        />
        <StatCard
          icon="🎯"
          label="Skills Assessed"
          value={stats.skillsAssessed}
          color="#00f2fe"
        />
        <StatCard
          icon="⭐"
          label="Readiness Score"
          value={stats.readinessScore}
          suffix="%"
          color="#a855f7"
        />
      </div>

      <div style={styles.chartsGrid}>
        <SkillAnalytics />
        <ProgressChart />
      </div>

      <div style={styles.recommendations}>
        <GlassCard>
          <h3 style={styles.sectionTitle}>AI Recommendations</h3>
          <div style={styles.recommendationList}>
            <RecommendationItem
              icon="💡"
              title="Improve Technical Skills"
              description="Focus on data structures and algorithms to boost your interview performance."
            />
            <RecommendationItem
              icon="📄"
              title="Update Resume"
              description="Add quantifiable achievements to make your resume more impactful."
            />
            <RecommendationItem
              icon="🎯"
              title="Practice Behavioral Questions"
              description="Complete 5 more behavioral interview sessions to improve confidence."
            />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

const StatCard = ({ icon, label, value, suffix = '', color }) => (
  <GlassCard>
    <div style={styles.statCard}>
      <div style={{...styles.statIcon, color}}>{icon}</div>
      <div style={styles.statValue}>
        {value}{suffix}
      </div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  </GlassCard>
);

const RecommendationItem = ({ icon, title, description }) => (
  <div style={styles.recommendation}>
    <div style={styles.recIcon}>{icon}</div>
    <div style={styles.recContent}>
      <div style={styles.recTitle}>{title}</div>
      <div style={styles.recDesc}>{description}</div>
    </div>
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    maxWidth: '1400px',
    margin: '0 auto 48px'
  },
  statCard: {
    textAlign: 'center',
    padding: '16px'
  },
  statIcon: {
    fontSize: '48px',
    marginBottom: '12px'
  },
  statValue: {
    fontSize: '36px',
    fontWeight: '900',
    marginBottom: '8px'
  },
  statLabel: {
    fontSize: '14px',
    color: '#b8b8d1',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '32px',
    maxWidth: '1400px',
    margin: '0 auto 48px'
  },
  recommendations: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '24px'
  },
  recommendationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  recommendation: {
    display: 'flex',
    gap: '16px',
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    transition: 'all 0.3s ease'
  },
  recIcon: {
    fontSize: '32px'
  },
  recContent: {
    flex: 1
  },
  recTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '4px'
  },
  recDesc: {
    fontSize: '14px',
    color: '#b8b8d1',
    lineHeight: '1.5'
  }
};
