import React, { useState } from 'react';
import ResumeBuilder from '../components/resume/ResumeBuilder';
import ResumePreview from '../components/resume/ResumePreview';
import TemplateSelector from '../components/resume/TemplateSelector';
import GlassCard from '../components/glass-ui/GlassCard';

export default function ResumePage() {
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [resumeData, setResumeData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleResumeUpdate = (data) => {
    setResumeData(data);
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <span className="gradient-text">AI Resume Builder</span>
        </h1>
        <p style={styles.subtitle}>
          Create ATS-optimized professional resumes with AI assistance
        </p>
      </div>

      <div style={styles.content}>
        <div style={styles.leftPanel}>
          <TemplateSelector
            selected={selectedTemplate}
            onSelect={setSelectedTemplate}
          />
          <ResumeBuilder
            template={selectedTemplate}
            onUpdate={handleResumeUpdate}
            onPreview={handlePreview}
          />
        </div>

        <div style={styles.rightPanel}>
          {showPreview && resumeData ? (
            <ResumePreview data={resumeData} template={selectedTemplate} />
          ) : (
            <GlassCard>
              <div style={styles.previewPlaceholder}>
                <p>📄</p>
                <p>Resume preview will appear here</p>
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}

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
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  rightPanel: {
    position: 'sticky',
    top: '100px',
    height: 'fit-content'
  },
  previewPlaceholder: {
    textAlign: 'center',
    padding: '80px 20px',
    color: '#b8b8d1',
    fontSize: '48px'
  }
};
