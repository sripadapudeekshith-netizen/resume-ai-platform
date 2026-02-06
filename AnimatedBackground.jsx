import React from 'react';

/**
 * AnimatedBackground Component
 * Animated gradient background with floating orbs
 */
const AnimatedBackground = () => {
  return (
    <div style={styles.background}>
      <div style={{...styles.orb, ...styles.orb1}}></div>
      <div style={{...styles.orb, ...styles.orb2}}></div>
      <div style={{...styles.orb, ...styles.orb3}}></div>
      <div style={styles.grid}></div>
    </div>
  );
};

const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
    background: '#0a0a0f'
  },
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.3,
    animation: 'float 20s ease-in-out infinite'
  },
  orb1: {
    width: '500px',
    height: '500px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    top: '-10%',
    left: '-10%',
    animationDelay: '0s'
  },
  orb2: {
    width: '400px',
    height: '400px',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    bottom: '-10%',
    right: '-10%',
    animationDelay: '7s'
  },
  orb3: {
    width: '350px',
    height: '350px',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animationDelay: '14s'
  },
  grid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    opacity: 0.5
  }
};

export default AnimatedBackground;
