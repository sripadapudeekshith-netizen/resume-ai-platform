import React from 'react';

/**
 * GlassCard Component
 * Reusable glassmorphic card container
 * 
 * Props:
 * - children: React nodes
 * - hover: enable hover effect (default: true)
 * - style: additional inline styles
 */
const GlassCard = ({ children, hover = true, style = {} }) => {
  return (
    <div 
      className={`glass-card ${hover ? 'glass-card-hover' : ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
