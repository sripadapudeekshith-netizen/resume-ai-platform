import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AnimatedLogo from '../components/branding/AnimatedLogo';
import GlassCard from '../components/glass-ui/GlassCard';
import GlassButton from '../components/glass-ui/GlassButton';

/**
 * Landing Page with Loading Screen
 * Features animated logo splash screen and hero section
 */
export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <AnimatedLogo size="large" />
          <h1 style={styles.title}>
            <span className="gradient-text">PlacePrep AI</span>
          </h1>
          <p style={styles.subtitle}>
            Your AI-Powered Career Companion for Resume Building & Interview Success
          </p>
          <div style={styles.ctaButtons}>
            <GlassButton onClick={() => router.push('/profile')}>
              Get Started
            </GlassButton>
            <GlassButton variant="secondary" onClick={() => router.push('/dashboard')}>
              View Dashboard
            </GlassButton>
          </div>
        </div>
      </section>

      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>Platform Features</h2>
        <div style={styles.featureGrid}>
          <FeatureCard
            icon="📝"
            title="AI Resume Builder"
            description="Create professional, ATS-optimized resumes with AI-powered suggestions"
            onClick={() => router.push('/resume')}
          />
          <FeatureCard
            icon="🎤"
            title="Mock Interview Simulator"
            description="Practice interviews with AI feedback and improve your responses"
            onClick={() => router.push('/interview')}
          />
          <FeatureCard
            icon="📊"
            title="Skill Analytics Dashboard"
            description="Track your progress and identify areas for improvement"
            onClick={() => router.push('/dashboard')}
          />
        </div>
      </section>
    </div>
  );
}

const LoadingScreen = () => (
  <div style={styles.loadingScreen}>
    <div className="logo-loading">
      <AnimatedLogo size="large" />
    </div>
    <p style={styles.loadingText}>Initializing PlacePrep AI...</p>
  </div>
);

const FeatureCard = ({ icon, title, description, onClick }) => (
  <GlassCard>
    <div style={styles.featureCard} onClick={onClick}>
      <div style={styles.featureIcon}>{icon}</div>
      <h3 style={styles.featureTitle}>{title}</h3>
      <p style={styles.featureDesc}>{description}</p>
      <div style={styles.featureArrow}>→</div>
    </div>
  </GlassCard>
);

const styles = {
  container: {
    minHeight: '100vh',
    padding: '0 24px'
  },
  loadingScreen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    gap: '24px'
  },
  loadingText: {
    fontSize: '18px',
    color: '#b8b8d1',
    animation: 'pulse 1.5s ease-in-out infinite'
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    textAlign: 'center'
  },
  heroContent: {
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px'
  },
  title: {
    fontSize: '64px',
    fontWeight: '900',
    marginTop: '24px',
    lineHeight: '1.2'
  },
  subtitle: {
    fontSize: '20px',
    color: '#b8b8d1',
    maxWidth: '600px',
    lineHeight: '1.6'
  },
  ctaButtons: {
    display: 'flex',
    gap: '16px',
    marginTop: '16px'
  },
  features: {
    maxWidth: '1200px',
    margin: '80px auto',
    padding: '0 24px'
  },
  sectionTitle: {
    fontSize: '42px',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '48px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px'
  },
  featureCard: {
    cursor: 'pointer',
    position: 'relative'
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '16px'
  },
  featureTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#ffffff'
  },
  featureDesc: {
    fontSize: '15px',
    color: '#b8b8d1',
    lineHeight: '1.6'
  },
  featureArrow: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    fontSize: '24px',
    opacity: 0.5,
    transition: 'all 0.3s ease'
  }
};
