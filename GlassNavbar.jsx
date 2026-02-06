import React from 'react';
import Link from 'next/link';
import AnimatedLogo from '../branding/AnimatedLogo';

const GlassNavbar = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/profile', label: 'Profile' },
    { href: '/resume', label: 'Resume' },
    { href: '/interview', label: 'Interview' },
    { href: '/dashboard', label: 'Dashboard' }
  ];

  return (
    <nav className="glass-navbar">
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <AnimatedLogo size="small" showParticles={false} />
          <span style={styles.brandName}>PlacePrep AI</span>
        </div>
        
        <div style={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 48px',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  brandName: {
    fontSize: '20px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  },
  navLink: {
    color: '#b8b8d1',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    position: 'relative',
    padding: '8px 0'
  }
};

export default GlassNavbar;
