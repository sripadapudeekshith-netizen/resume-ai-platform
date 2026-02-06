import React from 'react';
import { useRouter } from 'next/router';

/**
 * AnimatedLogo Component
 * Interactive animated logo with glassmorphic styling
 * Features: floating animation, hover effects, particle rings
 * 
 * Props:
 * - size: 'small' | 'medium' | 'large' (default: 'medium')
 * - showParticles: boolean (default: true)
 * - onClick: custom click handler (default: navigate to home)
 */
const AnimatedLogo = ({ size = 'medium', showParticles = true, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push('/');
    }
  };

  const sizeClasses = {
    small: 'logo-navbar',
    medium: '',
    large: 'logo-hero'
  };

  return (
    <div 
      className={`animated-logo-container ${sizeClasses[size]}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Navigate to home"
    >
      <div className="logo-core">
        {/* Main logo icon */}
        <div className="logo-icon"></div>
        
        {/* Animated rings */}
        <div className="logo-ring logo-ring-1"></div>
        <div className="logo-ring logo-ring-2"></div>
        <div className="logo-ring logo-ring-3"></div>
        
        {/* Floating particles */}
        {showParticles && (
          <>
            <div className="logo-particle"></div>
            <div className="logo-particle"></div>
            <div className="logo-particle"></div>
            <div className="logo-particle"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default AnimatedLogo;
