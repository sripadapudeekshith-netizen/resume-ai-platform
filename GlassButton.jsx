import React from 'react';

/**
 * GlassButton Component
 * Glassmorphic button with hover animations
 * 
 * Props:
 * - children: button text/content
 * - onClick: click handler
 * - variant: 'primary' | 'secondary' (default: 'primary')
 * - fullWidth: boolean (default: false)
 */
const GlassButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = false,
  type = 'button'
}) => {
  const buttonStyle = {
    width: fullWidth ? '100%' : 'auto',
    ...(variant === 'secondary' && {
      background: 'transparent',
      border: '2px solid rgba(255, 255, 255, 0.2)'
    })
  };

  return (
    <button 
      className="glass-button"
      onClick={onClick}
      type={type}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default GlassButton;
